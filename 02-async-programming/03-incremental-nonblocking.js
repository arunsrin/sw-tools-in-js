// typical blocking function
[1000, 1500, 500].forEach(t => console.log(t))

// setTimeout with value of each element
[1000, 1500, 500].forEach(t => {
    console.log(`about to setTimeout for ${t}`)
    setTimeout(() => console.log(`inside timer handler for ${t}`), t)
})

// setTimeout with delay 0 ms gives you a free nonblocking function!
[1000, 1500, 500].forEach(t => {
    console.log(`about to setTimeout for ${t}`)
    setTimeout(() => console.log(`inside timer handler for ${t}`), 0)
})

// example of generic nonblocking function in use
const nonBlocking = (callback) => {
    setTimeout(callback, 0)
}

[1000, 1500, 500].forEach(t => {
    console.log(`about to do nonBlocking for ${t}`)
    nonBlocking(() => console.log(`inside timer handler for ${t}`))
})

// setImmediate == setTimeout with delay 0
[1000, 1500, 500].forEach(t => {
    console.log(`about to do setImmediate for ${t}`)
    setImmediate(() => console.log(`inside immediate handler for ${t}`))
})
