import axios from "axios";

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(function(response) {return response.json();})
// .then(function(json){return console.log(json);})  

  axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then((response)=>{
    console.log(response.data);
  }) 
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Operation Sucessfull");
  });

