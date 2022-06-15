
let linkedList = {
    value: "",
    next: {}
}

let currentNode = {};

const firstArray = [5, 6, 14, 20, 29, 34, 37, 51, 69, 75];


const insert = (num) => {
    const node = {
        value: num,
        next: null
    }
    if (linkedList.value == "") {
        linkedList = node;
        return linkedList;
    } else {
        currentNode = linkedList;
        while(currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        console.log(linkedList);
        console.log(currentNode.next);
        return linkedList;
    }
}


for (let i = 0; i< firstArray.length; i++) {
    insert(firstArray[i]);
}