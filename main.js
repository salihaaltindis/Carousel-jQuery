 //hazırlanan carousel objesini aktif hale getirmemiz lazım
 
 $(document).ready(function(){
     
    $(document).on('click','img',function(){
        $("#image").attr("src",$(this).attr("src"));
    });

    $.ajax({
        url: "http://localhost:3000/getPicture",
        type: "get",
        success: function(data){
            $.each(data, function(key,value){
              
                $("#car").append('<a class="carousel-item" ><img src='+value.pictures+'></a>');
            });

            //istek yapınca carousel i aktif hale getir demek bu dısarda taımlamıs olsaydık calısmazdı
            $('.carousel').carousel({
                //shift ile yana kayınca resimler arasında ki bosluk miktarı
                shift:50,
                //numvisible 3 deseydim 3 tane foto gozukurdu carousel de
                numVisible:5,
                /*onCycleTo:function(slide){
                    //console.dir(slide);
                    $("#image").attr("src",slide.firstElementChild.src);
                }*/

            });
        }
    }); 


/*
    //sayfadaki tüm img taglarıne basınca
  $("img").click(function(){
      console.log($(this).attr("src"));
      console.log($(this).attr("id"));


      $("#image").attr("src",$(this).attr("src"));
  });


*/









});