const {ConnectMysql} = require("./util");

async function getExamResultForKG(examID){
    let sql = "SELECT quiz_save.quiz_question FROM exam_log,quiz_save WHERE quiz_save.quiz_id = exam_log.quiz_id " +
        "AND exam_log.exam_submit_id = " + `'${examID}'` +
        "AND quiz_save.quiz_A !=exam_log.quiz_answer"
    let res = await ConnectMysql(sql);
    let person = [];
    for (let i = 0; i < res.length; i++) {
        let log = res[i]['quiz_question'];
        let p1 = log.split("与")[0];
        let p2 = log.split("与")[1].split("的")[0];
        person.push([p1,p2]);
    }
    return person;
}

exports.getExamResultForKG = getExamResultForKG;
