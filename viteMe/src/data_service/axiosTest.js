import DS from './JokeDataService.js'
console.log("Run")
const test = DS.getrandom().then((response) => {
    const jsonPromise = response.json();
    jsonPromise.then((data) => {
      console.log(data[0]);
    });
  });