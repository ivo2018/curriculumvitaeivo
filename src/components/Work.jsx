
import React, { useEffect , useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import $ from 'jquery'; 
import folder from "../imgs/folder.png"
import skills from "../imgs/skills.png"
import about from "../imgs/about.png"
import message from "../imgs/message.png"
import avatarimage from "../imgs/avatarimage.png";
import key from "../imgs/key.png";
import marcador from "../imgs/marcador.png"
import close from "../imgs/close-icon.png";

const Work = (/*{handleClick,setChange}*/) => {  
    
    const navigate=useNavigate();
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
            var element4 = document.querySelector(".homePage__folders-work");
            if(element4){
                element4.addEventListener("click",
                function (event){
          
                    windowAbout.style.opacity="100%";
                    windowAbout.style.width="82%"


                   
                })}
      
    };


closeWindow();folderClick()});
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
           <div class="homePage_content-background">
            <img src={"binary3"} alt=""></img>
           </div>
   
         
            
           </div>
           </div>
           </div>
    );
};

export default Work;