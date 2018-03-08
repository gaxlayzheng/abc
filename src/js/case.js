{

    $.getJSON("../src/json/data.json", function (response, status){
        if(status == "success") {
            let arr = $(response.all);
            let str = ``;
            arr.each(function (i) {
                str += `
                 <div class="img-1" style="background: url(${arr[i].src}); background-size: 100% 100%">
                <div class="mark">
                    <div>
                        <div>
                            <a href="#">${arr[i].title}</a>
                            <p>${arr[i].time}</p>
                            <span>${arr[i].info}</span>
                        </div>
                    </div>
                </div>
            </div>`;
            });
            $(".content-img").html(str);
            console.log($(".img-1"));
            $(".img-1").each(function (i) {
                $(".img-1").eq(i).hover(function () {
                    $(".mark").eq(i).fadeIn(500);
                }, function () {
                    $(".mark").eq(i).fadeOut(500);
                });
            });
        }
    });
}