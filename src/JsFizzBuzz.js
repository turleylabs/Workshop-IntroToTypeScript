class FizzBuzzer {
    constructor(i) {
        this.number = i;
    }

    doFizzBuzz() {
        if (this.isDivisibleBy(3)) {
            return 'Fizz';
        }
        if (this.isDivisibleBy(5)) {
            return 'Buzz';
        }
        return this.number.toString();
    }

    isDivisibleBy(divisor) {
        return this.number % divisor === 0;
    }
}

export {FizzBuzzer};