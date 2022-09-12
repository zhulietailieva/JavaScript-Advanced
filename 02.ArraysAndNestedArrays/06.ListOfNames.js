function solve(names){
    let sorted=names.sort((a,b)=>a.localeCompare(b));
sorted.forEach((element,number) => {
    console.log(`${number+1}.${element}`);
    });
}

solve(["John", "Bob", "Christina", "Ema"]);