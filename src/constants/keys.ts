export const KeyAvailable = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
export const KeyBoard = KeyAvailable.reduce((accumulator, value) => { return {...accumulator, [value]: ''}}, {});
export const KeyRow1 = ["q","w","e","r","t","y","u","i","o","p"];
export const KeyRow2 = ["a","s","d","f","g","h","j","k","l"];
export const KeyRow3 = ["z","x","c","v","b","n","m"]