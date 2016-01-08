# 三级联动select菜单

数据生成步骤：

1：省市经销商excel文件如下，另存为cvs

``` excel
province  city  shopname
上海  上海  上海世至有限公司
云南  红河  红河捷有限公司
四川  南充  南充瑞和品信有限公司
北京  北京  北京海至有限公司
湖北  武汉  武汉富放有限公司
上海  上海  上海世至有限公司
广东  广州  广州市永安富放有限公司
.........
```

2：copy cvs数据到在线转换工具 http://shancarter.github.io/mr-data-converter/

3：最终得到的数据格式 (包含在select-menu.js里)

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
