class General {
    constructor(generalName, army) {
        this.generalName = generalName;
        this.army = Number(army);
        this.wins = 0;
        this.losses = 0;
    }
}

class Kingdom {
    constructor(name) {
        this.name = name;
        this.generals = [];
    }
    findGeneral(gName) {
        let res;
        if (this.generals.length > 0) {
            res = this.generals.find(g => g.generalName == gName);
        }
        return res;
    }
    addGeneral(general) {
        if (this.generals.length > 0) {
            let resGeneral = this.findGeneral(general.generalName);
            if (resGeneral) {
                //there is already such general in the army and we should increase his army
                resGeneral.army += general.army;
            } else {
                //there is not such general yet in the army
                this.generals.push(general);
                //console.log('added new general');
            }
        } else {
            this.generals.push(general);
        }
    }
    removeGeneral(generalName) {
        let resGeneral = this.findGeneral(generalName);
        if (resGeneral) {
            //there is such general in the army and we should remove him
            this.generals = this.generals.filter(g => g.generalName != generalName);
            //console.log('removed')
        } else {
            //console.log('no general to be removed');
        }
    }
    getWins() {
        let wins = 0;
        this.generals.forEach(g => wins += g.wins);
        return wins;
    }
    getLosses() {
        let losses = 0;
        this.generals.forEach(g => losses += g.losses);
        return losses;
    }

    printInfo() {
        //here we should sort the armies first
        let sortedGenerals = this.generals.sort((a, b) => {
            return b.army - a.army;
        });
        console.log('Winner: ' + this.name);
        for (const gen of sortedGenerals) {
            console.log('/\\general: ' + gen.generalName);
            console.log('---army: ' + gen.army);
            console.log('---wins: ' + gen.wins);
            console.log('---losses: ' + gen.losses);
        }
    }
}
class Kingdoms {
    constructor() {
        this.kingdoms = [];
    }
    getKingdom(kingdomName) {
        //console.log(typeof(this.kingdoms = this.kingdoms.filter(k => k.name != kingdomName)));
        return this.kingdoms.find(k => k.name == kingdomName);
    }
    addKingdom(kingdom) {
        this.kingdoms.push(kingdom);
    }
    removeKingdom(kingdom) {
        this.kingdoms = this.kingdoms.filter(k => k.name != kingdom.name);
    }
    fight(attackKingdom, attackGeneral, defendKingdom, defendGeneral) {
        if (attackKingdom == defendKingdom) return;
        //generals are not from the same kingdom
        let winner;
        //get every kingdom
        attackKingdom = this.kingdoms.find(k => k.name == attackKingdom);
        defendKingdom = this.kingdoms.find(k => k.name == defendKingdom);

        //getarmies
        let attackingArmy = attackKingdom.findGeneral(attackGeneral).army;
        let defendingArmy = defendKingdom.findGeneral(defendGeneral).army;
        //console.log(attackingArmy);//works
        //console.log(defendingArmy);//works

        if (attackingArmy > defendingArmy) {
            //attacking kingdom wins
            winner = attackKingdom;
            attackKingdom.findGeneral(attackGeneral).army += Math.floor(0.1 * attackingArmy);
            defendKingdom.findGeneral(defendGeneral).army -= Math.floor(0.1 * defendingArmy);

            attackKingdom.findGeneral(attackGeneral).wins++;
            defendKingdom.findGeneral(defendGeneral).losses++;
        } else if (defendingArmy > attackingArmy) {
            //defending kingdom wins
            winner = defendKingdom;
            attackKingdom.findGeneral(attackGeneral).army -= Math.floor(0.1 * attackingArmy);
            defendKingdom.findGeneral(defendGeneral).army += Math.floor(0.1 * defendingArmy);

            attackKingdom.findGeneral(attackGeneral).losses++;
            defendKingdom.findGeneral(defendGeneral).wins++;
        } else {
            //draw
            //console.log('draw');
        }
    }
    showAllKingdoms() {
        console.log('Kingdoms: ');
        // here we should sort the kingdoms
        let sortedKingdoms = this.kingdoms.sort((a, b) => {
            let res = b.getWins() - a.getWins();
            if (res == 0) {
                res = a.getLosses() - b.getLosses();
                if (res == 0) {
                    return a.name.localeCompare(b.name);
                }
            }
            return res;
        })
        sortedKingdoms.forEach(k => console.log(k.printInfo()));
    }
}
function solve(arg1, arg2) {
    let allKingdoms = new Kingdoms();
    //handle the input kingdoms
    for (let i = 0; i < arg1.length; i++) {

        let currKingdomName = arg1[i].kingdom;
        let currGeneral = new General(arg1[i].general, arg1[i].army);
        //check if the kingdom exists
        if (allKingdoms.getKingdom(currKingdomName)) {
            //such kingdom exists,so add the general to the list
            let result = allKingdoms.getKingdom(currKingdomName);
            //console.log(currKingdomName+' <-> '+result.name)
            //console.log(result);
            result.addGeneral(currGeneral);
        } else {
            let currKingdom = new Kingdom(currKingdomName);
            currKingdom.addGeneral(currGeneral);
            allKingdoms.addKingdom(currKingdom);
        }
    }
    //handle the battles
    for (let i = 0; i < arg2.length; i++) {
        let aKingdom = arg2[i][0];
        let aGeneral = arg2[i][1];
        let dKingdom = arg2[i][2];
        let dGeneral = arg2[i][3];
        //console.log(attackKingdom,attackGeneral,defendKingdom,defendGeneral);
        allKingdoms.fight(aKingdom, aGeneral, dKingdom, dGeneral);
    }
    let winner = Object.entries(allKingdoms)[0];
    console.log(winner[1][0].printInfo());
}
solve([{ kingdom: "Maiden Way", general: "Merek", army: 5000 },
{ kingdom: "Stonegate", general: "Ulric", army: 4900 },
{ kingdom: "Stonegate", general: "Doran", army: 70000 },
{ kingdom: "YorkenShire", general: "Quinn", army: 0 },
{ kingdom: "YorkenShire", general: "Quinn", army: 2000 },
{ kingdom: "Maiden Way", general: "Berinon", army: 100000 }],
    [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
    ["Stonegate", "Ulric", "Stonegate", "Doran"],
    ["Stonegate", "Doran", "Maiden Way", "Merek"],
    ["Stonegate", "Ulric", "Maiden Way", "Merek"],
    ["Maiden Way", "Berinon", "Stonegate", "Ulric"]]);