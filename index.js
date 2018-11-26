/*
 * @Author: kael 
 * @Date: 2018-02-14 17:50:28 
 * @Last Modified by: kael
 * @Last Modified time: 2018-07-10 16:50:09
 */

module.exports = {
  mobile: /^1\d{10}$/,
  qq: /^[1-9]\d{4,10}$/,
  number: /^[-+]?(?:\d+(?:\.\d*)|(?:\d*\.)?\d+)$/,
  email: /^[^@\s]+@[\w\d]+.[\w\d]+$/,
  url: /^https:\/\/.+$/,
  ipv4: /^((\d|\d\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|\d\d|1\d\d|2[0-4]\d|25[0-5])$/,
  idcard: /^3503011\d{11}$/,
};