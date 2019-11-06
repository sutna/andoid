var input = require ("array-intersection");
var A = [1,2,5,8,9,10]
var B = [4,2,8,10,11,12]
var C = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

//Rumus Variable
var h_a = input (A,B);
var h_b = input (B,C);
var h_c = input (C,A);
var h_ka = A.length;
var h_kc = C.length;

//output
console.log (" A. Hasil Himpunan Irisan A Dengan B Adalah : ["+h_a+"]")
console.log (" B. Hasil Himpunan Irisan B Dengan B Adalah : ["+h_b+"]")
console.log (" C. Hasil Himpunan Irisan C Dengan B Adalah : ["+h_c+"]")
console.log (" D. Hasil Kardinal A + Kardinal C Adalah : ["+(h_ka + h_kc)+"]")