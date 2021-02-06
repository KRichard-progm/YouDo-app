function newElement() {

    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        document.getElementsByClassName("addBtn").style.display = "block";

    } else
{
    document.getElementById("myUL").appendChild(li);
}
document.getElementById("myInput").value = "";

let span = document.createElement("button");
let txt = document.createTextNode("Delete");
span.className = "close";
span.appendChild(txt);
li.appendChild(span);

for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let item = this.parentElement;
        item.style.display = "none";
    }
}
}

let myYouDoList = document.getElementsByTagName("li");
let i;
for (i = 0; i < myYouDoList.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("");
    span.className = "close";
    span.appendChild(txt);
    myYouDoList[i].appendChild(span);
}


let close = document.getElementsByClassName("close");
let x;
for (x = 0; x < close.length; x++) {
    close[i].onclick = function () {
        const div = this.parentElement;
        div.style.display = "none";
    }
}

function checkChar() {
    let myChar = document.getElementById('myInput');
    let goodColor = "#66cc66";
    let badColor = "#ff6666";

    if (myChar.value.length >= 6) {
        myChar.style.backgroundColor = goodColor;

    } else {
        myChar.style.backgroundColor = badColor;
        document.getElementsByClassName("addBtn").style.display = "block";
    }
}


//The create button is disabled so far the input doesn't pass the validation.


//If we refresh the browser, the list remains.
    function saveAll() {

        const myArrStr = JSON.stringify(myArr);
        localStorage.setItem("myInput", str);

        function getAll() {
            let str = localStorage.getItem("myInput");
            myArrSrt = JSON.parse(str);
            if (!myInput) {
                myInput = [];

            }
        }

        getAll();
    }

    function getExtension() {
        let now = new Date();
        let deadline = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 7));
        let newTask = {
            due: Utilities.formatDate(deadline, "GMT", "yyyy-MM-dd'T'HH:mm:ss'Z'")
        }
    }