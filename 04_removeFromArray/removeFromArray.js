const removeFromArray = function() {
    // First argument must be an array, remaining arguments will be removed from that array.
    const args = Array.from(arguments);

    let array = args[0]; // Selecting the array from the first element (array.from?)

    const ids = args.slice(1,);

    
    for (const id of ids) {
        if(array.includes(id)) {
            array.splice(array.indexOf(id),1);            
        }

    }        

    return array
};

// Do not edit below this line
module.exports = removeFromArray;
