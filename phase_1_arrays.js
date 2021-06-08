
// Array#uniq
    function uniq(array) {
        const result = [];
       array.forEach(el=>{
        if(!result.includes(el)){
            result.push(el)}
       });
       return result;
    }


// Array#twoSum

   function twoSum(array) {
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

 
function transpose(arr) {
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
 
