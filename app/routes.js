const express = require('express');
const request = require('request');
const router = express.Router();

const apiKey = '**********';


router
    .get('/', function (req, res) {
        res.render('index', {weather: null, error: null});
    })
  
    .post('/', function (req, res) {
        let city = req.body.city;
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        

        request(url, function (err, response, body) {
        let weather = JSON.parse(body);
          if(err){
            res.render('index', {weather: null, error: 'Erreur, merci de réessayer'});
          } else {
            
            if(weather.main == undefined){
              res.render('index', {weather: null, error: 'Nous ne connaissons pas cette ville'});
            } else {
              let weatherText = `Il fait ${weather.main.temp}° à ${weather.name} !`;
              res.render('index', {weather: weatherText, error: null});
            }
          }
        });
      })


module.exports = router;