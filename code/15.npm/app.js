/* 
제목 : 사진 폴더 정리 Script 생성
요구사항
  1. 동영상 (mp4), 이미지 (png) 파일들이 함께 있는 폴더를 각 동영상과 이미지를 분리하여 관리
  2. 동영상 파일은 video 폴더에 png 파일은 capture 폴더에 각 이동하여 정리
*/

const fs = require('fs');
const process = require('process');
const path = require('path');

// 실행하는 명령어의 매개변수를 받아 workingDir 로 설정하여 하위폴더로 video, capture 폴더 생성
const folder = process.argv[2];
const workingDir = path.join(process.cwd(), folder);
const videoDIr = path.join(workingDir, 'video');
const captureDir = path.join(workingDir, 'capture');

if(!fs.existsSync(workingDir)) fs.mkdirSync(workingDir);
if(!fs.existsSync(videoDIr)) fs.mkdirSync(videoDIr); // existsSync 경로의 존재 유무에 따라 true, false 값 반환
if(!fs.existsSync(captureDir)) fs.mkdirSync(captureDir); // 부정의 뜻인 ! 를 줌으로 false 값을 반환시켜 없을때의 조건을 완성시켜서 폴더 생성

// 현재 경로의 모든 파일을 읽음
fs.promises.readdir(workingDir)
.then((files) => {
  fileCheck(files);
})
.catch(console.error)

// 파일 체크 후 이동
function fileCheck(files) {

  files.forEach(file => {
    if(isVideoFile(file)){
      // video 폴더로 파일 이동시킴
      move(file, videoDIr);
    } else if (isImgFile(file)) {
      // capture 폴더로 파일 이동시킴
      move(file, captureDir);
    }
  })
}

// 파일 이동
function move(file, targetDir) {
  const oldPath = path.join(workingDir, file);
  const newPath = path.join(targetDir, file);

  fs.promises.rename(oldPath,newPath)
  .then(console.log('이동 완료'))
  .catch(console.error)
}

// video 파일 여부 체크
function isVideoFile(file) {
  const videoParsed = path.parse(file);

  if(videoParsed.ext == '.mp4') return true;
}

// img 파일 여부 체크
function isImgFile(file) {
  const imgParsed = path.parse(file);

  if(imgParsed.ext == '.png') return true;
}
