var Task = require("./task");

var notificationService = function() {
  var message = "Notifying ";
  this.update = function(task) {
    console.log(`${message}+${task.user} for task ${task.name}`);
  };
};

var loggingService = function() {
  var message = "Logging ";
  this.update = function(task) {
    console.log(`${message}+${task.user} for task ${task.name}`);
  };
};

var auditingService = function() {
  var message = "Auditing ";
  this.update = function(task) {
    console.log(`${message}+${task.user} for task ${task.name}`);
  };
};

function ObserverList() {
  this.observerList = [];
}

ObserverList.prototype.add = function(obj) {
  return this.observerList.push(obj);
};

ObserverList.prototype.get = function(index) {
  if (index > -1 && this.observerList.length) {
    return this.observerList[index];
  }
};

var task1 = new Task({ name: "create a demo fro constructors", user: "Shawn" });

task1.save();
