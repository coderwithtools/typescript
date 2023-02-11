class Fibonacci{
    num1;
    num2;
    num3;
    constructor(){
        this.num1 = 0;
        this.num2 = 1;
        this.num3 = this.num1+this.num2;
    }

    getnumber(test){
        console.log(`${this.num1}\n,${this.num2}\n,${this.num3}`);
        for (let i=0;i<=test;i++)
        {
            this.num1=this.num2;
            this.num2=this.num3;
            this.num3=this.num1+this.num2;
            console.log(`,${this.num3}`);
        }
        return;
    }
}
let fib = new Fibonacci();
console.log(fib.getnumber(100));