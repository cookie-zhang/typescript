"use strict";
//number 入参类型  string返回数据类型
function search(age) {
    return "就是你" + age;
}
var age = 18;
var result = search(age);
console.log(result);
//带问号代表可选参数   可以传也可不选
function searchTwo(age, stature) {
    var yy = '';
    yy = '找到了' + age + '岁';
    if (stature != undefined) {
        yy = yy + stature;
    }
    return yy;
}
var age = 18;
var resultTwo = searchTwo(age);
console.log(resultTwo);
console.log(resultTwo, '水蛇腰');
//默认值
function searchThree(age, stature) {
    if (age === void 0) { age = 18; }
    if (stature === void 0) { stature = '瓜子脸'; }
    var yy = '';
    yy = '找到了' + age + '岁';
    if (stature != undefined) {
        yy = yy + stature;
    }
    return yy;
}
var age = 18;
var resultThree = searchThree();
var resultFour = searchThree(22, '大脚丫');
console.log(resultThree);
console.log(resultFour);
function searchXiaoJieJie3() {
    var xuqiu = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xuqiu[_i] = arguments[_i];
    }
    var yy = '找到了';
    for (var i = 0; i < xuqiu.length; i++) {
        yy = yy + xuqiu[i];
        if (i < xuqiu.length - 1) {
            yy = yy + '、';
        }
    }
    yy = yy + '的小姐姐';
    return yy;
}
var result = searchXiaoJieJie3('22岁', '大长腿', '瓜子脸', '水蛇腰');
console.log(result);
