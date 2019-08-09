//面向对象编程-类的声明和使用

class Zhang{
    name:string
    age:number
    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }
    say(){
        console.log('cookie zhang')
    }
}

let zhangcookie:Zhang = new Zhang('coco',18)
console.log(zhangcookie)
zhang