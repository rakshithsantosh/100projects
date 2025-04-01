Array.prototype.newIncludes = function (searchElement, index) {
  if (this == null) {
    throw new Error("'this' is null or not defined");
  }

  let len = this.length;
  if (index >= len) {
    return false;
  }

  let startIndex = index || 0;

  while (startIndex < len) {
    if (searchElement == this[startIndex]) {
      return true;
    } else if (isNaN(searchElement) === isNaN(this[startIndex])) {
      return true;
    }
    startIndex++;
  }
  return false;
};

console.log([1, 2, 3, NaN].newIncludes(NaN, 0));
