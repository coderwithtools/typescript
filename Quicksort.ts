class QuickSort {
  constructor(public arr : number[]) {}
  sort(left = 0, right = this.arr.length - 1): number []{
    if (left < right)
    {
      let pivotIndex = this.partition(left , right);
      this.sort(left, pivotIndex - 1);
      this.sort(pivotIndex +1, right)
    }
    return this.arr;
  }
partition(left: number,right : number): number{
let pivot=this.arr[right];
  let i= left-1;
   for (let j=left; j < right; j++) {
  if (this.arr[j] < pivot) {
  i++
  [this.arr[i], this.arr[j]] [this.arr[j], this.arr[i]];
  }
     }  
  [this.arr[i+1], this.arr[right]] = [this.arr[right], this.arr[i+1]];
  return i+1;
    }
  }
  const qs = new QuickSort([10,8,6,4,2,1])
  console.log(qs.sort());