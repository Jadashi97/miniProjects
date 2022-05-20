//palindrome checker
//function spits out true if the word is a palindrome

function palindrome(str){
    let tempStr = str.match(/[a-z0-9]+/ig).join('').toLowerCase();
        let secondtempStr = tempStr.split("").reverse().join('');
        if(tempStr === secondtempStr){
          return true;
        }else{
          return true
    }  
}

console.log(palindrome("EYe"));