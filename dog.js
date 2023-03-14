/*
 * @Description:
 * @Author: Lewis
 * @Date: 2023-03-14 00:09:12
 * @LastEditTime: 2023-03-15 00:22:17
 * @LastEditors: Lewis
 */
function dog() {
  this.stomach = [];
}
dog.prototype.eat = function (cat) {
  this.stomach.push(cat);
};

module.export = dog;
