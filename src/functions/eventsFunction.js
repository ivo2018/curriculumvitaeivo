export function titleEffect() {
    var titlePageName = document.getElementById('content-title');
    var element = document.querySelector('.homePage');
    if (element) {
        element.addEventListener("mousemove",
            function (event) {
                if (event.movementX > 0) {
                    titlePageName.style.boxShadow = "15px 6px 5px -2px rgba(77, 33, 33, 0.568)";

                    titlePageName.style.transition = "0.8s all";
                } else
                    if (event.movementX < 0) {
                        titlePageName.style.boxShadow = "-15px -6px 5px -2px rgba(77, 33, 33, 0.568)";

                        titlePageName.style.transition = "0.8s all";
                    } else
                        if (event.movementY < 0) {
                            titlePageName.style.boxShadow = "0px -6px 2px 0.5px rgba(77, 33, 33, 0.568)";

                            titlePageName.style.transition = "0.8s all";
                        } else
                            if (event.movementY > 0) {
                                titlePageName.style.boxShadow = "0px 6px 2px 0.5px rgba(77, 33, 33, 0.568)";

                                titlePageName.style.transition = "0.8s all";
                            }
                            else {
                                titlePageName.style.boxShadow = "0px 6px 2px 0.5px rgba(77, 33, 33, 0.568)";
                            }
            })
    };
}
export function folderWorkClick() {

    var work, about, skills, contact;
    work = document.getElementById('work');
    about = document.getElementById('about');
    skills = document.getElementById('skills');
    contact = document.getElementById('contact');
    if (work && about && skills && contact != null) {
        work.style.outline = 'dotted 1.2px rgb(255, 255, 255)';
        work.style.background = 'rgb(2, 2, 80)';
        skills.style.outline = 'none';
        skills.style.background = 'none';
        about.style.outline = 'none';
        about.style.background = 'none';
        contact.style.outline = 'none';
        contact.style.background = 'none';
    }
}
export function folderSkillsClick() {

    var work, about, skills, contact;
    work = document.getElementById('work');
    about = document.getElementById('about');
    skills = document.getElementById('skills');
    contact = document.getElementById('contact');
    if (work && about && skills && contact != null) {
        skills.style.outline = 'dotted 1.2px rgb(255, 255, 255)';
        skills.style.background = 'rgb(2, 2, 80)';
        work.style.outline = 'none';
        work.style.background = 'none';
        about.style.outline = 'none';
        about.style.background = 'none';
        contact.style.outline = 'none';
        contact.style.background = 'none';
    }
}
export function folderMessageClick() {

    var work, about, skills, contact;
    work = document.getElementById('work');
    about = document.getElementById('about');
    skills = document.getElementById('skills');
    contact = document.getElementById('contact');
    if (work && about && skills && contact != null) {
        contact.style.outline = 'dotted 1.2px rgb(255, 255, 255)';
        contact.style.background = 'rgb(2, 2, 80)';
        skills.style.outline = 'none';
        skills.style.background = 'none';
        about.style.outline = 'none';
        about.style.background = 'none';
        work.style.outline = 'none';
        work.style.background = 'none';
    }
}
export function folderAboutClick() {

    var work, about, skills, contact;
    work = document.getElementById('work');
    about = document.getElementById('about');
    skills = document.getElementById('skills');
    contact = document.getElementById('contact');
    if (work && about && skills && contact != null) {
        about.style.outline = 'dotted 1.2px rgb(255, 255, 255)';
        about.style.background = 'rgb(2, 2, 80)';
        skills.style.outline = 'none';
        skills.style.background = 'none';
        work.style.outline = 'none';
        work.style.background = 'none';
        contact.style.outline = 'none';
        contact.style.background = 'none';
    }
}

export function opacity(opacitystate, setOpacityState) {
    var key1, key2;
    key1 = document.getElementById("key1");
    key2 = document.getElementById("key2");
    if (key2 != null && key1 != null) {
        if (opacitystate === false) {
            key2.style.opacity = "0.99";
            key1.style.opacity = "0.5";
            setOpacityState(true);
        }
    }

}
export function opacity2(opacitystate, setOpacityState) {
    var key1, key2;
    key1 = document.getElementById("key1");
    key2 = document.getElementById("key2");
    if (key2 != null && key1 != null) {
        if (opacitystate === true)
            key2.style.opacity = "0.5";
        key1.style.opacity = "0.99";
        setOpacityState(false);
    }
}
export function closeWindow() {
    var windowAbout = document.getElementById("windowAbout");
    if (windowAbout != null) {
        windowAbout.style.opacity = "0";
        windowAbout.style.width = "20%";
        windowAbout.style.transition = "0.2s all"
    }

};
export function openWindow() {
    var windowAbout = document.getElementById("windowAbout");
    if (windowAbout != null) {
    windowAbout.style.opacity = "100%";
    windowAbout.style.width = "82%";
    }
}
