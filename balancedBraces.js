/**
 * given a string consisting of different types of braces, find if the string is "balanced" or not
 * each open brace must have a corrosponding closing brace, and braces cannot intersect with each other.
 * example:
 * () = true
 * (){} = true
 * ({}) = true
 * ({)} = false (braces intersect)
 * ({) = false (no corrosponding closing brace)
 * (}) = false (no corrosponding open brace)
 */

function braces(str){
  let allOpenBraces = [];
  for(let i = 0; i < str.length; i++){
    if(str[i] == '{' || str[i] == '[' || str[i] == '('){
      allOpenBraces.push(str[i]);
    }else{
      // get last element from allOpenBraces
      let lastElement = allOpenBraces.pop();
      if(lastElement == '{' && str[i] !== '}' || lastElement == '[' && str[i] !== ']' || lastElement == '(' && str[i] !== ')'){
        // because equivalent braces must equal each other aka can't have different type of brace inside them
        return false
      }
    }
  }
  if(allOpenBraces.length !== 0){
    // there are some braces left over or the length of string was mismatched
    return false
  }
  return true
}

console.log(braces('{[}]')) // false
console.log(braces('{}[]()')) // true
console.log(braces('{{{[]()}}}')) // true
