function analyzeArray(array) {
    let obj = {}
    let sum = array.reduce((a,b)=>{return a+b})
    obj.average = sum/array.length;
    obj.min = Math.min(...array);
    obj.max = Math.max(...array);
    obj.length = array.length;
    return obj;
}

module.exports = analyzeArray;


