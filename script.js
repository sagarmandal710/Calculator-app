var str = "";
var btn = document.querySelectorAll("#grid-container>button");
var res = document.querySelector(".result-box>div");

for (var i=0; i<btn.length; i++) {
    btn[i].addEventListener("click", function() {
        calculate(this.value);        
    })
}

function calculate(key) {
    if (key == "reset") {
        res.textContent = "";
        str = "";
    }
    else if (key == "del") {
        res.textContent = res.textContent.slice(0, -1);
        str = str.slice(0, -1);
    }
    else if (key == "=") {
        res.textContent = eval(str);
    }
    else if (key=="+" || key=="-" || key=="*" || key=="/") {
        var len = str.length-1;
        if (str[len]=="+" || str[len]=="-" || str[len]=="*" || str[len]=="/") {
            res.textContent = res.textContent.slice(0, -1);
            str = str.slice(0, -1);
        }
        str += key;
        res.textContent += key;
    }
    else {
        str += key;
        res.textContent += key;
        console.log(str);
    }
}


var themeBtn = document.querySelector("#header-box input");
themeBtn.addEventListener("change", function() {
    changeTheme(this.value);
});
var theme = {flexBg : {1: "#3b4664", 2: "#e6e6e6", 3: "#17062a"},
    headColor: {1: "#fff", 2: "#35352b", 3: "#fce333"},
    sliderBg : {1: "#242d42", 2: "#d3cdcd", 3: "#1d0936"},  
    sliderThumb : {1: "#d13f30", 2: "#c85401", 3: "#00decf"},
    resultBg : {1: "#181f32", 2: "#fff", 3: "#1e0836"},
    resultColor : {1: "#fff", 2: "#35352b", 3: "#fce333"},
    gridBg : {1: "#232d45", 2:"#d4cdcd", 3: "#1e0837"},
    btnBg : {1: "#e6e1db", 2: "#e5e4e0", 3: "#331b4d"},
    btnColor : {1: "#444551", 2: "#35352b", 3: "#fce333"},
    btnShadow : {1: "0 3px #b9a79c", 2: "0 3px #b0a29a", 3: "0 3px #6c1a84"},
    resetBg : {1: "#647299", 2: "#388186", 3: "#56077c"},
    resetShadow : {1: "0 3px #434f73", 2: "0 3px #1f656a", 3: "0 3px #a819da"},
    equalBg : {1: "#d13f30", 2: "#c85401", 3: "#00decf"},
    equalShadow : {1: "0 3px #9d281a", 2: "0 3px #943c02", 3: "0 3px #5eafbb"},
    equalColor : {1: "#fff", 2: "#fff", 3: "#000"}

}
function changeTheme(key) {
    document.getElementById("flex-container").style.background = theme.flexBg[key];
    document.getElementById("header-box").style.color = theme.headColor[key];
    document.querySelector("#header-box .slider").style.background = theme.sliderBg[key];
    var resBox = document.querySelector(".result-box").style;
    resBox.background = theme.resultBg[key];
    resBox.color = theme.resultColor[key];
    document.getElementById("grid-container").style.background = theme.gridBg[key];
    var butn = document.querySelectorAll("#grid-container .button");
    for (var i=0; i<butn.length; i++) {
        butn[i].style.background = theme.btnBg[key];
        butn[i].style.boxShadow = theme.btnShadow[key];
        butn[i].style.color = theme.btnColor[key];
    }
    var delBtn = document.querySelector("#grid-container .item4").style;
    delBtn.background = theme.resetBg[key];
    delBtn.boxShadow = theme.resetShadow[key];
    var resetBtn = document.querySelector("#grid-container .item17").style;
    resetBtn.background = theme.resetBg[key];
    resetBtn.boxShadow = theme.resetShadow[key];
    var equalBtn = document.querySelector("#grid-container .item18").style;
    equalBtn.background = theme.equalBg[key];
    equalBtn.boxShadow = theme.equalShadow[key];
    equalBtn.color = theme.equalColor[key];

    var style1 = document.querySelector('[data="test1"]');
    style1.innerHTML = ".slider::-webkit-slider-thumb {background: " + theme.sliderThumb[key] + " !important;";
    var style2 = document.querySelector('[data="test2"]');
    style2.innerHTML = ".result-slider::-webkit-scrollbar-thumb {background: " + theme.sliderThumb[key] + " !important;";
}
