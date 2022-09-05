var num = 0;
var time = 1000
const counter = new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve("Start Counting");
            }, time);
        } else {
            reject('Fail')
        }
    })
    .then(value => {
        setTimeout(() => {
            console.log(value);
        }, time += 1000);
        return ++num;
    })
    .then(value => {
        setTimeout(() => {
            console.log(value);
        }, time += 1000);
        return ++num;
    })
    .then(value => {
        setTimeout(() => {
            console.log(value);
        }, time += 1000);
        return ++num;
    })
    .then(value => {
        setTimeout(() => {
            console.log(value);
        }, time += 1000);
    })
    .catch(value => {
        console.log(value);
    })

//------------------------------------------------------------------------------------------

function saySomething(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("something" + x);
        }, 1000);
    });
}

async function talk(x) {
    const words = await saySomething(x);
    console.log(words);
}
talk(2);
talk(4);