/*
 * @Description:
 * @Author: Lewis
 * @Date: 2023-03-13 23:47:42
 * @LastEditTime: 2023-03-16 01:17:10
 * @LastEditors: Lewis
 */
function mouse(name) {
  this.name - name;
  this.isDead = false;
}

mouse.prototype.die = function () {
  this.isDead = true;
};
mouse.prototype.jump=function(){
  console.log('jump');
}
module.export = mouse;
