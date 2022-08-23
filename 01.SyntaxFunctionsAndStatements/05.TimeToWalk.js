function calculateWalkingTime(steps,lengthOfStep,speed){
    let distanceInMeters=steps*lengthOfStep;
    let distanceInKm=distanceInMeters/1000;
    let timeToWalk=distanceInKm/speed;
    let brakes=Math.floor(timeToWalk/0.5);
    timeToWalk+=brakes;
    let hours=Math.floor(timeToWalk);
    timeToWalk-=hours;
    let mins=Math.floor(timeToWalk/60);
    timeToWalk-=mins
    console.log(`${Math.round(hours)}:${Math.round(mins)}:${Math.round(timeToWalk/3600)}`)
}
calculateWalkingTime(4000, 0.60, 5);
calculateWalkingTime(2564, 0.70, 5.5);
