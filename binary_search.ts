class BinarySearch {
  private arr: any[] ;

  constructor({ arr }: { arr: number[]; }) {
    this.arr = arr;
    this.arr.sort((a: number, b: number) => a - b);
  }

  search(target: number): boolean {
    let left = 0;
    let right = this.arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (this.arr[mid] === target) {
        return true;
      }
      if (this.arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return false;
  }
}

const bs = new BinarySearch({ arr: [1, 2, 3, 4, 5, 6, 7, 8, 9] });
console.log(bs.search(5)); 
console.log(bs.search(10)); 