RISADARIA
===============================================

- Metodologia: 
Trello com a metodologia Scrum para gerenciamento do projeto.
 ![](https://github.com/jacksonn455/Triider/blob/main/public/images/trello.png)

- Back-End: 
API utilizando Nodejs + Express + Mongodb

Modelagem de banco de dados utilizando mongoose

Criptografia de campos sensíveis utilizando bcrypt

Autenticação de usuários utilizando jwt (jsonwebtoken)

Gerenciando variáveis ambiente utilizando .env

Para rodar a aplicação utilize o comando: npm install, e depois nodemon -r dotenv/config .\app.js

- Rotas:

POST: http://localhost:7001/user/register

body JSON: {
	"email":"jacksonmagnabosco@hotmail.com",
	"password":"teste123"
}

 ![](https://github.com/jacksonn455/Triider/blob/main/public/images/register-in.png)

POST: http://localhost:7001/user/login

passando no header a authorização JWT
ex: auth: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDk5ZjVhZDQ5MzQ5MjNmMDFiOTgxZCIsImlhdCI6MTY0NDc5ODkwNiwiZXhwIjoxNjQ1NDAzNzA2fQ._zRPhDL5_OlYFv4aZ-i_YTlbFCbCQDmcqW76rRL_dnM

body JSON: {
	"email":"jacksonmagnabosco@hotmail.com",
	"password":"teste123"
}

 ![](https://github.com/jacksonn455/Triider/blob/main/public/images/login-in.png)

 POST: http://localhost:7001/jokes/create

 body JSON: {
	"name":"jackson",
	"email":"jacksonmagnabosco455@hotmail.com",
	"text":"testando a caixa de texot"
}

 ![](https://github.com/jacksonn455/Triider/blob/main/public/images/criar-piada.png)
 
 - Mongo:
  ![](https://github.com/jacksonn455/Triider/blob/main/public/images/mongo.png)

- Front-end: 
Bootstrap para deixar responsivo e padronizar os componentes assim seguindo as boas práticas do desenvolvimento EJS, CSS, Javascript

Google fonts: biblioteca utilizada para modificar as fontes

Acessibilidade web: Técnicas que servem para ajudar usuários com deficiencia visual assim deixando o projeto mais inclusivo

Javascript: manipular os elementos de pagina e validar os campos

Login:
=====================
GET: http://localhost:7001/
 ![](https://github.com/jacksonn455/Triider/blob/main/public/images/login.png)
 
Register:
=====================
GET: http://localhost:7001/register
 ![](https://github.com/jacksonn455/Triider/blob/main/public/images/registro.png)

Home:
=====================
GET: http://localhost:7001/home
 ![](https://github.com/jacksonn455/Triider/blob/main/public/images/home.png)

Nova-Piada:
=====================
GET: http://localhost:7001/novapiada
 ![](https://github.com/jacksonn455/Triider/blob/main/public/images/nova-piada.png)
 
Piadas:
=====================
GET: http://localhost:7001/piadas
 ![](https://github.com/jacksonn455/Triider/blob/main/public/images/piadas.png)
 
Error:
=====================
GET: http://localhost:7001/error
 ![](https://github.com/jacksonn455/Triider/blob/main/public/images/error.png)


## Autor

 | [<img src="https://avatars1.githubusercontent.com/u/46221221?s=460&u=0d161e390cdad66e925f3d52cece6c3e65a23eb2&v=4" width=115><br><sub>@jacksonn455</sub>](https://github.com/jacksonn455) |
  | :---: |

--------------------
