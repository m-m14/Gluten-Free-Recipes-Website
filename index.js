const recipe_names = []; 
function search(){

    var searchingFor = document.getElementById('search').innerHTML; 

    for (i = 0; i < 6; i++){

        recipe_names[i] = document.getElementById(i).innerHTML;

    }

    alert(recipe_names.toString());


    //alert("You searched for : " + searchingFor);


}