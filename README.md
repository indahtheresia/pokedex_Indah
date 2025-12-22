# SETUP INSTRUCTION FOR BACKEND AND FRONTEND
## GETTING STARTED
1. Run `git clone https://github.com/indahtheresia/pokedex_indah.git` on terminal to clone the repository.
## BACKEND
Run these command on terminal:
1. `cd backend` => navigate to the backend directory
2. `npm install` => install dependencies
3. `npm start` => start backend server
4. `The backend` server should now be running on http://localhost:3000

## FRONTEND
Run these command on terminal:
1. `cd frontend` => navigate to the frontend directory
2. `npm install` => install dependencies
3. `npm run build` => build the frontend application
4. `npm start` => start the frontend server (production)
5. open browser and visit `http://localhost:3001`

### Notes:
1. Make sure Node.js is installed before running the project. Run `node --version` on terminal to check if Node.js is installed.
2. Backend must be running before the frontend.

# API DOCUMENTATION
## BASE URL: http://localhost:3000/api
### 1. GET /pokemons
**Query Parameters:**
| Parameter    | Type | Default | Descrition |
| -------- | ------- | :--------: | ---------- |
| `page`  | number | 1 | Page number (for pagination)
| `limit` | number | 15 | Number of Pokemon per page

**Example Request:**
`GET http://localhost:3000/api/pokemons?page=1&limit=15
`

**Response:**
```json
[
    {
        "name": "bulbasaur",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        "types": [
            "grass",
            "poison"
        ],
        "height": 7,
        "weight": 69
    },
    ...
]
```

**Postman API documentation URL:** <https://documenter.getpostman.com/view/42577752/2sB3dWs74D>

**Screenshot:**
<img width="1897" height="924" alt="Screenshot 2025-12-22 at 20 54 51" src="https://github.com/user-attachments/assets/951d864c-53a4-4dd0-a7bd-9b7e42adf50f" />

<img width="1901" height="934" alt="Screenshot 2025-12-22 at 20 55 23" src="https://github.com/user-attachments/assets/195de0c3-289a-48ca-8e49-972ce98ed5f2" />

