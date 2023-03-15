/*
 * @Description:
 * @Author: Lewis
 * @Date: 2023-03-14 00:09:12
 * @LastEditTime: 2023-03-15 00:49:40
 * @LastEditors: Lewis
 */
const chalk = require('chalk');

function Dog(name) {
  this.name - name;
  this.stomach = [];
}
Dog.prototype.eat = function (cat) {
  this.stomach.push(cat);
};

Dog.prototype.sayHi = function () {
  console.log('hi! i am dog. my name is' + chalk.blue(this.name));
};

module.export = Dog;
