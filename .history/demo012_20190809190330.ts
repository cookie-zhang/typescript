// 面向对象编程-修饰符
/*TypeScript语言和Java还有C#很像（因为我只会这两个面向对象的语言），类中属性的访问可以用访问修饰符来进行限制。访问修饰符分为：public、protected、private。
public:公有修饰符，可以在类内或者类外使用public修饰的属性或者行为，默认修饰符。
protected:受保护的修饰符，可以本类和子类中使用protected修饰的属性和行为。
private : 私有修饰符，只可以在类内使用private修饰的属性和行为。*/

class San{
    public sex:string
    protected name:string
    private age:number
    public constructor(sex:string,name:string,age:number){
        this.sex = sex
        this.name = name
        this.age = age
    }

    public sayHello(){
        console.log('hello')
    }

    protected sayLove(){
        console.log('love')
    }
}