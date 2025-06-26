Armando Mates - API REST en Node.js + MongoDB

Este proyecto es una API RESTful desarrollada en Node.js con Express y MongoDB, que gestiona cuentas de usuario y fotos. Permite autenticación con tokens, creación y gestión de usuarios, así como almacenamiento y eliminación de fotos.

El backend está desplegado en Render: https://armando-mates-node-js.onrender.com

---

Instalación

```bash
git clone https://github.com/franscaglia/armando.mates.node.js.git
npm install
npm run dev
Requiere Node.js y MongoDB configurado correctamente para entorno local.

RUTAS DE PRUEBA
LOGIN
POST http://127.0.0.1:8080/account/login
Genera un token de autenticación para el usuario.

USUARIOS
Obtener todos los usuarios (requiere token):
GET http://127.0.0.1:8080/account/getAll

Obtener usuario por ID:
GET http://127.0.0.1:8080/account/usuario/:id

Crear nuevo usuario:
POST http://127.0.0.1:8080/account/crearUsuario

Modificar email de usuario:
PUT http://127.0.0.1:8080/account/modificarMail/:id

Eliminar usuario por ID:
DELETE http://127.0.0.1:8080/account/borrarCuenta/:id

FOTOS
Obtener todas las fotos:
GET http://127.0.0.1:8080/fotos/all

Obtener una foto por ID:
GET http://127.0.0.1:8080/fotos/foto/:id

Eliminar una foto por ID:
DELETE http://127.0.0.1:8080/fotos/borrarFoto/:id


RUTAS EN PRODUCCION (RENDER)
USUARIOS
GET: Get All Usuarios
GET: Get Usuario por ID
DELETE: Eliminar Usuario

FOTOS
GET: Get All Fotos
GET: Get Foto por ID
DELETE: Eliminar Foto

TECNOLOGIAS UTILIZADAS
Node.js
Express
MongoDB + Mongoose
JWT (para autenticación)
Render (deploy)




