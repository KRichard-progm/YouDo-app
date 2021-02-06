var myYoudolist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myYoudolist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("");
    span.className = "close";
    span.appendChild(txt);
    myYoudolist[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
var f;
for (f = 0; f < close.length; f++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("button");
    var txt = document.createTextNode("Delete");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function checkChar() {
    var myChar = document.getElementById('myInput');

    var goodColor = "#66cc66";
    var badColor = "#ff6666";

    if (myChar.value.length > 6) {
        myChar.style.backgroundColor = goodColor;
    } else {
        myChar.style.backgroundColor= badColor;
    }
}