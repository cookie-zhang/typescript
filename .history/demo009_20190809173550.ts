//引用类型-日期对象
let d:Date = new Date()
console.log(d)//2019-08-09T09:33:43.152Z
//.传递一个整数
let coo:Date = new Date(1000)
let da:Date = new Date(2000)
console.log(coo)  //1970-01-01T00:00:01.000Z
console.log(da) //1970-01-01T00:00:02.000Z
//传递一个字符串
// 如果传递一个表示日期的字符串，就会生成相对应的日期对象。
//字符串的格式常用:yyyy/MM/dd hh:mm:ss，yyyy-MM-dd hh:mm:ss，yyyy-MM-ddThh:mm:ss等,具体可以参看下面的例子。
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
// year 表示年份，4位数字。
// month表示月份，数值是0(1月)~11(12月)之间的整数。
// day 表示日期。数值是1~31之间的整数。
// hours 表示小时，数值是0-23之间的整数。
// minutes 表示分钟数，数值是0~59之间的整数。
// seconds 表示秒数，数值是0~59之间的整数。
// ms 表示毫秒数，数值是0~999之间的整数。
let cook:Date = new Date(year,month,day,hours,minutes,seconds,ms);