const limit_images = 10;
const GET_IMAGES = 'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&limit=' + limit_images;
const api_key = 'live_zpiLRZBiE8s28oW5F8js0xoJvDSqkoN3gYwz81oeaFGnSpJnRMTPheP9183EheKc';

module.exports = { api_key, GET_IMAGES };