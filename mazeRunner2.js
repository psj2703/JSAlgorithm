const maze = [
    [1,0,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,1,1,0,1,1,1,1,0,1],
    [1,1,1,0,1,1,1,1,0,1],
    [1,1,1,0,1,0,0,0,0,1],
    [1,0,0,0,1,1,1,1,0,1],
    [1,1,1,0,1,1,1,1,0,1],
    [1,1,1,0,1,1,1,1,0,1],
    [1,1,1,1,1,1,1,1,0,1],
    [1,1,1,1,1,1,1,1,0,1],
]

let myHorse = {
    po : [0,0],
    expo : [0,0],
    head : ""
}

let savePoints = [];

const 동서남북 = (myHorse) => {
    const w = [myHorse.po[0], myHorse.po[1]+1];
    const a = [myHorse.po[0]-1, myHorse.po[1]];
    const s = [myHorse.po[0], myHorse.po[1]-1];
    const d = [myHorse.po[0]+1, myHorse.po[1]];
    return [w, a, s, d];
}

const 탐색 = (myHorse, maze) => {
    const [w, a, s, d] = 동서남북(myHorse);
    let count = 0;
    const openRoads = [];
    if(maze[w[0]][w[1]] === 0) {
        count++;
        if(w.toString() !== myHorse.expo.toString()) {
            openRoads.push("w");
        }
    }
    if(maze[a[0]][a[1]] === 0) {
        count++;
        if(a.toString() !== myHorse.expo.toString()) {
            openRoads.push("a");
        }
    }
    if(maze[s[0]][s[1]] === 0) {
        count++;
        if(s.toString() !== myHorse.expo.toString()) {
            openRoads.push("s");
        }
    }
    if(maze[d[0]][d[1]] === 0) {
        count++;
        if(d.toString() !== myHorse.expo.toString()) {
            openRoads.push("d");
        }
    }
    return [count, openRoads];
}

const 판단 = (myHorse, [count, openRoads], savePoints) => {
    if(count === 2) {
        myHorse.head = openRoads[0];
        전진(myHorse);
    } else if(count == 1) {
        막다른길(myHorse, savePoints);
        전진(myHorse);
    } else {
        savePoints = 갈림길(myHorse, [count, openRoads])
        전진(myHorse);
    }
}

const 전진 = (myHorse) => {
    const expo = myHorse.po;
    const wasd = ["w", "a", "s", "d"];
    const newHeader= [[myHorse.po[0], myHorse.po[1]+1], [myHorse.po[0]-1, myHorse.po[1]], 
    [myHorse.po[0], myHorse.po[1]-1], [myHorse.po[0]+1, myHorse.po[1]]]
    
    myHorse.po = newHeader[wasd.indexOf(myHorse.head)];
    myHorse.expo = expo;
}

const 스타트 = (myHorse) => {
    myHorse = {
        po : [1,1],
        expo : [0,1],
        head : "w"
    }
    return myHorse;
}

const 갈림길 = (myHorse, [count, openRoads]) => {
    let savePoint = {
        po: myHorse.po,
        from: myHorse.expo,
        openRoad: openRoads,
    }
    myHorse.head = savePoint.openRoad.pop();
    savePoints.push(savePoint);
    console.log(`갈림길:`, savePoints);
    return savePoints;
}

const 막다른길 = (myHorse, savePoints) => {
    let returnPoint = {
        po: [],
        from: [],
        openRoad: []
    }
    returnPoint = savePoints.pop();
    console.log(`막다른길:`, returnPoint);
    myHorse.po = returnPoint.po;
    myHorse.expo = returnPoint.from;
    myHorse.head = returnPoint.openRoad.pop();
}


const playMaze = (myHorse, maze, savePoints) => {
    myHorse = 스타트(myHorse);
    while(myHorse.po.toString() !==[8,8].toString()) {
        let value = 탐색(myHorse, maze);
        판단(myHorse, value, savePoints);
        console.log(myHorse.po);
    }
    console.log("완주!")
}

playMaze(myHorse, maze, savePoints);

