Array.prototype.myEach = function(callback) {
    for (let j = 0; j < this.length; j++) {
        callback(this[j])
    }
    return "hey"
}

const cb = function(ele) { console.log(ele) }

[1,2,3,4,5,6,7].myEach(cb);


Array.prototype.myMap = function(callback) {
    const result = [];
    this.myEach (ele => {result.push(callback(ele))});
}

