// 定义一个类
class Vue {
    // 定义构造函数
    // options是一js对象
    // options中有一个data配置项
    constructor(options) {
        // 获取所有属性名
        Object.keys(options.data).forEach((propertyName, index) => {
            // console.log(typeof propertyName, propertyName, index)
            let firstChar = propertyName.charAt(0);
            if (firstChar != '$' && firstChar != '_') {
                Object.defineProperty(this, propertyName, {
                    get: function () {
                        return options.data[propertyName]
                    },
                    set: function (val) {
                        options.data[propertyName] = val
                    }
                })
            }
        })
    }
}