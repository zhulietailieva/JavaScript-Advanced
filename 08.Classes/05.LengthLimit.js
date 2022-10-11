class Stringer{
    constructor(initString,initLength){
        this.initString=initString;
        this.length=initLength;
    }
    increase(value){
        this.length+=value;
    }
    decrease(value){
        if(this.length-value<0){
            this.length=0;
        }
        else{
             this.length-=value;   
        }      
    }
    toString(){
        if(this.initString.length>this.length){
          let cut=this.initString.split('').slice(0,this.length-this.initString.length);
          return cut.join('')+'...';
        }
        if(this.length==0){
            return '...';
        }
        return this.initString;       
    }
}