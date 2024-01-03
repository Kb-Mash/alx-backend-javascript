export default function appendToEachArrayValue(array, appendString) {
  const my_array = [];
  for (const idx of array) {
    my_array.push(appendString + idx);
  }

  return my_array;
}
