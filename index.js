var recipes = {}


function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign(object, { [key]: value })
  return object
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {}
function deleteFromObjectByKey(object, key) {}
function destructivelyDeleteFromObjectByKey(object, key) {}
