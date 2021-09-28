
$(document).ready(function () {
  
  const apiUrl = "http://api.icndb.com/jokes/random";
  valores(); 

  function valores(){
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
        $("#texto").html(data.value.joke)
      })
      .catch(error => {
        console.log(error);
      });
 
};

     $("#btnClick").click(function(element){
        element.preventDefault();
        valores();
     
           
     });

});
