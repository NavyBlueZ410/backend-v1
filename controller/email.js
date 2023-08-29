const {response,processData} = require('../midleware/midleware')
const nodeMiler = require('nodemailer')
var jwt = require('jsonwebtoken');

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

    const mainOptions = {
        from: 'BlueZ <siriwan612542@gmail.com>',
        to: email,
        subject:'Test send Email',
        html:test,
    }

    transporter.sendMail(mainOptions, (err,info) => {
        if(err){
            return response(res,500,"เกิดข้อผิดพลาด")
        }else{
            return response(res,200,"ส่งข้อมูลไปทาง email คุณ เรียบร้อยแล้ว")
        }
    })
}

const genToken = (req, res) => {
    const secretKey = 'a';
    const user = {
      id: 123,
      username: 'dear'
    };
  
    // Create a JWT token with a 10-second expiration time
    const token = jwt.sign(user, secretKey, { expiresIn: '10s' });
  
    res.json({ token });
  };
  
  const verifyToken = (req, res) => {
    const secretKey = 'a';
    const token = req.headers['authorization'];
    console.log(token);
    
    if (!token) {
      return res.status(403).json({ message: 'Token not provided.' });
    }
  
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token.' });
      }
  
      const currentTimestamp = Math.floor(Date.now() / 1000);
      if (decoded.exp && decoded.exp < currentTimestamp) {
        return res.status(401).json({ message: 'Token has expired.' });
      }
  
    //   req.user = decoded;
    //   next();
    });
  };

module.exports = {main,genToken,verifyToken}