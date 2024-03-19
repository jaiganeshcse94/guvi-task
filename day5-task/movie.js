class Movie {
    constructor(x, y, z) {
        this.title = x;
        this.studio = y;
        this.rating = z;
    }
    getPG() {
        let arr = []
        if (this.rating == '' || this.rating == 'PG') {
            this.rating = 'PG';
            arr.push(this.title, this.studio, this.rating);
            return arr;
        }
    }
}
//return PG when no rating is provided
let movie = new Movie('Mona', 'pixel', '');
console.log(movie.getPG());
//return PG13 rating is provided
let movie1 = new Movie('Casino Royale', 'Eon Productions', 'PG13');
console.log(movie1);