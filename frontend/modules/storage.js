exports = module.exports = exports = module.exports = function() {
  var mod = {
    get: function(key, type) {
      if (!app.has(type)) type = "local";
      return window[type + "Storage"].getItem(key);
    },
    set: function(key, value, type) {
      if (!app.has(type)) type = "local";
      window[type + "Storage"].setItem(key, value);
    }
  };
  return mod;
}