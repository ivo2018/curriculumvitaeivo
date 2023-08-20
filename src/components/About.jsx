import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
//import $ from 'jquery'; 
import folder from "../imgs/folder.png"
import skills from "../imgs/skills.png"
import about from "../imgs/about.png"
//import message from "../imgs/message.png"
import avatarimage from "../imgs/avatarimage.png";
import key from "../imgs/key.png";
import marcador from "../imgs/marcador.png"
import close from "../imgs/close-icon.png";
import { opacitySelected } from '../functions/eventsFunction';
//import SelectionPage from './SelectionPage';
import "../components/About.css"
import { closeWindow ,openWindow} from '../functions/eventsFunction';
import { titleEffect } from '../functions/eventsFunction';

import { FolderDecide } from '../functions/eventsFunction';
const About = (/*{setChange,handleClick}*/) => {
    const navigate = useNavigate();
    const [opacitystate, setOpacityState] = useState(false);

    useEffect(() => {
        titleEffect();
    });
    return (
        <div class="homePage">
            <div class="homePage__folders">
                <div class="homePage__folders-work" onClick={() => navigate("/work")+FolderDecide("work")}   /*onClick ={ function() { setChange('cameron') }} */ >
                    <img src={folder} alt="folder"/>
                    <button id="work"  >
                        <a href=" ">
                            Work
                        </a>
                    </button>
                </div>
                <div class="homePage__folders-skills"  onClick={() => FolderDecide("skills")} >
                    <img src={skills} alt="folder" />
                    <button id="skills" >
                        <a href="/#" >
                            Skills
                        </a>
                    </button>
                </div>
                <div class="homePage__folders-about" onClick={() => navigate("/")+FolderDecide("about")+openWindow()}  >
                    <img src={about} alt="folder"  />
                    <button id="about"  >
                        <a href=" " >
                            About
                        </a>
                    </button>
                </div>
                <div class="homePage__folders-message"  onClick={() => FolderDecide("contact")}  >
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
                    <a href=" ">About
                    </a>
                    <img src={close} alt="" onClick={()=> closeWindow()}></img>
                </div>
                <div class="homePage__content">
                    <div class="homePage_content-binary" />
                    <div class="homePage__content-title">

                        <h1 id="content-title">Ivo Ortiz</h1>
                    </div>
                    <div class="homePage__content-description">
                        <h2>Full Stack Developer Junior</h2>
                    </div>
                    <div class="homepage__content-medium">
                        <div clasS="homePage__content-img">
                            <img src={avatarimage} alt="" />
                        </div>
                        <div class="homePage__content-text" >
                            <div class="homePage__content-text_content">
                                <li >
                                
                                        {opacitystate ? (
                                            <a class="homePage__content-text_content-aboutDescription2" href="/#" >
                                                Here are my personal interests, for professional purposes you can be interested in <span id="span1"><img src={marcador} alt=""></img> my work or my skills</span>. Thanks So Mutch
                                               </a>
                                        ) : (
                                            <a class="homePage__content-text_content-aboutDescription1" href="/#">
                                                I'm Ivo, full stack developer from Buenos Aires This is my website, a place where I share my projects,<span id="span2"> <img src={marcador} alt=""></img>let my imagination run</span> wild and let people know things about me.
                                                </a>)}
                                   
                                </li>
                                <li class="homePage__content-key ">
                                    
                                    <div id="key2" class="homePage__content-key2" onClick={() => opacitySelected(opacitystate,setOpacityState,"key2")}>
                                        <img src={key} alt=""></img>
                                    </div>
                                    <div id="key1" class="homePage__content-key1" onClick={() => opacitySelected(opacitystate,setOpacityState,"key1")}> 
                                        <img src={key} alt=""></img>
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