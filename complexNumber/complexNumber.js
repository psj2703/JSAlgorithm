const calPlus = (a, b, c, d) => {
    a = Number(a);
    b = Number(b);
    c = Number(c);
    d = Number(d);
    
    let x = a+c;
    let y = b+d;
    console.log([x,y]);

    return [x, y]
}

const calMulti = (a, b, c, d) => {
    a = Number(a);
    b = Number(b);
    c = Number(c);
    d = Number(d);
    
    let x = a*c;
    let y = (b*c)+(a*d);
    let z = b*d
    
    return [x, y, z];
}

const calMinus = (a, b, c, d) => {
    a = Number(a);
    b = Number(b);
    c = Number(c);
    d = Number(d);
    
    let x = a-c;
    let y = b-d;

    return [x, y]
}


const functionA = (number) => {
    if(number < 0) {
        number = Math.abs(number);
        return "-"+number.toString();
    } else {
        return "+"+number.toString();
    }
}

const functionB = (number) => {
    if(number < 0) {
        number = Math.abs(number);
        return "+"+number.toString();
    } else {
        return "-"+number.toString();
    }
}


const expression = (array) => {
    let array2 = ["", "", ""]
    let number = 0;

    if(array.length === 3) {
        array2[1] = functionA(array[1]);
        array2[2] = functionB(array[2]);
        number = Number(array[0])+Number(array2[2]);
        return `${number} ${array2[1]}i`
    } else {
        if(array[0]<0) {
            array2[0] = functionA(array[0]);
            array2[1] = functionA(array[1]);
            return `${array2[0]} ${array2[1]}i`
        } else {
            array2[1] = functionA(array[1]);
            return `${array[0]} ${array2[1]}i`
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    
    const a = document.querySelector('#a');
    const b = document.querySelector('#b');
    const c = document.querySelector('#c');
    const d = document.querySelector('#d');
    const select = document.querySelectorAll('[name=cal]');
    const button = document.querySelector('button');
    const p = document.querySelector('p');

    select.forEach((element) => {
        element.addEventListener('change', (event) => {
            const current = event.currentTarget;
            console.log(current.value);
            const [ q, w, e, r ] = [a.value ,b.value, c.value, d.value]
            if (current.value == "덧셈") {
                const array = calPlus(q, w, e, r);
                p.textContent = expression(array);
            } else if(current.value == "뺄셈") {
                const array = calMinus(q, w, e, r);
                p.textContent = expression(array);
            } else {
                const array = calMulti(q, w, e, r);
                p.textContent = expression(array);
            }
        })
    })

    // button.addEventListener('click', (a, b, c, d, select) => {
        // if (select.value == "덧셈") {
        //     const array = calPlus(a, b, c, d);
        //     p.textContent = expression(array);
        // } else if(select.value == "뺄셈") {
        //     const array = calMinus(a, b, c, d);
        //     p.textContent = expression(array);
        // } else {
        //     const array = calMulti(a, b, c, d);
        //     p.textContent = expression(array);
        // }
    // })
})
