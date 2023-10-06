function caesar(str, offset) {
    let arr = []
    for (let char in str) {
        let charCode = str.charCodeAt(char);
        let newCode = shift(charCode, offset);
        let newChar = String.fromCharCode(newCode);
        arr.push(newChar);
    }
    return arr.join('');
    
}

function shift(charCode, offset){
    let newCode = charCode + offset;
    if (charCode <= 90 && charCode >= 65) {
        return newCode <= 90 ? newCode:newCode-26;
    }
    else if (charCode >= 97 && charCode <= 122) {
        return newCode <= 122 ? newCode:newCode-26;
    }
}

module.exports = caesar;


