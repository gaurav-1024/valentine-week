let img=document.getElementById("image");
let m_text=document.getElementById("main_text");
let dummy=document.getElementById("dummy_main");
let pic=document.getElementById("main_image");
// all buttons
let btn1=document.getElementById("side_btn1");
let btn2=document.getElementById("side_btn2");
let btn3=document.getElementById("side_btn3");
let btn4=document.getElementById("side_btn4");
let btn5=document.getElementById("side_btn5");
let btn6=document.getElementById("side_btn6");
let btn7=document.getElementById("side_btn7");
let btn8=document.getElementById("side_btn8");
let rose,perpose;
let chocolate,teddy,promise,hug;

 let audio=document.getElementById("audio");
 let welcome=document.getElementById("welcome_txt");
 
function roseday(){

    clearInterval(rose);
    welcome.style.display="none";
    audio.src="rose_day1.mp3";
    audio.volume=0.2;
    // dummy main to set the background blur
    dummy.style.background="url(rose_circle.jpeg)";

    dummy.style.filter="blur(5px)";
    dummy.style.backgroundSize="100% 100%";

    img.style.display="block";
    m_text.style.display="flex";

    // to change image
    pic.src="day1_img1.png";
    rose=setInterval(function(){
        let pic1=pic.getAttribute("src");
        
        if(pic1=="day1_img3.png"){
            pic.animate([{opacity:0},{opacity:1}],{duration:1600});
            pic.src="day1_img1.png";
        }
        else if (pic1=="day1_img1.png"){
            pic.animate([{opacity:0},{opacity:1}],{duration:1600});
            pic.src="day1_img2.jpg";
        }
        else if (pic1=="day1_img2.jpg"){
            pic.animate([{opacity:0},{opacity:1}],{duration:1600});
            pic.src="day1_img3.png";

        }
    },3600)
    m_text.innerText="Happy Rose Day Meri Jaan.. ";
    // console.log("this is last");
}
function perposeday(){
    clearInterval(perpose)
    document.getElementById("welcome_txt").style.display="none";
    audio.src="day2_audio.mpeg";
    audio.volume=0.2;
    // dummy main to set the background blur
    dummy.style.background="url(pdaybg1.jpg)";
    dummy.style.filter="blur(2px)";
    dummy.style.backgroundSize="100% 100%";

    img.style.display="block";
    m_text.style.display="flex";

    // to change image
    pic.src="day2_img1.jpg";
    perpose=setInterval(function(){
        let pic1=pic.getAttribute("src");
        
        if(pic1=="day2_img3.png"){
            pic.animate([{opacity:0},{opacity:1}],{duration:1900});
            pic.src="day2_img1.jpg";
        }
        else if (pic1=="day2_img1.jpg"){
            pic.animate([{opacity:0},{opacity:1}],{duration:1900});
            pic.src="day2_img2.jpg";
        }
        else if (pic1=="day2_img2.jpg"){
            pic.animate([{opacity:0},{opacity:1}],{duration:1900});
            pic.src="day2_img3.png";
        }
    },3600)
    m_text.innerHTML="I Love you<br> Meri Jaan.. ";
    m_text.style.fontSize="100px";
}
function chocolateday(){
    clearInterval(chocolate)
    document.getElementById("welcome_txt").style.display="none";
    audio.src="day3_audio.mpeg";
    audio.volume=0.2;
    // dummy main to set the background blur
    dummy.style.background="url(chocolate_day_bg.jpg)";
    dummy.style.filter="blur(4px)";
    dummy.style.backgroundSize="100% 100%";

    img.style.display="block";
    m_text.style.display="flex";

    // to change image
    pic.src="day3_img1.png";
    chocolate=setInterval(function(){
        let pic1=pic.getAttribute("src");

        if(pic1=="day3_img3.png"){
            pic.animate([{opacity:0},{opacity:1}],{duration:1900});
            pic.src="day3_img1.png";
        }
        else if (pic1=="day3_img1.png"){
            pic.animate([{opacity:0},{opacity:1}],{duration:1900});
            pic.src="day3_img2.png";
        }
        else if (pic1=="day3_img2.png"){
            pic.animate([{opacity:0},{opacity:1}],{duration:1900});
            pic.src="day3_img3.png";
        }
    },3600)
    m_text.innerHTML="Happy Chocolate Day<br> Meri Jaan.. ";
    //m_text.style.fontSize="100px";
}
function teddyday(){
    clearInterval(teddy)
    document.getElementById("welcome_txt").style.display="none";
    audio.src="teddy_day_audio.mp3";
    audio.volume=0.2;
    // dummy main to set the background blur
    dummy.style.background="url(teddy_day_bg1.jpg)";
    dummy.style.filter="blur(4px)";
    dummy.style.backgroundSize="100% 100%";

    img.style.display="block";
    m_text.style.display="flex";

    // to change image
    pic.src="day4_img1.png";
    teddy=setInterval(function(){
        let pic1=pic.getAttribute("src");

        if(pic1=="day4_img3.png"){
            pic.animate([{opacity:0},{opacity:1}],{duration:1900});
            pic.src="day4_img1.png";
        }
        else if (pic1=="day4_img1.png"){
            pic.animate([{opacity:0},{opacity:1}],{duration:1900});
            pic.src="day4_img2.png";
        }
        else if (pic1=="day4_img2.png"){
            pic.animate([{opacity:0},{opacity:1}],{duration:1900});
            pic.src="day4_img3.png";
        }
    },3800)
    m_text.innerHTML="Happy Teddy Day<br> Meri Jaan.. ";
    //m_text.style.fontSize="100px";
}
function promiseday(){
    clearInterval(promise)
    document.getElementById("welcome_txt").style.display="none";
    audio.src="promise_day_audio.mp3";
    audio.volume=0.2;
    // dummy main to set the background blur
    dummy.style.background="url(promise_day1.jpg)";
    dummy.style.filter="blur(2px)";
    dummy.style.backgroundSize="100% 100%";

    img.style.display="block";
    m_text.style.display="flex";

    // to change image
    pic.src="day5_img1.png";
    promise=setInterval(function(){
        let pic1=pic.getAttribute("src");

        if(pic1=="day5_img3.png"){
            pic.animate([{opacity:0},{opacity:1}],{duration:1900});
            pic.src="day5_img1.png";
        }
        else if (pic1=="day5_img1.png"){
            pic.animate([{opacity:0},{opacity:1}],{duration:1900});
            pic.src="day5_img2.png";
        }
        else if (pic1=="day5_img2.png"){
            pic.animate([{opacity:0},{opacity:1}],{duration:1900});
            pic.src="day5_img3.png";
        }
    },3800)
    m_text.innerHTML="Happy Promise Day<br> Meri Jaan.. ";
    //m_text.style.fontSize="100px";
}
function hugday(){
    clearInterval(hug)
    document.getElementById("welcome_txt").style.display="none";
    audio.src="hug_day_audio.mpeg";
    audio.volume=0.2;
    // dummy main to set the background blur
    dummy.style.background="url(hug_day_bg1.jpg)";
    dummy.style.filter="blur(2px)";
    dummy.style.backgroundSize="100% 100%";

    img.style.display="block";
    m_text.style.display="flex";

    // to change image
    pic.src="day6_img1.png";
    hug=setInterval(function(){
        let pic1=pic.getAttribute("src");

        if(pic1=="day6_img3.png"){
            pic.animate([{opacity:0},{opacity:1}],{duration:1900});
            pic.src="day6_img1.png";
        }
        else if (pic1=="day6_img1.png"){
            pic.animate([{opacity:0},{opacity:1}],{duration:1900});
            pic.src="day6_img2.png";
        }
        else if (pic1=="day6_img2.png"){
            pic.animate([{opacity:0},{opacity:1}],{duration:1900});
            pic.src="day6_img3.png";
        }
    },3800)
    m_text.innerHTML="Happy Hug Day<br> Meri Jaan.. ";
    m_text.style.color="brown";
}

function no_day(){

    img.style.display="none";
    m_text.style.display="none";
    welcome.style.display="block";
    welcome.style.fontSize="30px";
    welcome.style.fontFamily="side_font";
    welcome.innerHTML="Not Now<br>Jiska jo Din h usi din<br><br><div style='text-align:left;margin-left:500px;'>Check Dates:-<br>7th feb -Rose Day<br>8th feb -Propose Day<br>9th feb - Chocolate Day<br>10th feb -Teddy Day <br>11th feb - Promise Day <br> 12th feb -Hug Day <br> 13th feb - Kiss Day<br> 14th feb - Valentine's Day</div>";
    dummy.style.background="url(no_day_background.avif)";
    dummy.style.backgroundSize="100% 100%";
    console.log(this.nodeName);
    audio.src="";
}
