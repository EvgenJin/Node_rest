# Node_rest
This is rest api by node js with jwt authentification, role-based route control on sqlite3 and mock tests api endpoints

npm install  
npm start  
send request to localhost:3000/api/...

to test  
npm test

win7
node_modules\.bin\sequelize migration:generate --name user_add_name  
node_modules\.bin\sequelize db:migrate  
node_modules\.bin\sequelize model:generate --name Products --attributes model:string,manufacturer_id:integer,serial_num:string,inventory_num:string,ip_addr:string,store_id:integer  
node_modules\.bin\sequelize model:generate --name Stores --attributes name:string,address:integer,chief_name:string,telephone:string,email:string  
node_modules\.bin\sequelize model:generate --name Manufacturers --attributes name:string  
node_modules\.bin\sequelize model:generate --name Models --attributes name:string,manufacturer_id:integer  