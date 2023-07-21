import React from 'react';
import folder from "../imgs/folder.png"
import skills from "../imgs/skills.png"
import about from "../imgs/about.png"
import message from "../imgs/message.png"
import "../components/Home.css"
const Home = () => {
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

    return (
        <div class="homePage"  >

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
     </div>
    );
};

export default Home;