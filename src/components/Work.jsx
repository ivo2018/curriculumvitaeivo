
import React, { useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
//import $ from 'jquery'; 
import folder from "../imgs/folder.png"
import skills from "../imgs/skills.png"
import about from "../imgs/about.png"
import message from "../imgs/message.png"
import "../components/Work.css"
import close from "../imgs/close-icon.png";
import photo from "../imgs/2-2.jpg";
import photo2 from "../imgs/2-0.jpg";

const Work = (/*{handleClick,setChange}*/) => {  
    const navigate=useNavigate();

    var isDragStart=false,prevPageX,prevScrollLeft;
    function draggindDown(){
        var carousel = document.querySelector(".carousel");
        if(carousel){
            carousel.addEventListener("mousedown",
            function(event){
                isDragStart=true;
                prevPageX=event.pageX ;
                prevScrollLeft=carousel.scrollLeft;
           
            });
            carousel.addEventListener("touchstart",
            function(event){
                isDragStart=true;
                prevPageX=event.touches[0].pageX;
                prevScrollLeft=carousel.scrollLeft;
           
            });
         
        }
        var carousel2 = document.querySelector(".carousel2");
        if(carousel2){
            carousel2.addEventListener("mousedown",
            function(event){
                isDragStart=true;
                prevPageX=event.pageX ;
                prevScrollLeft=carousel2.scrollLeft;
           
            });
            carousel2.addEventListener("touchstart",
            function(event){
                isDragStart=true;
                prevPageX=event.touches[0].pageX;
                prevScrollLeft=carousel2.scrollLeft;
           
            });
         
        }
    }
    function dragging(){
        var carousel = document.querySelector(".carousel");

      if(carousel){
    carousel.addEventListener("mousemove",
    function(event){
        if(!isDragStart) return;
        event.preventDefault();
        carousel.classList.add("dragging");
       let positionDiff= event.pageX - prevPageX;
       carousel.scrollLeft=prevScrollLeft-positionDiff;
        
    }

    );
    carousel.addEventListener("touchmove",
    function(event){
        if(!isDragStart) return;
        event.preventDefault();
        carousel.classList.add("dragging");
       let positionDiff= event.touches[0].pageX -prevPageX;
       carousel.scrollLeft=prevScrollLeft-positionDiff;
        
    }

    );}
    var carousel2 = document.querySelector(".carousel2");
    if(carousel2){
        carousel2.addEventListener("mousemove",
        function(event){
            if(!isDragStart) return;
            event.preventDefault();
            carousel2.classList.add("dragging2");
           let positionDiff= event.pageX - prevPageX;
           carousel2.scrollLeft=prevScrollLeft-positionDiff;
            
        }
    
        );
        carousel2.addEventListener("touchmove",
        function(event){
            if(!isDragStart) return;
            event.preventDefault();
            carousel2.classList.add("dragging2");
           let positionDiff= event.touches[0].pageX -prevPageX;
           carousel2.scrollLeft=prevScrollLeft-positionDiff;
            
        }
    
        );}
}
function dragStoped(){

    var carousel = document.querySelector(".carousel");
    if(carousel ){
        carousel.addEventListener("mouseup",
        function(event){
            isDragStart=false;
            carousel.classList.remove("dragging");
        });
        }
        var carousel2 = document.querySelector(".carousel2");
        if(carousel2 ){
            carousel2.addEventListener("mouseup",
            function(event){
                isDragStart=false;
                carousel2.classList.remove("dragging2");
            });
            }
      }


    

 
    function folderClick(){
      
        var work,about,skills,contact;
        work=document.getElementById('work');
        about=document.getElementById('about');
        skills=document.getElementById('skills');
        contact=document.getElementById('contact');
        var element =document.querySelector('.homePage__folders-work');
        if(element){
        element.addEventListener("click",
        function (event) {
            work.style.outline='dotted 1.2px rgb(255, 255, 255)';
            work.style.background='rgb(2, 2, 80)';
           skills.style.outline='none';
            skills.style.background='none';
           about.style.outline='none';
          about.style.background='none';
           contact.style.outline='none';
          contact.style.background='none';
            
        })};
     var element2 =document.querySelector('.homePage__folders-skills');
     if(element2){
    element2.addEventListener("click",
    function (event) {
     skills.style.outline='dotted 1.2px rgb(255, 255, 255)';
        skills.style.background='rgb(2, 2, 80)';
       work.style.outline='none';
       work.style.background='none';
       about.style.outline='none';
      about.style.background='none';
       contact.style.outline='none';
      contact.style.background='none';
    })};
    var element3 =document.querySelector('.homePage__folders-message');
    if(element3){
    element3.addEventListener("click",
    function (event) {
   contact.style.outline='dotted 1.2px rgb(255, 255, 255)';
    contact.style.background='rgb(2, 2, 80)';
    skills.style.outline='none';
    skills.style.background='none';
   about.style.outline='none';
  about.style.background='none';
   work.style.outline='none';
 work.style.background='none';
    })}
    var element4 =document.querySelector('.homePage__folders-about');
    if(element4){
    element4.addEventListener("click",
    function (event) {
    about.style.outline='dotted 1.2px rgb(255, 255, 255)';
    about.style.background='rgb(2, 2, 80)';
    skills.style.outline='none';
    skills.style.background='none';
   work.style.outline='none';
  work.style.background='none';
   contact.style.outline='none';
  contact.style.background='none';
})}


 }
 useEffect(() => {
    
  
    
    function closeWindow(){
        var windowAbout=  document.getElementById("windowAbout");
        var element3 = document.querySelector(".homePage__about-title img");
        if(element3){
            element3.addEventListener("click",
            function (event){
      
                windowAbout.style.opacity="0";
                windowAbout.style.width="20%"; 

                windowAbout.style.transition="0.2s all"
                
               
            })}
            var element4 = document.querySelector(".homePage__folders-work");
            if(element4){
                element4.addEventListener("click",
                function (event){
          
                    windowAbout.style.opacity="100%";
                    windowAbout.style.width="82%"


                   
                })}
      
    };



    dragging();draggindDown();dragStoped();closeWindow();folderClick()});
    return (
        <div class="homePage" >
            <div class="homePage__folders">
                <div class="homePage__folders-work" onClick={()=>navigate("/work")}   >
                  <img src={folder} alt="folder"  />
                   <button  id="work" >
                    <a href=" " >
                   Work
                   </a>
                  </button>
             </div>
             <div  class="homePage__folders-skills"  >
                 <img src ={skills} alt="folder"/>
                  <button id="skills">
                   <a href="/#" >
                    Skills
                   </a>
                   </button>
            </div>
                <div  class="homePage__folders-about" /* onClick ={ function() { setChange('false')}}*/ onClick={() => navigate("/")} >
                  <img src ={about} alt="folder"/>
                   <button  id="about"   >
                  <a  href=" "  >
                  About
                  </a>
                  </button>
            </div>
            <div  class="homePage__folders-message"  >
                 <img src ={message} alt="folder"/>
                  <button  id="contact">
                 <a href="/#" >
                  Contact
                 </a>
                  </button>
            </div>
        </div>
        <div id="windowAbout" class="homePage__about" >
            <div class="homePage__about-title">
           <a href="/#">Work   
           </a>
           <img src={close} alt=""></img>
           </div>  
     <div class="homePage__content">
            <div class="homePage_content-background"/>
             <div class="homePage__content_Divider">
              <div class="homePage__content_Divider-part1">
              <div class="homePage__content_Divider-part1-first">
                <div  class="homePage__content_Divider-part1-first-title">
                 <a href=" ">  Projects Web</a>

                <div class="wrapper">
                    <div class="carousel">
                        <img src={photo} alt="img"draggable="false" />
                        <img src={photo} alt="img"draggable="false" />
                        <img src={photo} alt="img"draggable="false" />
                        <img src={photo} alt="img"draggable="false" />
                        <img src={photo} alt="img"draggable="false" />
                        <img src={photo} alt="img"draggable="false" />
                        <img src={photo} alt="img"draggable="false" />
                        <img src={photo} alt="img"draggable="false" />
                        <img src={photo} alt="img"draggable="false" />
                        <img src={photo} alt="img"draggable="false" />
                   
                    </div>
                </div>
                </div>
                </div>
                <div class="homePage__content_Divider-part1-second">
            <div class="homePage__content_Divider-part1-first-title2">
                <a href=" ">
                Projects Games
                </a>
                <div class="wrapper2">
                    <div class="carousel2">
                        <img src={photo2} alt="img"draggable="false" />
                        <img src={photo2} alt="img"draggable="false" />
                        <img src={photo2} alt="img"draggable="false" />
                        <img src={photo2} alt="img"draggable="false" />
                        <img src={photo2} alt="img"draggable="false" />
                        <img src={photo2} alt="img"draggable="false" />
                        <img src={photo2} alt="img"draggable="false" />
                        <img src={photo2} alt="img"draggable="false" />
                        <img src={photo2} alt="img"draggable="false" />
                        <img src={photo2} alt="img"draggable="false" />
                   
                    </div>
                </div>
                </div>
                </div>

        </div>
        <div class="homePage__content_Divider-part2">
   
        <div class="homePage__content_Divider-part2-Child">

        </div>
        </div>   
          </div>
            
           </div>
           </div>
           </div>
    );
};

export default Work;