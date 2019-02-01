const googleTranslateConfig = {
    lang: "ru",
};

function TranslateInit() {

    // Если куки нет, то передаем дефолтный язык
    let lang = ($.cookie('googtrans') != undefined && $.cookie('googtrans') != "null") ? $.cookie('googtrans') : googleTranslateConfig.lang;
    // Находим флаг с выбранным языком и добавляем к нему активный класс
    $('[data-google-lang="' + lang.substr(-2) + '"]').addClass('language__img_active');

    if (lang.substr(-2) == googleTranslateConfig.lang) {
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
        // Записываем куки /язык_который_переводим/язык_на_который_переводим
        $.cookie('googtrans', "/auto/" + $(this).attr("data-google-lang"));
        $.cookie("googtrans", "/auto/" + $(this).attr("data-google-lang"), {
            domain: "." + document.domain,
        });
        // Перезагружаем страницу
        window.location.reload();
    });
}

function TranslateClearCookie() {
    $.cookie('googtrans', null);
    $.cookie("googtrans", null, {
        domain: "." + document.domain,
    });
}


