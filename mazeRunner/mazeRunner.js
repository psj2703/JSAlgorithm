let maze = [
    [1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,1,1,1,1,1,1],
    [1,1,1,0,1,1,1,1,1,1],
    [1,1,1,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,0,1],
    [1,1,1,1,1,1,1,1,0,1],
    [1,1,1,1,1,1,1,1,0,1],
    [1,1,1,1,1,1,1,1,0,1],
    [1,1,1,1,1,1,1,1,0,1],
    [1,1,1,1,1,1,1,1,0,1]
]

let end = [8,8]


let myHorse = {
    po: [0, 0],
    expo: [0, 0],
    w: [0, 0],
    a: [0, 0],
    s: [0, 0],
    d: [0, 0],
    head: "w"
}

// let myHorse = {
//     po: [0, 0],
//     expo: [0, 0],
//     w: [this.po[0], this.po[1]+1],
//     a: [this.po[0]-1, this.po[1]],
//     s: [this.po[0], this.po[1]-1],
//     d: [this.po[0]+1, this.po[1]]
// }

const 동서남북 = (myHorse) => {
    const w = [myHorse.po[0], myHorse.po[1]+1];
    const a = [myHorse.po[0]-1, myHorse.po[1]];
    const s = [myHorse.po[0], myHorse.po[1]-1];
    const d = [myHorse.po[0]+1, myHorse.po[1]];
    [myHorse.w, myHorse.a, myHorse.s, myHorse.d] = [w, a, s, d];
    return myHorse;
}

const 시작 = () => {
    myHorse.po = [1,1];
    myHorse.expo = [1,0];
}

const 탐색 = (myHorse) => {
    let count = 0;
    let [w, a, s, d] = [myHorse.w, myHorse.a, myHorse.s, myHorse.d];
    let openroad = [];
    if(maze[w[0]][w[1]] === 0) {
        count++;
        if(w.toString() !== myHorse.expo.toString()) {
            openroad.push("w");
        }
    }
    if(maze[a[0]][a[1]] === 0 ) {
        count++;
        if(a.toString() !== myHorse.expo.toString()) {
            openroad.push("a");
        }
    }    
    if(maze[s[0]][s[1]] === 0 ) {
        count++;
        if(s.toString() !== myHorse.expo.toString()) {
            openroad.push("s");
        }
    }    
    if(maze[d[0]][d[1]] === 0 ) {
        count++;
        if(d.toString() !== myHorse.expo.toString()) {
            openroad.push("d");
        }
    }
    return [count, openroad];
}

const 전진 = (myHorse, head) => {
    const expo = myHorse.po;
    if(head === "w") {
        myHorse.po = myHorse.w;
        myHorse = 동서남북(myHorse);
        myHorse.expo=expo;
    } else if(head === "a") {
        myHorse.po = myHorse.a;
        동서남북(myHorse);
        myHorse.expo=expo;
    } else if(head === "s") {
        myHorse.po = myHorse.s;
        동서남북(myHorse);
        myHorse.expo=expo;
    } else {
        myHorse.po = myHorse.d;
        myHorse.expo=expo;
        동서남북(myHorse);
    }
}

let signposts = [];

const 갈림길 = (myHorse, openroad) => {
    let po = myHorse.po;
    let expo = myHorse.expo;
    let checkedPath = openroad[0];
    let uncheckedPath = openroad[1];
    let signpost = [po, expo, checkedPath, uncheckedPath]
    signposts.push(signpost);

    return openroad[0]
}

// const 막다른길 = (myHorse) => {
//     let lastsignpost = signposts.pop();
//     myHorse.po = lastsignpost[0];
//     myHorse = 동서남북(myHorse);
//     myHorse.head = lastsignpost[3];
// }

const playMaze = (myHorse) => {

    시작();
    동서남북(myHorse);
    console.log(myHorse);

    while(myHorse.po.toString() !== end.toString()) {
        let [count, head] = 탐색(myHorse);
        if(count === 2) {
            전진(myHorse, head[0]);
            console.log(myHorse);
        } 
        // else if(탐색(myHorse)[0] === 3) {
        //     갈림길(myHorse, 탐색(myHorse)[2])
        //     전진(myHorse, myHorse.head)
        //     console.log(myHorse.po)
        // } 
        // else {
        //     막다른길(myHorse)
        //     전진(myHorse, myHorse.head)
        //     console.log(myHorse.po)
        // }
    }

    console.log("끝!!")
}

playMaze(myHorse);
