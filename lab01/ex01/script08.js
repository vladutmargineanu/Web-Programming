const getAgeAsync = () => new Promise((resolve, reject) => {
    resolve(25);
});

// echivalent cu const getAgeAsync = async () => 25;

const main = async () => {
    const age = await getAgeAsync();

    console.log(`My age is ${age}`);
}

main();