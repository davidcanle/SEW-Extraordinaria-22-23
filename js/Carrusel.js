class Carrusel {
    constructor() {
        this.src = "multimedia/"
        this.counter = 0
        this.imagenes = [
            "fuente_1.jpg",
            "yano_1.jpg",
            "valle_1.jpg",
            "valle_2.jpg",
            "lago_1.jpg"
        ]

    }
    anterior() {
        if (this.counter - 1 < 0) {
            this.counter = 4;
        } else {
            this.counter--;
        }
        document.getElementsByTagName('img')[0].src = this.src + this.imagenes[this.counter]
    }

    siguiente() {
        if (this.counter + 1 <= 4) {
            this.counter++;
        } else {
            this.counter = 0;
        }
        document.getElementsByTagName('img')[0].src = this.src + this.imagenes[this.counter]
    }

    
}

let carrusel = new Carrusel();