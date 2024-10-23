import {describe, test, it, expect} from 'vitest';
import {max, fizzBuzz, factorial} from '../src/intro.js';

describe('max', () => {
    it('should return the first argument if it is greater', () => {
        expect(max(2,1)).toBe(2);
    });

    it('should return the second argument if it is greater', () => {
        expect(max(1,2)).toBe(2);
    });

    it('should return the first argument if argument are equal', () => {
        expect(max(1,1)).toBe(1);
    });
})

describe('fizzBuzz', () => {
    it('should return FizzBuzz if the argument is divisible by 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });

    it('should return Fizz if the argument is divisible by 3', () => {
        expect(fizzBuzz(9)).toBe('Fizz');
    });

    it('should return Buzz if the argument is divisible by 5', () => {
        expect(fizzBuzz(10)).toBe('Buzz');
    })

    it('should return argument as a string if it is not divisible by 3 or 5', () => {
        expect(fizzBuzz(1)).toBe('1');
    })
})

describe('factorial', () => {
    it('should return 1 if given 0' , () => {
        expect(factorial(0)).toBe(1);
    })

    it('should return 1 if given 1' , () => {
        expect(factorial(1)).toBe(1);
    })

    it('should return 2 if given 2' , () => {
        expect(factorial(2)).toBe(2);
    })
})