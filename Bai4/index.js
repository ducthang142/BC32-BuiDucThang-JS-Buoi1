/**
 * Đầu vào:
 * nhập vào chiều dài và chiều rộng của HCN là 5 và 3
 * 
 * Xử lý:
 * tạo biến cho chiều dài và chiều rộng là edge1 = 5 và edge2 = 3
 * tạo biến diện tích HCN là S
 * tạo biến chu vi HCN là P
 * S = edge1 * edge2
 * P = ( edge1 + edge2) * 2
 * 
 * Đầu ra:
 * xuất ra diện tích và chu vi của HCN
 */


var edge1 = 5, edge2 = 3;
var S, P;

S = edge1 * edge2;

P= (edge1 + edge2) * 2;

console.log('Diện tích: ' + S);
console.log('Chu vi: ' + P);
