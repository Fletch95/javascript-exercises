const removeFromArray = function() {
    // First argument must be an array, remaining arguments will be removed from that array.
    const args = Array.from(arguments);

    let array = args[0]; // Selecting the array from the first element (array.from?)

    console.log(`Length of array: ${args.length}`)

    if (args.length == 2) {
        console.log(`Removing ${args[1]}`)
        array.splice(array.indexOf(args[1]),1)
    } else {
        const ids = args.slice(1,);

        console.log(`Items to be removed: ${ids}`);
        
        for (const id of ids) {
            console.log(`Removing ${id}`)
            array.splice(array.indexOf(id),1);
        }        
    }

    return array
};

// Do not edit below this line
module.exports = removeFromArray;
