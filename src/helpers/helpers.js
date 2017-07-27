export const getCurrentTime = () => new Date().toString();

// https://stackoverflow.com/questions/32238602/javascript-remove-duplicates-of-objects-sharing-same-property-value
// TODO: Figure out what the heck is going on in here
export const removeDuplicatesBy = (keyFn, array) => {
  var mySet = new Set();
  return array.filter(function(x) {
		var key = keyFn(x)
		var isNew = !mySet.has(key);
    if (isNew) mySet.add(key);
    return isNew;
  });
}