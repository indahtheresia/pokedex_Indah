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
  const page = parseInt(req.query.page) || 1; // default 1
  const limit = parseInt(req.query.limit) || 10; //default 10
  const offset = (page - 1) * limit;

  // 1. fetch pokemon list from PokeAPI
  try {
    const listResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    
    if (!listResponse.ok) {
      throw new Error('Failed to fetch pokemon list');
    }

    const listData = await listResponse.json();

    res.send(listData.results);
  } catch (error) {
    res.status(500).send({message: "Failed to fetch pokemon"})
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});