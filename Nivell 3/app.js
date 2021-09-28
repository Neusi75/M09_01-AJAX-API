

$(document).ready(function () {

  
  const apiUrl = "http://api.icndb.com/jokes/random";
  valores(); 

  function valores(){
    $.get((URL = apiUrl), function(data){
    let dataValue = data.value;
    let joke = dataValue.joke;
    document.querySelector("#texto").innerHTML = joke;

    });
};

     $("#btnClick").click(function(element){
        element.preventDefault();
        valores();
           
     });

    fetch(apiUrl,{
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
