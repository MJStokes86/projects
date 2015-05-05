console.log('Success!')


$(document).ready(function(){



var $losAngeles = $('#1')
var $body = $("body")




$losAngeles.on('click',function(){
console.log('clicked')
// event.preventDefault()

// var cityId = $losAngeles.attr('id')
// debugger
$.ajax({
    url: '/restaurants/',
    // data: {id:id},
    type: 'GET',
    dataType: 'json',
    }).done(function(data){
        console.log(data)
        for ( var i = 0; i < data.length; i++){
    var id = data[i].id

        var location = data[i].location
        console.log(data[i].location)
        if (location === "Los Angeles"){
        var name = data[i].name;
        var $LA = $('#LA');
        $LA.append('<h3>' + name + '</h3>' )
        console.log(data[i].name)
    }

}

})
})//end
})//end doc/ready func

var $A = $('#A');

$A.on('click', function(){
        var $input1 = $('#A1');
        var $input2 = $('#A2');
        var $input3 = $('#A3');
        var $name = $input1.val();
        var $location = $input2.val();
        var $cuisine = $input3.val();


    $.ajax({
        url:"/restaurants/new",
        data:{name:name, location: location, cuisine: cuisine},
        type: 'POST',
        dataType: 'json',
    }).done(function(data){


    })
})