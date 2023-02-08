class Count_ele{
    arr: number[] = [];
    

    constructor(){
        this.arr.push(1);
        this.arr.push(2);
        this.arr.push(3);
        this.arr.push(4);
        this.arr.push(1);
        this.arr.push(11);
        this.arr.push(12);
        this.arr.push(14);
        this.arr.push(15);
        this.arr.push(11);
        this.arr.push(1);
        this.arr.push(2);
        this.arr.push(3);
        this.arr.push(3);
        this.arr.push(11);
    }

    count_fre_ele(){
        let array=this.arr;
        const map : any = {};
        array.forEach(item => {
            if(map[item]){
                map[item]++;
            }
            else{
                map[item] = 1;
            }
   });
   return map;
    }

}
let fre_each_ele = new Count_ele();
console.log(fre_each_ele.count_fre_ele());
