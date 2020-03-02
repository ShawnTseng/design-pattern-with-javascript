var repoFactory = function() {
  var repos = this;
  var repoList = [
    { name: "task", source: "./task-repository" },
    { name: "user", source: "./user-repository" },
    { name: "project", source: "./project-repository" }
  ];

  repoList.forEach(function(repo) {
    repos[repo.name] = require(repo.source)();
  });
};

module.exports = new repoFactory();
