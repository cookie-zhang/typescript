//引用类型-日期对象
let d:Date = new Date()
console.log(d)//2019-08-09T09:33:43.152Z
//.传递一个整数
let coo:Date = new Date(1000)
let da:Date = new Date(2000)
console.log(coo)  //1970-01-01T00:00:01.000Z
console.log(da) //1970-01-01T00:00:02.000Z
//传递一个字符串
let d1:Date = new Date('2018/09/06 05:30:00')
let d2:Date = new Date('2018-09-06 05:30:00')
let d3:Date = new Date('2018-09-06T05:30:00')
console.log(d1)
console.log(d2)
console.log(d3)
// 2018-09-05T21:30:00.000Z
// 2018-09-05T21:30:00.000Z
// 2018-09-05T21:30:00.000Z

//传递表示年月日时分秒的变量
let :Date = new Date(year,month,day,hours,minutes,seconds,ms);