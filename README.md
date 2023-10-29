# google-translate-custom-widget

![](https://raw.githubusercontent.com/get-web/Examples/main/google-translate/google-translate.gif)

# Install:

## Add files

### native js:

```
   <link rel="stylesheet" href="css/google-translate.css">
   <script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>
   <script src="js/google-translate.js"></script>
```

### or jQuery:

```
  <link rel="stylesheet" href="css/google-translate.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
  <script src="js/google-translate.js"></script>
```

## Add html:

```
<div class="language">
   <img src="images/lang/lang__ru.png" alt="ru" data-google-lang="ru" class="language__img">
   <img src="images/lang/lang__uk.png" alt="uk" data-google-lang="uk" class="language__img">
   <img src="images/lang/lang__en.png" alt="en" data-google-lang="en" class="language__img">
   <img src="images/lang/lang__de.png" alt="de" data-google-lang="de" class="language__img">
   <img src="images/lang/lang__fr.png" alt="fr" data-google-lang="fr" class="language__img">
   <img src="images/lang/lang__pt.png" alt="pt" data-google-lang="pt" class="language__img">
   <img src="images/lang/lang__es.png" alt="es" data-google-lang="es" class="language__img">
   <img src="images/lang/lang__it.png" alt="it" data-google-lang="it" class="language__img">
   <img src="images/lang/lang__zh.png" alt="zh" data-google-lang="zh-CN" class="language__img">
   <img src="images/lang/lang__ar.png" alt="ar" data-google-lang="ar" class="language__img">
   <img src="images/lang/lang__nl.png" alt="nl" data-google-lang="nl" class="language__img">
   <img src="images/lang/lang__sv.png" alt="sv" data-google-lang="sv" class="language__img">
</div>
```

## Add new lang:

```
data-google-lang="{CODE}"
```

All available languages and their ISO-639-1 code can be found
[here](https://cloud.google.com/translate/docs/languages).

## Events

`FinishTranslate` - The event is triggered when the site translation is finished

```
document.addEventListener("FinishTranslate", function (e) {
   // some code
});
```

## Example

[Demo Page](http://demo.l2banners.ru/google-translate-custom-widget)

## More

Sometimes there may be some content on your page that you don't want to
translate. You can now add class="notranslate" to any HTML element to prevent
that element from being translated. For example, you may want to do something
like:

`Email us at <span class="notranslate">sales at mydomain dot com</span>`

And if you have an entire page that should not be translated, you can add a meta
tag to the of your page and we won't translate any of the content on that page.

`<meta name="google" value="notranslate" />`

---

Пример необходимо запускать непосредственно на сервере, иначе не будут работать
куки. То есть недостаточно просто скачать все файлы и кликнуть по index.html.
Так же пример не будет работать в песочницах, поскольку они не позволяют
записывать куки, по крайней мере codepen.

[Концепция](https://get-web.site/blog/29-kastomnyj-vidzhet-googletranslate-dlja-sajta.html)

### Поддержать проект:

Данная модификация предоставляется абсолютно бесплатно, поэтому вы можете
отправить **благодарность по реквизитам**:

- https://yoomoney.ru/to/410018011293312

_Любая ваша поддержка это мотивация выкладывать в общий доступ другие наработки
и поддерживать их._
