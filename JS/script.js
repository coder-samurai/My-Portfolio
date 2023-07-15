let Sections = document.querySelectorAll("section");


window.onscroll = () => {
    Sections.forEach(Sec => {
        let Top = window.scrollY;
        let OffSet = Sec.offsetTop - 420;
        let Height = Sec.offsetHeight;
        
        if (Top >= OffSet && Top < OffSet + Height){
            Sec.classList.add("ShowAnimate");
        } else {
            Sec.classList.remove("ShowAnimate");
        }
    });
};



let SkillNextButtonArrow0 = document.querySelectorAll(".SkillNextButtonArrow")[0];
let SkillNextButtonArrow1 = document.querySelectorAll(".SkillNextButtonArrow")[1];
let SkillNextButton = document.querySelector(".SkillNextButton");
let NextButton = document.querySelector(".NextButton");
let ContainerAboutSkills = document.querySelector("#ContainerAboutSkills");
let ContainerAbout = document.querySelector(".ContainerAbout");
var ContainerAboutHide = false;

function HideAndShow(){
    if (!ContainerAboutHide){
        ContainerAbout.classList.add("Hide");
        SkillNextButtonArrow0.classList.add("Flip");
        SkillNextButtonArrow1.classList.add("Flip");
        ContainerAboutSkills.classList.add("Show");
        SkillNextButton.textContent = "Me";
        NextButton.classList.add("Skills");
        ContainerAboutHide = true;
    } else {
        ContainerAbout.classList.remove("Hide");
        SkillNextButtonArrow0.classList.remove("Flip");
        SkillNextButtonArrow1.classList.remove("Flip");
        ContainerAboutSkills.classList.remove("Show");
        SkillNextButton.textContent = "Skills";
        NextButton.classList.remove("Skills");
        ContainerAboutHide = false;
    }
};

SkillNextButton.addEventListener("click", HideAndShow);
SkillNextButtonArrow0.addEventListener("click", HideAndShow);
SkillNextButtonArrow1.addEventListener("click", HideAndShow);