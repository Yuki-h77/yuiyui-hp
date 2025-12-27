$(function () {
    const $header = $('.l-header');
    const $menuBtn = $('.l-header__menu-btn');

    $menuBtn.on('click', function () {
        const isOpen = $header.hasClass('is-open');

        // クラスの付け替え
        $header.toggleClass('is-open');

        // アクセシビリティ対応（任意）
        $(this).attr('aria-expanded', !isOpen);

        // メニュー開閉時に背面スクロールを防止する場合
        $('body').css('overflow', isOpen ? '' : 'hidden');
    });

    // メニュー内リンククリック時にメニューを閉じる
    $('.l-header__nav-link').on('click', function () {
        $header.removeClass('is-open');
        $('body').css('overflow', '');
    });
});