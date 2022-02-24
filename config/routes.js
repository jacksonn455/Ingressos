const express = require('express');
const bodyparser = require('body-parser');
const routes = express();
routes.use(express.json());
const path = require('path');
const novaPiada = require('../models/nova-piada')

routes.use(bodyparser.urlencoded({ extended: false }));
routes.use(bodyparser.json() );
routes.set("view engine", "ejs");
routes.set('views', path.join(__dirname, '../views'));
routes.use(express.static(path.join('C:/Users/jacks/Ingressos/public')));

const UserController = require("../controllers/UserController");
const NovaPiadaController = require("../controllers/NovaPiadaController");

routes.get("/", async ({res}) => {
  try {
    res.render("index");
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar usuario.'});
  }
  });

  routes.get("/register", async ({res}) => {
    res.render("registro");
  });

  routes.get("/home", async ({res}) => {
    res.render("home");
  });

  routes.get("/novapiada", async ({res}) => {
    res.render("nova-piada");
  });

  routes.get("/error", async ({res}) => {
    res.render("error");
  });

  routes.get("/piadas", async (req, res) => {
    try {
      const testePiada = await novaPiada.find({});
      res.render("piadas", {testePiada:testePiada});;
    } catch (e) {
      res.status(500).send({message: 'Falha ao carregar as piadas.'});
    }
  });

routes.post('/user/register', async (req, res) => {
 
  const email = req.body.email;
  const password = req.body.password;

  const Users = require('../models/user')
  const user = new Users({ email, password });
 
  try {
    await user.save();
    res.redirect("/home");
  } catch (err) {
    console.log(err);
  }
});

routes.post("/user/login", async (req, res) => {
 
  const email = req.body.email;
  const password = req.body.password;

  const Users = require('../models/user')
  const user = await Users.findOne({ email })
  try {
  if(email == user.email && password == user.password){
    res.redirect("/home");
  } else {
    res.redirect("/error")
  }  
} catch (err) {
  res.redirect("/error")
  }
});

routes.post("/jokes/create", async (req, res) => {
 
  const name = req.body.name;
  const email = req.body.email;
  const text = req.body.text;

  const piada = new novaPiada({ name, email, text });
 
  try {
    await piada.save();
    res.redirect("/piadas");
  } catch (err) {
    console.log(err);
  }
});

routes.use(function(req, res, next) {
  res.status(404).send(res.render("error"));
});

module.exports = routes;
