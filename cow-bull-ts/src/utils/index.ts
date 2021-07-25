import { generateNumberReturnType } from "types";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const generateNumber = (): generateNumberReturnType => {
    const result: generateNumberReturnType = {
        number: 0,
        incorrectNumbers: []
    };

    const generator = numberGenerator();
    for (let i = 0; i < 4; i++) {
        result.number += generator.next().value;
    }

    result.incorrectNumbers = numbers
    console.log(result);

    return result;
}

function* numberGenerator(): IterableIterator<number> {
    for (let i = 0; i <= 4; i++) {
        let index = Math.floor(Math.random() * numbers.length);
        (index === 0 && i === 0) && index++;
        let result = numbers[index];
        numbers.splice(index, 1);
        let multiplier = 10 ** (i)
        yield result * multiplier;
    }
}

export {
    generateNumber
}