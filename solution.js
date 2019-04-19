function findWord(text, data) {
  if(typeof text !== "string" || text.length <= 0) {
    return false;
  }

  if(!Array.isArray(data) || data.length === 0) {
    return false;
  }

  var reg = RegExp(text + '|' + text.split('').reverse().join(''));

  if (data.join().match(reg)) return true;

  var transformData = Array.from(data[0], function (_, i) {
    return data.map(function (row) {
      return row[i];
    }).join('');
  });
  return !!transformData.join().match(reg);
}

