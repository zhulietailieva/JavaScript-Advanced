class Gladiator {
    constructor(name) {
        this.name = name
        this.abilies = {};
        this._totalSkill = 0;
    }
    hasTechnique(technique) {
        if (this.abilies[`${technique}`]) {
            return this.abilies[`${technique}`]
        };
        return false;
    }
    addTechnique(technique, skill) {
        skill = Number(skill);
        if (this.hasTechnique(technique)) {
            //update the current technique
            if (this.abilies[`${technique}`] < skill) {
                this._totalSkill += Math.abs(skill - this.abilies[`${technique}`]);
                this.abilies[`${technique}`] = skill;
                //console.log('updated technique!');
            }

        } else {
            this.abilies[`${technique}`] = Number(skill);
            //console.log('Added new technique!');
            this._totalSkill += skill;
        }
    }
    printInfo() {
        console.log(`${this.name}: ${this._totalSkill} skill`);
        //sort 
        let sortedAbilities = Object.entries(this.abilies);
        sortedAbilities = sortedAbilities.sort(([a1, a2], [b1, b2]) => {
            // console.log(a1);//ability name
            // console.log(b1);//other ability name
            // console.log(a2);//ability skill
            // console.log(b2);//other ability skill
            let res = b2 - a2;
            if (res == 0) {
                return a1.localeCompare(b1);
            }
            return res;
        });
        for (let i = 0; i < sortedAbilities.length; i++) {
            console.log(`- ${sortedAbilities[i][0]} <!> ${sortedAbilities[i][1]}`)
        }
    }
}
class gladiatorsList {
    constructor() {
        this.listGladiators = [];
    }
    addGladiator(gladiator) {
        if (this.listGladiators.filter(g => g.name == gladiator.name).length == 0) {
            this.listGladiators.push(gladiator);
            //console.log(`Added ${gladiator.name} to the list!`)
        }
        //if there is such name AND or and skill functionality
        else {
            //there is such gladiator we should add a new skill or update the current one
            //first get the gladiatror from the list
            let searchedGladiator = this.getGladiator(gladiator.name);
            //console.log('Searched\n ' + searchedGladiator.printInfo());
            //console.log(searchedGladiator);//works
            let newData = (Object.entries(gladiator.abilies));
            let techName = String(newData[0]).split(',')[0];
            let techSkill = String(newData[0]).split(',')[1];
            //console.log(techName + '|' + techSkill);
            searchedGladiator.addTechnique(techName, techSkill);
        }
    }
    removeGladiator(gladiator) {
        this.listGladiators = this.listGladiators.filter(g => g.name != gladiator.name);
        //console.log('Removed ' + gladiator.name);
    }
    getGladiator(gladiatorName) {
        //gladiator or undefined
        return (this.listGladiators.find(g => g.name == gladiatorName));
    }
    fight(gladiator1, gladiator2) {
        if (!gladiator1 || !gladiator2) return;
        let gladiator1Techniques = Array.from(Object.entries(gladiator1.abilies));
        let gladiator2Techniques = Array.from(Object.entries(gladiator2.abilies));
        let winner = 'none';
        for (const technique of gladiator1Techniques) {
            for (const technique2 of gladiator2Techniques) {
                if (technique2[0] == (technique[0])) {
                    //console.log('fight!');
                    if (technique[1] > technique2[1]) {
                        winner = gladiator1;
                        this.removeGladiator(gladiator2);
                    } else {
                        winner = gladiator2;
                        this.removeGladiator(gladiator1);
                    }
                }
            }
        }
        return winner;
    }
    printGladiators() {
        //here we should sort them first
        let sortedGladiators = this.listGladiators.sort((gl1, gl2) => gl1.name.localeCompare(gl2.name))
            .sort((gl1, gl2) => (Object.keys(gl2.abilies)).length - (Object.keys(gl1.abilies)).length);

        for (const gladiator of sortedGladiators) {
            gladiator.printInfo();
        }
    }
}
function solve(input) {
    let allGladiators = new gladiatorsList();
    let currCmnd = input.shift();
    while (currCmnd != 'Ave Cesar') {
        //is it -> or vs cmnd?
        let args = currCmnd.split(' -> ');

        if (args.length < 3) {
            //it is a vs cmnd
            let fighter1Name = String(args).split(' vs ')[0];
            let fighter2Name = String(args).split(' vs ')[1];
            //console.log(fighter1Name, fighter2Name);
            let fighter1 = allGladiators.getGladiator(fighter1Name);
            let fighter2 = allGladiators.getGladiator(fighter2Name);
            allGladiators.fight(fighter1, fighter2);
        }
        else {
            //it is a -> cmnd
            let [name, tech, skill] = [args[0], args[1], args[2]];
            //console.log(name, tech, skill);
            let currGladiator = new Gladiator(name);
            currGladiator.addTechnique(tech, Number(skill));
            allGladiators.addGladiator(currGladiator);
        }
        currCmnd = input.shift();
    }
    //we have read all the input lines
    console.log(allGladiators.printGladiators());
}
solve([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar']);
console.log('--------------')
solve(['Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Ave Cesar'
]);