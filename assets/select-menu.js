var dealersArr = [
    {"province":"北京","city":"北京","shopname":"北京百旺瑞公司"},
    {"province":"北京","city":"北京","shopname":"北京华北公司"},
    {"province":"北京","city":"北京","shopname":"北京华北公司"},
    {"province":"北京","city":"北京","shopname":"北京中诚海华公司"},
    {"province":"北京","city":"北京","shopname":"北京辰欧雅公司"},
    {"province":"甘肃","city":"兰州","shopname":"甘肃福康公司"},
    {"province":"河北","city":"石家庄","shopname":"石家庄冀东东公司"},
    {"province":"河北","city":"唐山","shopname":"唐山庞大兴公司"},
    {"province":"黑龙江","city":"哈尔滨","shopname":"黑龙江尊荣富公司"},
    {"province":"吉林","city":"长春","shopname":"吉林盛荣公司"},
    {"province":"辽宁","city":"大连","shopname":"尊荣亿方公司"},
    {"province":"辽宁","city":"大连","shopname":"尊荣亿方中山路分公司"},
    {"province":"辽宁","city":"沈阳","shopname":"辽宁尊荣公司"},
    {"province":"内蒙古","city":"包头","shopname":"包头庞大兴公司"},
    {"province":"内蒙古","city":"呼和浩特","shopname":"呼和浩特庞大兴公司"},
    {"province":"山东","city":"济南","shopname":"山东富放公司"},
    {"province":"山东","city":"青岛","shopname":"青岛富放公司"},
    {"province":"山东","city":"烟台","shopname":"烟台富放公司"},
    {"province":"山西","city":"太原","shopname":"太原富放新华夏连锁公司"},
    {"province":"陕西","city":"西安","shopname":"陕西佳放公司"},
    {"province":"天津","city":"天津","shopname":"天津公司"},
    {"province":"新疆","city":"乌鲁木齐","shopname":"新疆金涛公司"},
    {"province":"安徽","city":"合肥","shopname":"合肥捷公司"},
    {"province":"河南","city":"郑州","shopname":"河南省锦堂盛公司"},
    {"province":"湖北","city":"武汉","shopname":"武汉富放公司"},
    {"province":"江苏","city":"常州","shopname":"常州富放公司"},
    {"province":"江苏","city":"南通","shopname":"南通东公司"},
    {"province":"江苏","city":"苏州","shopname":"苏州世至贸公司"},
    {"province":"江苏","city":"苏州","shopname":"通孚祥公司"},
    {"province":"江苏","city":"无锡","shopname":"无锡东方吉羊公司"},
    {"province":"江苏","city":"扬州","shopname":"扬州富放公司"},
    {"province":"江西","city":"南昌","shopname":"江西绿地名公司"},
    {"province":"上海","city":"上海","shopname":"上海世至公司"},
    {"province":"上海","city":"上海","shopname":"上海世至公司"},
    {"province":"上海","city":"上海","shopname":"上海通孚祥公司"},
    {"province":"上海","city":"上海","shopname":"上海永达东公司"},
    {"province":"浙江","city":"杭州","shopname":"杭州世至贸公司 "},
    {"province":"浙江","city":"杭州","shopname":"浙江元通元瑞公司"},
    {"province":"浙江","city":"嘉兴","shopname":"嘉兴元通元瑞公司"},
    {"province":"浙江","city":"宁波","shopname":"宁波元通元瑞公司"},
    {"province":"浙江","city":"绍兴","shopname":"绍兴和诚海昌公司"},
    {"province":"浙江","city":"台州","shopname":"台州凯和公司"},
    {"province":"浙江","city":"温州","shopname":"温州东昌实业公司"},
    {"province":"福建","city":"泉州","shopname":"泉州鸿海公司"},
    {"province":"广东","city":"东莞","shopname":"东莞公司"},
    {"province":"广东","city":"佛山","shopname":"佛山富放公司"},
    {"province":"广东","city":"佛山","shopname":"佛山富放公司"},
    {"province":"广东","city":"广州","shopname":"广州永安富放公司"},
    {"province":"广东","city":"揭阳","shopname":"揭阳恒丰公司"},
    {"province":"广东","city":"汕头","shopname":"汕头恒康公司"},
    {"province":"广东","city":"深圳","shopname":"深圳公司"},
    {"province":"广东","city":"深圳","shopname":"深圳华公司"},
    {"province":"广东","city":"中山","shopname":"中山公司"},
    {"province":"广东","city":"珠海","shopname":"珠海公司"},
    {"province":"广西","city":"南宁","shopname":"广西弘瑞公司"},
    {"province":"贵州","city":"贵阳","shopname":"贵州天鼎公司"},
    {"province":"海南","city":"海口","shopname":"海南天昌达公司"},
    {"province":"湖南","city":"长沙","shopname":"湖南公司"},
    {"province":"四川","city":"成都","shopname":"四川三和公司"},
    {"province":"四川","city":"成都","shopname":"四川通孚祥公司"},
    {"province":"云南","city":"昆明","shopname":"云南富放公司"},
    {"province":"重庆","city":"重庆","shopname":"重庆西南富放公司"},
    {"province":"山东","city":"潍坊","shopname":"潍坊诺德公司"},
    {"province":"重庆","city":"重庆","shopname":"重庆龙华华公司"},
    {"province":"北京","city":"北京","shopname":"北京海至公司"},
    {"province":"上海","city":"上海","shopname":"上海通孚祥公司"},
    {"province":"山西","city":"太原","shopname":"太原富放新华夏公司"},
    {"province":"河北","city":"保定","shopname":"保定庞大兴公司"},
    {"province":"江苏","city":"南京","shopname":"江苏世贸泰信东盛公司"},
    {"province":"辽宁","city":"鞍山","shopname":"鞍山尊荣富公司"},
    {"province":"山东","city":"济南","shopname":"山东新富放公司"},
    {"province":"北京","city":"北京","shopname":"北京中关公司"},
    {"province":"陕西","city":"榆林","shopname":"陕西佳放金鼎公司"},
    {"province":"云南","city":"昆明","shopname":"云南华公司"},
    {"province":"北京","city":"北京","shopname":"北京燕放公司"},
    {"province":"广东","city":"东莞","shopname":"东莞世公司"},
    {"province":"山东","city":"济宁","shopname":"济宁恒昌公司 "},
    {"province":"山东","city":"临沂","shopname":"临沂富放公司"},
    {"province":"广东","city":"佛山","shopname":"佛山顺德区世维公司"},
    {"province":"广东","city":"广州","shopname":"广州世祥公司"},
    {"province":"江苏","city":"无锡","shopname":"无锡富绅公司"},
    {"province":"陕西","city":"西安","shopname":"陕西佳骏公司"},
    {"province":"山东","city":"淄博","shopname":"淄博奥德达公司"},
    {"province":"山东","city":"青岛","shopname":"青岛富融公司"},
    {"province":"山东","city":"泰安","shopname":"泰安富放公司"},
    {"province":"山东","city":"东营","shopname":"东营富放公司"},
    {"province":"河北","city":"邯郸","shopname":"邯郸庞大兴公司"},
    {"province":"四川","city":"乐山","shopname":"乐山通孚祥公司"},
    {"province":"黑龙江","city":"大庆","shopname":"大庆尊荣公司"},
    {"province":"宁夏","city":"银川","shopname":"宁夏佳丰公司"},
    {"province":"上海","city":"上海","shopname":"上海永达嘉公司"},
    {"province":"浙江","city":"杭州","shopname":"浙江万友公司"},
    {"province":"内蒙古","city":"赤峰","shopname":"赤峰兴公司"},
    {"province":"浙江","city":"杭州","shopname":"杭州中公司"},
    {"province":"辽宁","city":"沈阳","shopname":"沈阳尊荣富公司"},
    {"province":"北京","city":"北京","shopname":"北京元至公司"},
    {"province":"天津","city":"天津","shopname":"天津通孚祥公司"},
    {"province":"青海","city":"西宁","shopname":"青海赛亚金孚公司"},
    {"province":"河南","city":"洛阳","shopname":"洛阳恒信瑞公司"},
    {"province":"北京","city":"北京","shopname":"北京海至西三环分公司"},
    {"province":"山西","city":"大同","shopname":"大同雁至公司"},
    {"province":"广西","city":"桂林","shopname":"广西弘瑞桂林分公司"},
    {"province":"甘肃","city":"兰州","shopname":"兰州庞大兴公司"},
    {"province":"湖北","city":"武汉","shopname":"武汉富融公司"},
    {"province":"四川","city":"成都","shopname":"四川长征超越公司"},
    {"province":"河南","city":"郑州","shopname":"郑州鼎公司"},
    {"province":"浙江","city":"湖州","shopname":"湖州瑞杰公司"},
    {"province":"江苏","city":"无锡","shopname":"江阴东方邦公司"},
    {"province":"江苏","city":"徐州","shopname":"徐州世贸泰信公司"},
    {"province":"上海","city":"上海","shopname":"上海永达申杰公司"},
    {"province":"广东","city":"广州","shopname":"广东公司"},
    {"province":"福建","city":"厦门","shopname":"厦门新成功瑞公司 "},
    {"province":"吉林","city":"长春","shopname":"长春维信公司"},
    {"province":"安徽","city":"合肥","shopname":"合肥瑞杰公司"},
    {"province":"江苏","city":"泰州","shopname":"泰州富放公司"},
    {"province":"福建","city":"厦门","shopname":"厦门中升茂公司"},
    {"province":"江苏","city":"无锡","shopname":"宜兴东方邦公司"},
    {"province":"广西","city":"柳州","shopname":"柳州弘耀公司"},
    {"province":"云南","city":"昆明","shopname":"昆明庞润荣公司"},
    {"province":"福建","city":"福州","shopname":"福建吉诺富放公司"},
    {"province":"福建","city":"泉州","shopname":"泉州中升茂公司"},
    {"province":"黑龙江","city":"哈尔滨","shopname":"哈尔滨尊荣亿方公司"},
    {"province":"江西","city":"赣州","shopname":"赣州绿地祥公司"},
    {"province":"湖北","city":"武汉","shopname":"武汉恒信瑞公司"},
    {"province":"江苏","city":"镇江","shopname":"镇江世贸泰信公司"},
    {"province":"陕西","city":"西安","shopname":"西安天润公司"},
    {"province":"河南","city":"平顶山","shopname":"平顶山丰海实业公司"},
    {"province":"辽宁","city":"大连","shopname":"大连尊荣公司"},
    {"province":"福建","city":"福州","shopname":"福建吉诺富放公司"},
    {"province":"辽宁","city":"锦州","shopname":"锦州尊荣公司"},
    {"province":"北京","city":"北京","shopname":"北京辰雅公司"},
    {"province":"广东","city":"深圳","shopname":"深圳德顺行公司"},
    {"province":"福建","city":"龙岩","shopname":"龙岩英瑞福公司"},
    {"province":"湖南","city":"长沙","shopname":"长沙建公司"},
    {"province":"贵州","city":"贵阳","shopname":"贵阳中公司 "},
    {"province":"河南","city":"安阳","shopname":"安阳东安公司"},
    {"province":"山东","city":"威海","shopname":"威海富放公司"},
    {"province":"江苏","city":"盐城","shopname":"盐城东昌公司"},
    {"province":"安徽","city":"阜阳","shopname":"阜阳瑞杰放骏公司"},
    {"province":"四川","city":"绵阳","shopname":"绵阳通孚祥公司"},
    {"province":"福建","city":"三明","shopname":"三明吉诺富放公司"},
    {"province":"河南","city":"商丘","shopname":"商丘商公司"},
    {"province":"河北","city":"保定","shopname":"保定轩宇骐骥公司"},
    {"province":"江西","city":"九江","shopname":"九江福公司"},
    {"province":"上海","city":"上海","shopname":"上海伟途公司"},
    {"province":"江苏","city":"苏州","shopname":"苏州东昌新放公司"},
    {"province":"浙江","city":"宁波","shopname":"宁波丰颐公司"},
    {"province":"上海","city":"上海","shopname":"上海世至公司"},
    {"province":"安徽","city":"芜湖","shopname":"芜湖瑞杰放骏公司"},
    {"province":"河北","city":"唐山","shopname":"唐山凯商贸公司"},
    {"province":"山东","city":"滨州","shopname":"滨州东泰公司"},
    {"province":"江苏","city":"常熟","shopname":"通孚祥（常熟）公司"},
    {"province":"江西","city":"南昌","shopname":"江西东公司"},
    {"province":"江西","city":"上饶","shopname":"上饶名一公司"},
    {"province":"内蒙古","city":"呼和浩特","shopname":"呼和浩特辰欧雅公司"},
    {"province":"山东","city":"德州","shopname":"德州瑞商贸公司"},
    {"province":"河北","city":"邢台","shopname":"邢台银龙公司"},
    {"province":"云南","city":"红河","shopname":"红河捷公司"},
    {"province":"福建","city":"漳州","shopname":"漳州新成功公司"},
    {"province":"湖南","city":"株洲","shopname":"株洲德熙行公司"},
    {"province":"四川","city":"南充","shopname":"南充瑞和品信公司"},
    {"province":"湖北","city":"襄阳","shopname":"襄阳建银瑞公司"},
    {"province":"广东","city":"深圳","shopname":"深圳鼎公司"},
    {"province":"湖北","city":"武汉","shopname":"武汉建银富瑞公司"},
    {"province":"重庆","city":"重庆","shopname":"重庆万友都成公司"},
    {"province":"安徽","city":"合肥","shopname":"合肥恒信德龙瑞公司"},
    {"province":"广西","city":"桂林","shopname":"桂林弘公司"},
    {"province":"浙江","city":"宁波","shopname":"宁波龙公司"},
    {"province":"河南","city":"南阳","shopname":"南阳宛公司"},
    {"province":"陕西","city":"咸阳","shopname":"咸阳新丰泰瑞嘉公司"},
    {"province":"福建","city":"莆田","shopname":"莆田吉诺富放公司"},
    {"province":"福建","city":"福州","shopname":"福州鼎公司"},
    {"province":"广东","city":"广州","shopname":"广东广物君公司"},
    {"province":"吉林","city":"吉林","shopname":"吉林维信公司"},
    {"province":"浙江","city":"金华","shopname":"金华中公司"},
    {"province":"陕西","city":"鸡","shopname":"鸡公司"},
    {"province":"陕西","city":"延安","shopname":"延安广汇鑫公司"},
    {"province":"山东","city":"济南","shopname":"山东京泰公司"},
    {"province":"浙江","city":"义乌","shopname":"义乌金公司"},
    {"province":"四川","city":"成都","shopname":"四川申蓉汇亚公司"},
    {"province":"广东","city":"深圳","shopname":"深圳德顺行公司"},
    {"province":"河南","city":"新乡","shopname":"新乡东安达公司"},
    {"province":"重庆","city":"重庆","shopname":"万友投资公司重庆南坪分公司"},
    {"province":"北京","city":"北京","shopname":"北京正通鼎公司"},
    {"province":"浙江","city":"温州","shopname":"温州荣公司"},
    {"province":"江苏","city":"苏州","shopname":"通孚祥公司昆山分公司"},
    {"province":"河南","city":"郑州","shopname":"郑州中公司"},
    {"province":"河北","city":"沧州","shopname":"沧州德联汇源公司"},
    {"province":"河北","city":"石家庄","shopname":"河北瑞商贸公司"},
    {"province":"四川","city":"成都","shopname":"成都祥公司"},
    {"province":"江苏","city":"南京","shopname":"南京世贸泰信公司"},
    {"province":"山西","city":"临汾","shopname":"临汾海至公司"},
    {"province":"浙江","city":"舟山","shopname":"舟山永杰公司"},
    {"province":"山西","city":"运城","shopname":"运城海至公司"},
    {"province":"河南","city":"郑州","shopname":"郑州东公司"},
    {"province":"重庆","city":"重庆","shopname":"重庆高新璟公司"},
    {"province":"陕西","city":"西安","shopname":"陕西天一汇通公司"},
    {"province":"江苏","city":"南京","shopname":"江苏天泓凯润公司"},
    {"province":"广东","city":"江门","shopname":"江门元柏通公司"},
    {"province":"河北","city":"保定","shopname":"保定庞大兴公司"},
    {"province":"上海","city":"上海","shopname":"上海骏吉公司"},
    {"province":"北京","city":"北京","shopname":"北京中关公司"},
    {"province":"湖北","city":"武汉","shopname":"武汉富放公司"},
    {"province":"广东","city":"汕头","shopname":"汕头恒康公司"},
    {"province":"上海","city":"上海","shopname":"上海路捷公司"},
    {"province":"北京","city":"北京","shopname":"北京燕放公司"},
    {"province":"内蒙古","city":"鄂尔多斯","shopname":"鄂尔多斯庞大兴公司"},
    {"province":"北京","city":"北京","shopname":"北京辰欧雅公司金融街店"},
    {"province":"江苏","city":"南京","shopname":"江苏世贸泰信公司"},
    {"province":"浙江","city":"温州","shopname":"温州东昌实业公司"},
    {"province":"浙江","city":"绍兴","shopname":"绍兴和诚海昌公司柯桥分公司"},
    {"province":"浙江","city":"杭州","shopname":"浙江万友公司"},
    {"province":"吉林","city":"长春","shopname":"长春维信公司"},
    {"province":"广东","city":"广州","shopname":"广东公司"},
    {"province":"福建","city":"福州","shopname":"福建公司"},
    {"province":"辽宁","city":"大连","shopname":"大连尊荣公司"},
    {"province":"浙江","city":"台州","shopname":"台州元瑞公司"},
    {"province":"福建","city":"龙岩","shopname":"龙岩英瑞福公司"},
    {"province":"辽宁","city":"大连","shopname":"尊荣亿方公司"},
    {"province":"广东","city":"深圳","shopname":"深圳机电公司"},
    {"province":"浙江","city":"慈溪","shopname":"宁波元通元瑞公司"},
    {"province":"浙江","city":"杭州","shopname":"杭州元瑞公司"},
    {"province":"内蒙古","city":"乌海","shopname":"乌海庞小兴公司"},
    {"province":"山西","city":"临汾","shopname":"临汾富放元通公司"},
    {"province":"浙江","city":"宁波","shopname":"宁波宁兴丰颐公司"},
    {"province":"广东","city":"江门","shopname":"江门富放公司"},
    {"province":"四川","city":"成都","shopname":"四川通孚祥公司"},
    {"province":"上海","city":"上海","shopname":"上海世至公司"}
];

