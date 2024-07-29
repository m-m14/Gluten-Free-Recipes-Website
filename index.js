document.getElementById("search").addEventListener("input", search);
var text = document.getElementById("demo").innerHTML

function search(){  
    
    text = ""

    var input = this.value.toLowerCase();
    const recipe_names = document.querySelectorAll("recipe_name");

    recipe_names.forEach(function check(item){
        var name = item.textcontent.toLowerCase()
        if (name.includes(input)){

            text += name;

        }
    })



}