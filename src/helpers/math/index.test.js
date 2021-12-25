import { sum, divideArr, currCon } from './index';

describe('math function', () => {
    test('check if sum 1 + 2 = 3',() => {
        expect(sum(1,2)).toBe(3)
    });

    
    test('check if divide array',() => {
            expect(divideArr("I love arrays they are my favorite")).toEqual(["I", "love", "arrays", "they", "are", "my", "favorite"])
        });

        test('check if currency converter',() => {
            expect(currCon(150)).toBe("1012.5 Chinese Yuan")
        });


})