var provinceSelect = $('#province'),
    citySelect = $('#city'),
    dealerSelect = $('#selectdealer');
var provinceArr = [],
    cityArr = [],
    dealerArr = [];

//数组删除重复元素
function unique5(array){
  var r = [];
  for(var i = 0, l = array.length; i < l; i++) {
    for(var j = i + 1; j < l; j++)
      if (array[i] === array[j]) j = ++i;
    r.push(array[i]);
  }
  return r;
}

//得到省
for (var i = dealersArr.length - 1; i >= 0; i--) {
        provinceArr.push(dealersArr[i].province);
};
var provinceFinal = unique5(provinceArr);

for (var i = provinceFinal.length - 1; i >= 0; i--) {
        provinceSelect.append('<option>'+provinceFinal[i]+'</option>')
};

//省切换
provinceSelect.on('change', function(){
    var $this = $(this);
    var pVal = $this.val();
    cityArr = [];
    dealerArr = [];
    citySelect.empty().append('<option selected="selected" disabled="disabled" value="">请选择市</option>');
    dealerSelect.empty().append('<option selected="selected" disabled="disabled" value="">请选择经销商</option>');

    //得到市
    for (var i = dealersArr.length - 1; i >= 0; i--) {
        if (dealersArr[i].province == pVal){
            cityArr.push(dealersArr[i].city);
        }
    };
    var cityFinal = unique5(cityArr);
    for (var i = cityFinal.length - 1; i >= 0; i--) {
        citySelect.append('<option>'+cityFinal[i]+'</option>');
    };
})

//市切换
citySelect.on('change', function(){
    var $this = $(this);
    var cVal = $this.val();
    dealerArr = [];
    dealerSelect.empty().append('<option selected="selected" disabled="disabled" value="">--请选择经销商--</option>');

    //得到经销商
    for (var i = dealersArr.length - 1; i >= 0; i--) {
        if (dealersArr[i].city == cVal){
            dealerArr.push(dealersArr[i].shopname);
        }
    };
    for (var i = dealerArr.length - 1; i >= 0; i--) {
        dealerSelect.append('<option>'+dealerArr[i]+'</option>')
    };
})

