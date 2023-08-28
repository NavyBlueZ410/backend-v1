const db = require('../database/connect')

const response = (res,code,message,result) => {
    let result_json = {
        code: code,
        message: message,
        result: result
    }

    return res.status(200).json(result_json)
}
const processData = (sql,value) => {
    return new Promise(resolve =>{
        db.query(sql,value,(err,result) => {
            if(err){
                resolve(false)
            }else{
                resolve(result)
            }
        })
    })
} 

module.exports = {response,processData}
