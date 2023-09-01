import React from 'react';
import { useNavigate } from "react-router-dom";
import folder from "../imgs/folder.png"
import skills from "../imgs/skills.png"
import about from "../imgs/about.png"
import close from "../imgs/close-icon.png";

import "../components/About.css"
import { closeWindow, openWindow } from '../functions/eventsFunction';
import { FolderDecide } from '../functions/eventsFunction';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../components/Contact.css"
const Contact = (/*{setChange,handleClick}*/) => {

    const navigate = useNavigate();

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lf3ngcf', 'template_jlee5nq', form.current, 'wZZD7cKPU2Je3STpl')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
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
                    <a href=" ">Contact
                    </a>
                    <img src={close} alt="" onClick={() => closeWindow()}></img>
                </div>
                <div class="homePage__content">
           
                    <div className="form_content">
                    <p class="form_item">Contact</p>
                        <form ref={form} onSubmit={sendEmail} class="field">
                            <label>Name</label>
                            <input type="text"  autocomplete="off" name="user_name" />
                            <label>Email</label>
                            <input type="email" autocomplete="off" name="user_email" />
                            <label>Message</label>
                            <textarea name="message" />
                            <input type="submit" autocomplete="off"  value="Send" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;