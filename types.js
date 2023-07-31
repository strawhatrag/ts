function printobj(person) {
    return person;
}
function calculateCost(song) {
    return song.numStreams * 0.0033;
}
var mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
};
console.log(calculateCost(mySong));
