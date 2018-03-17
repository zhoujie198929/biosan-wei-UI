var gulp = require('gulp');
var less = require('gulp-less');
var fs = require('fs-extra');
const chalk = require('chalk');
// clean = require('gulp-clean');
var parseArgs = require('minimist')(process.argv);
var cssmin = require('gulp-clean-css');
var rename = require('gulp-rename');
var path = require('path');
var _fs = require('fs');
var rimraf = require('rimraf');

const cwd = process.cwd();
const filePath = require("./config");

let { dist } = parseArgs;

gulp.task('build', function (err) {
    //同步
    fs.emptyDirSync(filePath.dist);
    // rimraf.sync(dist);
    copyFile(filePath.src,filePath.dist);

    return gulp.src(['../components/**/*.less','!../components/**/_*.less'])
    .pipe(less())
    //压缩css
    // .pipe(cssmin())
    .pipe(rename((path) => {
        //修改文件后缀
        path.extname = '.wxss';
      }))
	.pipe(gulp.dest(filePath.dist));
});

gulp.task('weichatWebsite',['build'],function(){
    fs.emptyDirSync(filePath.weichatDemo);
    //copy 打包后的文件至weichatDemo
    copyFile(filePath.dist,filePath.weichatDemo);
})

//warcher
var watcher = gulp.watch('../components/**/*.less', ['weichatWebsite']);

watcher.on('change', function(event) {
  console.log('\n'+'File ' + event.path + ' was ' + event.type + ', running tasks...'+'\n');
});

function copyFile(source,target){
    fs.copySync(source, target, {
        filter(src) {
          const extname = path.extname(src);
          return ['.less'].indexOf(extname) < 0;
        }
      });
}