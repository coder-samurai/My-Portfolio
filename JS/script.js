let Sections = document.querySelectorAll("section");
let ImagePush = document.querySelector(".ImagePush");


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