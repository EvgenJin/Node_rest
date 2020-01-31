# Node_rest
This is rest api for boost start by node js with jwt authentification, role-based route control on sqlite3 with sequelize orm and mock tests api endpoints  
Базовый рест сервер для резкого старта разработки с jwt токенами, разделением доступа по роутам между ролями, с тестами по рестовым методам и подготовленной базой sqlite3 c sequelize.  

how to run  
npm install  
npm start  
send post to localhost:3000/api/login  with body {"login": "admin","password": "admin:}, response return to you jwt token  
add jwt to use rest api  

to test  
npm test


win7 sequilize
node_modules\.bin\sequelize migration:generate --name user_add_name  
node_modules\.bin\sequelize db:migrate  
node_modules\.bin\sequelize model:generate --name Products --attributes model:string,manufacturer_id:integer,serial_num:string,inventory_num:string,ip_addr:string,store_id:integer  
node_modules\.bin\sequelize model:generate --name Stores --attributes name:string,address:integer,chief_name:string,telephone:string,email:string  
node_modules\.bin\sequelize model:generate --name Manufacturers --attributes name:string  
node_modules\.bin\sequelize model:generate --name Models --attributes name:string,manufacturer_id:integer  
