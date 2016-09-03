var titleArray = [
    { "title": "原味茶系列    M  /  L" },
    { "title": "鮮奶茶系列    M  /  L" },
    { "title": "拿鐵系列      M  /  L" },
    { "title": "美味抹茶系列  M  /  L" },
    { "title": "100%鮮果系列  M  /  L" }
];

var menuData0 = [
    { "name": "錫蘭紅茶", "price": 100, "unit": "" },
    { "name": "四季春茶", "price": 70, "unit": "" },
    { "name": "黃金麥茶", "price": 100, "unit": "(一份六支)" },
    { "name": "茉莉綠茶", "price": 25, "unit": "" },
    { "name": "阿里山冰茶", "price": 100, "unit": "(一份六支)" },
    { "name": "凍頂烏龍", "price": 25, "unit": "" }

];

var menuData1 = [
    { "name": "鮮奶茶", "price": 110, "unit": "" },
    { "name": "伯爵鮮奶茶", "price": 70, "unit": "" },
    { "name": "鮮奶綠", "price": 40, "unit": "(一盤)" },
    { "name": "珍珠鮮奶茶", "price": 25, "unit": "" },
    { "name": "布丁鮮奶茶", "price": 40, "unit": "(一盤)" },
    { "name": "焦糖鮮奶茶", "price": 25, "unit": "" }
];

var menuData2 = [
    { "name": "紅茶拿鐵", "price": 160, "unit": "" },
    { "name": "冬瓜拿鐵", "price": 60, "unit": "" },
    { "name": "玄米拿鐵", "price": 200, "unit": "(一罐)" },
    { "name": "焙茶拿鐵", "price": 35, "unit": "" },
    { "name": "香草拿鐵", "price": 35, "unit": "" },
    { "name": "焦糖拿鐵", "price": 35, "unit": "" }
];

var menuData3 = [
    { "name": "抹茶拿鐵", "price": 160, "unit": "" },
    { "name": "京都抹茶", "price": 60, "unit": "" },
    { "name": "抹茶紅豆", "price": 20, "unit": "(一顆)" },
    { "name": "宇治抹茶", "price": 40, "unit": "" },
    { "name": "宙治抹茶", "price": 50, "unit": "" },
    { "name": "抹茶可可", "price": 50, "unit": "" }
];
var menuData4 = [
    { "name": "新鮮水果茶 ", "price": 130, "unit": "" },
    { "name": "柚子鮮茶 ", "price": 130, "unit": "" },
    { "name": "葡萄柚綠 ", "price": 130, "unit": "" },
    { "name": "凍頂檸檬 ", "price": 130, "unit": "" },
    { "name": "百香果綠 ", "price": 130, "unit": "" },
    { "name": "奇異果多多 ", "price": 130, "unit": "" },
];

var menuDataGrop = [menuData0, menuData1, menuData2, menuData3, menuData4];


//id變化用計數物件
var menuDivider = 0;
var menuListView = 0;
//排列list-divider &　listview
function sortDivider(titleArray, menuDataGrop) {
    for (var i = 0; i < titleArray.length; i++) {
        createDivider(titleArray[i].title);
        for (var j = 0; j < menuDataGrop[i].length; j++) {
            createLisView(
                menuDataGrop[i][j].name,
                menuDataGrop[i][j].price,
                menuDataGrop[i][j].unit,
                i,
                j
            );
        }
    }
};
//list-divider欄位產生程式
function createDivider(title) {
    var $li = $("<li>"); //new Control
    $li.attr("data-role", "list-divider"); //Set property
    $li.attr("id", "menu" + menuDivider++); //Set id
    $li.attr("data-theme", "b"); //Set color
    $li.text(title); //Set title word
    $("#searchMenu").append($li);
};

//listview欄位產生程式
function createLisView(menuDataName, menuDataPrice, menuDataUnit, i, j) {
    var $list = $("<li>"); //new Control
    var $a1 = $("<a>"); //new Control
    $a1.text(menuDataName + " " + menuDataUnit);
    var $span = $("<span>"); //new Control
    $span.addClass('ui-li-count'); //set Count Bubbles 
    $span.text(menuDataPrice);
    $a1.append($span);

    var $a2 = $("<a>"); //new Control
    $a2.attr("data-icon", "plus"); //Set property
    var iIndex;
    var jIndex;
    // console.log(i);
    // console.log(j);
    var re0 = /^\d$/;　 // RegExp [0-9]
    if (re0.test(i)) {
        iIndex = ("0" + i)
    } else {
        iIndex = "" + i;
    }
    // console.log(iIndex);
    if (re0.test(j)) {
        jIndex = "0" + j;
    } else {
        jIndex = "" + j;
    }
    // console.log(jIndex);
    $a2.attr("id", "smenu" + iIndex + "_" + jIndex); //Set id record menudata index and order
    $a2.attr("href", "#addPopup"); //Set for Popup
    $a2.attr("data-rel", "popup"); //Set for Popup
    $a2.attr("data-transition", "slide"); //Set for Popup
    $a2.addClass("addOrder"); //Set for check active
    $list.append($a1); //add to parent
    $list.append($a2); //add to parent
    $("#searchMenu").append($list);
    menuListView++;
};

//產生菜單
sortDivider(titleArray, menuDataGrop);