class SmartHike{
    constructor(username){
        this.username=username;
        this.goals=new Map();
        this.listOfHikes=[];
        this.resources=100;
    }
    addGoal(peak,altitude){
        altitude=Number(altitude);
        if(this.goals.has(peak)){
        return `${peak} has already been added to your goals`;
        }
    this.goals.set(peak,altitude);
    return `You have successfully added a new goal - ${peak}`;
    }
    hike(peak,time,difficultyLevel){
        time=Number(time);
        if(!this.goals.has(peak)){
            throw new Error(`${peak} is not in your current goals`) ;
            }   
        if(this.resources==0){
            throw new Error("You don't have enough resources to start the hike");
        }
        let difference=this.resources-time*10;
        if(difference<0){
            return "You don't have enough resources to complete the hike";
        }
        this.resources=difference;
        let hike={
            peak,time,difficultyLevel
        };
        this.listOfHikes.push(hike);
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
    }
    rest(time){
        time=Number(time);
        this.resources+=time*10;
        if(this.resources>100){
            this.resources=100;
            return `Your resources are fully recharged. Time for hiking!`;
        }
        return `You have rested for ${time} hours and gained ${time*10}% resources`;
    }
    showRecord (criteria){
        //empty
        if(this.listOfHikes.length==0){
            return `${this.username} has not done any hiking yet`;
        }
        let bestHike;
        let bestHikeHrs;
        if(criteria=='easy'){
            let easyHikes=this.listOfHikes.filter(x=>x.difficultyLevel=="easy");
            if(easyHikes.length==0){
                return `${this.username} has not done any ${criteria} hiking yet`;
            }
            bestHikeHrs=Math.min(easyHikes.map(x=>Number(x.time))); 
            bestHike=easyHikes.find(x=>x.time==bestHikeHrs);
            return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
        }
        else if(criteria=='hard'){
            let hardHikes=this.listOfHikes.filter(x=>x.difficultyLevel=="hard");
            if(hardHikes.length==0){
                return `${this.username} has not done any ${criteria} hiking yet`;
            }
            bestHikeHrs=Math.min(hardHikes.map(x=>Number(x.time)));
            bestHike=hardHikes.find(x=>x.time==bestHikeHrs);
            return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
        }
        else if(criteria=='all'){
            let res='';
            res+="All hiking records:\n";
            for (const hike of this.listOfHikes) {
                res+=`${this.username} hiked ${hike.peak} for ${hike.time} hours\n`;
            }
            return res.trim();
        }
    }
}
const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));