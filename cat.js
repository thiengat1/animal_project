/*
 * @Description:
 * @Author: Lewis
 * @Date: 2023-03-13 23:34:08
 * @LastEditTime: 2023-03-14 00:12:04
 * @LastEditors: Lewis
 */
function cat() {
  this.stomach = [];
}
cat.prototype.eat = function (mouse) {
  this.stomach.push(mouse);
};
module.export = cat;
