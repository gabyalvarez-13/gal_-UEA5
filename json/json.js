// buscar la respuesta 

fetch('json.json')
.then(response => response.json())
.then(json => {

    document.getElementById('ADN').innerHTML=json.frase1;
    document.getElementById('id').innerHTML=json.frase2;
    document.getElementById('numero').innerHTML=json.cantidad1;
    console.log(json.frase1)
})