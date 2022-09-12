function isMagical(matrix){  
    let currIndex=0;
    while(currIndex<matrix.length){
        let currRowSum=0;
    let currColSum=0;
       for(let row=0;row<matrix.length;row++){
        currRowSum+=matrix[currIndex][row];
        currColSum+=matrix[row][currIndex]
    }
    if(currColSum!=currRowSum) {
        return false; 
    }
    currIndex++;
    }
    return true;   
}
isMagical([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);