console.log('Success!')


$(document).ready(function(){


///////////////////////////////////The Los Angeles button begins here//////////////////////////////////////////////////
var $losAngeles = $('#1')
var $body = $("body")
var template = $('script[data-id="template"]').text();


$losAngeles.on('click',function(){ //////The event listener that gives me the list of restaurants
console.log('clicked')

$.ajax({
    url: '/restaurants/',
    type: 'GET',
    dataType: 'json',
    }).done(function(data){
        console.log(data)
        


///Loops throughout all restaurants/////////
        for ( var i = 0; i < data.length; i++){ 
        var id = data[i].id


        var location = data[i].location
        console.log(data[i].location)

        if (location === "Los Angeles"){
        var name = data[i].name;
        var $LA = $('#LA');
        var $LA2 = $('#LA2');
// debugger


    var idEdit = (id + name);
    var idDelete = name + id;
    var editButton = document.createElement('button')
    var deleteButton = document.createElement('button')
    editButton.setAttribute('id', idEdit);
    deleteButton.setAttribute('id', idDelete);
    var editName = 'editName'+id;

    var editCuisine = 'editCuisine'+id;
    var editLocation = 'editLocation'+id;
    var updateLA = 'SubmitEdit' + id
    
    editButton.innerText="Edit";
    deleteButton.innerText="Delete";
  $LA.append('<h3><a href="/items/">' + name + '</a></h3>' )
    $LA.append(editButton)
    $LA.append(deleteButton)
        
     ////////The edit button starts here///////////////////////////////////////////////////////////////////////////
     
$('editButton').on('click', function(event){///////////////////////Event listener for the edit buttons
$('editButton').append('<form method = "POST" action= "/restaurants/_method=PUT">Name:<input type="text" name = "name" id="'+editname+'"> Location:<input type="text" name = "location" id="'+ editlocation +'">Cuisine:<input type="text" name = "cuisine" id="'+editCuisine+'""><button id = "'+updateLA+'">Submit</button></form>')

        
$.ajax({
        method:'PUT',
        url: "/restaurants/" + id,
        data: dataLA,
        contentType: 'application/json',
    }).done(function(data){
        // alert('Updated!')

var dataLA = JSON.stringify({id:id})
var id = $(event.target).attr('data-id');
var newName = $editName.val();
var newLocation = $editLocation.val();
var newCuisine = $editCuisine.val();


    
})////end of ajax calling for edit button


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        
       
        })///End of edit button event listener

    }////End of if statement
     
    }///End of for loop


        

       var element = $('editLA' + id);
       console.log(element)

        // console.log(data[i].name)

$LA.append('<center> <h4>"Add Restaurant"</h4> </center>')////Adds to the div element with the id of "LA"

$LA2.append('<form action = "/restaurants/" method = "POST"> Name:<input type="text" name="name" id="A1" />Location: <input type= "text" name="location" id="A2"/>Cuisine: <input type="text" name="cuisine" id="A3" /><button id = "submitLA">Submit</button></form>')///Adds to the div element witht the id of "LA2"


    }



    


)///End of ajax calling for displaying a list of restaurants

 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   


})//End of the LosAngeles button event listener

//////////////////////////////////End of the LosAngeles button//////////////////////////////////////////////////////////



///////////////////////////The submit button for the add new restaurant begins here//////////////////////////////////////


var $submitLA = $('#A');

$submitLA.on('click', function(){
        

        var $input1 = $('#A1');
        var $input2 = $('#A2');
        var $input3 = $('#A3');
        var $name = $input1.val();
        var $location = $input2.val();
        var $cuisine = $input3.val();

 $.ajax({
        url:"/restaurants",
        data:{name:name, location: location, cuisine: cuisine},
        type: 'POST',
        dataType: 'json',
    }).done(function(data){
    alert("updated!")

    })////End of done function from the ajax that calls all restaurants

        

    })////end of the ajax calling 



  })  

   

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// })///////Document jquery ends here////////////////////////////////