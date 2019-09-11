// parent class Media
class Media {
    // all subclasses of Media has title property, which doesn't have any default value. Hence, constructor method for Media takes only 'title' as an argument
    constructor(title) {
        // these 3 properties are common to all subclasses of Media
        this._title = title;
        this._isCheckedOut = false; // to check whether the library is currently in possession of an item or not.
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    set isCheckedOut(val) {
        this._isCheckedOut = val;
    }
    //This method changes the value saved in the '_isCheckedOut' property
    toggleCheckOutStatus() {
        this.isCheckedOut = !this.isCheckedOut;
    }
    // this method returns the average value of the 'this._ratings' array
    getAverageRating() {
        let sumOfRatings = this.ratings.reduce((currentSum, rating) => currentSum + rating);
        const lengthOfArray = this.ratings.length;
        let average = sumOfRatings / lengthOfArray;
        return average;
    }
    // method for add rating in the 'this._ratings' array
    addRating(input) {
        // to make sure input is a number between 1 and 5 including
        if (typeof (input) == 'number' && input > 0 && input < 6) {
            this.ratings.push(input);
        } else {
            console.log('Error! Pick a number from 1 to 5.')
        }
    }
}
