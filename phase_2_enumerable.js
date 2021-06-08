Array.prototype.myEach = function(callback) {
    for (let j = 0; j < this.length; j++) {
        callback(this[j])
    }
}

// const cb = function(ele) { console.log(ele) }

// [1,2,3,4,5,6,7].myEach(cb);


Array.prototype.myMap = function(callback) {
    const result = [];
    this.myEach(ele => {result.push(callback(ele))});
    return result;
     }
// const cb = function(ele){ return 2*ele}
// [1,2,3,4].myMap(cb)

Array.prototype.myReduce = function(callback,initialValue) {
    if (initialValue === undefined) {
        let acc =this[0];
        this.myEach(ele =>{
            acc =callback(acc, ele);});
        return acc-this[0];}
         else if(initialValue !== undefined){
             acc = initialValue;
             this.myEach(ele => {acc =callback(acc, ele);});
            return acc;}
        };