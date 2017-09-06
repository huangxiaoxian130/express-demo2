var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (request, response) {
  // 获取用户想要访问第几页
  let page = request.query.page || 1

  let db = [
    {title: '标题1', content: '正文1文字很多'},
    {title: '标题2', content: '正文2文字很多'},
    {title: '标题3', content: '正文3文字很多'},
    {title: '标题4', content: '正文4文字很多'},
    {title: '标题5', content: '正文5文字很多'},
    {title: '标题6', content: '正文6文字很多'},
    {title: '标题7', content: '正文7文字很多'},
    {title: '标题8', content: '正文8文字很多'},
    {title: '标题9', content: '正文9文字很多'},
    {title: '标题10', content: '正文10文字很多'},
    {title: '标题11', content: '正文11文字很多'},
    {title: '标题12', content: '正文12文字很多'},
    {title: '标题13', content: '正文13文字很多'},
    {title: '标题14', content: '正文14文字很多'},
    {title: '标题15', content: '正文15文字很多'},
    {title: '标题16', content: '正文16文字很多'},
    {title: '标题17', content: '正文17文字很多'},
    {title: '标题18', content: '正文18文字很多'},
    {title: '标题19', content: '正文19文字很多'},
    {title: '标题20', content: '正文20文字很多'},
    {title: '标题21', content: '正文21文字很多'},
    {title: '标题22', content: '正文22文字很多'},
    {title: '标题23', content: '正文23文字很多'},
    {title: '标题24', content: '正文24文字很多'},
    {title: '标题25', content: '正文25文字很多'},
    {title: '标题26', content: '正文26文字很多'},
    {title: '标题27', content: '正文27文字很多'},
    {title: '标题28', content: '正文28文字很多'},
    {title: '标题29', content: '正文29文字很多'},
    {title: '标题30', content: '正文30文字很多'},
    {title: '标题31', content: '正文31文字很多'},
    {title: '标题32', content: '正文32文字很多'},
    {title: '标题33', content: '正文33文字很多'},
    {title: '标题34', content: '正文34文字很多'},
    {title: '标题35', content: '正文35文字很多'},
    {title: '标题36', content: '正文36文字很多'},
    {title: '标题37', content: '正文37文字很多'},
    {title: '标题38', content: '正文38文字很多'},
    {title: '标题39', content: '正文39文字很多'},
    {title: '标题40', content: '正文40文字很多'},
    {title: '标题41', content: '正文41文字很多'},
    {title: '标题42', content: '正文42文字很多'},
    {title: '标题43', content: '正文43文字很多'},
    {title: '标题44', content: '正文44文字很多'},
    {title: '标题45', content: '正文45文字很多'},
    {title: '标题46', content: '正文46文字很多'},
    {title: '标题47', content: '正文47文字很多'},
    {title: '标题48', content: '正文48文字很多'},
    {title: '标题49', content: '正文49文字很多'},
    {title: '标题50', content: '正文50文字很多'}
  ]
  // page=1
  // let data=db.slice(0,10)
  // page=n
  let data = {
    articles: db.slice(10 * (page - 1), 10 * page),
    totalPage:Math.ceil(db.length/10),
    currentPage:page
  }
  // 将文件的路径、数据传入
  response.render('home', data);
});

app.listen(3000);
console.log('server started')