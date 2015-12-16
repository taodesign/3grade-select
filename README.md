# 一个三级联动select菜单

使用这样的元数据生成：
```javascript
var dealersArr = [
    {"province":"北京","city":"北京","shopname":"北京百旺沃瑞公司"},
    {"province":"甘肃","city":"兰州","shopname":"甘肃福康公司"},
    {"province":"河北","city":"石家庄","shopname":"石家庄冀东东沃公司"},
    {"province":"河北","city":"唐山","shopname":"唐山庞大兴沃公司"},
    {"province":"黑龙江","city":"哈尔滨","shopname":"黑龙江尊荣富沃公司"},
    {"province":"吉林","city":"长春","shopname":"吉林盛荣公司"},
    {"province":"辽宁","city":"大连","shopname":"尊荣亿方公司"},
    {"province":"辽宁","city":"大连","shopname":"尊荣亿方中山路分公司"},
    .........
]
```
*数据转换可以使用这个工具 http://shancarter.github.io/mr-data-converter/

例如：省市经销商excel文件另存为cvs，然后用上面这个工具可生成元数据
