

$(document).ready(function () {
    
 
     $("#btnClick").click(function(element){
        element.preventDefault();
        $.get((URL = "http://api.icndb.com/jokes/random"), function(data){
            let dataValue = data.value;
            let joke = dataValue.joke;
            document.querySelector("#texto").innerHTML = joke;
        }) ;
        
        
        
     });

     fetch('http://api.icndb.com/jokes/random',{
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin', 
    cache: 'no-cache',
    referrerPolicy: 'no-referrer'
})
    .then( response => {
      console.log('response =', response)
        return response.json(); 
    })
    .then(data => {
      console.log('data = ', data);
    })
    .catch(error => {
      console.log(error);
    });
 

});
