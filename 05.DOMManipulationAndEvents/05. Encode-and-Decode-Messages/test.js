function solve(message){
   
        let symbols=Array.from(message);
        let res='';
        for (const symbol of symbols) {
            let currentSymbol=Number(symbol.charCodeAt(0));
            let newChar=String.fromCharCode(currentSymbol+1);
            res+=newChar;
        }
        return res;   
}
console.log(solve("ab"));
