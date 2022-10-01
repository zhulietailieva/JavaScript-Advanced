function encodeAndDecodeMessages() {
    let encodeBtn=document.querySelector('button');
    let decodeBtn=document.querySelectorAll('button')[1];
   let inputMessage=document.querySelector('textarea');
  
   let outputMessage=document.querySelectorAll('textarea')[1];
        encodeBtn.addEventListener('click',()=>{
            let codedMessage=encode(inputMessage.value);
           document.getElementsByTagName('textarea')[1].value=codedMessage;
           document.getElementsByTagName('textarea')[0].value='';
        })
        decodeBtn.addEventListener('click',()=>{
            let decodedMessage=decode(outputMessage.value);
            document.getElementsByTagName('textarea')[0].value=decodedMessage;
            document.getElementsByTagName('textarea')[1].value='';
        })
    function encode(message){
        let symbols=Array.from(message);
        let res='';
        for (const symbol of symbols) {
            let currentSymbol=Number(symbol.charCodeAt(0));
            let newChar=String.fromCharCode(currentSymbol+1);
            res+=newChar;
        }
        return res;   
}
    function decode(message){
        let symbols=Array.from(message);
        let res='';
        for (const symbol of symbols) {
            let currentSymbol=Number(symbol.charCodeAt(0));
            let newChar=String.fromCharCode(currentSymbol-1);
            res+=newChar;
        }
        return res;
    }
    
}