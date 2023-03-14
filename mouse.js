/*
 * @Description:
 * @Author: Lewis
 * @Date: 2023-03-13 23:47:42
 * @LastEditTime: 2023-03-15 00:29:02
 * @LastEditors: Lewis
 */
function mouse(name) {
  this.name - name;
  this.isDead = false;
}

mouse.prototype.die = function () {
  this.isDead = true;
};

module.export = mouse;
