/*!***************************************************
 * google-translate.js v1.0.3
 * https://Get-Web.Site/
 * author: Vitalii P.
 *****************************************************/

const googleTranslateConfig = {
    /* Original language */
    lang: "ru",
    /* The language we translate into on the first visit*/
    /* Язык, на который переводим при первом посещении */
    langFirstVisit: 'en',
    /* Если скрипт не работает на поддомене, 
    раскомментируйте и
    укажите основной домен в свойстве domain */
    /* domain: "Get-Web.Site" */
};

function TranslateInit() {

    if (googleTranslateConfig.langFirstVisit && !$.cookie('googtrans')) {
        // Если установлен язык перевода для первого посещения и куки не назначены
        TranslateCookieHandler("/auto/" + googleTranslateConfig.langFirstVisit);
    }

    let code = TranslateGetCode();
    // Находим флаг с выбранным языком для перевода и добавляем к нему активный класс
    $('[data-google-lang="' + code + '"]').addClass('language__img_active');

    if (code == googleTranslateConfig.lang) {
        // Если язык по умолчанию, совпадает с языком на который переводим
        // То очищаем куки
        TranslateCookieHandler(null, googleTranslateConfig.domain);
    }

    // Инициализируем виджет с языком по умолчанию
    new google.translate.TranslateElement({
        pageLanguage: googleTranslateConfig.lang,
    });

    // Вешаем событие  клик на флаги
    $('[data-google-lang]').click(function () {
        TranslateCookieHandler("/auto/" + $(this).attr("data-google-lang"), googleTranslateConfig.domain);
        // Перезагружаем страницу
        window.location.reload();
    });
}

function TranslateGetCode() {
    // Если куки нет, то передаем дефолтный язык
    let lang = ($.cookie('googtrans') != undefined && $.cookie('googtrans') != "null") ? $.cookie('googtrans') : googleTranslateConfig.lang;
    return lang.match(/(?!^\/)[^\/]*$/gm)[0];
}

function TranslateCookieHandler(val, domain) {
    // Записываем куки /язык_который_переводим/язык_на_который_переводим
    $.cookie('googtrans', val);
    $.cookie("googtrans", val, {
        domain: "." + document.domain,
    });

    if (domain == "undefined") return;
    // записываем куки для домена, если он назначен в конфиге
    $.cookie("googtrans", val, {
        domain: domain,
    });

    $.cookie("googtrans", val, {
        domain: "." + domain,
    });
}