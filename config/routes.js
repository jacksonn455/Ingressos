const express = require('express');
const bodyparser = require('body-parser');
const routes = express();
routes.use(express.json());
const path = require('path');

routes.use(bodyparser.urlencoded({ extended: false }));
routes.use(bodyparser.json() );
routes.set("view engine", "ejs");
routes.set('views', path.join(__dirname, '../views'));
routes.use(express.static(path.join('C:/Users/jacks/Ingressos/public')));

const UserController = require("../controllers/UserController");

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

  routes.get("/venda", async ({res}) => {
    res.render("venda");
  });

  routes.get("/teatro1", async ({res}) => {
    res.render("teatro1");
  });

  routes.get("/teatro2", async ({res}) => {
    res.render("teatro2");
  });

  routes.get("/teatro3", async ({res}) => {
    res.render("teatro3");
  });

  routes.get("/error", async ({res}) => {
    res.render("error");
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

routes.use(function(req, res, next) {
  res.status(404).send(res.render("error"));
});

module.exports = routes;
