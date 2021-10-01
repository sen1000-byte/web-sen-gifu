$(function(){

    //画像の上下判定用の変数(-1:下 1:上)
    var flag = -1;

    $('#subImg img').on('click',function(){

        //mainに切り替えるimgのsrc取得
        img = $(this).attr('src');

        //currentクラス付け替え
        $('#subImg li').removeClass('current');
        $(this).parent().addClass('current');

        // 文字の変更
        if (img== './images/food_ba7kafe.JPG'){
            $('#mainImg p').text("ba7 カフェ");
        }else if(img== './images/food_dip_cafe.jpg'){
            $('#mainImg p').text("Dip Cafe");
        }else if(img== './images/food_gifutanmen.jpg'){
            $('#mainImg p').text("岐阜タンメン");
        }else{
            $('#mainImg p').text("Hygge Coffee");
        }

        // firstImg→secondImgの時：flag==-1 firstImg→secondImgの時：flag==1 
        if(flag==-1){
            $('#mainImg .firstImg').fadeOut(400);
           $('#mainImg .secondImg').attr('src', img);
            flag=1;
            // $('#mainImg .secondImg').css('z-index', flag);
        }else{
            $('#mainImg .firstImg').attr('src', img);
            $('#mainImg .firstImg').fadeIn(400);
            flag=-1;
        }
       
    });

    // 自動再生させる
    setInterval(function(){
        var nowLi = document.getElementsByClassName('current');
        var nextLi = nowLi[0].nextElementSibling;

        // 最後まで来たら最初に戻す
        if(nextLi==null){
            nextLi = document.getElementById('subImg').firstElementChild;
        }

        $('#subImg li').removeClass('current');
        $(nextLi).addClass('current');
        var nextImg = $('.current').find('img').attr('src');

         // 文字の変更
        if (nextImg== './images/food_ba7kafe.JPG'){
            $('#mainImg p').text("ba7 カフェ");
        }else if(nextImg== './images/food_dip_cafe.jpg'){
            $('#mainImg p').text("Dip Cafe");
        }else if(nextImg== './images/food_gifutanmen.jpg'){
            $('#mainImg p').text("岐阜タンメン");
        }else{
            $('#mainImg p').text("Hygge Coffee");
        }

        // firstImg→secondImgの時：flag==-1 firstImg→secondImgの時：flag==1 
        if(flag==-1){
            $('#mainImg .firstImg').fadeOut(400);
           $('#mainImg .secondImg').attr('src', nextImg);
            flag=1;
        }else{
            $('#mainImg .firstImg').attr('src', nextImg);
            $('#mainImg .firstImg').fadeIn(400);
            flag=-1;
        }
    },3500);
});

