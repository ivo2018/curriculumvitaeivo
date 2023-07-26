import React, { useEffect , useState } from 'react';
import folder from "../imgs/folder.png"
import skills from "../imgs/skills.png"
import about from "../imgs/about.png"
import message from "../imgs/message.png"
import avatarimage from "../imgs/avatarimage.png";
import key from "../imgs/key.png";
//import binary from "../imgs/binary.jpg";
//import binary2 from "../imgs/binary2.jpg";
import binary3 from "../imgs/binary3.jpg";
import "../components/About.css"


const About = () => {  
  const [opacitystate,setOpacityState] = useState(false);
  const [description,setDescription] = useState("I'm Ivo, full stack developer from Buenos Aires This is my website, a place where I share my projects   ,  let my imagination run wild and let people know things about me.");
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
 
      document.getElementById('content-title').style.transition="0.8s all";
        }   else
        if(event.movementX<0)    {
            document.getElementById('content-title').style.boxShadow="-15px -6px 5px -2px rgba(77, 33, 33, 0.568)";
   
            document.getElementById('content-title').style.transition="0.8s all";
        }  else  
        if(event.movementY<0 )    {
            document.getElementById('content-title').style.boxShadow="0px -6px 2px 0.5px rgba(77, 33, 33, 0.568)";
       
            document.getElementById('content-title').style.transition="0.8s all";
        }  else
        if(event.movementY>0)    {
            document.getElementById('content-title').style.boxShadow="0px 6px 2px 0.5px rgba(77, 33, 33, 0.568)";
          
            document.getElementById('content-title').style.transition="0.8s all";
        }  
        else{
            document.getElementById('content-title').style.boxShadow="0px 6px 2px 0.5px rgba(77, 33, 33, 0.568)";
        }

      
    })};

    

  }
  function opacity(){
    var element = document.querySelector(".homePage__content-key1");
    if(element){
        element.addEventListener("click",
        function (event){
            if(opacitystate===false){
            document.getElementById("key2").style.opacity="0.99";  
            document.getElementById("key1").style.opacity="0.5";     
            setOpacityState(true);
            setDescription("Here are my personal interests, for professional purposes you can be interested in my work or my skills. Thanks So Mucth")
          
  
            }
        })}
    }
    function opacity2(){
        var element2 = document.querySelector(".homePage__content-key2");
        if(element2){
            element2.addEventListener("click",
            function (event){
               if(opacitystate===true)
                document.getElementById("key2").style.opacity="0.5";
                document.getElementById("key1").style.opacity="0.99";   
                setDescription("I'm Ivo, full stack developer from Buenos Aires This is my website, a place where I share my projects   ,  let my imagination run wild and let people know things about me.")
                setOpacityState(false);
            })}
      
    };


  titleEffect();opacity();opacity2()});

    return (
        <div class="homePage">
            <div class="homePage__folders">
                <div class="homePage__folders-work" onClick={changeColor} >
                  <img src={folder} alt="folder"  />
                   <button  id="work">
                    <a href="/#">
                   Work
                   </a>
                  </button>
             </div>
             <div  class="homePage__folders-skills" onClick={changeColor}  >
                 <img src ={skills} alt="folder"/>
                  <button id="skills">
                   <a href="/#" >
                    Skills
                   </a>
                   </button>
            </div>
                <div  class="homePage__folders-about" onClick={changeColor} >
                  <img src ={about} alt="folder"/>
                   <button  id="about">
                  <a href="/#" >
                  About
                  </a>
                  </button>
            </div>
            <div  class="homePage__folders-message" onClick={changeColor} >
                 <img src ={message} alt="folder"/>
                  <button  id="contact">
                 <a href="/#" >
                  Contact
                 </a>
                  </button>
            </div>
        </div>
        <div class="homePage__about">
            <div class="homePage__about-title">
           <a href="/#">About</a>
           </div>  
           <div class="homePage__content">
           <div class="homePage_content-binary">
            <img src={binary3} alt=""></img>
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
                      <a >
                         {description}
                         <a className="effect">

                         </a>
                         </a>
                
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