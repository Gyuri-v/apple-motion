const slide = (function () {
    const contentSlide = document.querySelector('.content-slide')
    const slideWrap = contentSlide.querySelector('.slide-wrap');
    const slideItems = contentSlide.querySelectorAll('.slide-item');

    let slideArrow = null;
    let slideArrowPrev = null;
    let slideArrowNext = null;
    let slideCurrentIndex = 0;
    let slideMoveChk = false;

    const init = function () {
        createArrow();
    }

    const createArrow = function () {
        slideArrow = document.createElement('div');
        slideArrow.classList.add('slide-arrow');

        slideArrowPrev = document.createElement('button');
        slideArrowPrev.classList.add('slide-arrow_prev');
        slideArrowPrev.setAttribute('type', 'button');
        slideArrowPrev.addEventListener('click', onClickPrev);

        slideArrowNext = document.createElement('button');
        slideArrowNext.classList.add('slide-arrow_next');
        slideArrowNext.setAttribute('type', 'button');
        slideArrowNext.addEventListener('click', onClickNext);

        slideArrow.append(slideArrowPrev, slideArrowNext);
        slideWrap.append(slideArrow);
    }

    const onClickNext = function () {
        if ( slideMoveChk ) return;
        if ( slideCurrentIndex === slideItems.length - 1 ) return;
        
        slideMoveChk = true;
        slideCurrentIndex++;
        let slideTranslate = 400;
        
        for (let i = 0; i < slideItems.length; i++) {
            if ( i === slideCurrentIndex - 1 ) {
                slideItems[i].style.transform = `matrix(0.9, 0, 0, 0.9, ${-slideTranslate * (slideCurrentIndex - 1)}, 0)`;
                slideItems[i].style.opacity = 0;
            } else if ( i >= slideCurrentIndex ) {
                slideItems[i].style.transform = `matrix(1, 0, 0, 1, ${-slideTranslate * slideCurrentIndex}, 0)`;
            }
        }

        setTimeout(function () {
            slideMoveChk = false;
        }, 600);
    }

    const onClickPrev = function () {
        if ( slideMoveChk ) return;
        if ( slideCurrentIndex === 0 ) return;
        
        slideMoveChk = true;
        slideCurrentIndex--;
        let slideTranslate = 400;

        for (let i = 0; i < slideItems.length; i++) {
            if ( i === slideCurrentIndex ) {
                slideItems[i].style.transform = `matrix(1, 0, 0, 1, ${-slideTranslate * (slideCurrentIndex)}, 0)`;
                slideItems[i].style.opacity = 1;
            } else if ( i > slideCurrentIndex ) {
                slideItems[i].style.transform = `matrix(1, 0, 0, 1, ${-slideTranslate * (slideCurrentIndex)}, 0)`;
            }
        }

        setTimeout(function () {
            slideMoveChk = false;
        }, 600);
    }

    init();
})();