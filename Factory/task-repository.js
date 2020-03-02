var repo = function() {
  var get = function name(id) {
    console.log("Getting task " + id);
    return {
      name: "new task from db"
    };
  };

  var save = function name(task) {
    console.log("Saving " + task.name + " to the db");
  };

  console.log('newing up task repo');
  return {
    get: get,
    save: save
  };
};

module.exports = repo;
