function solve(parameters){
function getEngine(power){
    if(power<=90){
        return { power: 90, volume: 1800 };
    }
    else if(power<=120){
        return { power: 120, volume: 2400 };
    }
    else {
        return{ power: 200, volume: 3500 };
    }
}
function getWheels(size){
    if(size%2==0){
        size-=1;      
    }
    return [size,size,size,size];
}
var car={ 
    model: parameters.model,
    engine : getEngine(parameters.power),
    carriage: {type: parameters.carriage,color:parameters.color},
    wheels: getWheels(parameters.wheelsize)
}
return car;
    }
solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 });