$("#mydropdown").mouseenter(function(){
    $(this).animate({height: "150px"}, 500);

    $(this).mouseleave(function(){
        $(this).animate({height: "24px"}, 500);
    });
});
