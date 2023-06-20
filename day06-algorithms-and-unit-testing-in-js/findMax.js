function  findMax(array){
    if (array.length ===0){
        return null;
    }
    let largest = array[0];
    for(let i = 1; i<array.length; i++){
        if(largest<array[i]){
            largest = array[i];
        }
    }
    return largest;
}
module.exports = findMax;