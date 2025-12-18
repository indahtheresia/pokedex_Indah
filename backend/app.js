const express = require('express');

const app = express()
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send({message: "API is running"});
});

// create a new API endpoint 
// GET /api/pokemons?page=<number> &limit=<number>
app.get('/api/pokemons', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  // fetch pokemon list from PokeAPI
  try {
    const listResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    
    if (!listResponse.ok) {
      throw new Error('Failed to fetch pokemon list');
    }

    const listData = await listResponse.json();

    // fetch details of each pokemon from its URL, merge data and return as single JSON
    const pokemonDetails = await Promise.all(
      listData.results.map(async (pokemon) => {
        const detailResponse = await fetch(pokemon.url);

        if (!detailResponse.ok) {
          throw new Error(`Failed to fetch ${pokemon.name}`);
        }

        const data = await detailResponse.json();

        return {
          name: data.name,
          image: data.sprites.other['official-artwork'].front_default,
          types: data.types.map((t) => t.type.name),
          height: data.height,
          weight: data.weight
        };
      })
    )

    res.send(pokemonDetails);
  } catch (error) {
    res.status(500).send({message: "Failed to fetch pokemon"})
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});