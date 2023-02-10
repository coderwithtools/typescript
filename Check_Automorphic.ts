class Automorphic
{
    num:number;
    constructor()
    {
        this.num = 76;
    }
    
    check_Automorphic()
    {
        let s:number = this.num*this.num;
        console.log(s);
        if(s%10==this.num || s%100==this.num ||s%1000==this.num)
            console.log("Automorphic number");
        else
          console.log("Not Automorphic Number");
    }
}

let A3= new Automorphic();
A3.check_Automorphic();