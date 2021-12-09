$("#add_employee").submit(function(event){
    alert("Données ajoutées");
})

$("#update_employee").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n,i){
        data[n['name']] = n['value']
    })

    console.log(data);

    var request = {
        "url" : `http://localhost:3000/api/employees/${data.id}`,
        "method" : "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Employé mis à jour avec succès")
    })
})
$("#update_table").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n,i){
        data[n['name']] = n['value']
    })

    console.log(data);

    var request = {
        "url" : `http://localhost:3000/api/tables/${data.id}`,
        "method" : "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Table mise à jour avec succès")
    })
})
$("#update_starter").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n,i){
        data[n['name']] = n['value']
    })

    console.log(data);

    var request = {
        "url" : `http://localhost:3000/api/starters/${data.id}`,
        "method" : "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Entrée mise à jour avec succès")
    })
})
$("#update_maincourse").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n,i){
        data[n['name']] = n['value']
    })

    console.log(data);

    var request = {
        "url" : `http://localhost:3000/api/maincourses/${data.id}`,
        "method" : "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Plat mis à jour avec succès")
    })
})
$("#update_dessert").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n,i){
        data[n['name']] = n['value']
    })

    console.log(data);

    var request = {
        "url" : `http://localhost:3000/api/desserts/${data.id}`,
        "method" : "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Dessert mis à jour avec succès")
    })
})
if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")
        
        var request = {
        "url" : `http://localhost:3000/api/employees/${id}`,
        "method" : "DELETE",
        
        }

        if(confirm("Voulez vous supprimer cet employé ?")){
            $.ajax(request).done(function(response){
                alert("Employé supprimé avec succès");
                location.reload();
            })  
        }

    })

    
}


if(window.location.pathname == "/list-table"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")
        
        var request = {
        "url" : `http://localhost:3000/api/tables/${id}`,
        "method" : "DELETE",
        
        }

        if(confirm("Voulez vous supprimer cette table ?")){
            $.ajax(request).done(function(response){
                alert("Table supprimée avec succès");
                location.reload();
            })  
        }

    })

    
}

if(window.location.pathname == "/list-starter"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")
        
        var request = {
        "url" : `http://localhost:3000/api/starters/${id}`,
        "method" : "DELETE",
        
        }

        if(confirm("Voulez vous supprimer cette entrée ?")){
            $.ajax(request).done(function(response){
                alert("Entrée supprimée avec succès");
                location.reload();
            })  
        }

    })

    
}

if(window.location.pathname == "/list-maincourse"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")
        
        var request = {
        "url" : `http://localhost:3000/api/maincourses/${id}`,
        "method" : "DELETE",
        
        }

        if(confirm("Voulez vous supprimer ce plat ?")){
            $.ajax(request).done(function(response){
                alert("Plat supprimé avec succès");
                location.reload();
            })  
        }

    })

    
}


if(window.location.pathname == "/list-dessert"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")
        
        var request = {
        "url" : `http://localhost:3000/api/desserts/${id}`,
        "method" : "DELETE",
        
        }

        if(confirm("Voulez vous supprimer ce dessert ?")){
            $.ajax(request).done(function(response){
                alert("Dessert supprimé avec succès");
                location.reload();
            })  
        }

    })

    
}



