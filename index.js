$(window).load(function () {
    // 確認整個頁面讀取完畢再將這三個div隱藏起來
    $('.icon-white').delay(2000).fadeOut(1000);
    //delay --> 延遲幾秒才fadeOut
    $('#preloading').delay(2000).fadeOut(1000);
})
// LOADING畫面結束
// $('.img-wrap > img').hover(function () {
//     $('.img-wrap img').attr('src', './images/icon 500 o.png')
// }, function () {
//     $('.img-wrap img').attr('src', './images/white icon 字.png').addClass('img-hover')
// })
// NAV換圖結束
$('.icon-svg > svg').mouseenter(function () {
    console.log('hi');
    $('.icon-svg > svg').attr('fill', '#ff7300')
})
$('svg').mouseleave(function () {
    $('.icon-svg > svg').attr('fill', '#fff')
})
// 用SVG終於可以TRANSITION!!!


let lastScroll = 0;

$(window).scroll(function () {
    let scrollNow = $(window).scrollTop();

    console.log('lastScroll:', lastScroll);
    console.log('scrollNow', scrollNow);

    if (scrollNow > lastScroll) {
        $('nav').addClass('hidden')
    }
    else {
        $('nav').removeClass('hidden')
    }

    lastScroll = scrollNow;

})

// NAV結束

// ABOUT動態
// $('.first').offset({})
$(window).scroll(function () {
    // console.log('first offsetTop:', $('.first').offset().top);
    // console.log('first scrollTop:', $('.first').scrollTop());
    if ($(window).scrollTop() >= ($('.first').offset().top - $(window).height() * 2 / 3)) {
        $('.first').css({
            transform: 'translateY(0px)',
            opacity: 1,
        })

    }
    else {
        $('.first').css({
            transform: 'translateY(-100px)',
            opacity: 0,
        })
    }

})
$(window).scroll(function () {
    // console.log('second offsetTop:', $('.second-test > .second').offset().top);
    // console.log('first scrollTop:', $('.second').scrollTop());
    if ($(window).scrollTop() >= ($('.second').offset().top - $(window).height() * 2 / 3)) {
        $('.second').css({
            transform: 'translateY(0px)',
            opacity: 1,
        })

    }
    else {
        $('.second').css({
            transform: 'translateY(100px)',
            opacity: 0,
        })
    }

})
$(window).scroll(function () {
    // console.log('third offsetTop:', $('.third').offset().top);
    // console.log('third scrollTop:', $('.third').scrollTop());
    if ($(window).scrollTop() >= ($('.third').offset().top - $(window).height() * 2 / 3)) {
        $('.third').css({
            transform: 'translateY(0px)',
            opacity: 1,
        })

    }
    else {
        $('.third').css({
            transform: 'translateY(-100px)',
            opacity: 0,
        })
    }

})
// 為什麼字沒有跟著一起動態QQ
// $(window).scroll(function () {
//     console.log('years offsetTop:', $('.years').offset().top);
//     console.log('years scrollTop:', $('.years').scrollTop());
//     if ($(window).scrollTop() >= ($('.years').offset().top - $(window).height() * 2 / 3)) {
//         $('.years').css({
//             transform: 'translateY(0px)',
//             opacity: 1,
//         })

//     }
//     else {
//         $('.years').css({
//             transform: 'translateY(100px)',
//             opacity: 0,
//         })
//     }

// })

// 試著做做看視差捲動
// const daisy = document.querySelectorAll('.icon-test > svg');

// const setDaisyInitXPosition = (daisy) => {
//     const START_WIDTH = 300;
//     const windowWidth = window.innerWidth;
//     const iconLeftPosition = (Math.random() * windowWidth) - START_WIDTH;
//     daisy.style.left = `${daisyLeftPosition}px`;
// };

// const setDaisyMoveSpeed = (daisy) => {
//     const daisyMoveSpeed = -1 - Math.random();
//     daisy.dataset.speed = daisyMoveSpeed;
// };

// daisy.forEach(setDaisyInitXPosition);
// daisy.forEach(setDaisyMoveSpeed);

// window.addEventListener('scroll', () => {
//     const scrollPositionY = window.pageYOffset;
//     // const moon = document.querySelector('.icon-test');
//     const stars = document.querySelectorAll('.icon-test > svg');
//     const parallaxScrollingElements = [...icon-test];

//     parallaxScrollingElements.forEach((element) => {
//         const elementMoveSpeed = Number(element.dataset.speed);
//         element.style.transform = `
//       translateY(${scrollPositionY * elementMoveSpeed}px)
//     `;
//     });
// });

// ABOUT結束

// DESIGN輪播牆
let nowPage = 0;

$('#next').click(function () {
    if (nowPage < 3) {
        nowPage = nowPage + 1;

    }
    else {
        // 其餘比4大的
        nowPage = 0
    }
    console.log('nowPage:', nowPage);

    // $('ul.train').css('transform', `translateX(${moveX}px)`);
    moveX(nowPage);
})

$('#prev').click(function () {
    if (nowPage > 0) {
        nowPage = nowPage - 1;
    }
    // $('ul.train').css('transform', `translateX(${moveX}px)`);
    moveX(nowPage);
})
function moveX(nowPage) {
    console.log($('.d-img-wrap').width());
    // const movement = (nowPage - $('.d-img-wrap').width());
    const movement = (0 - nowPage * $('.d-img-wrap').width());
    $('ul.train').css('transform', `translateX(${movement}px)`);
}
// resize好重要，手機板輪播牆
$(window).resize(function () {
    // const movement = (nowPage - $('.d-img-wrap').width());
    const movement = (0 - nowPage * $('.d-img-wrap').width());
    $('ul.train').css('transform', `translateX(${movement}px)`);
})
// 猶豫假人要不要浮上來
$(window).scroll(function () {
    // console.log('third offsetTop:', $('.third').offset().top);
    // console.log('third scrollTop:', $('.third').scrollTop());
    if ($(window).scrollTop() >= ($('.train').offset().top - $(window).height() * 1 / 4)) {
        $('.bg-clothes-left').css({
            transform: 'translateY(0px)',
            opacity: 1,
        })

    }
    else {
        $('.bg-clothes-left').css({
            transform: 'translateY(100px)',
            opacity: 0,
        })
    }

})
$(window).scroll(function () {
    // console.log('third offsetTop:', $('.third').offset().top);
    // console.log('third scrollTop:', $('.third').scrollTop());
    if ($(window).scrollTop() >= ($('.train').offset().top - $(window).height() * 1 / 4)) {
        $('.bg-clothes-right').css({
            transform: 'translateY(0px)',
            opacity: 1,
        })

    }
    else {
        $('.bg-clothes-right').css({
            transform: 'translateY(-100px)',
            opacity: 0,
        })
    }

})

// DESIGN結束
$(window).scroll(function () {
    // console.log('first offsetTop:', $('.first').offset().top);
    // console.log('first scrollTop:', $('.first').scrollTop());
    if ($(window).scrollTop() >= ($('.store').offset().top - $(window).height() * 1 / 3)) {
        $('.top-btn').css({
            transform: 'translateY(0px)',
            opacity: 1,
        })

    }
    else {
        $('.top-btn').css({
            transform: 'translateY(50px)',
            opacity: 0,
        })
    }

})
