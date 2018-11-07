var recipes = {}


function updateObjectWithKeyAndValue(object, key, value) {
  newObject = Object.assign(object, { [key]: value })
  return newObject
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  Object.assign(object, { [key]: value })
  return object
}
function deleteFromObjectByKey(object, key) {
  newObject = Object.assign({}, object, { [key]: value})
  delete newObject[key]
  return newObject
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
