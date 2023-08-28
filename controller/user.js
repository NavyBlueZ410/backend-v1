const {response,processData} = require('../midleware/midleware')

const createUser = async(req,res) => {
    const {
        username,
        password,
        pname,
        fname,
        lname,
        nickname,
        phone,
        status_user
    } = req.body

    if(!username){
        return response(res,400,"กรุณากรอก username")
    }
    if(!password){
        return response(res,400,"กรุณากรอก password")
    }
    if(!pname){
        return response(res,400,"กรุณากรอก คำนำหน้า ชื่อ")
    }
    if(!fname){
        return response(res,400,"กรุณากรอก ชื่อ")
    }
    if(!lname){
        return response(res,400,"กรุณากรอก นามสกุล")
    }
    if(!nickname){
        return response(res,400,"กรุณากรอก ชื่อเล่น")
    }
    if(!phone){
        return response(res,400,"กรุณากรอก เบอร์โทรศัพท์")
    }
    if(!phone){
        return response(res,400,"กรุณากรอก เบอร์โทรศัพท์")
    }
    if(!status_user){
        return response(res,400,"กรุณากรอก สถานะผู้ใช้")
    }

    let sql_insert = `INSERT INTO user(
        username,
        password,
        pname,
        fname,
        lname,
        nickname,
        phone,
        status_user
        ) VALUES (?,?,?,?,?,?,?,?)`
    let value_insert = [
        username,
        password,
        pname,
        fname,
        lname,
        nickname,
        phone,
        status_user
    ]

    const insertUser = await processData(sql_insert,value_insert)
    if(insertUser){
        return response(res,200,"สมัครสมาชิกสำเร็จ")
    }else{
        return response(res,500,"เกิดข้อผิดพลาด")
    }
}

const getUser = async(req,res) => {
    let sql_query = "SELECT * FROM user";
    
    const getUser = await processData(sql_query)

    if(getUser){
        return response(res,200,"สำเร็จ",getUser)
    }else{
        return response(res,500,"เกิดข้อผิดพลาด")
    }

}

const updateUser = async(req,res) => {
    const {
        pname,
        fname,
        lname,
        nickname,
        phone,
        status_user,
        id_user
    } = req.body

    if(!id_user){
        return response(res,400,"กรุณากรอก id_user")
    }
    if(!pname){
        return response(res,400,"กรุณากรอก คำนำหน้า ชื่อ")
    }
    if(!fname){
        return response(res,400,"กรุณากรอก ชื่อ")
    }
    if(!lname){
        return response(res,400,"กรุณากรอก นามสกุล")
    }
    if(!nickname){
        return response(res,400,"กรุณากรอก ชื่อเล่น")
    }
    if(!phone){
        return response(res,400,"กรุณากรอก เบอร์โทรศัพท์")
    }
    if(!phone){
        return response(res,400,"กรุณากรอก เบอร์โทรศัพท์")
    }
    if(!status_user){
        return response(res,400,"กรุณากรอก สถานะผู้ใช้")
    }

    let sql_update = `UPDATE user SET 
    pname = ?,
    fname = ?,
    lname = ?,
    nickname = ?,
    phone = ?,
    status_user = ?
    WHERE id_user = ? `

    let value_update = [
        pname,
        fname,
        lname,
        nickname,
        phone,
        status_user,
        id_user
    ]

    const updateUser = await processData(sql_update,value_update)
    if(updateUser){
        return response(res,200,"อัพเดพข้อมูลสำเร็จ")
    }else{
        return response(res,500,"เกิดข้อผิดพลาด")
    }
}

const deleteUser = async(req,res) => {
    const id_user = req.query['id_user']

    if(!id_user){
        return response(res,400,"กรุณากรอก id_user")
    }

   let sql_delete = "DELETE FROM user WHERE id_user = ?"
   let value_delete = [id_user]

   const deleteUser = await processData(sql_delete,value_delete)
   if(deleteUser){
       return response(res,200,"ลบข้อมูลสำเร็จ")
   }else{
       return response(res,500,"เกิดข้อผิดพลาด")
   }
}


module.exports = {createUser,getUser,updateUser,deleteUser}