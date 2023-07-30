var a = "hello world"; // type is in smallcase
var movies = ['arraival', 'aliens', 'amadeus'];
var foundMovie; // it infers as any
for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
    var moive = movies_1[_i];
    if (moive == 'amadeus') {
        foundMovie = 'amadeus';
    }
}
console.log(foundMovie);
