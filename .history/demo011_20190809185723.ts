//面向对象编程-类的声明和使用

class Zhang{
    name:string
    age:number
    constructor(name,age){
        this.name = name
        this.age = age
    }
    say(){
        console.log('cookie zhang')
    }
}

let zhangcookie:zhang = new zhang('coco',18)
