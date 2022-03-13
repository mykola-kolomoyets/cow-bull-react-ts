import { GameData } from 'types';
import { useAppDispatch } from 'store/hooks';
import { GenerateNumberReturn } from "types";
import { 
    annulateState, 
    setCurrentNumber,
    setIncorrectNumbers
} from 'store/game/slice';

const SHOW_ALERT = "SHOW_ALERT";
const HIDE_ALERT = "HIDE_ALERT";

enum warningTypes {
    warning = "yellow",
    success = "green",
    danger = "red"
}

function* numberGenerator(numbers: number[]): IterableIterator<number> {
    for (let i = 0; i <= 4; i++) {
        let index = Math.floor(Math.random() * numbers.length);
        (index === 0 && i === 0) && index++;
        let result = numbers[index];
        numbers.splice(index, 1);
        let multiplier = 10 ** (i)
        yield result * multiplier;
    }
}

const generateNumber = (): GenerateNumberReturn => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result: GenerateNumberReturn = {
        number: 0,
        incorrectNumbers: []
    };

    const generator = numberGenerator(numbers);
    for (let i = 0; i < 4; i++) {
        result.number += generator.next().value;
    }

    numbers.sort(() => 0.5 - Math.random());

    result.incorrectNumbers = [numbers[0], numbers[3]];

    return result;
}

const hasRepeatedDigits = (number: number): boolean => /([0-9]).*?\1/.test(number.toString());

const StartNewGame = () => {
    const dispatch = useAppDispatch();
    dispatch(annulateState());
    const {number, incorrectNumbers} = generateNumber();
    dispatch(setCurrentNumber(number));
    dispatch(setIncorrectNumbers(incorrectNumbers));
}

const compareNumbers = (num1: number): boolean[] => {
    return [
        num1.toString().length === 4,
        !hasRepeatedDigits(num1)
    ];
}

const getCowsBulls = (num1: number, num2: number): GameData => {
    let result: GameData = {
        cows: 0,
        bulls: 0
    }

    const num1Arr = num1.toString().split('');
    const num2Arr = num2.toString().split('');

    for (let i = 0; i < 4; i++) {
        if (num1Arr[i] === num2Arr[i]) result.bulls+=1;
        else if (num2Arr.includes(num1Arr[i])) result.cows+=1;
    }

    return result;
}



export {
    SHOW_ALERT,
    HIDE_ALERT,
    generateNumber,
    compareNumbers,
    StartNewGame,
    getCowsBulls,
    warningTypes
}