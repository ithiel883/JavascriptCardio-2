function longestWord(sen){
    //create filtered array
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

    //sort by length
    const sorted = wordArr.sort((a, b) => b.length - a.length);

    // if multiple words, put into array

    const longestWordArr = sorted.filter((word) => word.length === sorted[0].length);

    //check if more than one array val
    if (longestWordArr.length === 1) {
        return longestWordArr[0]
    } else {
        return longestWordArr;
    }
}


// array chunks, break array into chunks of arrays

function chunkArray(arr, len) {
    //init chunked arr
    // const chunkedArr = []
    // //set index
    // let i = 0;

    // //loop while index is less than the array length

    // while(i < arr.length) {
    //     //slice out from the index to the index+ the chunk length and push on to the chunked array
    //     chunkedArr.push(arr.slice(i, i + len))
    //     //increment by chunk length
    //     i+=len;
    // }
    // return chunkedArr;

    //SOLUTION 2
    const chunkedArr = []

    //loop through arr
    arr.forEach(function(val){
        //get last element
        const last = chunkedArr[chunkedArr.length -1 ];

        //check if last and if last length is equal to the chunk lem
        if(!last || last.length === len){
            chunkedArr.push([val])
        } else {
            last.push(val)
        }

        
    })

    return chunkedArr
}

///FLATTEN ARRAY
//take an array of arrays and flatten to a single array
//ex. `[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7 ] ] = [1, 2, 3, 4, 5, 6, 7]
 



function flattenArray(arrays) {
    //solution 1
    // return arrays.reduce(function(a, b){
    //     return a.concat(b)
    // });

    //solution 2
    //return [].concat.apply([], arrays)
    //solution 3
    return [].concat(...arrays)
}


//challenge 4:  anagrams
//return true if anagram and false if not
//ex. 'below' === 'elbow'
//ex. 'Dormitory' === 'dirty room##'
function isAnagram(str1, str2){
    //format strings and split to array

    return formatStr(str1) === formatStr(str2);
}

//helper function
function formatStr(str){
    return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

//challenge 5: letter changes
//change every letter of the string to the one that follows it and capitalize the vowels
//z should turn to a
//ex. 'hello there' ==='lfmmp uIfsf'

function letterChanges(str){
    let newStr = str.toLowerCase().replace(/[a-z]/gi, (char)  => {
        if(char == 'z' || char === 'Z'){
            return 'a'
        } else {
            return String.fromCharCode(char.charCodeAt() + 1)
        }
    });

    newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase())

    return newStr;
}

let output = letterChanges("helloz there")


console.log(output)
