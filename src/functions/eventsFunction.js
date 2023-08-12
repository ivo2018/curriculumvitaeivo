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

export function closeWindow() {
    var windowAbout = document.getElementById("windowAbout");
    var windowWork = document.getElementById("windowWork");
    if (windowAbout != null) {
        windowAbout.style.opacity = "0";
        windowAbout.style.width = "20%";
        windowAbout.style.transition = "0.2s all"
    }
    if (windowWork != null) {
        windowWork.style.opacity = "0";
        windowWork.style.width = "20%";
        windowWork.style.transition = "0.2s all"

    }
};
export function openWindow() {
    var windowAbout = document.getElementById("windowAbout");
    var windowWork = document.getElementById("windowWork");
    if (windowAbout != null) {
        windowAbout.style.opacity = "100%";
        windowAbout.style.width = "82%";
    }
    if (windowWork != null) {
        windowWork.style.opacity = "100%";
        windowWork.style.width = "82%";
    }
}



export function FolderDecide(setSelect) {

    var work, about, skills, contact;
    work = document.getElementById('work');
    about = document.getElementById('about');
    skills = document.getElementById('skills');
    contact = document.getElementById('contact');
    var folderSelected;
    folderSelected = document.getElementById(setSelect);
    if (folderSelected) {
        switch (folderSelected) {
            case work:
                folderSelected = work;
                break;
            case about:
                folderSelected = about;
                break;
            case skills:
                folderSelected = skills;
                break;
            case contact:
                folderSelected = contact;
                break;
            default:
                break;
        }
    }
    if (folderSelected) {
        if (work && about && skills && contact && folderSelected != null) {
            folderSelected.style.outline = 'dotted 1.2px rgb(255, 255, 255)';
            folderSelected.style.background = 'rgb(2, 2, 80)';
        }
    }
}

export function opacitySelected(opacitystate, setOpacityState, key) {
    var key1, key2;
    key1 = document.getElementById("key1");
    key2 = document.getElementById("key2");
    var keySelected = document.getElementById(key);
    switch (keySelected) {
        case key1:
            keySelected = key1;
            break;
        case key2:
            keySelected = key2;
            break;

        default:
            break;
    }
    if (key2 != null && key1 != null) {
        if(!opacitystate){
            
            keySelected.style.opacity= '0.5';
            if(keySelected!==key1){
                key1.style.opacity= '0.9';
               
            }else{
                key2.style.opacity= '0.9';
                setOpacityState(true);
            }     
            } 
        }
        if(opacitystate){
            if(keySelected===key1){
                key1.style.opacity="0.5"
            }else{
                key2.style.opacity="0.5"
                key1.style.opacity="0.9"
                setOpacityState(false);
            }
        }
    }

