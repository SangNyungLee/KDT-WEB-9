const {Student, StudentProfile, Classes} = require('../models/')

exports.main = (req, res)=>{
    res.render('index');
}

exports.post_student = async (req, res)=>{
    try {
        //객체 구조분해할당
        const {userid, password, email, name, major} = req.body
        const user = await Student.create({
            userid,
            password,
            email,
            studentProfile : {
                name,
                major,
            },
        },{
            include: StudentProfile,
            //[{model : StudentProfile}]
        }
        );
        console.log(user)
        res.send(user)
    } catch (error) {
        console.log(error)
    }
}
// 위에는 회원가입
// 밑에는 로그인이 되었다고 가정하고 작성하는거임
//http 통신 요청 -> 응답 끝
// 내가 원하는 정보를 얻을 때는 헤더에 회원정보를 담아서 누군지 알려주고 받아야된다.(정보 찾고 -> 줌 -> 끝)
// 
exports.post_class = async (req, res)=>{
    try {
        const {name, room, code, teacher_name, studentId} = req.body; 
        const classes =  await Classes.create({
            name,
            room,
            code,
            teacher_name,
            studentId,
        });
        res.send(classes);
    } catch (error) {
        console.log(error)
    }
}

exports.get_student = async(req, res)=>{
    try {
        /*
        include : 쿼리를 실행할 때 관련된 모델의 데이터로 함께
        조회할 수 있도록 하는 옵션
        */
        const student = await Student.findAll({
            attributes: ['id','userid','email'],
            include: [{model:StudentProfile, attributes:['major','name']}],
        })
        res.send(student)
    } catch (error) {
        console.log(error)
    }
}