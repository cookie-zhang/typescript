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
function searchThree(age:number=18, stature:string='瓜子脸'):string{

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


function searchXiaoJieJie3(...xuqiu:string[]):string{
    
    let  yy:string = '找到了'
    for (let i =0;i<xuqiu.length;i++){
        yy = yy + xuqiu[i]
        if(i<xuqiu.length-1){
            yy=yy+'、'
        }
    }
    yy=yy+'的小姐姐'
    return yy

}

var result:string  =  searchXiaoJieJie3('22岁','大长腿','瓜子脸','水蛇腰')
console.log(result)