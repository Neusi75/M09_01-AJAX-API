
function valores(data){
    let dataValue = data.value;
            let joke = dataValue.joke;
            document.querySelector("#texto").innerHTML = joke;

}

$(document).ready(function () {

    $.get((URL = "http://api.icndb.com/jokes/random"), 
        function (data) {
            valores(data); 
            
        });
    
 
     $("#btnClick").click(function(element){
        element.preventDefault();
        $.get((URL = "http://api.icndb.com/jokes/random"), function(data){
            valores(data); 
        }) ;
        
        
        
     });
     

     }
 

);
