// Frontend Algorithms Task 


// 1ST TASK
const convertFahrToCelsius = (n) => {
    if (Array.isArray(n)) {
        console.log(` ${JSON.stringify(n)}is not a valid number but Array`)
        return ` ${JSON.stringify(n)} is not a valid number but Array`
    }

    const inputToNumber = +n
    if (typeof inputToNumber !== "number" || isNaN(n)) {

        console.log(`${JSON.stringify(n)} not a valid number but ${typeof (n)}`);
        return `${JSON.stringify(n)} is not a valid number but ${typeof (n)}`
    }

    const fahrenheit = (inputToNumber - 32) * 5 / 9
    return fahrenheit.toFixed(4);

}

console.log(convertFahrToCelsius());



//2ND TASK


const checkYuGiOh = (n) => {
    const number = +n;
    if (typeof number !== "number" || isNaN(number)) {
        console.log(`invalid parameter: ${n}`)
        return `invalid parameter: ${n}`
    }
    const arr = Array.from(Array(number).keys())
    const newarr = arr.map(i => i + 1);
    const yugiohArray = newarr.map(i => {
        if (i % 30 === 0) {
            return 'yu-gi-oh'
        }
        else if (i % 15 === 0) {
            return 'gi-oh'
        }
        else if (i % 10 === 0) {
            return 'yu-oh'
        }
        else if (i % 6 === 0) {
            return 'yu-gi'
        }
        else if (i % 5 === 0) {
            return 'oh'
        }
        else if (i % 3 === 0) {
            return 'gi'
        }
        else if (i % 2 === 0) {
            return 'yu'
        }
        return i
    })
    return yugiohArray;
}


console.log(checkYuGiOh());