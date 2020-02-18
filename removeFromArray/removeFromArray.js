const removeFromArray = function(arr, ...items) {
  const arrCopy = arr.slice();

  items.forEach((item) => {
    const itemIndex = arrCopy.indexOf(item);

    if (itemIndex !== -1) {
      arrCopy.splice(itemIndex, 1);
    }
  });

  return arrCopy;
}

module.exports = removeFromArray
