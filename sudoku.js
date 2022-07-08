function solution(grid) {
    for(let rows = 0; rows < grid.length; rows += 3){
        for(let cols = 0; cols < grid.length; cols += 3){
            if(!isValid3x3(rows, cols, grid)){
                return false;
            }
        }
    }
    for(let rows = 0; rows < grid.length; rows += 1){
        if(!isValidRow(rows, grid)){
                return false;
        }
        for(let cols = 0; cols < grid.length; cols += 1){
            if(!isValidCol(cols, grid)){
                return false;
            }
        }
    }    
    return true;
}

function fillMap(){
    let map = new Map()
    for(let x = 1; x < 10; x +=1){
        map.set(x, 1)
    }
    return map;
}

function isValid3x3(rows, cols, grid){
    let map = fillMap();
    
    for(let rIter = 0; rIter < 3; rIter +=1){
        for(let cIter = 0; cIter < 3; cIter +=1){
            let number = grid[rows + rIter][cols + cIter];
            map.set(number, 0)
        }
    }
    
    return checkMap(map);
}

function isValidRow(rows, grid){
    let map = fillMap();
    
    for(let cIter = 0; cIter < grid.length; cIter += 1){
        let number = grid[rows][cIter];
        map.set(number, 0);
    }
    return checkMap(map);
}

function checkMap(map){
    let flag = true;
    map.forEach((val) =>{
        if(val > 0) flag = false;
    });
    return flag;
}

function isValidCol(cols, grid){
    let map = fillMap();
    
    for(let rIter = 0; rIter < grid.length; rIter += 1){
        let number = grid[rIter][cols];
        map.set(number, 0);
    }
    return checkMap(map);
}