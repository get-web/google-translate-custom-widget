const googleTranslateConfig = {
    lang: "ru",
};

function TranslateInit() {


    let code = TranslateGetCode();
    // Находим флаг с выбранным языком для перевода и добавляем к нему активный класс
    $('[data-google-lang="' + code + '"]').addClass('language__img_active');

    if (code == googleTranslateConfig.lang) {
        // Если язык по умолчанию, совпадает с языком на который переводим
        // То очищаем куки
        TranslateClearCookie();
    }

    // Инициализируем виджет с языком по умолчанию
    new google.translate.TranslateElement({
        pageLanguage: googleTranslateConfig.lang,
    });

    // Вешаем событие  клик на флаги
    $('[data-google-lang]').click(function () {
        TranslateSetCookie($(this).attr("data-google-lang"))
        // Перезагружаем страницу
        window.location.reload();
    });
}

function TranslateGetCode() {
    // Если куки нет, то передаем дефолтный язык
    let lang = ($.cookie('googtrans') != undefined && $.cookie('googtrans') != "null") ? $.cookie('googtrans') : googleTranslateConfig.lang;
    return lang.substr(-2);
}

function TranslateClearCookie() {
    $.cookie('googtrans', null);
    $.cookie("googtrans", null, {
        domain: "." + document.domain,
    });
}

function TranslateSetCookie(code) {
    // Записываем куки /язык_который_переводим/язык_на_который_переводим
    $.cookie('googtrans', "/auto/" + code);
    $.cookie("googtrans", "/auto/" + code, {
        domain: "." + document.domain,
    });
}
