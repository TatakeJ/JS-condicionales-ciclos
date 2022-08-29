const promise = new Promise((resolve, reject) => {
        resolve("Start Counting");
    })
    .then(value => {
        console.log(value);
        return "one";
    })
    .then(value => {
        console.log(value);
        return "two";
    })
    .then(value => {
        console.log(value);
        return "three";
    })
    .then(value => {
        console.log(value);
    })
    .catch(value => {
        console.log(value);
    })