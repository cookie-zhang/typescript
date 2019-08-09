"use strict";
//认识正则表达式
//构造函数法
var reg1 = new RegExp('cookie');
console.log(reg1);
var reg2 = new RegExp("jspang", 'gi');
console.log(reg2);
//   /cookie/
//   /jspang/gi
//字面量法
var reg3 = /jspang/;
var reg4 = /jspang/gi;
//RegExp中的常用方法
// RegExp对象包含两个方法：test( )和exec( ),功能基本相似，用于测试字符串匹配。
// test(string) ：在字符串中查找是否存在指定的正则表达式并返回布尔值，如果存在则返回 true，不存在则返回 false。
// exec(string) : 用于在字符串中查找指定正则表达式，如果 exec() 方法执行成功，则返回包含该查找字符串的相关信息数组。如果执行失败，则返回 null。
var reg5 = /jspang/i;
var website = 'jspang.com';
var result5 = reg5.test(website);
console.log(result5); //true
console.log(reg5.exec(website));
//[ 'jspang', index: 0, input: 'jspang.com' ]
