var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');


router.get('/movies', (req, res) => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=ece46653f4520179898923600b81e1b7')
      .then(response => response.json())
      .then(data => {
        res.json({ movies: data.results });
      });
   });

module.exports = router;
