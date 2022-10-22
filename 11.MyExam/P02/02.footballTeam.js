class footballTeam{
    constructor(clubName,country){
        this.clubName=clubName;
        this.country=country;
        this.invitedPlayers=[];
    }
    newAdditions(footballPlayers){
       
          let setNames=new Set();
        for (const player of footballPlayers) {
            let name=player.split('/')[0];
            let age=player.split('/')[1];
            let playerValue= player.split('/')[2];

            let currPlayer={
                name:name,
                age:age,
                playerValue:playerValue
            }
            setNames.add(currPlayer.name);
            //console.log(currPlayer);
            if(this.invitedPlayers.find(x=>x.name==name)){
                //there is such player in the initedPlayers team
                if(this.invitedPlayers.find(x=>x.name==name).playerValue<playerValue){
                    //update the value
                    this.invitedPlayers.find(x=>x.name==name).playerValue=playerValue;
                }
            } 
            else{
                //there isn't such player in the team
                this.invitedPlayers.push(currPlayer);
            }
        }
        
        return "You successfully invite "+Array.from(setNames).join(", ")+"." ;
    }
    signContract(selectedPlayer){
        let name=selectedPlayer.split('/')[0];
        let playerOffer=selectedPlayer.split('/')[1];
        if(!this.invitedPlayers.find(x=>x.name==name)){
            throw new Error(`${name} is not invited to the selection list!`)
        }
        let selPlayer=this.invitedPlayers.find(x=>x.name==name);
        if(Number(playerOffer)<Number(selPlayer.playerValue)){
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${Number(selPlayer.playerValue)-Number(playerOffer)} million more are needed to sign the contract!`)
        }
        else{
           selPlayer.playerValue="Bought";
           return `Congratulations! You sign a contract with ${selPlayer.name} for ${playerOffer} million dollars.`; 
        }
    }
    ageLimit(name, age){
        age=Number(age);
        if(!this.invitedPlayers.find(x=>x.name==name)){
            throw new Error(`${name} is not invited to the selection list!`)
        }
        let currPlayer=this.invitedPlayers.find(x=>x.name==name);
        if(currPlayer.age<age){
            let diff=age-currPlayer.age;
            if(diff<5){
                return `${name} will sign a contract for ${diff} years with ${this.clubName} in ${this.country}!`;
            }
            else{
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        }
        return `${name} is above age limit!`;
    }
    transferWindowResult(){
        let res='Players list:\n';
        let sorted=this.invitedPlayers.sort((a,b)=>(a.name).localeCompare(b.name));
        for (const player of sorted) {
            res+=`Player ${player.name}-${player.playerValue}\n`
        }
        return res.trim();
    }
}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());