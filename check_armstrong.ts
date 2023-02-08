class Armstrong{
    num;

    constructor(num : number){
        this.num=num;
    }

    isArmstrong(){
        let temp = this.num;
        let rem : number;
        let sum : number= 0;
        while(temp>0){
            rem=temp % 10;
            sum=sum + Math.pow(rem,3);
            temp=Math.floor(temp/10);
        }
        if (sum == this.num){
            return true;
        }
        else{
            return false;
        }

    }
    
}
let is_armstrong = new Armstrong(123);
console.log(is_armstrong.isArmstrong());
