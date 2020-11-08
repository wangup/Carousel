/*1.获取元素*/
const prev=document.querySelector('#prev');
const next=document.querySelector('#next');

const slides=document.querySelectorAll(".slide");

var currentIndex=0;/*设置当前正在播放图片的下标*/

var autoPlay=true;
var forward=true;
var interval=5000;



next.addEventListener('click' ,handleNextClicked);
prev.addEventListener('click',handlePrevClicked);

if (autoPlay){
    setInterval(forward?handleNextClicked:handlePrevClicked,interval)
}


/*原生js-操作类名HTML新增classList
* classList.add( newClassName )；添加新的类名，如已经存在，取消添加
* classList.remove( oldClassName )；移除已经存在的类名;
* */
function handleNextClicked(){
    let current1=slides[currentIndex];/*保存正在播放的幻灯片*/
    current1.classList.remove("current");/*删除这张幻灯片*/

    currentIndex++;
    if (currentIndex>=slides.length){
        currentIndex=0;
    }

    slides[currentIndex].classList.add("current");/*添加下一章图片的属性*/
}

function handlePrevClicked(){
    let current2=slides[currentIndex];
    current2.classList.remove("current");

    currentIndex--;
    if (currentIndex<0){
        currentIndex=slides.length-1;
    }
    slides[currentIndex].classList.add("current");
}