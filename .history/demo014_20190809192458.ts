//面向对象编程-接口     定义接口

interface Husband{
    sex:string
    interest:string
    maiBaoBao?:Boolean //?代表可选参数
}
let myhusband:Husband ={ sex:'男',interest:'看书、作家务'}
console.log(myhusband.sex)