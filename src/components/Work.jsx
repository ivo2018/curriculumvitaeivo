
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import $ from 'jquery'; 
import folder from "../imgs/folder.png"
import skills from "../imgs/skills.png"
import about from "../imgs/about.png"
import message from "../imgs/message.png"
import "../components/Work.css"
import close from "../imgs/close-icon.png";
import { closeWindow, openWindow } from '../functions/eventsFunction';
import { folderWorkClick, folderAboutClick, folderMessageClick, folderSkillsClick } from '../functions/eventsFunction';
import list from '../lists/listsCarouselDividerWeb';
import list2 from '../lists/listsCarouselDividerGames';

const Work = (/*{handleClick,setChange}*/) => {
    const navigate = useNavigate();
    const [product,setProduct] = useState();
    var isDragStart = false, prevPageX, prevScrollLeft;
    function descripcionButton1(){
        var button1,button2,descripcion;
        button1 = document.getElementById('descripcion-button1');
        button2 = document.getElementById('descripcion-button2');
        descripcion=document.getElementById('descripcion-id');
     
        if (button1 && button2&&descripcion != null) {
        
            button1.style.background = "rgba(186, 199, 199, 0.986)";
            button2.style.background = 'none';
            descripcion.style.background = "rgba(186, 199, 199, 0.986)";
        }
       }    
       function descripcionButton2(){
        var button1,button2,descripcion;
        button1 = document.getElementById('descripcion-button1');
        button2 = document.getElementById('descripcion-button2');
     descripcion=document.getElementById('descripcion-id');
        if (button1 && button2&&descripcion != null) {
        
            button2.style.background = "rgba(186, 199, 199, 0.986)";
            button1.style.background = 'none';
            descripcion.style.background = "rgba(186, 199, 199, 0.986)";
        }
       }    
    
    function draggindDown() {
        var carousel = document.querySelector(".carousel");
        if (carousel) {
            carousel.addEventListener("mousedown",
                function (event) {
                    isDragStart = true;
                    prevPageX = event.pageX;
                    prevScrollLeft = carousel.scrollLeft;
                });
            carousel.addEventListener("touchstart",
                function (event) {
                    isDragStart = true;
                    prevPageX = event.touches[0].pageX;
                    prevScrollLeft = carousel.scrollLeft;

                });

        }
        var carousel2 = document.querySelector(".carousel2");
        if (carousel2) {
            carousel2.addEventListener("mousedown",
                function (event) {
                    isDragStart = true;
                    prevPageX = event.pageX;
                    prevScrollLeft = carousel2.scrollLeft;

                });
            carousel2.addEventListener("touchstart",
                function (event) {
                    isDragStart = true;
                    prevPageX = event.touches[0].pageX;
                    prevScrollLeft = carousel2.scrollLeft;

                });

        }
    }
    function dragging() {
        var carousel = document.querySelector(".carousel");

        if (carousel) {
            carousel.addEventListener("mousemove",
                function (event) {
                    if (!isDragStart) return;
                    event.preventDefault();
                    carousel.classList.add("dragging");
                    let positionDiff = event.pageX - prevPageX;
                    carousel.scrollLeft = prevScrollLeft - positionDiff;

                }

            );
            carousel.addEventListener("touchmove",
                function (event) {
                    if (!isDragStart) return;
                    event.preventDefault();
                    carousel.classList.add("dragging");
                    let positionDiff = event.touches[0].pageX - prevPageX;
                    carousel.scrollLeft = prevScrollLeft - positionDiff;

                }

            );
        }
        var carousel2 = document.querySelector(".carousel2");
        if (carousel2) {
            carousel2.addEventListener("mousemove",
                function (event) {
                    if (!isDragStart) return;
                    event.preventDefault();
                    carousel2.classList.add("dragging2");
                    let positionDiff = event.pageX - prevPageX;
                    carousel2.scrollLeft = prevScrollLeft - positionDiff;

                }

            );
            carousel2.addEventListener("touchmove",
                function (event) {
                    if (!isDragStart) return;
                    event.preventDefault();
                    carousel2.classList.add("dragging2");
                    let positionDiff = event.touches[0].pageX - prevPageX;
                    carousel2.scrollLeft = prevScrollLeft - positionDiff;

                }

            );
        }
    }
    function dragStoped() {

        var carousel = document.querySelector(".carousel");
        if (carousel) {
            carousel.addEventListener("mouseup",
                function (event) {
                    isDragStart = false;
                    carousel.classList.remove("dragging");
                });
        }
        var carousel2 = document.querySelector(".carousel2");
        if (carousel2) {
            carousel2.addEventListener("mouseup",
                function (event) {
                    isDragStart = false;
                    carousel2.classList.remove("dragging2");
                });
        }
    }
    useEffect(() => {
        console.log(product);

        dragging(); draggindDown(); dragStoped();
    });
    return (
        <div class="homePage" >
            <div class="homePage__folders">
                <div class="homePage__folders-work" onClick={() => navigate("/work") + folderWorkClick() + openWindow()}   >
                    <img src={folder} alt="folder" />
                    <button id="work" >
                        <a href=" " >
                            Work
                        </a>
                    </button>
                </div>
                <div class="homePage__folders-skills" onClick={() => folderSkillsClick()} >
                    <img src={skills} alt="folder" />
                    <button id="skills">
                        <a href="/#" >
                            Skills
                        </a>
                    </button>
                </div>
                <div class="homePage__folders-about" /* onClick ={ function() { setChange('false')}}*/ onClick={() => navigate("/") + folderAboutClick()} >
                    <img src={about} alt="folder" />
                    <button id="about"   >
                        <a href=" "  >
                            About
                        </a>
                    </button>
                </div>
                <div class="homePage__folders-message" onClick={() => folderMessageClick()} >
                    <img src={message} alt="folder" />
                    <button id="contact">
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
                    <img src={close} alt="" onClick={() => closeWindow()}></img>
                </div>
                <div class="homePage__content">
                    <div class="homePage_content-background" />
                    <div class="homePage__content_Divider">
                        <div class="homePage__content_Divider-part1">
                            <div class="homePage__content_Divider-part1-first">
                                <div class="homePage__content_Divider-part1-first-title">
                                    <a href=" ">  Projects Web</a>

                                    <div class="wrapper">
                                        <div class="carousel">
                                            {list.map((producto) => (
                                                <div class="carousel_div" onClick={()=>setProduct(producto.id)}>
                                                    <a href=" "> {producto.name} </a>
                                                    <img src={producto.photo} alt="img" draggable="false" title="value"></img>
                                                </div>

                                            ))}


                                            {/*  <img src={photo} alt="img" draggable="false" />
                                             */}

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
                                            {list2.map((producto) => (
                                                <div class="carousel_div2" onClick={()=>setProduct(producto.id)}>
                                                    <a href=" "> {producto.name} </a>
                                                    <img src={producto.photo} alt="img" draggable="false" title="value"></img>
                                                </div>

                                            ))}
                                            {/*
                                            <img src={photo2} alt="img" draggable="false" />
                                             */}

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="homePage__content_Divider-part2">

                            <div class="homePage__content_Divider-part2-Child">
                                <div class="homePage_content_Divider_part2-Child_contenedor">
                                <div class="homePage__content_Divider-part2-Child_proyects">
                                    <div class="homePage__content_Divider-part2-Child_proyects-title">
                                        <a href=" ">  Title</a>
                                        <div class="homePage__content_Divider-part2-Child_proyects-content">
                                            {list2.map((producto) => (
                                                producto.id===product?
                                                <div class="">
                                                
                                                    <img src={producto.photo} alt="img" draggable="false" title="value"></img>
                                                    <div class="nav_descripcion"> 
                                                
                                                    <li>
                                                        <button class="nav_descripcion-button1" id="descripcion-button1"  onClick={()=>descripcionButton1()}>Overview</button>
                                                        <button  class="nav_descripcion-button2"id="descripcion-button2" onClick={()=>descripcionButton2()}>Details</button>
                                                    </li>
                                               
                                                    <a href=" " id="descripcion-id"> {producto.description} </a>
                                                    </div>
                                                </div>
                                                :null
                                            ))}
                                             {list.map((producto) => (
                                                producto.id===product?
                                                <div class="" >
                                                  
                                                    <img src={producto.photo} alt="img" draggable="false" title="value"></img>
                                                    <div class="nav_descripcion"> 
                                                    <li>
                                                        <button class="nav_descripcion-button1"  id="descripcion-button1"  onClick={()=>descripcionButton1()} >Overview</button>
                                                        <button class="nav_descripcion-button2" id="descripcion-button2" onClick={()=>descripcionButton2()}>Details</button>
                                                    </li>
                                                    <a href=" " id="descripcion-id"> {producto.description} </a>
                                                   </div>
                                                </div>
                                                :null
                                            ))}
                                                
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Work;