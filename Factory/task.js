var repoFactory = require("./repoFactoryCache");

var Task = function(data) {
  this.name = data.name;
  this.completed = false;
};

Task.prototype.complete = function() {
  console.log("completing Task: " + this.name);
  this.completed = true;
};

Task.prototype.save = function() {
  console.log("saving Task: " + this.name);
  repoFactory.getRepo("task").save(this);
};

module.exports = Task;
