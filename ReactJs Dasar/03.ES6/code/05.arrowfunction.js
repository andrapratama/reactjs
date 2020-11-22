// arrow function

// function biasa
function namaFunction() {
    return "something";
}
console.log(namaFunction());

// arrow function 
const namaFunctionArrow = () => {
    return "someting with arrow function"
}
console.log(namaFunctionArrow());

//contoh single line
const arrowSingleLine = () => "arrow single sile"
console.log(arrowSingleLine());

const arrowSingleLineTambah = (x, y) => x + y;
console.log(arrowSingleLineTambah(2, 8));

//multi line
const arrowMultiLine = (x, y) => {
    const a = x + 5;
    const b = y + 5;
    return a + b;
};
console.log(arrowMultiLine(2, 3));