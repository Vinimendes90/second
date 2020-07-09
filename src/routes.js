import {Router} from 'express'
 import Spreeds from './app/models/Spreeds'
import SpreedsController from './app/controllers/SpreedsController'
import multer from 'multer';
import multerConfig from './config/multer';
const readXlsxFile = require('read-excel-file/node');
// import mysql from 'mysql';
const routes = new Router()
const upload = multer(multerConfig)

routes.post('/spreeds', SpreedsController.store);

routes.get('/spreeds', SpreedsController.index)



routes.post('/files', upload.single('file'), (req, res) => {
    importExcelData2MySQL(__dirname + '/tmp/uploads/' + req.file.filename)
    res.json({
        'msg': 'File upload', 'file': req.file
    })
    
    const connection = mysql.createConnection({
       host: 'localhost',
       user: 'root',
       password: 'roots',
       database: 'excel',
       port: '3306'
    });  
    function importExcelData2MySQL(filePath) {
        readXlsxFile(filePath).then((rows) => {console.log(rows) 
                    rows.shift()
                    connection.query('INSERT INTO spreeds (address, name, age, data) VALUES ?', [rows], (error, response) => {
                    console.log(error || response);                    
            })})}
})
 routes.get('/', async (req, res) => {
    const spreeds = await Spreeds.create({
        name: "Vinicius",
        address: "Rua Icarai",
    })
    return res.json(spreeds)
 }) 

 export default routes;