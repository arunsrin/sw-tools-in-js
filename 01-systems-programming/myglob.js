import glob from 'glob'
const srcDir = process.argv[2]

glob('**/*.json', (err, files) => {
    if (err) {
        console.error(err)
    } else {
        // ignore files ending with ~
        // Array.filter() does not modify in place, rather it returns a new array.
        files = files.filter(f => !f.endsWith('~') )
        for (const filename of files) {
            console.log(filename)
        }
    }
})

// version 2, where glob takes a dictionary of settings, 
// which tell it what files to ignore

// interestingly, we don't need to quote the key 'ignore' here
// since keys are always strings

// also note use of string interpolation to pass the foldername (argv2) into the expression

glob(`${srcDir}/**/*.js`, { ignore: '*~' }, (err, files) => {
    if (err) {
        console.error(err)
    } else {
        files = files.filter(f => !f.endsWith('~') )
        for (const filename of files) {
            console.log(filename)
        }
    }
})
