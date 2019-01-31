const googleTranslateConfig = {
    lang: "ru",
};

function TranslateInit() {
    // Инициализируем виджет с языком по умолчанию
    new google.translate.TranslateElement({
        pageLanguage: googleTranslateConfig.lang,
    });

    // Если куки нет, то передаем дефолтный язык
    let lang = ($.cookie('googtrans') != undefined && $.cookie('googtrans') != "null") ? $.cookie('googtrans') : googleTranslateConfig.lang;
    // Находим флаг с выбранным языком и добавляем к нему активный класс
    $('[data-google-lang="' + lang.substr(-2) + '"]').addClass('language__img_active');


    // Вешаем событие  клик на флаги
    $('[data-google-lang]').click(function () {
        if ($(this).attr("data-google-lang") == googleTranslateConfig.lang) {
            // Если язык по которому кликунули соответствует дефолтному
            // То очищаем куки
            $.cookie('googtrans', null);
            $.cookie("googtrans", null, {
                domain: "." + document.domain,
            });
        } else {
            // Если язык по которому кликунули не соответствует дефолтному
            // то записываем его в куки
            $.cookie('googtrans', "/" + googleTranslateConfig.lang + "/" + $(this).attr("data-google-lang"));
            $.cookie("googtrans", "/" + googleTranslateConfig.lang + "/" + $(this).attr("data-google-lang"), {
                domain: "." + document.domain,
            });
        }
        // Перезагружаем страницу
        window.location.reload();
    });
}


