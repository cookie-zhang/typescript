//认识正则表达式


//构造函数法

let reg1:RegExp = new RegExp('cookie')
console.log(reg1)
let reg2:RegExp = new RegExp("jspang",'gi')
console.log(reg2)
//   /cookie/
//   /jspang/gi

//字面量法
let reg3:RegExp = /jspang/
let reg4:RegExp = /jspang/gi