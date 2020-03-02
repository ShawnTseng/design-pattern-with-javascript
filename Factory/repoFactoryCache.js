var repoFactory = function() {
  this.getRepo = function(repoType) {
    if (repoType === "task") {
      if (this.taskRepo) {
        console.log("Retrieving from chche");
        return this.taskRepo;
      } else {
        this.taskRepo = require("./task-repository")();
        return this.taskRepo;
      }
    }
    if (repoType === "user") {
      var userRepo = require("./user-repository")();
      return userRepo;
    }
    if (repoType === "project") {
      var projectRepo = require("./project-repository")();
      return projectRepo;
    }
  };
};

module.exports = new repoFactory();
