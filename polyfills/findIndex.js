Array.prototype.newFindIndex = function (callback, thisArg) {
  if (this == null) {
    throw new Error("'this' is null");
  }
  if (typeof callback !== "function") {
    throw new Error("callback function should be passed");
  }

  let thisArr = this;
  let len = this.length;

  for (let i = 0; i < len; i++) {
    if (callback(thisArg, this[i], i, thisArr)) {
      return i;
    }
  }
  return -1;
};
