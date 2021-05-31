async function oddNumber() {

    let promiseAsync = new Promise((resolve, reject) => {
        setTimeout(() => resolve("13"), 2000)
    });

    let result = await promiseAsync;

    console.log(result);
}

oddNumber();