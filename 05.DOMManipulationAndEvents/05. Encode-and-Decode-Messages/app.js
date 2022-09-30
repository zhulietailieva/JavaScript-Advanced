function encodeAndDecodeMessages() {
    let buttonElements=document.getElementsByTagName('button');
    for(let i=0;i<buttonElements.length;i++){
        let btn=buttonElements[i];
        btn.addEventListener('click',()=>{
            if(i==0){
                let messageInp=document.getElementsByTagName('textarea')[0].value;
                let codedMessage=encode(message);
                encode('a');
            }
        })
    }
    function encode(message){
        let symbols=Array.from(message);
        let res='';
        for (const symbol of symbols) {
            let currentSymbol=Number(symbol);
            console.log(currentSymbol);
        }
    }
    
}