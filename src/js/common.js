import $ from 'jquery';

// Loadingアニメーション
window.onload = function () {
    setTimeout(() => {
        $('.js-loading').fadeOut();
    }, 1000);
};