"use strict";
module.exports = function stringSlice(str, start, end) {
  var arr = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
  return arr.slice(start, end).join("");
};
