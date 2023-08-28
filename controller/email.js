const {response,processData} = require('../midleware/midleware')
const nodeMiler = require('nodemailer')
const { options } = require('../route/email')

const main = async(req,res) => {
    const { email } = req.body

    if(!email){
        return response(res,400,"กรุณากรอก email")
    }

    const test = `About Content......`

    const transporter = nodeMiler.createTransport({
        service:'gmail',
        auth:{
            user:'siriwan612542@gmail.com',
            pass:'zvjtsedhhweqmseu'
        }
    })

    const options = {
        from: 'siriwan612542@gmail.com',
        to: email,
        subject:'Test send Email',
        html:test,
    }

    transporter.sendMail(options, (err,info) => {
        if(err){
            return response(res,500,"เกิดข้อผิดพลาด")
        }else{
            return response(res,200,"ส่งข้อมูลไปทาง email คุณ เรียบร้อยแล้ว")
        }
    })

    


    
}

module.exports = {main}