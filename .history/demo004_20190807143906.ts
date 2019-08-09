//number 入参类型  string返回数据类型
function search(age:number):string{
    return "就是你"+age
}

var age:number = 18
var result:string = search(age)
console.log(result)


//带问号代表可选参数   可以传也可不选
function searchTwo(age:number, stature?:string):string{

    let yy:string = ''
    yy = '找到了'+ age + '岁'
     if(stature!=undefined){
         yy=yy+stature
     }
     return yy
}
var age:number = 18;
var resultTwo:string = searchTwo(age)
console.log(resultTwo)
console.log(resultTwo,'水蛇腰')

//默认值
function searchThree(age:number=18, stature?:string='瓜子脸'):string{

    let yy:string = ''
    yy = '找到了'+ age + '岁'
     if(stature!=undefined){
         yy=yy+stature
     }
     return yy
}
var age:number = 18;
var resultThree:string = searchThree()
var resultFour:string = searchThree(22,'大脚丫')
console.log(resultThree)
console.log(resultFour)