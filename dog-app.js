const BREED_URL = 'https://dog.ceo/api/breeds/list/all';                    // 1.pedimos al api la lista de todas las distintas razas, y tenemos que convertir esta lista en un select box


const select = document.querySelector('.breeds');       //5.seleccionamos el punto 4



fetch(BREED_URL)
    .then(response => {
        return response.json();
    })
    .then(data => {
       //console.log(Object.keys(data.message));                            // 2.aparecen las razas como un array, asi que hacemos lo sig
        const breedsObject = data.message;                     //3.1 llamamos a las distintas razas
        const breedsArray = Object.keys(breedsObject);          //3.2 una vez llamadas las razas, las juntamos en un array

    
        for (let i = 0; i < breedsArray.length; i++) {
            const option = document.createElement('option');
            option.value = breedsArray[i];
            option.innerText = breedsArray[i];
            select.appendChild(option);                         // 6.aqui creamos un elemento option al q le damos los valores de la raza y luego lo metemos en select con appendchild
        }  
    })

    select.addEventListener("change", (event) => {              //whenever the user changes that has to be sth else
        //console.log(event.target.value);              event.target===select.value          //the event comes from the DOM, whenever an event fires on this select, it fires this event
    
        //console.log(`https://dog.ceo/api/${event.target.value}/image/random`)       //pq en el dolar es donde iba la raza de perro, segun la url del API
        
        let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`
        getDoggo(url);
    })

const img = document.querySelector('.dog-img');
const spinner = document.querySelector('.spinner');

function getDoggo(url) {                                //8.coge la url que hemos creado antes; esto es lo q hicimos en el ejercicio anterior para coger una foto 
    spinner.classList.add("show");
    img.classList.remove("show");
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data){
            img.src = data.message;
            spinner.classList.remove("show");
            img.classList.add("show");
        })
}

/*img.addEventListener("load", function(){
    spinner.classList.remove("show");                   esto es pq en el del profesor, cuando daba a una imagen nueva, cargaba y aparecia la imagen anterior y rapidamente cambiaba a la img nueva, pues esto es para quitarlo y q aparezca solo la nueva
    img.classList.add("show");
})*/











