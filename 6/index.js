function accessor(object, defaultValue, path = null) {
  if (path) {
    const keys = path.split('.');

    if (object[keys[0]]) {
      if (keys.length > 1) {
        const path = keys.slice(1).join('.');
        return accessor(object[keys[0]], defaultValue, path)
      } else {
        return object[keys[0]];
      }
    } else {
      return defaultValue
    }
  } else {
    return function(path) {
      return accessor(object, defaultValue, path)
    }
  }
}
