var repoFactory = function() {
  this.getRepo = function(repoType) {
    if (repoType === "task") {
      var taskRepo = require("./task-repository");
      return taskRepo;
    }
    if (repoType === "user") {
      var userRepo = require("./user-repository");
      return userRepo;
    }
    if (repoType === "project") {
      var projectRepo = require("./project-repository");
      return projectRepo;
    }
  };
};

module.exports = new repoFactory();
