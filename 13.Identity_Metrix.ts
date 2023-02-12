class Check_identity_matrix{
   
    arr:number[][]=[[],[],[]];
 
    constructor() {
     
        
        this.arr[0].push(1);
        this.arr[0].push(0);
        this.arr[0].push(0);
        
        this.arr[1].push(0);
        this.arr[1].push(1);
        this.arr[1].push(0);
        
        this.arr[2].push(0);
        this.arr[2].push(0);
        this.arr[2].push(1);
        
    }

    check_identity(){
        
        for (let i=0;i<3;i++){
            
            for (let j=0;j< 3;j++){
                if(i===j){
                    if(this.arr[i][j]!= 1){
                        return false;
                    }
                }
                else{
                    if(this.arr[i][j]!= 0){
                        return false;
                    }
                }
            }
        }
        return true;
    }
}
let check_matrix= new Check_identity_matrix();
console.log(check_matrix.check_identity());