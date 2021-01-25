/*
Write a program called lc that counts and reports the number of lines in one or more files and the total number of lines, so that lc a.txt b.txt displays something like:

a.txt 475
b.txt 31
total 506
*/
import fs from 'fs'

const fileName = process.argv[2]
var lineCount = 0
fs.readFile(fileName, (err, contents) => {
    if (err) {
        throw err;
    } else {
        for (const character of contents) {
            // um try to find ascii equivalient. \n is 10
            if (character == 10) {
                lineCount = lineCount + 1
            }
        }
        console.log(fileName + ' has ' + lineCount + ' lines')
    }
});

