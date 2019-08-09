"use strict";
//面向对象编程-类的声明和使用
var Zhang = /** @class */ (function () {
    function Zhang(name, age) {
        this.name = name;
        this.age = age;
    }
    Zhang.prototype.say = function () {
        console.log('cookie zhang');
    };
    return Zhang;
}());
var zhangcookie = new Zhang('coco', 18);
console.log(zhangcookie);
zhangcookie.say();
