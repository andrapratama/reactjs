// 1. menggabungkan sebuah array
const arr = [1, 2, 3];

const arrGabungan = [4, 5];

//dulu
//console.log(arrGabungan.concat(arr));


const arr2 = [1, 2, 3];

const arrGabungan2 = [...arr2, 4, 5];
//sekarang
//console.log(arrGabungan2);

const arrGabunganAkhir = [...arr, ...arrGabungan]
//console.log(arrGabunganAkhir);



// 2. copy sebuah element
const copyArr = [...arr]
console.log(copyArr);


// 3. menggabungkan semua argument menjadi single argument
function tambah(x, y, z) {
    return x + y + z;
}

const arrTambah = [2, 3, 5]
console.log(tambah(...arrTambah));

function tambah2(x, y, z, b) {
    return x + y + z + b;
}

const arrTambah2 = [2, 3, 5, 7]
console.log(tambah2(...arrTambah2));