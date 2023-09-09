import React, { useState } from 'react';
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

import WhiteNote from "../imgs/Skills/WhiteNote.png";
import PinkNote from "../imgs/Skills/PinkNote.png"
import Note from "../imgs/Skills/note.png"
import "../components/Skills.css"
const Skills = (/*{setChange,handleClick}*/) => {
    const [count, setCount] = useState(0);
    function Nota() {
        var itemNote = document.getElementById('item');
        var bigItem = document.querySelector('.collectionBigItem');
        if (itemNote) {
            if (count === 0) {
                itemNote.style.bottom = "-9em";
                setCount(count + 1);
            }
            if (count === 1) {
                itemNote.style.right = "-5em";
                itemNote.style.bottom = "-12em";
                setCount(count + 1);
            }
            if (count === 2) {
                itemNote.style.bottom = "0px";
                itemNote.style.right = "0px";
                itemNote.style.transition="2s all";
                setCount(count + 1);
              
                
            }
            if(count===3){
             
                itemNote.style.transition="2s all";
                bigItem.style.display="block";    
            }
            console.log(count);
        }
    }


    const navigate = useNavigate();

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
                    <div class="collection">
                        <div id="item" className="collectionItem" onClick={() => Nota()}>
                            <img src={YellowNote} alt="" />
                            <div class="collectionBigNotes">
                                <div id="bigItem" className="collectionBigItem">
                                    <img src={Note} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="collectionItem">
                            <img src={GreenNote} alt="" />
                        </div>
                        <div className="collectionItem">
                            <img src={WhiteNote} alt="" />
                        </div>
                        <div className="collectionItem">
                            <img src={PinkNote} alt="" />
                        </div>
                    </div>

                </div>
            </div>

        </div>

    );
};

export default Skills;