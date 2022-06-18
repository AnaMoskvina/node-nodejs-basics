// implement function that parses command line arguments 
// (given in format --propName value --prop2Name value2, you don't need to validate it) 
// and prints them to the console in the format propName is value, prop2Name is value2


export const parseArgs = () => {
    const args = process.argv.slice(2)
    const props = {}
    args.forEach((arg, index) => {
        if (arg.substring(0, 2) === '--') {
            props[arg] = args[index + 1]
        }
    })
    const message = Object.entries(props).map(([key, value]) => `${key} is ${value}`).join(', ')
    console.log(message)
}

parseArgs()