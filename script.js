const info_pokemon_button = document.getElementById("info_pokemon_button")
const container = document.getElementById("container_main")

const print_pokemon = async() => {
  const pokemon_name = document.getElementById("pokemon_name").value
  
  const url = `https://api-pokemon-fr.vercel.app/api/v1/pokemon/${pokemon_name}`
  const res = await fetch(url)
  const data = await res.json()

  const img = data.sprites.regular
  const name = data.name.fr
  const categorie = data.category
  const type = data.types[0].name

  const PokeEl = document.createElement('div')

  const html = `
    <div id="container_pic_text">

      <img id="pic_pokemon" src="${img}" alt="">

      <div id="container_text">

        <p>Nom : ${name}</p>

        <p>${categorie}</p>

        <p>${type}</p>

      </div>
    </div>
    `
    PokeEl.innerHTML = html

  container.appendChild(PokeEl)
}

info_pokemon_button.addEventListener("click",print_pokemon)