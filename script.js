// World Gama - Language Support

let language = "en";

const text = {
    en: {
        choose: "Choose your language",
        beginner: "Beginner",
        vip: "VIP Mode",
        invite: "Invite Code",
        login: "Login",
        createID: "Create ID",
        chooseID: "Choose Game ID",
        idInfo: "Your ID must contain 9–12 digits.",
        generate: "Generate ID",
        enter: "Enter",
        help: "Help",
        back: "Back",
        vipTitle: "VIP Code",
        vipInfo: "Enter VIP code to receive math questions instead of word meaning questions.",
        confirm: "Confirm",
        inviteTitle: "Invite Code",
        inviteInfo: "Enter your invite code to receive 1,000,000 coins.",
        receive: "Receive Coins",
        submit: "Submit",
        hint: "Hint (-45 coins)",
        skip: "Skip (-2000 coins)",
        retry: "Retry",
        offline: "Your signal is tired!",
        offlineInfo: "Internet connection is required to play."
    },

    fa: {
        choose: "زبان خود را انتخاب کنید",
        beginner: "تازه کار",
        vip: "مدل VIP",
        invite: "کد دعوت",
        login: "ورود",
        createID: "ساخت ID",
        chooseID: "انتخاب ID بازی",
        idInfo: "ID باید ۹ تا ۱۲ رقم باشد.",
        generate: "ساخت ID",
        enter: "ورود",
        help: "راهنما",
        back: "بازگشت",
        vipTitle: "کد VIP",
        vipInfo: "کد VIP را وارد کنید تا به جای معنی کلمات، سوالات ریاضی دریافت کنید.",
        confirm: "تأیید",
        inviteTitle: "کد دعوت",
        inviteInfo: "کد دعوت را وارد کنید تا ۱٬۰۰۰٬۰۰۰ سکه دریافت کنید.",
        receive: "دریافت سکه",
        submit: "ثبت پاسخ",
        hint: "راهنما (۴۵- سکه)",
        skip: "رد کردن (۲۰۰۰- سکه)",
        retry: "تلاش مجدد",
        offline: "آنتن آن خسته است!",
        offlineInfo: "برای اجرای بازی به اینترنت نیاز است."
    },

    ar: {
        choose: "اختر لغتك",
        beginner: "مبتدئ",
        vip: "وضع VIP",
        invite: "رمز الدعوة",
        login: "تسجيل الدخول",
        createID: "إنشاء ID",
        chooseID: "اختر ID اللعبة",
        idInfo: "يجب أن يحتوي ID على 9–12 رقمًا.",
        generate: "إنشاء ID",
        enter: "دخول",
        help: "مساعدة",
        back: "رجوع",
        vipTitle: "رمز VIP",
        vipInfo: "أدخل رمز VIP للحصول على أسئلة رياضية بدلاً من معاني الكلمات.",
        confirm: "تأكيد",
        inviteTitle: "رمز الدعوة",
        inviteInfo: "أدخل رمز الدعوة للحصول على 1,000,000 عملة.",
        receive: "استلام العملات",
        submit: "إرسال",
        hint: "تلميح (-45)",
        skip: "تخطي (-2000)",
        retry: "حاول مرة أخرى",
        offline: "الإشارة متعبة!",
        offlineInfo: "تحتاج اللعبة إلى الإنترنت."
    }
};


// تغییر زبان
function setLanguage(lang) {
    language = lang;

    document.documentElement.lang = lang;

    // راست‌چین کردن فارسی و عربی
    if (lang === "fa" || lang === "ar") {
        document.documentElement.dir = "rtl";
    } else {
        document.documentElement.dir = "ltr";
    }

    updateLanguage();

    show("mainMenu");
}


// تغییر متن‌های سایت
function updateLanguage() {
    const t = text[language];

    const elements = {
        languageTitle: t.choose,

        beginnerButton: t.beginner,
        vipButton: t.vip,
        inviteButton: t.invite,
        loginButton: t.login,
        createIdButton: t.createID,

        idTitle: t.chooseID,
        idInfo: t.idInfo,
        generateIdButton: t.generate,
        enterIdButton: t.enter,
        helpIdButton: t.help,
        backFromIdButton: t.back,

        vipTitle: t.vipTitle,
        vipInfo: t.vipInfo,
        vipConfirmButton: t.confirm,
        backFromVipButton: t.back,

        inviteTitle: t.inviteTitle,
        inviteInfo: t.inviteInfo,
        inviteButtonConfirm: t.receive,
        backFromInviteButton: t.back,

        submitButton: t.submit,
        hintButton: t.hint,
        skipButton: t.skip,

        offlineTitle: t.offline,
        offlineInfo: t.offlineInfo,
        retryButton: t.retry
    };

    for (const id in elements) {
        const element = document.getElementById(id);

        if (element) {
            element.textContent = elements[id];
        }
    }
}


// نمایش صفحه
function show(id) {
    document.querySelectorAll("section").forEach(function(section) {
        section.style.display = "none";
    });

    const screen = document.getElementById(id);

    if (screen) {
        screen.style.display = "block";
    }
}


// زبان‌ها
document.getElementById("persianButton").onclick = function() {
    setLanguage("fa");
};

document.getElementById("arabicButton").onclick = function() {
    setLanguage("ar");
};

document.getElementById("englishButton").onclick = function() {
    setLanguage("en");
};


// منوی اصلی
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


// بازگشت
document.getElementById("backFromIdButton").onclick = function() {
    show("mainMenu");
};

document.getElementById("backFromVipButton").onclick = function() {
    show("mainMenu");
};

document.getElementById("backFromInviteButton").onclick = function() {
    show("mainMenu");
};


// اینترنت
document.getElementById("retryButton").onclick = function() {
    if (navigator.onLine) {
        show("languageScreen");
    } else {
        alert(text[language].offlineInfo);
    }
};


// شروع سایت
if (navigator.onLine) {
    show("languageScreen");
} else {
    show("offlineScreen");
}
