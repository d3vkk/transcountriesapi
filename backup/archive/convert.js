var f = require('./country.js');

function listArray(fullarray) {
    for (let i = 0; i < fullarray.length; i++) {
        onearray = fullarray[i];
        console.log('{');
        for (let j = 0; j < onearray.length; j++) {
            // const element = array[i];
            const map = new Map([
                [0, 'name'],
                [1, 'tel'],
                [2, 'acronym']
            ]);
            key = JSON.stringify(map.get(j));
            prepstr = key + ':' + JSON.stringify(onearray[j]);
            //check for last keyvalue pair
            str = j == 2 ? prepstr : prepstr + ',';
            console.log(str);
        }
        //check for last object
        console.log(i == (fullarray.length - 1) ? '}' : '},');
    }
}
console.log('[');
listArray(f.data);
console.log(']');
