import React, { useEffect } from 'react';
import folder from "../imgs/folder.png"
import skills from "../imgs/skills.png"
import about from "../imgs/about.png"
import message from "../imgs/message.png"
import window from "../imgs/window2.png"
import "../components/About.css"
import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
const About = () => {  
    function changeColor(){
        var element =document.querySelector('.homePage__folders-work');
        if(element){
        element.addEventListener("click",
        function (event) {
            document.getElementById('work').style.outline='dotted 1.2px rgb(255, 255, 255)';
            document.getElementById('work').style.background='rgb(2, 2, 80)';
            document.getElementById('about').style.outline='none';
            document.getElementById('about').style.background='none';
            document.getElementById('skills').style.outline='none';
            document.getElementById('skills').style.background='none';
            document.getElementById('about').style.outline='none';
           document.getElementById('about').style.background='none';
            document.getElementById('contact').style.outline='none';
            document.getElementById('contact').style.background='none';
            
        })};
     var element2 =document.querySelector('.homePage__folders-skills');
     if(element2){
    element2.addEventListener("click",
    function (event) {
        document.getElementById('skills').style.outline='dotted 1.2px rgb(255, 255, 255)';
        document.getElementById('skills').style.background='rgb(2, 2, 80)';
        document.getElementById('work').style.outline='none';
        document.getElementById('work').style.background='none';
        document.getElementById('about').style.outline='none';
        document.getElementById('about').style.background='none';

        document.getElementById('about').style.outline='none';
        document.getElementById('about').style.background='none';
        document.getElementById('contact').style.outline='none';
        document.getElementById('contact').style.background='none';
    })};
    var element3 =document.querySelector('.homePage__folders-message');
    if(element3){
    element3.addEventListener("click",
    function (event) {
    document.getElementById('contact').style.outline='dotted 1.2px rgb(255, 255, 255)';
    document.getElementById('contact').style.background='rgb(2, 2, 80)';
    document.getElementById('work').style.outline='none';
    document.getElementById('work').style.background='none';
    document.getElementById('about').style.outline='none';
    document.getElementById('about').style.background='none';
    document.getElementById('skills').style.outline='none';
    document.getElementById('skills').style.background='none';
    document.getElementById('about').style.outline='none';
    document.getElementById('about').style.background='none';

    })}
    var element4 =document.querySelector('.homePage__folders-about');
    if(element4){
    element4.addEventListener("click",
    function (event) {
    document.getElementById('about').style.outline='dotted 1.2px rgb(255, 255, 255)';
    document.getElementById('about').style.background='rgb(2, 2, 80)';
    document.getElementById('work').style.outline='none';
    document.getElementById('work').style.background='none';
    document.getElementById('skills').style.outline='none';
    document.getElementById('skills').style.background='none';
    document.getElementById('contact').style.outline='none';
    document.getElementById('contact').style.background='none';
})}


 }
 useEffect(() => {
    function titleEffect(){
    var element =document.querySelector('.homePage');
    if(element){
    element.addEventListener("mousemove",
    function (event) {
        if(event.movementX >0){
      document.getElementById('content-title').style.boxShadow="15px 6px 5px -2px rgba(77, 33, 33, 0.568)";
      //document.getElementById('content-title').style.boxShadow="0px 6px 2px 7px rgba(77, 33, 33, 0.568)";
      document.getElementById('content-title').style.transition="0.8s all";
        }   else
        if(event.movementX<0)    {
            document.getElementById('content-title').style.boxShadow="-15px -6px 5px -2px rgba(77, 33, 33, 0.568)";
            //document.getElementById('content-title').style.boxShadow="0px 6px 2px 7px rgba(77, 33, 33, 0.568)";
            document.getElementById('content-title').style.transition="0.8s all";
        }  else  
        if(event.movementY<0 )    {
            document.getElementById('content-title').style.boxShadow="0px -6px 2px 0.5px rgba(77, 33, 33, 0.568)";
            //document.getElementById('content-title').style.boxShadow="0px 6px 2px 7px rgba(77, 33, 33, 0.568)";
            document.getElementById('content-title').style.transition="0.8s all";
        }  else
        if(event.movementY>0)    {
            document.getElementById('content-title').style.boxShadow="0px 6px 2px 0.5px rgba(77, 33, 33, 0.568)";
            //document.getElementById('content-title').style.boxShadow="0px 6px 2px 7px rgba(77, 33, 33, 0.568)";
            document.getElementById('content-title').style.transition="0.8s all";
        }  
        else{
            document.getElementById('content-title').style.boxShadow="0px 6px 2px 0.5px rgba(77, 33, 33, 0.568)";
        }

      
    })};

  }titleEffect()});

    return (
        <div class="homePage">
            <div class="homePage__folders">
                <div class="homePage__folders-work" onClick={changeColor} >
                  <img src={folder} alt="folder"  />
                   <button  id="work">
                    <a>
                   Work
                   </a>
                  </button>
             </div>
             <div  class="homePage__folders-skills" onClick={changeColor}  >
                 <img src ={skills} alt="folder"/>
                  <button id="skills">
                   <a >
                    Skills
                   </a>
                   </button>
            </div>
                <div  class="homePage__folders-about" onClick={changeColor} >
                  <img src ={about} alt="folder"/>
                   <button  id="about">
                  <a >
                  About
                  </a>
                  </button>
            </div>
            <div  class="homePage__folders-message" onClick={changeColor} >
                 <img src ={message} alt="folder"/>
                  <button  id="contact">
                 <a >
                  Contact
                 </a>
                  </button>
            </div>
        </div>
        <div class="homePage__about">
            <div class="homePage__about-title">
           <a>About</a>
           </div>  
           <div class="homePage__content">
            <div class="homePage__content-title">
            <h1 id="content-title">Ivo Ortiz</h1>
     
            </div>
               <div class="homePage__content-description">
               <h2>Full Stack Developer Junior</h2>
            </div>
          
           </div>
     </div>
     </div>
    );
};

export default About;