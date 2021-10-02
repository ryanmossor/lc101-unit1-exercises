function processor(transmission) {
    let input = transmission.trim();
    if (input.indexOf('::') < 0) {      // check for value less than 0 since indexOf returns -1 if the index does not exist
        return -1;
    } else {
        let splitInput = input.split("::");
        if (splitInput.length > 2) {
            return -1;
        }
    }

    let parts = input.split("::");
    let rawData = parts[1];
    
    if (rawData[0] !== '<') {
        rawData = -1;
    } else {
        for (let i = 1; i < rawData.length; i++) {
            if (rawData[i] === '<') {
                rawData = -1;
            }
        }
    }

    if (rawData !== -1) {
        let newRawData = rawData.split('');
        let testArr = [];
        for (let i = 1; i < newRawData.length - 1; i++) {
            testArr.push(newRawData[i]);
        }
        rawData = testArr.join('');
    }

    if(isNaN(Number(parts[0]))) {
        parts[0] = -1;
    }
    
    if (isNaN(Number(rawData))) {
        rawData = -1;
    }

    return {
        id: Number(parts[0]),        // returns index 0 of the array created in line 5 -- characters that precede the '::'
        rawData: rawData
    };
}

module.exports = processor;