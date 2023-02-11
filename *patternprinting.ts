class Pattern
{
    a:string;
    constructor()
    {
        this.a="54321";
    }
    
        pattern1()
    {
        for(let i=4;i>=0;i--)
        {
            /* Below line will replace the element of the string format number with "*" pattern 
               And this goes on until the condition of for loop becomes false (When value of i becomes less  than 0 , The for loop breaks );
               Here , i-- will decrease the value of i in each iteration */;
               
            console.log(this.a.replace(this.a[i],"*"));
            
            /* Output = 5432*
                        543*1;
                        54*21;
                        5*321;
                        *4321; */
        }
    }
}
 let m = new Pattern();
m.pattern1();
