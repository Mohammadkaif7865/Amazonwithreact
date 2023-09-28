
let arr = [0 , 0, 0, 0,1, 0, 0,0,1];
const  arrangeThem = (arr)=>{
     let odd = 0, even = 0, total= 0, first = 0, last = 0;
     for (let index = 0; index < arr.length; index++) {
        if (arr[index] === 1) {
            total++;
            if (!first) {
                first = index;
            }
            last = index;
        }
        if (arr[index] === 1 && index%2 === 0) {
            even++;
        }
        if (arr[index] === 1 && index%2 ===1) {
            odd++;
        } 
     }
     if (last -first + 1 > 2*total) {
         let evenPlace = 0, oddPlace = 0;
        for (let index = first; index <= last; index++) {
            if (arr[index] === 1 && index%2 === 0) {
                evenPlace++;
            }
            if (arr[index] === 1 && index%2 === 1) {
                oddPlace++;
            }
        }
        if (evenPlace> oddPlace) {
            return evenPlace - oddPlace;
        }
        else if(oddPlace > evenPlace) {
            return oddPlace - evenPlace;
        }
     }
    //  return {odd, even, total, first, last, length : last - first + 1}
}
let result = arrangeThem(arr);
console.log(result);