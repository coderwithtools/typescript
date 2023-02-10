class pattern
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
            console.log(this.a.replace(this.a[i],"*"));
        }
    }
}
 let m = new pattern();
m.pattern1();