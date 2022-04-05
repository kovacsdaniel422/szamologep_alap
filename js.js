window.addEventListener("load", init);

var bevitel = 0;
var muvjel = "";

function ID(elem) {
    return document.getElementById(elem);
}

function CLASS(elem) {
    return document.getElementsByClassName(elem);
}

function init() {
    szamgen();
    ertekBevitel();

}

function szamgen() {
    var txt = "";
    for (let i = 0; i < 10; i++) {
        txt += `<button id="${i}" >${i}</button>`;

    }
    CLASS("szamok")[0].innerHTML = txt;
}

function ertekBevitel() {
    for (let i = 0; i < 10; i++) {
        ID(i).addEventListener("click", ertekek);
        ID(i).addEventListener("click", ertekek);
    }

}

function ertekek(event) {
    bevitel = event.target.innerHTML;
    CLASS("kijelzo")[0].innerHTML += bevitel;
}

function muvjelBevitel(event) {
    muvjel = event.target.innerHTML;
    ID("osszeadas").addEventListener("click", muvjelek)
    ID("kivonas").addEventListener("click", muvjelek)
    ID("szorzas").addEventListener("click", muvjelek)
    ID("osztas").addEventListener("click", muvjelek)
}

function muvjelek() {
    if (event.target.ID = "osszeadas") {
        CLASS("kijelzo")[0].innerHTML += "+";

    } else {

    }
}

function clear() {
    .clear
}