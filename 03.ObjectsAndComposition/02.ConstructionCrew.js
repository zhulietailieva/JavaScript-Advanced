function solve(woker){
if(woker.dizziness){
    var requiredWater=0.1*woker.experience*woker.weight;
    woker.levelOfHydrated+=requiredWater;
    woker.dizziness=false;
}
console.log(woker);
return woker;
}
solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true });