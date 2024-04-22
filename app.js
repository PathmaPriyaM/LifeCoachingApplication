const express=require('express');
const bodyParser=require('body-parser');
const routing=require('./Router/routing');
const logger=require('./Utilities/logger');

const app=express();
app.use(logger);
app.use(bodyParser.json());
app.use('/',routing);

const port=process.env.PORT || 3002;
app.listen(port,()=>{
    console.log(`App Listening in Port ${port}....`);
})