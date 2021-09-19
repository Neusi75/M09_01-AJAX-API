
//window.onload = () => {
    //write your code here

$(document).ready(function () {

    $.get((URL = "http://api.icndb.com/jokes/random"), 
        function (data) {
            let dataValue = data.value;
            let joke = dataValue.joke;
            document.querySelector("#texto").innerHTML = joke;
            
        });
    
 
     $("#btnClick").click(function(element){
        element.preventDefault();
        $.get((URL = "http://api.icndb.com/jokes/random"), function(data){
            let dataValue = data.value;
            let joke = dataValue.joke;
            document.querySelector("#texto").innerHTML = joke;
        }) ;
        
        
        
     });
 

});
