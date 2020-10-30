var mongoose = require('mongoose');  
//DB에 저장할 데이터 스키마 지정
var UserSchema = new mongoose.Schema({  
    stdNumb:String,
    stdName:String,
});
mongoose.model('stdInfo', UserSchema);
//모듈화
module.exports = mongoose.model('stdInfo');