
exports.min = function min (array) {
  if (array) {
    if (array.length === 0) return 0;
    else{
      var array_min = array[0];
      for (var i = 0; i < array.length; i++) {
        if (array[i] < array_min) {
          array_min = array[i];
        }
      }
      return array_min;
    }
  } else return 0;
}

exports.max = function max (array) {
  if (array) {
    if (array.length === 0) return 0;
    else{
      var array_max = array[0];
      for (var i = 0; i < array.length; i++) {
        if (array[i] > array_max) {
          array_max = array[i];
        }
      }
      return array_max;
    }
  }
  else return 0;
}

exports.avg = function avg (array) {
  if (array) {
    if (array.length === 0) return 0;
    else{
      var array_avg = 0;
      for (var i = 0; i < array.length; i++) 
        array_avg = array_avg + array[i];
        array_avg = array_avg/i;
        return array_avg;
    }
  } else return 0;
}
