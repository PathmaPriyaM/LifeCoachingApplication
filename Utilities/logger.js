const fs=require('fs');
const {promisify}=require('util');
const appendFile=promisify(fs.appendFile);

async function logger(req,res,next){
    try{
        const message=`${new Date()} - ${req.url} - ${req.method} \n`;
        await appendFile('logger.txt',message);
        next();
    }catch(err){
        next(err);
    }
}

module.exports=logger;