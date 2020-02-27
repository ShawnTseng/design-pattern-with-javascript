// Object Type1:
var task1 = {};

task1.title = "My Task1";
task1.description = "My Description1";
task1.showDetail = function() {
  return this.title + " " + this.description;
};

console.log(task1);
console.log(task1.showDetail());

// Object Type2:
var task2 = Object.create(Object.prototype);

task2.title = "My Task2";
task2.description = "My Description2";
task2.showDetail = function() {
  return this.title + " " + this.description;
};

console.log(task2);
console.log(task2.showDetail());

// Object3 Type3:
var task3 = new Object();

task3.title = "My Task3";
task3.description = "My Description3";
task3.showDetail = function() {
  return this.title + " " + this.description;
};

console.log(task3);
console.log(task3.showDetail());
