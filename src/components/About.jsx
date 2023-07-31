import React, { useEffect , useState } from 'react';
//import $ from 'jquery'; 
import folder from "../imgs/folder.png"
import skills from "../imgs/skills.png"
import about from "../imgs/about.png"
import message from "../imgs/message.png"
import avatarimage from "../imgs/avatarimage.png";
import key from "../imgs/key.png";
import marcador from "../imgs/marcador.png"
import close from "../imgs/close-icon.png";
import "../components/About.css"
const About = () => {  
  const [opacitystate,setOpacityState] = useState(false);
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
    function titleEffect(){
        var titlePageName=    document.getElementById('content-title');
    var element =document.querySelector('.homePage');
    if(element){
    element.addEventListener("mousemove",
    function (event) {
        if(event.movementX >0){
            titlePageName.style.boxShadow="15px 6px 5px -2px rgba(77, 33, 33, 0.568)";
 
            titlePageName.style.transition="0.8s all";
        }   else
        if(event.movementX<0)    {
            titlePageName.style.boxShadow="-15px -6px 5px -2px rgba(77, 33, 33, 0.568)";
   
            titlePageName.style.transition="0.8s all";
        }  else  
        if(event.movementY<0 )    {
            titlePageName.style.boxShadow="0px -6px 2px 0.5px rgba(77, 33, 33, 0.568)";
       
            titlePageName.style.transition="0.8s all";
        }  else
        if(event.movementY>0)    {
            titlePageName.style.boxShadow="0px 6px 2px 0.5px rgba(77, 33, 33, 0.568)";
          
            titlePageName.style.transition="0.8s all";
        }  
        else{
            titlePageName.style.boxShadow="0px 6px 2px 0.5px rgba(77, 33, 33, 0.568)";
        }

      
    })};

    

  }
  function opacity(){
    var key1 , key2;
    key1= document.getElementById("key1")
    key2= document.getElementById("key2")
    var element = document.querySelector(".homePage__content-key1");
    if(element){
        element.addEventListener("click",
        function (event){
            if(opacitystate===false){
            key2.style.opacity="0.99";  
           key1.style.opacity="0.5";     
            setOpacityState(true);
        ///    setDescription("Here are my personal interests, for professional purposes you can be interested in my work or my skills. Thanks So Mutch")
          
  
            }
        })}
        var element2 = document.querySelector(".homePage__content-key2");
        if(element2){
            element2.addEventListener("click",
            function (event){
               if(opacitystate===true)
                key2.style.opacity="0.5";
              key1.style.opacity="0.99";   
           //     setDescription("I'm Ivo, full stack developer from Buenos Aires This is my website, a place where I share my projects   ,  let my imagination run wild and let people know things about me.")
                setOpacityState(false);
            })}
    }
    
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
            var element4 = document.querySelector(".homePage__folders-about");
            if(element4){
                element4.addEventListener("click",
                function (event){
          
                    windowAbout.style.opacity="100%";
                    windowAbout.style.width="60%"


                   
                })}
      
    };


  titleEffect();opacity();closeWindow();folderClick();});
    return (
        <div class="homePage">
            <div class="homePage__folders">
                <div class="homePage__folders-work"  >
                  <img src={folder} alt="folder"  />
                   <button  id="work">
                    <a href="/work">
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
                <div  class="homePage__folders-about" >
                  <img src ={about} alt="folder"/>
                   <button  id="about">
                  <a href="/" >
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
           <a href="/#">About     
           </a>
           <img src={close} alt=""></img>
           </div>  
           <div class="homePage__content">
           <div class="homePage_content-binary">
            <img src={"binary3"} alt=""></img>
           </div>
            <div class="homePage__content-title">
            <h1 id="content-title">Ivo Ortiz</h1>
            </div>
               <div class="homePage__content-description">
               <h2>Full Stack Developer Junior</h2>
            </div>
            <div class="homepage__content-medium">
            <div clasS="homePage__content-img">
            <img src={avatarimage} alt=""/>
            </div>
            <div class="homePage__content-text" >
                <div class="homePage__content-text_content"> 
                    <li >
                        <a href="/#" >
                    {opacitystate ? (     
                       <a class="homePage__content-text_content-aboutDescription2" href="/#" >
                       Here are my personal interests, for professional purposes you can be interested in <span id="span1"><img src={marcador} alt=""></img> my work or my skills</span>. Thanks So Mutch
                           <a href="/#" > </a></a> 
                          ) : (  
                     <a class="homePage__content-text_content-aboutDescription1" href="/#">
                      I'm Ivo, full stack developer from Buenos Aires This is my website, a place where I share my projects,<span id="span2"> <img src={marcador} alt=""></img>let my imagination run</span> wild and let people know things about me.
                      <a href="/#">  </a></a>   )}                                                  
                   </a>            
                   </li>  
                   <li   class="homePage__content-key ">
                    <div id ="key1" class="homePage__content-key1">
                       <img src={key} alt=""></img>
                       </div>
                       <div  id="key2" class="homePage__content-key2">
                       <img  src={key} alt=""></img> 
                       </div>
                   </li>             
            </div>        
            </div>      
           </div>      
           </div>
           </div>
           </div>
    );
};

export default About;