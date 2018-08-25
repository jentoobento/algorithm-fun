/*
 * given a string of special characters, determine if the string is 
 * valid or not. example: {[}] is invalid and {{} is also invalid.
 */

function specialChars(str) {
    let openParens = false;
    let openBracket = false;
    let openCurly = false;

    for (let i = 0; i < str.length; i++) {
        if (str.length === 0) { return true; }
        if (str.length % 2 !== 0) { return false; }
        switch (str[i]) {
            // ========== open 
            case '(':
                if (openParens) { return false; }
                openParens = true;
                break;
            case '[':
                if (openBracket) { return false; }
                openBracket = true;
                break;
            case '{':
                if (openCurly) { return false; }
                openCurly = true;
                break;
            //========= closed 
            case ')':
                if (!openParens) { return false; }
                openParens = false;
                break;
            case ']':
                if (!openBracket) { return false; }
                openBracket = false;
                break;
            case '}':
                if (!openCurly) { return false; }
                openCurly = false;
                break;
            //========== characters other than specified not allowed
            default:
                return false;
                break;
        }
    }
    return (!openParens && !openBracket && !openCurly) ? true : false;
}

/**
 * there are cases where this method breaks so... it's not foolproof.
 * probably needs to be redone.
 */
