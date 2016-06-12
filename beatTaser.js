var _ = {};

_.each = function(collection, iterator) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else if (typeof collection === 'object') {
    for (var key in collection) {
      iterator(collection[key], key, collection);
    }
  }
};

_.reduce = function(collection, iterator, accumulator) {
  var initialize = accumulator === undefined;

  _.each(collection, function(val, i) {
    if (initialize) {
      accumulator = val;
      initialize = false;
    } else {
      accumulator = iterator(accumulator, val, i);
    }
  });

  return accumulator;
};

_.isEqual = function(a, b) {
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a !== 'object') {
    return a === b;
  }
  if (a.length !== b.length) {
    return false;
  }
  return _.reduce(a, function(equality, val, i) {
    if (typeof val === 'object') {
      return equality && _.isEqual(a[i], b[i]);
    }
    return equality && a[i] === b[i];
  }, true);

};

_.describe = function(name, description) {
  console.log('==============================');
  console.log(name);
  console.log(description);
};
