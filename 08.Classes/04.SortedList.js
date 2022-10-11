class List{
    constructor(){
        this.list=[];
        this.size=0
    }   
    add(n){
        this.list.push(n);
        this.list=this.list.sort((a,b)=>a-b);       
        this.size++;
    }
    remove(index){
        if(index>=0&&index<=this.size-1){
            this.list.splice(index,1);
           this.size--;
        }
    }
    get(index){
        if(index>=0&&index<=this.size-1){
            return  this.list[index];
         }
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list);
console.log(list.get(1)); 
console.log(list);
 list.remove(1);
 console.log(list)
// console.log(list.get(1));