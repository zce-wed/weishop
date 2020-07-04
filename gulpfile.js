// 导入gulp模块
const gulp = require('gulp');
// 删除目录模块
const del = require('del');
// 自动补齐css前缀模块
const autoprefixer = require('gulp-autoprefixer');
// 压缩html模块
const htmlmin = require('gulp-htmlmin');
// es6=>es5
const babel = require('gulp-babel');
// css压缩模块
const cssmin = require('gulp-cssmin')
//js压缩模块
const jsmin = require('gulp-uglify')
//服务器模块
const server = require('gulp-webserver');
//写入模块
const { dest } = require('gulp');
//sass模块
const sass = require('gulp-sass')
//images处理
const imagesHandler = ()=>{
    return gulp.src('./src/image/*.*')
    .pipe(gulp.dest('./dist/image'))
}
//移除目录
const delHandler = () =>{
    return del(['./dist'])
}
//lib 移动规则
const libHandler = () =>{
    return gulp.src('./src/lib/**')
    .pipe(gulp.dest('./dist/lib'))
}
//font移动规则
const fontHandler = ()=>{
    return gulp.src('./src/font/**')
    .pipe(gulp.dest('./dist/font'))
}
//html 处理规则
const htmlHandler = ()=>{
    return gulp.src('./src/pages/*.html')
    .pipe(htmlmin(
        {   
            
            removeAttributeQuotes:true, //移出属性上的引号
            collapseBooleanAttributes:true, //把值为布尔值的属性简写
            minifyCSS:true,//把页面里面style标签里面的css样式也去空格
            minifyJS:true,//把页面里面script标签里面的js代码也去空格
            collapseWhitespace:true, //移出空格
            removeComments:true,//删除注释


        }
    ))
    .pipe(gulp.dest('./dist/pages'))
}
//css 处理规则
const cssHandler = ()=>{
    return gulp.src('./src/css/*.css')
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
}
// sass处理规则
const sassHandler = ()=>{
    return gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
}
//js 处理规则
const jsHandler = ()=>{
    return gulp.src('./src/js/*')
    .pipe(babel(
       {
        presets: ['@babel/env']
       }
    ))
    .pipe(jsmin())
    .pipe(dest('./dist/js'))
}
//服务器处理
const serverHandle =()=>{
    console.log('服务器已开启,请访问http://127.0.0.1:8980访问');
    return gulp.src('./dist')
    .pipe(
        server(
            {
                port:8090,
                open:'/pages/index.html',
                livereload:true
            }
        )
    )
   
} 
//监听处理
const watchHandle = ()=>{
    gulp.watch('./src/css/*.css',cssHandler);
    gulp.watch('./src/image/*.*',imagesHandler)
    gulp.watch('./src/pages/*.html',htmlHandler)
    gulp.watch('./src/js/*.js',jsHandler)
    gulp.watch('./src/lib/*',libHandler)
    gulp.watch('./src/sass/*.scss',sassHandler)

}

module.exports.default = gulp.series(
    delHandler,
    gulp.parallel(
        imagesHandler,
        libHandler,
        cssHandler,
        htmlHandler,
        jsHandler,
        fontHandler,
        sassHandler
    ),
    serverHandle,
    watchHandle


)