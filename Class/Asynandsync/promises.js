let count = false;

let countValue = new Promise((resolve, reject) => {
    if (count) {
        resolve('<resolve> there is count value')
    } else {
        reject('<reject> this is error value')
    }
});

console.log(countValue);

// to get the value itself
countValue
    .then( (result) => console.log(result))
    .catch( (error) => console.error(error))
    .finally( () => console.log('code executed successfully'))