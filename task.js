// Object Type1:
var task1 = {};

task1.title = "My Task1";
task1.description = "My Description1";
Object.defineProperty(task1, "showDetail", {
  value: function() {
    return this.title + " " + this.description;
  },
  writable: true,
  enumerable: true,
  configurable: true
});

console.log(task1);
console.log(task1.showDetail());
