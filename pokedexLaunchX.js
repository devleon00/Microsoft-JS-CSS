const pokeBox = (pokemon) => {
  let containerPokemons = document.getElementById("container");
  let namePoke = document.createElement("div");
  namePoke.className = "box";

  let imgPoke = document.createElement("img");
  imgPoke.className = "imgPoke";
  imgPoke.src = pokemon.sprites.front_default;

  let nPoke = document.createElement("p");
  nPoke.className = "nPoke";
  nPoke.innerText = `N.°${("0000" + pokemon.order).substring(
    (pokemon.order + "").length
  )}`;

  let pPoke = document.createElement("p");
  pPoke.innerText = pokemon.name;
  pPoke.className = "namePoke";

  let typesPoke = document.createElement("div");
  pokemon.types.forEach((element) => {
    console.log(element.type.name);
    let typePoke = document.createElement("a");
    typePoke.innerText = element.type.name;
    (typePoke.className = element.type.name), "typePoke";
    typePoke.className += " typePoke";
    typesPoke.appendChild(typePoke);
  });

  namePoke.appendChild(nPoke);
  namePoke.appendChild(pPoke);
  namePoke.appendChild(imgPoke);
  namePoke.appendChild(typesPoke);

  containerPokemons.appendChild(namePoke);
};

const fetchPokemon = (poke) => {
  let url = poke.url;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      pokeBox(data);
      console.log(data);
    });
};

const fetchAllPokemons = () => {
  url = "https://pokeapi.co/api/v2/pokemon?limit=1500";
  fetch(url)
    .then((res) => {
      if (res.status != "200") {
        console.log("Error");
      } else {
        return res.json();
      }
    })
    .then((data) => {
      data.results.forEach((pokemon) => {
        fetchPokemon(pokemon);
        console.log(pokemon);
      });
    });
};

fetchAllPokemons();

// const fetchPokemon = () => {
//   const pokeName = document.getElementById("pokeName");
//   let pokeInput = pokeName.value.toLowerCase();
//   const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
//   fetch(url)
//     .then((res) => {
//       if (res.status != "200") {
//         console.log(res);
//         pokeImage("https://c.tenor.com/fXgN-ZcolTwAAAAC/pikachu-llorando.gif");
//       } else {
//         return res.json();
//       }
//     })
//     .then((data) => {
//       //   console.log(data);
//       let pokeImg = data.sprites.front_default;
//       //   console.log(pokeImg);
//       pokeImage(pokeImg);
//     });
// };

// // fetchPokemon();

// const pokeImage = (url) => {
//   const pokeImg = document.getElementById("pokeImg");
//   pokeImg.src = url;
// };

// const imprimir = () => {
//   const pokeName = document.getElementById("pokeName");
//   let pokeInput = pokeName.value;
//   console.log("Hola " + pokeInput);
// };
