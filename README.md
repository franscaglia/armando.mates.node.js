Deploy corriendo en:        https://armando-mates-node-js.onrender.com      

DETALLES DE LAS RUTAS:

login:
POST http://127.0.0.1:8080/account/login:                                          generacion de un token

user:
GET http://127.0.0.1:8080/account/getAll:                                          Obtencion de todos los usuarios con el uso de una autenticación
GET http://127.0.0.1:8080/account/usuario/685323e7093fcdd75c4216ad:                busqueda de un usuario por ID en una base de datos de mongo
POST http://127.0.0.1:8080/account/crearUsuario:                                   creacion de una cuenta de usuario
PUT http://127.0.0.1:8080/account/modificarMail/6852469e308dcdd437634302:          busqueda y modificion de una cuenta a partir de su ID
DELETE http://127.0.0.1:8080/account/borrarCuenta/68524841ddf09a9d81ee1ad4:        busqueda y eliminacion de una cuenta a partir de su ID

fotos:
GET http://127.0.0.1:8080/fotos/all:                                               Obtencion de todas las fotos
GET http://127.0.0.1:8080/fotos/foto/68532f1948ab4308b3402a83:                     busqueda de una foto mediante su ID
DELETE http://127.0.0.1:8080/fotos/borrarFoto/68526c4fb58e525c0bd2d992:            busqueda y eliminacion de una foto a partir de su ID


