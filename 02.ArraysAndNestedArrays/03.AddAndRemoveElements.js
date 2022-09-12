
function solve(commands){
 let res=[];
 let num=1;
    for(let i=0;i<commands.length;i++){
        let command=commands[i];
        if(command=='add'){
        res.push(num);
    }
    else if(command=='remove'){
        res.pop();
    }
    num++;
    }
  console.log(res.length==0?'Empty':res.join('\n')) ;

}

solve(
    ['add', 
    'add', 
    'remove', 
    'add', 
    'add']
);



