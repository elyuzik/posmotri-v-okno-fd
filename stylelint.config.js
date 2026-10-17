module.exports = {
  rules: {
    'color-no-invalid-hex': true,
    'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }],
    'property-no-unknown': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'media-feature-name-no-unknown': true,
    'comment-no-empty': true,
    'no-descending-specificity': true,
    'no-duplicate-selectors': true,
    'no-invalid-position-at-import-rule': true,
    'alpha-value-notation': 'number',
    'color-function-notation': 'modern',
    'color-hex-length': 'short',
    'length-zero-no-unit': true,
    'function-url-quotes': 'never',
    'shorthand-property-no-redundant-values': true,
    'declaration-block-single-line-max-declarations': 1,
    'no-unknown-animations': true,
    'selector-type-case': 'lower',
    'rule-empty-line-before': 'always',
    'at-rule-empty-line-before': 'always',
    'selector-class-pattern': null,
    'font-family-name-quotes': 'always-where-recommended',
  },
};

// rules: {
//   // ===== ЦВЕТ =====
//   'color-no-invalid-hex': true,                // запрет невалидных hex-цветов (#fff, #ffffff, #ffffffff)
//   'color-hex-length': 'short',                 // короткая запись hex: #fff вместо #ffffff
//   'color-function-notation': 'modern',         // современный синтаксис: rgb(0 0 0 / 0.5)
//   'alpha-value-notation': 'number',            // альфа-канал числом: 0.5 вместо 50%

//   // ===== ВАЛИДНОСТЬ / ОШИБКИ =====
//   'property-no-unknown': true,                 // запрет неизвестных CSS-свойств (опечатки)
//   'media-feature-name-no-unknown': true,       // запрет неизвестных media-функций
//   'no-unknown-animations': true,               // запрет анимаций без @keyframes
//   'no-invalid-position-at-import-rule': true,  // @import только в начале файла

//   // ===== ДУБЛИКАТЫ / ПЕРЕОПРЕДЕЛЕНИЯ =====
//   'declaration-block-no-duplicate-properties': true,          // запрет дублей свойств в блоке
//   'declaration-block-no-shorthand-property-overrides': true,  // запрет shorthand, перекрывающего longhand
//   'no-duplicate-selectors': true,                             // запрет дублирующихся селекторов
//   'no-descending-specificity': true,                          // запрет падения специфичности

//   // ===== СТИЛЬ / ФОРМАТИРОВАНИЕ =====
//   'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }], // ключевые слова в нижнем регистре (кроме SVG camelCase)
//   'selector-type-case': 'lower',               // селекторы тегов в нижнем регистре: div, не DIV
//   'length-zero-no-unit': true,                 // без единиц у нуля: 0, не 0px
//   'function-url-quotes': 'never',              // без кавычек в url(): url(image.png)
//   'import-notation': 'url',                    // @import url(foo.css), не @import 'foo.css' - спорный его нет в списке правил
//   'shorthand-property-no-redundant-values': true, // без избыточных значений: margin: 10px 10px -> margin: 10px
//   'font-family-name-quotes': 'always-where-recommended', // кавычки только когда нужны

//   // ===== СТРУКТУРА / ЧИТАЕМОСТЬ =====
//   'comment-no-empty': true,                    // запрет пустых комментариев /* */
//   'rule-empty-line-before': 'always',          // пустая строка перед правилом
//   'at-rule-empty-line-before': 'always',       // пустая строка перед @-правилом
//   'declaration-block-single-line-max-declarations': 1, // максимум 1 объявление в однострочном блоке

//   // ===== ОГРАНИЧЕНИЯ / ОТКЛЮЧЕНО =====
//   'declaration-no-important': true,            // запрет !important (строго!)
//   'selector-class-pattern': null,              // шаблон имён классов отключён (БЭМ и т.п.)
// }
