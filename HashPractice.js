const firstArray = [5, 6, 14, 20, 29, 34, 37, 51, 69, 75];
const capacity = firstArray.length;
let table = [];

const initialization = (firstArray) => {
    let num=0;
    while(num<firstArray.length) {
        table.push([]);
        num++;
    }
    return table;
}

const insertHash = (value) => {
    const key = value%capacity;
    table[key].push(value);
    return table;
}

table = initialization(firstArray);

for(let i = 0; i<capacity ; i++) {
    insertHash(firstArray[i]);
}

// 검색
const findHash = (value) => {
    const key = value%capacity;
    for (let i = 0; i<table[key].length; i++) {
        if(value == table[key][i]) {
            console.log(key, i);
            return [ key, i ]
        }
    }
    console.log("값이 없습니다");
    return 0;
}

console.log(table);

findHash(5);
findHash(6);
findHash(34);
findHash(1);
findHash(4);