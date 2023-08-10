interface TVShow {
  title: string,
  numberofEpisodes: number,   // extra
  duration: number,
}


interface movie {
  title: string,
  duration: number
}


// in operator we can check if a var is present or not

const totalWatchTime = (watch: TVShow | movie) => {

  if ('numberofEpisodes' in watch) {   // should be str
    return watch.duration * watch.numberofEpisodes;
  }

  return watch.duration;   // type movie
}

console.log(totalWatchTime({ title: 'Amadeus', duration: 180 }));
console.log(totalWatchTime({ title: 'dark', duration: 60, numberofEpisodes: 50 })); 