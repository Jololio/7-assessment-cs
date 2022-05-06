let numArr = [1, 0, 6, -1]

const addToZero = (arr) => {
    for (let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return true
            } else if (arr[i] + arr[j] != 0){
                i++
                j++
            }
        }
    }
}

// console.log(addToZero(numArr))

// code runtime: 0(n^2)

// space complexity: 0(n)

const hasUniqueChars = (str) => {
    for (i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
          return false;
        }
    }
    return true;
}

// console.log(hasUniqueChars('Monday'))

// code runtime: O(n)

// space complexity: O(1)

const isPangram = (string) => {
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
}

// console.log(isPangram('The quick brown fox jumps over the lazy dog'))

// code runtime: O(n)

// space complexity: O(n) 

const findLongestWord = (str1, str2) => {
    if (str1.length > str2.length) {
        return str1.length
    } else {
        return str2.length
    }
}

// console.log(findLongestWord("hi", "hello"))

// code runtime: O(1)

// space complexity: O(1)