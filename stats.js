/**
 * Calculates the sum of all elements in a numeric array.
 *
 * @param {number[]} arr - An array of numbers to sum.
 * @returns {number} The total sum of all elements in the array.
 * @example
 * sum([1, 2, 3]); // returns 6
 */
function sum(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

/**
 * Custom error to represent invalid argument input.
 * Thrown when arguments do not meet the expected format or values.
 *
 * @extends {Error}
 * @class
 */
class ErrorInvalidArgument extends Error {
    /**
     * Creates an instance of ErrorInvalidArgument.
     * @param {string} text - The error message.
     */
    constructor(text) {
        super(text);
        this.name = 'ErrorInvalidArgument';
    }
}

/**
 * Calculates the average of all elements in a numeric array.
 *
 * @function
 * @param {number[]} nums - An array of numbers.
 * @returns {number} The average (mean) of the array elements.
 * @throws {ErrorInvalidArgument} If the input array is empty or contains non-numeric values.
 * @example
 * average([1, 2, 3]); // returns 2
 */
export function average(nums) {
    if (!Array.isArray(nums) || nums.length === 0 || nums.some(n => typeof n !== 'number')) {
        throw new ErrorInvalidArgument("Input must be a non-empty array of numbers.");
    }
    return sum(nums) / nums.length;
}

/**
 * Calculates the median value from a numeric array.
 * Median is the middle value in an ordered list.
 *
 * @function
 * @param {number[]} arr - An array of numbers.
 * @returns {number} The median value of the array.
 * @throws {ErrorInvalidArgument} If the input is not a valid non-empty numeric array.
 * @example
 * median([1, 2, 3]); // returns 2
 * median([1, 2, 3, 4]); // returns 2.5
 */
export function median(arr) {
    if (!Array.isArray(arr) || arr.length === 0 || arr.some(n => typeof n !== 'number')) {
        throw new ErrorInvalidArgument("Input must be a non-empty array of numbers.");
    }

    const sorted = [...arr].sort((a, b) => a - b);
    const midIndex = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[midIndex - 1] + sorted[midIndex]) / 2;
    } else {
        return sorted[midIndex];
    }
}

/**
 * Constant value representing π (pi).
 *
 * @constant
 * @type {number}
 * @default
 * @example
 * console.log(PI); // 3.14
 */
export const PI = 3.14;
