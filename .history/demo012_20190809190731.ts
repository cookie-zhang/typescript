// 面向对象编程-修饰符
/*TypeScript语言和Java还有C#很像（因为我只会这两个面向对象的语言），类中属性的访问可以用访问修饰符来进行限制。访问修饰符分为：public、protected、private。
public:公有修饰符，可以在类内或者类外使用public修饰的属性或者行为，默认修饰符。
protected:受保护的修饰符，可以本类和子类中使用protected修饰的属性和行为。
private : 私有修饰符，只可以在类内使用private修饰的属性和行为。*/

// class San{
//     public sex:string
//     protected name:string
//     private age:number
//     public constructor(sex:string,name:string,age:number){
//         this.sex = sex
//         this.name = name
//         this.age = age
//     }

//     public sayHello(){
//         console.log('hello')
//     }

//     protected sayLove(){
//         console.log('love')
//     }
// }

// let san:San = new San('女', 'zhangsan', 18)

// console.log(san.name)
// console.log(san.sex)
// console.log(san.age)
// san.sayHello()
// san.sayLove()


//只读修饰符
使用readonly修饰符将属性设置为只读，只读属性必须在生命时或者构造函数里被初始化（注意）。
我们声明一个man的抽象类，里边只有一个属性sex，并且是只读。

