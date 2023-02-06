class GuessingGame {
    constructor() {}

    setRange(min, max) {
       this.min = min;
       this.max = max;
       this.guessingNumber = 0;
    }

    guess() {
        this.guessingNumber = Math.ceil((this.min + this.max)/2)
            return this.guessingNumber
    }

    lower() {
        this.max = this.guessingNumber
    }

    greater() {
        this.min = this.guessingNumber
    }
}

module.exports = GuessingGame;