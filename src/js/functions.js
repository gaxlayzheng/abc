let lazyLoad = (thing,value) => {
    $(window).scroll(() => {
        let offTop = $(this).scrollTop();
        if (offTop > value){
            $(thing).addClass("running");
        }
    });
};






