//class

class Orang {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }

    get calc() {
        return this.umur + 5;
    }
}

const saya = new Orang("Andra", 26)
console.log(saya)