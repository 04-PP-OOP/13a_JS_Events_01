
/* Tools */
function ausgabe(outputStr) {
    console.log(outputStr);
}

/********  Variablen **********/

/* Status */
let status = true;

/** Btn */
let btn = document.getElementById("trigBtn");

/********  Event-Listener **********/

// Webseite geladen --> auf (Anfangs)-Zustand umschalten
window.addEventListener("load",updateSite)

// Klick auf Btn  --> Zustand umschalten
btn.addEventListener("click", updateSite);

function updateSite() {
    ausgabe(toggleStatus()); // Test
    //toggleStatus()
    updateView();
}

/********  Änderung  Zustand **********/
// Modul: Wechselschalter (TOGGLE) | Test:
// ausgabe(toggleStatus());
function toggleStatus() {
    status = !status;
    return status;
}

/********  Änderung in View-Schicht **********/

// Modul: Aktualisierung Webseite | Test:
// toggleStatus(); updateView();
function updateView() {
    if (status) {
        switchClassName("night");
        switchBtnTxt("day");
    } else {
        switchClassName("day");
        switchBtnTxt("night");
    }
}

// Modul: Umschaltung Klasse | Test:
// switchClassName("day");
// switchClassName("night");
function switchClassName(modeStr) {
    document.body.className = modeStr;
    document.body.children[0].className = modeStr;
    document.body.children[1].className = modeStr;
}

// Modul: Umschaltung BtnTxt | Test:
// switchBtnTxt("day");
// switchBtnTxt("night");
function switchBtnTxt(modeStr) {
    btn.innerHTML = modeStr;
}

