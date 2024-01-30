
// 获取视频元素
var varVideo = document.getElementById("myVideo");
var varDivMain = document.getElementById("idVideoDiv");
var varMenuDiv = document.getElementById("pauseDiv");
var varMenuPausePic = document.getElementById("pausePic");
var varTextDebug = document.getElementById("debugText");
var isVideoPaused = varVideo.paused;
var isLandscape = false;
var isShow = false;//展示菜单

// *****************
function ToLandscape() {
    // varVideo.style.width = screen.height + "px";
    // varVideo.style.height = screen.width   + "px";
    varVideo.style.transform="rotate(90DEG)";
    isLandscape = true;

}
function BackFromLandscape() {
    // varVideo.style.width = window.innerWidth + "px";
    // varVideo.style.height = window.innerHeight + "px";
    // varVideo.style.width =screen.width + "px";
    // varVideo.style.height = screen.height  + "px";
    varVideo.style.transform="rotate(0)";
    isLandscape = false;

}
function PauseVideo() {
    varVideo.pause();
    isVideoPaused = true;
}
function ContinueVideo() {
    varVideo.play();
    isVideoPaused = false;
}
function CloseMenu() {
    varMenuDiv.style.display = 'none';
    isShow = false;
}
function OpenMenu() {
    varMenuDiv.style.display = 'block';
    isShow = true;
}
// varVideo.style.left = "50%";
// varVideo.style.top = "50%";
// varVideo.style.transform+="translate(-50%, -50%);";


// varDivMain.style.width = screen.width + "px";
// varDivMain.style.height =  screen.height + "px";

// *****************
CloseMenu();
BackFromLandscape();
varTextDebug.innerHTML=window.innerWidth;
// 视频双击暂停播放
varVideo.addEventListener("dblclick", function () {
    if (isVideoPaused) {
        ContinueVideo();
    } else {
        PauseVideo();
    }
});
// 视频单机出菜单
varVideo.addEventListener("click", function () {
    if (isShow) {
        CloseMenu();
    } else {
        OpenMenu();
    }
});
// 单机中间继续播放
varMenuPausePic.addEventListener("click", function () {
    if (isVideoPaused) {
        ContinueVideo();
        CloseMenu();
    }
});

document.getElementById("turnscreen-button").addEventListener("click", function () {
    if (isLandscape) {
        BackFromLandscape();
    }
    else {
        ToLandscape();
    }
});

// 全屏按钮
document.getElementById("fullscreen-button").addEventListener("click", function () {
    if (varDivMain.requestFullscreen) {
        varDivMain.requestFullscreen();
    }
    else if (varDivMain.mozRequestFullScreen) {
        // Firefox
        varDivMain.mozRequestFullScreen();
    }
    else if (varDivMain.webkitRequestFullscreen) {
        // Chrome, Safari and Opera
        varDivMain.webkitRequestFullscreen();
    }
    else if (varDivMain.msRequestFullscreen) {
        // IE/Edge
        varDivMain.msRequestFullscreen();
    };
    ToLandscape();
    // varTextDebug.innerHTML=window.innerWidth+"cnmm"+window.innerHeight;
});