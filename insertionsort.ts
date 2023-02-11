class InsertionSort {
  private list: Array<number>;

  constructor(list: Array<number>) {
    this.list = list;
  }

  sort() {
    for (let i = 1; i < this.list.length; i++) {
      let current = this.list[i];
      let j = i - 1;
      while (j >= 0 && this.list[j] > current) {
        this.list[j + 1] = this.list[j];
        j--;
      }
      this.list[j + 1] = current;
    }
  }

  getSortedList() {
    return this.list;
  }
}

const sorter = new InsertionSort([3, 1, 4, 1, 5 , 2, 6, 5, 3, 5]);
sorter.sort();
console.log(sorter.getSortedList());