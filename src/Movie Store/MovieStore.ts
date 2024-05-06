// A movie store is asking you to make an application
// the application can add movies to an inventory array,
// track if a movie is rented out or in stock,
// and calculate a customer's total cost for the # of rentals * # of days.
// A customer can only rent a movie if it is in stock.

export const inventory: Movie[] = [];

export class Movie {
    title: string;
    inStock: boolean;
    daysRented: number;

    constructor(title: string ) {
        this.title = title;
        this.inStock = true;
        this.daysRented = 0;
    };

    addMovie (movie: Movie) {
        inventory.push(movie);
    };

    rentMovie() {
        if (this.inStock) {
            this.inStock = false;
            return true;
        } else {
            return false;
        };
    };
};

export class Customer {
    name: string;
    rentals: { movie: Movie, days: number }[];

    constructor(name: string) {
        this.name = name;
        this.rentals = [];
    };

    rentMovie(movie: Movie, days: number) {
        const isRented = movie.rentMovie();
        if (isRented) {
            this.rentals.push({ movie, days })
            return true;
        } else {
            return false;
        };
    };

    calculateTotal(): number {
        let total = 0;
        this.rentals.forEach(rental => {
            total += rental.movie.daysRented * rental.days;
        })
        return total;
    };
};