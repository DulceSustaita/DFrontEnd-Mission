const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status != "200"){
            console.log(res);
            pokeImge("pukachuHappy.jpg");
        }
        else {
            return res.json();
        }
        
    }).then((data) => {
        console.log(data);
        //Imagen
        let pokeImg = data.sprites.front_default;
        //console.log(pokeImg);
        pokeImge(pokeImg);
        //Nombre
        //console.log(data.name);
        let pokeName = data.name;
        let pokeNombre = document.getElementById("poke");
        pokeNombre.innerHTML = pokeName;
        //id
        //console.log(data.id);
        let poke_Id = data.id;
        let pokeId = document.getElementById("pokeId");
        pokeId.innerHTML = `#${poke_Id.toString().padStart(3,0)}`;
        //altura
        //console.log(data.height);
        let pokealtura = data.height;
        let altura = document.getElementById("altura");
        altura.innerHTML = `${pokealtura/10} m` ;
        //peso
        //console.log(data.weight);
        let peso = data.weight;
        let pokepeso = document.getElementById("pokepeso");
        pokepeso.innerHTML = `${peso/10} Kg`;
        //tipo
        let poketipo = document.getElementById("poketipo");
        poketipo.innerHTML = "";
        data.types.forEach(element => {
            //console.log(element.type.name);
            poketipo.innerHTML += `${element.type.name} `;
        });
        //Habilidades
        //console.log(data.abilities[0].ability.name);
        let pokeH1 = document.getElementById("pokeH1");
        let pokeH2 = document.getElementById("pokeH2");
        let pokeHO = document.getElementById("pokeHO");

        const habOcu = data.abilities.filter(hab => hab.is_hidden);
        const habCom = data.abilities.filter(hab => !hab.is_hidden);
        pokeH1.innerHTML = habCom[0].ability.name;
        pokeH2.innerHTML = habCom.length > 1 ? habCom[1].ability.name : " No tiene.";
        pokeHO.innerHTML = habOcu.length > 0 ? habOcu[0].ability.name : "No tiene habilidad oculta.";

        //Stats
        let pokeDiv = document.getElementById("div-stats");
        //console.log(data.stats[0].base_stat);
        //console.log(data.stats[0].stat.name);
        pokeDiv.innerHTML = "";
        let stats = data.stats;
        stats.forEach(element => {
            var label = document.createElement('label');
            label.innerHTML = element.stat.name + " ";
            var label2 = document.createElement('label');
            label2.innerHTML = element.base_stat;

            var br = document.createElement('br');

            pokeDiv.appendChild(label);
            pokeDiv.appendChild(label2);
            pokeDiv.appendChild(br);
        });

        //Limpiar datos
        



       
    })

    

}

//fetchPokemon();
const pokeImge = (url) =>{
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}


