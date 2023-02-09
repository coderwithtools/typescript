class Add_matrix{
    //declaring 3d array with three rows
    arr:number[][]=[[],[],[]];
    //can also use the following synyax
    //arr:Array<number>[]=[[],[],[]];
    arr2:Array<number>[]=[[],[],[]];
    sum:Array<number>[]=[[],[],[]];
    constructor() {
        //initilizing 3*3 values
        //1st row
        this.arr[0].push(1);
        this.arr[0].push(2);
        this.arr[0].push(3);
        // 2nd row
        this.arr[0].push(4);
        this.arr[0].push(5);
        this.arr[0].push(6);
        //3rd row
        this.arr[0].push(7);
        this.arr[0].push(8);
        this.arr[0].push(9);
        //1st row
        this.arr2[0].push(11);
        this.arr2[0].push(12);
        this.arr2[0].push(13);
        // 2nd row
        this.arr2[0].push(14);
        this.arr2[0].push(15);
        this.arr2[0].push(16);
        //3rd row
        this.arr2[0].push(17);
        this.arr2[0].push(18);
        this.arr2[0].push(19);
    }

    add_matrix(){
        console.log("Elements of array 1 are: ");
        for (let i=0;i<3;i++){
            
            for (let j=0;j< this.arr[i].length;j++){
                console.log(this.arr[i][j]);
            }
        }
        console.log("Elements of array 2 are: ");
        for (let i=0;i<3;i++){
            
            for (let j=0;j< this.arr2[i].length;j++){
                console.log(this.arr2[i][j]);
            }
        }

        console.log("Sum of array 1 and array 2 are: ");
        for (let i=0;i<3;i++){
            
            for (let j=0;j< this.arr[i].length;j++){
                this.sum[i].push((this.arr[i][j]+this.arr2[i][j]));
                console.log(this.sum[i][j]);
            }
        }
    }
}
let add_2matrix = new Add_matrix();
console.log(add_2matrix .add_matrix());