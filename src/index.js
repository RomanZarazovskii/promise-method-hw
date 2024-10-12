// 1

// function delayedPromise(value, delay) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(value);
//     }, delay);
//   });
// }

// const promises = [
//   delayedPromise('promise-1', Math.floor(Math.random() * 2000 + 1000)),
//   delayedPromise('promise-2', Math.floor(Math.random() * 2000 + 1000)),
//   delayedPromise('promise-3', Math.floor(Math.random() * 2000 + 1000)),
//   delayedPromise('promise-4', Math.floor(Math.random() * 2000 + 1000)),
//   delayedPromise('promise-5', Math.floor(Math.random() * 2000 + 1000)),
// ];

// Promise.all(promises)
//   .then(result => {
//     console.log('All promises have been completed!', result);
//   })
//   .catch(error => {
//     console.log('Error');
//   });

// 2

// function randomDelay(value) {
//   const delay = Math.floor(Math.random() * 4000) + 1000;
//   return new Promise(resolve => {
//     setTimeout(() => resolve(value), delay);
//   });
// }

// const promises = [
//   randomDelay('promise-1'),
//   randomDelay('promise-2'),
//   randomDelay('promise-3'),
//   randomDelay('promise-4'),
//   randomDelay('promise-5'),
// ];

// Promise.race(promises)
//   .then(fastestPromise => {
//     console.log(`Fastest promise - ${fastestPromise}`);
//   })
//   .catch(error => {
//     console.log('Error:', error);
//   });
