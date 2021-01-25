// copy a bunch of json files from src folder argv[2] to dst folder argv[3]
import glob from 'glob'
import fs from 'fs-extra'
import path from 'path'
import { exit } from 'process'

// slice returns a section of an array
if (process.argv.length != 4) {
    console.error('please enter srcDir and dstDir')
    exit(1)
}
const [srcRoot, dstRoot] = process.argv.slice(2)

glob(`${srcRoot}/**/*.js`, { ignore: '*~'}, (err, files) => {
    if (err) {
        console.log(err)
    } else {
        for (const srcName of files) {
            // don't copy folders since fs.ensureDir will create that fodler structure
            fs.stat(srcName, (err, stats) => {
                if (err) {
                    console.error(err)
                } else if (stats.isFile()) {
                const dstName = srcName.replace(srcRoot, dstRoot)
                const dstDir = path.dirname(dstName)
                fs.ensureDir(dstDir, (err) => {
                    if (err) {
                        console.error(err)
                    } else {
                        fs.copy(srcName, dstName, (err) => {
                            if (err) {
                                console.error(err)
                            }
                        })
                    }
                })
            }
        })
    }} //ugh :(
})
