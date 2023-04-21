/**
 * Vendors
 */
import $ from 'jquery';
window.$ = $;

// Пример подключения плагина
// import pluginName from 'plugin-name';

/**
 * Modules
 */
// Пример подключения модуля
// import myModule from './modules/my-module-function';
import tabs from './modules/tabs';
import spoiler from './modules/spoiler';
import showText from './modules/showText';
import swiper from './modules/swiper';
import tooltip from './modules/tooltip';
import select from './modules/select';
import validate from './modules/validate';
import mask from './modules/mask';
import modal from './modules/modal';

const app = {
    ready() {
        // Пример вызова импортированнывх функций
        // pluginName();
        tabs();
        spoiler();
        showText();
        swiper();
        tooltip();
        select();
        validate();
        mask();
        modal();

        // myModule();
    },

    load() {

    },

    resize() {

    },

    scroll() {

    },
};



$(() => {
    app.ready();

    $(window)
        .on('load', app.load)
        .on('resize', app.resize)
        .on('scroll', app.scroll);
});
