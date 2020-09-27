const fetch = require("node-fetch");

function getPlanetforFirstSpeciesInFirstMovieForPerson(id) {
        
        fetch("https://swapi.dev/api/people/" + id)
          .then(res => { return res.json() })
          .then(data =>{
            console.log('Name: ' + data.name);
          fetch(data.films[1])
          .then(res =>{ return res.json() })
          .then(data =>{
             console.log('First film: ' + data.title)
          fetch(data.species[3])
          .then(res => { return res.json() })
          .then(data =>{
              console.log('First species:' + data.name)
          fetch(data.homeworld)
          .then(res => { return res.json() })
          .then(data =>{
              console.log('Homeworld for specie: ' + data.name)
    
                })
    
             })
    
          })  
    
      })               
    
    };
   
//getPlanetforFirstSpeciesInFirstMovieForPerson(1);




async function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id){
  try {
    const person = await fetch('https://swapi.dev/api/people/' + id)
    .then(res => {return res.json()});
    
    const first_film = await fetch(person.films[1])
    .then(res =>{ return res.json()});

    const species = await fetch(first_film.species[3])
    .then(res =>{ return res.json()});

    const homeworld = await fetch(species.homeworld)
    .then(res =>{ return res.json()})

    console.log('Name: ' + person.name);
    console.log('First film: ' + first_film.title);
    console.log('First species: ' + species.name);
    console.log('Homeworld for specie: ' + homeworld.name);
  } catch (err){
      console.log('Error ',err);
  }finally{
      console.log('Period.');
  }

};

//getPlanetforFirstSpeciesInFirstMovieForPersonAsync(1);
