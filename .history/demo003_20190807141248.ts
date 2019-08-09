var age:number=18
console.log(age)
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
var age:number
console.log(age)

var age:number = 18
var stature:number = 178.5
console.log(age)
console.log(stature)


var jspang:string = "技术胖 jspang.com"
console.log(jspang)

var b:boolean = true
var c:boolean = false

enum REN{ nan , nv ,yao}
console.log(REN.yao)  //返回了2，这是索引index，跟数组很想。