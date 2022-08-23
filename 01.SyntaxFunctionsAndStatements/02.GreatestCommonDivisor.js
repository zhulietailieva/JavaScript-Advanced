function findGCD(a,b){
    if(a>b){
        for(let i=a;i>0;i--){
            if(a%i==0&&b%i==0){
                console.log(i);
                break;
            }
        }
    }else{
        for(let i=b;i>0;i--){
            if(a%i==0&&b%i==0){
                console.log(i);
                break;
            }
        }
    }
}
findGCD(15,5);
findGCD(2154, 458);