//dont forget to import your functions
import { inventory, Movie, Customer } from "./MovieStore";

describe("Movie Store", () => {
    beforeEach(() => {
        inventory.length = 0;
    });

    test("addMovie() should add a movie to the inventory", () => {
        const movieTitle = "The Matrix";
        const movie = new Movie(movieTitle);
        movie.addMovie(movie);
        expect(inventory).toContain(movie);
    });

    test("rentMovie() should set inStock to false for a movie", () => {
        const movieTitle = "The Matrix";
        const movie = new Movie(movieTitle);
        movie.rentMovie();
        expect(movie.inStock).toBe(false);
    });
});
