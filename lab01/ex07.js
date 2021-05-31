function oddNumber(ms) {
    return new Promise((resolve, reject) => setTimeout(resolve("13"), ms));
}

oddNumber(2000).then((result) => console.log(result));