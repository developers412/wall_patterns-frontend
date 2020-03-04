








$(document).ready(function () {
    // TestOBjectsData();





    // var rowsCount = 5;
    var i = 1;
    for(i = 1; i < 113; i++){
        $('#tileOneList').append(`<div class="col-sm-4 inner-img" data-toggle="tooltip" data-placement="right" title="${i}">
                    <img id="t1${i}" class="img-responsive t1" onClick="chooseCurrent('t1','${i}')" width="100" src ="images/Masters/SQ/${i}.jpg" alt ="${i}" />
                                    </div >`);
    }

    for(i = 1; i < 113; i++){
        $('#tileTwoList').append(`<div class="col-sm-4 inner-img" data-toggle="tooltip" data-placement="right" title="${i}">
                    <img id="t2${i}" class="img-responsive t2" onClick="chooseCurrent('t2','${i}')" width="100" src ="images/Masters/SQ/${i}.jpg" alt ="${i}" />
                                    </div >`);
    }


    $('#tileOneList').children(":first").children(":first").addClass("active");
    $('#tileTwoList').children(":first").children(":first").addClass("active");
    t1 = $('#tileOneList').children(":first").children(":first").attr('src').split('/').slice(-1)[0];
    t2 = $('#tileTwoList').children(":first").children(":first").attr('src').split('/').slice(-1)[0];
    // t2 = "6";
    // console.log(el);
    // $('#getOptions')


    $('.dropdown li > a').click(function(e){
        console.log(this.id);
        style = this.id;
    });





});

var t1,t2,style,width,height;

// function getVariations(){

//     console.log(t1);
//     console.log(t2);
// }

function chooseCurrent(tile, i){
    $("." + tile).each(function() {
        $(this).removeClass("active");
    });
    $('#' + tile +i).addClass("active");
    if(tile == 't1'){
        t1 = $('#' + tile +i).attr('src');
        t1 = t1.split('/').slice(-1)[0];
    }
    if(tile == 't2'){
        t2 = $('#' + tile +i).attr('src');
        t2 = t2.split('/').slice(-1)[0];
    }
}


function logKey(e) {
    if (e.code == 'KeyX') {
        // TestOBjectsData();
    }
}



function getVariations() {

    width = document.getElementById("width").value;
    height = document.getElementById("height").value;

    var data = {
        "tile_1": t1,
        "tile_2": t2,
        "style": style,
        "width": width,
        "height": height
    };

    // console.log(data);




    $.ajax({
        type : "POST",
        url : "http://tiles-app.westeurope.azurecontainer.io:3000/files/",
        // dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(data),
        success : function(result) {
            
            $('#mainViewImg').empty();
            $('#mainViewImg').append(`
            <img class="img-responsive" src="http://tiles-app.westeurope.azurecontainer.io:3000/${result.message}" />
            `);

        },
    });


    // jQuery.ajax({
    //     url: 'http://localhost:3000/files/',
    //     method: 'GET',
    //     data: {
    //         'src1': "newtestingbucket",
    //         'src2': "newtestingbucket",
    //     },
    //     success: function (result) {
    //         console.log(result);
    //     }
    // });
}

