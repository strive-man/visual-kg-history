//测试代码专用文件
//
// const NodeRSA = require('node-rsa');
// const key = new NodeRSA({b: 512});
// const publicDer = key.exportKey('pkcs8-public');
// const privateDer = key.exportKey('pkcs8-private');
// console.log(publicDer);
// console.log(privateDer)
// const text = '123456';
// const encrypted = key.encrypt(text, 'base64');
// console.log('encrypted: ', encrypted);
// const decrypted = key.decrypt(encrypted, 'utf8');
// console.log('decrypted: ', decrypted);
//
// const crytpo = require('crypto');
// let hmac = crytpo.createHmac("sha256", "TUST");
// let encryptPassword = hmac.update("asdsdf&^*555").digest("Base64");
// console.log(encryptPassword);

// const { v1: uuidv1 } = require('uuid');
// const xlsx = require("xlsx");
// console.log(uuidv1());
//
// let filePath = "D:\\WorkSpace\\WebSpace\\visual-kg-histroy\\server\\upload\\xlsx\\949e4460-2c1c-11ed-a510-73f71ac507b8_3657688.xlsx"
// const workbook = xlsx.readFile(filePath);
// const sheet_name_list = workbook.SheetNames;
// const xlData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
// let data = [];
// console.log(xlData)
obj = {
    1:{
        id:1,
        name:'a',
    },
    2:{
        id:2,
        name:'b'
    }
};
console.log(JSON.stringify(obj));

