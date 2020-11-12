/* var vs let vs const */

/* membuat sebuah variabel */



var a = 7;
// console.log({ a })
/* bad = memory leaking, global scoping */
/* variable tumpang tindih */



// /* const */
const b = 5;
a = 5;

// console.log({ a });
// /* let, block scoping */



let c = 5;
// console.log({c});
c = 7;
console.log({ c });

for (let i = 0; i < 5; i++) {
    console.log(i);
}


for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);

// /* variable, yang tidak berubah maka gunakan const */
/* variabel, yang berubah maka gunakan let */