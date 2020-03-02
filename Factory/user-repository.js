var repo = function() {
  var get = function name(id) {
    console.log("Getting user " + id);
    return {
      name: "Shawn Tseng"
    };
  };

  return {
    get: get
  };
};

module.exports = repo();
