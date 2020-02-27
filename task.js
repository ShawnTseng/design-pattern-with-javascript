// Object Type1:
var task = {};

task.title = "My Task1";
task.description = "My Description1";
Object.defineProperty(task, "showDetail", {
  value: function() {
    return this.title + " " + this.description;
  },
  writable: false,
  enumerable: true,
  configurable: true
});

// Inherit from task
var urgentTask = Object.create(task);
Object.defineProperty(urgentTask, "showDetail", {
  value: function() {
    return this.title + " is very urgent";
  },
  writable: false,
  enumerable: true,
  configurable: true
});

console.log(urgentTask.showDetail());
