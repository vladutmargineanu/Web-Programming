const getAgePromise = new Promise((resolve, reject) => {
    resolve(25);
});

getAgePromise.then((age) => console.log(`My age is ${age}`));