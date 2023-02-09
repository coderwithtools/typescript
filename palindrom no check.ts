class Palindrome{
  num;
    constructor(num : number){
        this.num=num;
    }

    ispalindrome(){
        let temp = this.num;
        let rem : number;
        let reverse : number= 0;
        while(temp>0){
            rem=temp % 10;
            reverse= reverse*10+rem;
            temp=Math.floor(temp/10);
        }
        if (reverse == this.num){
            return true;
        }
        else{
            return false;
        }

    }
    
}
let is_palindrome = new Palindrome(1221);
console.log(is_palindrome.ispalindrome());