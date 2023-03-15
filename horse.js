/*
 * @Description:
 * @Author: Lewis
 * @Date: 2023-03-15 22:50:40
 * @LastEditTime: 2023-03-16 01:04:41
 * @LastEditors: Lewis
 */
function horse() {
  //
}

horse.prototype.jump = function () {
  console.log('jumping');
};
horse.prototype.run = function () {
  console.log('running');
};
module.export = horse;
