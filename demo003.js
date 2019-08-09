"use strict";
var age = 18;
console.log(age);
// Undefined :
// Number:数值类型;
// string : 字符串类型;
// Boolean: 布尔类型；
// enum：枚举类型；
// any : 任意类型，一个牛X的类型；
// void：空类型；
// Array : 数组类型;
// Tuple : 元祖类型；
// Null ：空类型。
//声明数值类型的变量age，但不予赋值
var age;
console.log(age);
var age = 18;
var stature = 178.5;
console.log(age);
console.log(stature);
var jspang = "技术胖 jspang.com";
console.log(jspang);
var b = true;
var c = false;
var REN;
(function (REN) {
    REN[REN["nan1"] = 0] = "nan1";
    REN[REN["nv2"] = 1] = "nv2";
    REN[REN["yao3"] = 2] = "yao3";
})(REN || (REN = {}));
console.log(REN.yao3); //返回了2，这是索引index，跟数组很想。
(function (REN) {
    REN["nan"] = "\u7537";
    REN["nv"] = "\u5973";
    REN["yao"] = "\u5996";
})(REN || (REN = {}));
console.log(REN.yao); //返回了妖 这个字
var t = 10;
t = "jspang";
t = true;
console.log(t);
