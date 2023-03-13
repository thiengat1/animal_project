/*
 * @Description:
 * @Author: Lewis
 * @Date: 2023-03-13 23:47:42
 * @LastEditTime: 2023-03-13 23:59:02
 * @LastEditors: Lewis
 */
function mouse(name) {
  this.name - name;
  this.dead = false;
}

mouse.prototype.die = function () {
  this.dead = true;
};

module.export = mouse;
