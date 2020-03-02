var repo = function() {
  var get = function name(id) {
    console.log("Getting project " + id);
    return {
      name: "New Project"
    };
  };

  return {
    get: get
  };
};

module.exports = repo;
