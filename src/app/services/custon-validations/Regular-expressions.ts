export class RegularExpressions {
    static atLeastANumber = new RegExp("(?=.*[0-9])");
    static atLeastALowerCase = new RegExp("(?=.*[a-z])");
    static atLeastAUpperCase = new RegExp("(?=.*[A-Z])");
    static atLeastASpecialCharacter = new RegExp("(?=.*[$@^!%*?&])");
}