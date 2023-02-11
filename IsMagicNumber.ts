class MagicNumber{


    private number:number;


    constructor(number:number){
      this.number = number;
       

    }

    isMagicNumber(): boolean{
        let sum=0;
        let n=this.number;
 

        while(n>0|| sum >9){

          if (n==0)
            {
              n= sum;
              sum=0;

            }
          sum=sum+Math.floor(n%10);
          n=Math.floor(n/10);


          }
          return (sum==1);
      
          }
        }

const myNumber = new MagicNumber(1729);
console.log(myNumber.isMagicNumber());