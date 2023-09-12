import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import folder from "../imgs/folder.png"
import skills from "../imgs/skills.png"
import about from "../imgs/about.png"
import close from "../imgs/close-icon.png";

import "../components/About.css"
import { closeWindow, openWindow } from '../functions/eventsFunction';
import { FolderDecide } from '../functions/eventsFunction';
import YellowNote from "../imgs/Skills/YellowNote.png"
import GreenNote from "../imgs/Skills/GreenNote.png"
import react from "../imgs/react.png";
import javascript from "../imgs/javascript.png";
import csharp from "../imgs/csharp.png";
import php from "../imgs/php.png";
import html from "../imgs/html.png";
import css from "../imgs/css.png";

import WhiteNote from "../imgs/Skills/WhiteNote.png";
import PinkNote from "../imgs/Skills/PinkNote.png"

import "../components/Skills.css"
const Skills = (/*{setChange,handleClick}*/) => {
    //  const [count, setCount] = useState(0);
    const [item2, setItem] = useState(0);

    //const [textnote, setTextNote] = useState("");
    function Nota(item) {
        //   var randomNumber = Math.floor(Math.random() * (6, 14)) + 1;
        var itemNote = document.getElementById(item);
        var itemYellow = document.getElementById("item");
        var itemGreen = document.getElementById("item2");
        var itemWhite = document.getElementById("item3");
        var itemPink = document.getElementById("item4");
        var bigItem = document.getElementById('bigItem');
        var bigItem2 = document.getElementById('bigItemContent');
        if (itemNote) {
            /* if(item==="item"){
                 console.log("item");
                 if (count === 0) {
                         itemNote.style.bottom = -randomNumber + "em";
                         setCount(count + 1);
                    
                 }
                else if (count === 1) {
                     if (item === "item") {
                         itemNote.style.right = -randomNumber + "em";
                         itemNote.style.bottom = -randomNumber + "em";
     
                         setCount(count + 1);
                     }
                 }
              else   if (count === 2) {
                     if (item === "item") {
                         itemNote.style.bottom = "0%";
                         itemNote.style.right = "0%";
                         itemNote.style.left = "0%";
                         itemNote.style.top = "0%";
     
                         itemNote.style.transition = "0.9s all";
     
     
                         setCount(count + 1);
                     }
     
                 }
                else if (count === 3) {
                     if (item === "item") {
                         itemNote.style.transform = "scale(1.5)";
                       //  itemNote.style.rotate = "190deg";
                         itemNote.style.left = "40%";
                         itemNote.style.top = "45%";
                     //    itemNote.style.opacity = "0";
                        itemNote.style.display="none";
                         itemNote.style.transition = "0.5s all";
                         bigItem.style.animation = "noteMove 1s linear 0.1s forwards";
                         bigItem.style.display = "block";
                         itemGreen.style.display="block";
                         itemWhite.style.display = "block";
                         itemPink.style.display="block";
                         if (item === "item") {
                             bigItem2.style.backgroundColor = "rgba(219, 198, 8, 0.438)"
                             itemNote.style.left = "0%";
                             itemNote.style.top = "0%";
                             itemNote.style.transform = "scale(1)";
                         }
                           
                         setCount(count + 1);
                     }
                 }
               else  if (count === 4) {
                    
                   //  bigItem.style.animation = "none";
                 //    bigItem.style.opacity = 0;
                     setCount(0);
                     
     
                 }
   
             }*/
            if (item === "item") {
                //    itemNote.style.rotate = "190deg";
                //   itemNote.style.opacity = "0";
                itemNote.style.display = "none";
                itemNote.style.transition = "0.5s all";
                bigItem.style.animation = "noteMove 1s linear 0.1s forwards";
                bigItem.style.display = "block";
                itemWhite.style.display = "block";
                itemPink.style.display = "block";
                itemGreen.style.display = "block";

            }
            else if (item === "item2") {
                //    itemNote.style.rotate = "190deg";
                //   itemNote.style.opacity = "0";
                itemNote.style.display = "none";
                itemNote.style.transition = "0.5s all";
                bigItem.style.animation = "noteMove 1s linear 0.1s forwards";
                bigItem.style.display = "block";
                itemWhite.style.display = "block";
                itemPink.style.display = "block";
                itemYellow.style.display = "block";

            }
            else if (item === "item3") {
                //    itemNote.style.rotate = "190deg";
                // itemNote.style.opacity = "0";
                itemNote.style.display = "none";
                itemNote.style.transition = "0.5s all";
                bigItem.style.animation = "noteMove 1s linear 0.1s forwards";
                bigItem.style.display = "block";
                itemGreen.style.display = "block";
                itemPink.style.display = "block";
                itemYellow.style.display = "block";

            }
            else if (item === "item4") {
                //    itemNote.style.rotate = "190deg";
                //   itemNote.style.opacity = "0";
                itemNote.style.display = "none";
                itemNote.style.transition = "0.5s all";
                bigItem.style.animation = "noteMove 1s linear 0.1s forwards";
                bigItem.style.display = "block";
                itemGreen.style.display = "block";
                itemWhite.style.display = "block";
                itemYellow.style.display = "block";

            }
            if (item === "item") {
                bigItem2.style.backgroundColor = "rgba(219, 198, 8, 0.438)"
            }
            if (item === "item2") {

                bigItem2.style.backgroundColor = "rgba(0, 198, 8, 0.438)"
            }
            if (item === "item3") {

                bigItem2.style.backgroundColor = "rgba(255, 254, 254, 0.8)"
            }
            if (item === "item4") {
                bigItem2.style.backgroundColor = "rgba(255, 54, 94, 0.438)"
            }




            //  console.log(count);
        }
    }


    const navigate = useNavigate();
    useEffect(() => {

    })
    return (
        <div class="homePage">
            <div class="homePage__folders">
                <div class="homePage__folders-work" onClick={() => navigate("/work") + FolderDecide("work")}   /*onClick ={ function() { setChange('cameron') }} */ >
                    <img src={folder} alt="folder" />
                    <button id="work"  >
                        <a href=" ">
                            Work
                        </a>
                    </button>
                </div>
                <div class="homePage__folders-skills" onClick={() => FolderDecide("skills")} >
                    <img src={skills} alt="folder" />
                    <button id="skills" >
                        <a href="/#" >
                            Skills
                        </a>
                    </button>
                </div>
                <div class="homePage__folders-about" onClick={() => navigate("/") + FolderDecide("about") + openWindow()}  >
                    <img src={about} alt="folder" />
                    <button id="about"  >
                        <a href=" " >
                            About
                        </a>
                    </button>
                </div>
                <div class="homePage__folders-message" onClick={() => FolderDecide("contact")}  >
                    <img src="https://win98icons.alexmeub.com/icons/png/envelope_closed-0.png" alt="folder" />
                    <button id="contact">
                        <a href="/#" >
                            Contact
                        </a>
                    </button>
                </div>
            </div>
            <div id="windowAbout" class="homePage__about" >
                <div class="homePage__about-title">
                    <a href=" ">Skills
                    </a>
                    <img src={close} alt="" onClick={() => closeWindow()}></img>
                </div>
                <div class="homePage__content">
                    <div className="card">
                        <div class="collection">
                            <div id="item" className="collectionItem" onClick={() => Nota("item") + setItem("item")}>
                                <img src={YellowNote} alt="" />
                            </div>

                            <div id="item2" className="collectionItem" onClick={() => Nota("item2") + setItem("item2")}>
                                <img src={GreenNote} alt="" />
                            </div>
                            <div id="item3" className="collectionItem" onClick={() => Nota("item3") + setItem("item3")}>
                                <img src={WhiteNote} alt="" />
                            </div>
                            <div id="item4" className="collectionItem" onClick={() => Nota("item4") + setItem("item4")}>
                                <img src={PinkNote} alt="" />
                            </div>

                        </div>
                        <div id="bigItem" className="collectionBigItem">
                            <div class="bigItem__border">
                                <div id="bigItemContent" class="bigItem__content">
                                    Hello
                                    {item2 === "item" ? (
                                        <div>
                                            I use different programming languages, I have knowledge of javascript, php, c#, html css
                                            <div className="iconItem">
                                                <img src={javascript} alt="" />
                                                JavaScript

                                                <img src={csharp} alt="" />
                                                C# Sharp

                                                <img src={php} alt="" />
                                                Php

                                                <img src={html} alt="" />
                                                Html
                                                <img src={css} alt="" />
                                                Css
                                            </div>
                                        </div>

                                    )
                                        : item2 === "item2" ? (
                                            <div>
                                                I use different tools, frameworks like react, laravel, collective.
                                                I also manage databases, SQL, MySQL
                                                <div className="iconItem2">
                                                    <img src={react} alt="" />
                                                    React
                                                </div>
                                            </div>
                                        ) : item2 === "item3" ?

                                            (
                                                <div>      I am currently working for a large national industry company doing system maintenance and creating developments for it.
                                                    And I'm also creating a system for a national brewery. </div>
                                            ) : (
                                                <div>
                                                    I have experience in creating full stack web pages. systems development, and creation of both 2D and 3D video games. </div>
                                            )
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Skills;