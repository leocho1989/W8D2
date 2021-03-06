
// Array#uniq
    Array.prototype.uniq = function() {
        const result = [];
       this.forEach(el=>{
        if(!result.includes(el)){
            result.push(el)}
       });
       return result;
    }


// Array#twoSum

   Array.prototype.twoSum = function() {
        const result = [];
       for (let i = 0; i < array.length; i++){
           for (let j = i+1; j < array.length; j++){
               if (array[i] + array[j] ===0){
                   result.push([i,j]);
                   }
           }
       }
       
       return result;
   }

// Array#transpose

// var array = [
//                 [1, 1, 1],
//                 [2, 2, 2],
//                 [3, 3, 3],
//             ];

 
Array.prototype.transpose = function(){
    const result = arr.slice();
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            const tmp = result[i][j];
            result[i][j] = result[j][i];
            result[j][i] = tmp;
        }
    }
    return result;
     }
 
