// World GAM - Lightweight JS

function show(id) {
    document.querySelectorAll("section").forEach(function(section) {
        section.style.display = "none";
    });

    const page = document.getElementById(id);

    if (page) {
        page.style.display = "block";
    }
}


// ====================
// Language
// ====================

document.getElementById("persianButton").onclick = function() {
    setLanguage("fa");
};

document.getElementById("arabicButton").onclick = function() {
    setLanguage("ar");
};

document.getElementById("englishButton").onclick = function() {
    setLanguage("en");
};

function setLanguage(lang) {

    document.documentElement.lang = lang;

    if (lang === "fa" || lang === "ar") {
        document.documentElement.dir = "rtl";
    } else {
        document.documentElement.dir = "ltr";
    }

    show("mainMenu");
}


// ====================
// Main Menu
// ====================

document.getElementById("beginnerButton").onclick = function() {
    show("gameScreen");
};

document.getElementById("vipButton").onclick = function() {
    show("vipScreen");
};

document.getElementById("inviteButton").onclick = function() {
    show("inviteScreen");
};

document.getElementById("loginButton").onclick = function() {
    show("idScreen");
};

document.getElementById("createIdButton").onclick = function() {
    show("idScreen");
};


// ====================
// Generate ID
// ====================

document.getElementById("generateIdButton").onclick = function() {

    let id = "";

    for (let i = 0; i < 10; i++) {
        id += Math.floor(Math.random() * 10);
    }

    document.getElementById("playerID").value = id;
};


// ====================
// Back
// ====================

document.getElementById("backFromIdButton").onclick = function() {
    show("mainMenu");
};

document.getElementById("backFromVipButton").onclick = function() {
    show("mainMenu");
};

document.getElementById("backFromInviteButton").onclick = function() {
    show("mainMenu");
};


// ====================
// Start
// ====================

// بدون بررسی navigator.onLine
show("languageScreen");
