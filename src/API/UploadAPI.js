var express = require('express');
var router = express.Router();
var db = require('sql.js');
var multiparty = require('multiparty');
var fs = require("fs")

/* Coonect with the Upload new movement page. */
router.post('/', function(req, res, next) {

    var form = new multiparty.Form();
    //上传的图片需要保存某一个目录,目录必须存在
    form.uploadDir = './public/upload';
    form.parse(req,function(err,fields,files){
        if (err){
            console.log('Error occurred: ' + err);
        }
        else{
            const title = fields.titlename[0];
            const link = fields.linkurl[0];
            const des = fields.description[0];
            const tag = fields.tags[0]
            // 保存 JSON 文件
            const file  = fields.jsonFile[0];
            const file_path = './uploads/file/' + file.originalFilename;
            fs.renameSync(file.path, file_path);


            // if (files.jsonFile) {
            //     const jsonFile = files.jsonFile[0];
            //     const jsonPath = './uploads/' + jsonFile.originalFilename;
            //     fs.renameSync(jsonFile.path, jsonPath);
            //     console.log(`保存 JSON 文件成功：${jsonPath}`);
            // }


            //存入本地文件
            //上传图片的路径
            const imageFile = files.imageFile[0];
            const imagePath = './uploads/photo' + imageFile.originalFilename;
            fs.renameSync(imageFile.path, imagePath);

            // if (files.imageFile) {
            //     const imageFile = files.imageFile[0];
            //     const imagePath = './uploads/' + imageFile.originalFilename;
            //     fs.renameSync(imageFile.path, imagePath);
            //     console.log(`保存图片文件成功：${imagePath}`);
            // }
            // console.log( imgName );
            db.query('insert into tablename value (?,?,?,?,?)',[0,title,des,link,tag,file.originalFilename,imageFile.originalFilename],function(err,data){

                if( err ){
                    throw err;
                }else{
                    db.query('select * from banner',function (err,data) {

                        var pager = {};
                        //当前第几页，默认第一页
                        pager.pageCurrent = 1;
                        //总的记录数
                        pager.maxNum = data.length;
                        //每页显示多少条记录
                        pager.pageSize = 5;
                        //一共有多少页
                        pager.pageCount = parseInt(Math.ceil(pager.maxNum / pager.pageSize));
                        //修改了传递的数据数量
                        var dataList = data.slice( (pager.pageCurrent-1) * pager.pageSize , (pager.pageCurrent-1) * pager.pageSize + pager.pageSize );

                        if( err ){
                            throw err;
                        }else{
                            res.render('bannerList',{
                                bannerList:dataList,
                                pager:pager
                            })
                        }

                    })
                }
            })
        }


    })


});


module.exports = router;