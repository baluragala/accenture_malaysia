let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ message: "one" });
  }, 3000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ message: "two" });
  }, 3000);
});

p1.then(_ => p2).then(d => {
  console.log(d);
});
