


$("#add_user").submit(function(event){
    alert("Data Inserted Successfully!");
})

$("#update_user").submit(function(event){
    //This method actually gives you the ability to prevent a browser’s default behavior for events
    //stop forms from automatically submitting when the submit button is clicked, giving you a chance 
    //to instead submit the form data asynchronously using JavaScript
    event.preventDefault(); 

    var unindexed_array = $(this).serializeArray();
    //console.log(unindexed_array);
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value'] // name:'' , email:'', Gender:'', status:''
    })


    var request = {
        "url" : `http://localhost:3000/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }

    })
}