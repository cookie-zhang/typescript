//引用类型-数组
// let jspang = {
//     name:'技术胖',
//     website:'jspang.com',
//     age:18,
//     saySometing:function(){
//         console.log('为了前端技术')
//     }
// }
// console.log(jspang.name)
// jspang.saySometing()

// let arr1:number[]
// let arr2:Array<string>

//字面量赋值法
let arr1:number[]=[]
let arr2:number[]=[1,2,3,4,5]
let arr3:Array<string>=['技术胖','张三','李四']
let arr4:Array<boolean>=[false,true]
//构造函数赋值法
let arr5:number[]= new Array()
let arr6:number[]=new Array(1,2,3,4,5)
let arr7:Array<string>=new Array('技术胖','张三','李四')
let arr8:Array<boolean>=new Array[false,true]