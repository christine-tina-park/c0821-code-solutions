/* exported dropRight */
function dropRight(array, count) {
  var newArray = [];
  if (count > array.length) {
    newArray = array;
  } else {
    for (var j = 0; j < (array.length - count); j++) {
      newArray.push(array[j]);
    }
  }
  return newArray;
}
