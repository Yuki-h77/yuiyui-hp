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


$(function () {
    const targets = $('.u-fade-up');

    $(window).on('scroll', function () {
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();

        targets.each(function () {
            const targetPos = $(this).offset().top;
            // 画面の8割くらいの位置まで来たら発火
            if (scroll > targetPos - windowHeight + 100) {
                $(this).addClass('is-visible');
            }
        });
    });

    // 読み込み時にも一度実行（最初に見えている要素用）
    $(window).trigger('scroll');
});