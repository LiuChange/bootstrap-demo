$(function(){
    $(window).on('resize',function () {
        let clientW=$(window).width();
        let isShowBigImage=clientW>=900;
        let $allItems=$('#lk_carouse1 .carousel-item');
        $allItems.each((index,item) => {
            let src=isShowBigImage?$(item).data('lg-img'):$(item).data('sm-img');
          $(item).css({
             backgroundImage:`url(${src})`
          });
          if (!isShowBigImage){
              let imgEle=`<img src="${src}">`;
              $(item).empty().append(imgEle);
          }else{
              $(item).empty();
          }
        });
    });
    $(window).trigger('resize');



    let startX=0,endX=0;
    let carouselInner=$("#lk_carouse1 .carousel-inner")[0];
    console.log(carouselInner);
    carouselInner .addEventListener('touchstart', (e) => {
        console.log(e.targetTouches);
        startX =e.targetTouches[0].clientX;
    });
    carouselInner .addEventListener('touchmove', (e) => {
        endX =e.targetTouches[0].clientX;
    });
if (endX-startX>0){
    $('#lk_carouse1').carousel('prev');
}else if (endX-startX<0){
    $('#lk_carouse1').carousel('next');

}



});