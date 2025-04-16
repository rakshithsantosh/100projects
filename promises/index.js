//PENDING | FULFILLED | REJECTED are the three states of promises

//when pendeing state moves to fulfilled then all the callbacks attached to then is invoked

function init() {
  const exefunc = (resolve, reject) => {
    resolve(10); //pending => fullied
  };
  //exefunc is executed right away
  return new Promise(exefunc);
}

const instance = init();

//then exists on the prototype chain of promise instance

instance.then((v) => {
  console.log("the value of v ", v);
});

//these .then callbacks are also known as resolution handlers

//chaining .then

instance
  .then((v) => {
    console.log(v);
  })
  .then((v) => console.log(v));

// how are we able to attach .then on .then ? because .then is returning a promise .then is only available in the prototype of promise

setTimeout(() => {
  //executed right away
  instance.then((y) => console.log("then in settimeout", y));
}, 1000);
//we can queue then callbacks even after the promise is resolved

//once resolve of reject is called that is terminal case even if we use another resolve or reject resolve is not return

instance.catch((e) => {
  console.log("error", e);
});
//works only if the state is rejected
