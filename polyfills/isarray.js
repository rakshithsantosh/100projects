Array.prototype.newIsArray = function (inputItem) {
  return Object.prototype.toString.call(inputItem) === "[object Array]";
};
