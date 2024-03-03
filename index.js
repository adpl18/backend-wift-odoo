const express = require('express');
const cors = require('cors');
const axios = require('axios');

const { api_key, GET_IMAGES } = require('./api');

const app = express();
const PORT = 3000;

const corsOptions = {
    origin: 'http://localhost:3001',
};

app.use(cors(corsOptions));

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(GET_IMAGES, {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': api_key
            }
        });
        res.json(response.data);
    } catch (error) {
      console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
