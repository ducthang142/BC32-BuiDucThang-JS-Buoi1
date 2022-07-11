/**
 * Đầu vào:
 * nhập vào số có 2 ký số: 56
 * 
 * Xử lý:
 * tạo biến số có 2 ký số là n = 56
 * tạo biến tổng 2 ký số của số vừa nhập là sum 
 * sum = Math.floor(n / 10) + n % 10
 * 
 * Đầu ra:
 * xuất ra tổng của 2 ký số
 */

var n = 56;
var sum;

sum = Math.floor(n / 10) + n % 10;

console.log('Tổng 2 ký số: ' + sum);