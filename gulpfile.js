const gulp = require('gulp');
const zip = require('gulp-zip');
const markdownPDF = require('gulp-markdown-pdf');
const del = require('del');
const path = require('path');
const { exec } = require('gulp-execa');

const { series } = gulp;

const cssPath = path.join(__dirname, 'css.css');

function runTest(cb) {
  return exec('jest');
}

function makePDF(cb) {
  return gulp
    .src('*.md')
    .pipe(
      markdownPDF({
        cssPath: cssPath,
        paperBorder: '0px',
        paperFormat: 'A4',
      })
    )
    .pipe(gulp.dest('temp'));
}

function zipUserContent(cb) {
  return gulp
    .src('user-submitted-content/*')
    .pipe(zip('Elder Souls - User Submitted Content.zip'))
    .pipe(gulp.dest('out'));
}

function zipModlist(cb) {
  return gulp
    .src('temp/*')
    .pipe(gulp.src('in/*', { allowEmpty: true }))
    .pipe(zip('Elder Souls.zip'))
    .pipe(gulp.dest('out'));
}

function cleanOutput(cb) {
  return del('out');
}

function cleanTemp(cb) {
  return del('temp');
}

exports.testPDF = series(makePDF);
exports.build = series(
  cleanOutput,
  zipUserContent,
  makePDF,
  zipModlist,
  cleanTemp
);
