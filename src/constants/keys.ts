export const KeyAvailable = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
export const KeyBoard = KeyAvailable.reduce((accumulator, value) => { return {...accumulator, [value]: ''}}, {});
export const KeyRow1 = ["q","w","e","r","t","y","u","i","o","p"];
export const KeyRow2 = ["a","s","d","f","g","h","j","k","l"];
export const KeyRow3 = ["z","x","c","v","b","n","m"]