class LinearSearch {
    private data: Array<number>;

    constructor(data: Array<number>) {
        this.data = data;
    }

    search(value: number): boolean {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] === value) {
                return true;
            }
        }
        return false;
    }
}

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const linearSearch = new LinearSearch(data);
console.log(linearSearch.search(55));
