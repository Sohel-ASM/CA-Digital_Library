// parent class Media
class Media {
    // all subclasses of Media has title property, which doesn't have any default value. Hence, constructor method for Media takes only 'title' as an argument
    constructor(title) {
        // these 3 properties are common to all subclasses of Media
        this._title = title;
        this._isCheckedOut = false; // to check whether the library is currently in possession of an item or not.
        this._ratings = [];
    }

}
