document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    const btnTop = document.getElementById("btnTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            btnTop.style.display = "block";
        } else {
            btnTop.style.display = "none";
        }
    });

    btnTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    const skills = [
        { path: "./assets/cdnlogo.com_html.svg",  alt: "html_icon"},
        { path: "./assets/cdnlogo.com_css.svg",  alt: "css_icon"},
        { path: "./assets/cdnlogo.com_javascript.svg",  alt: "javascript_icon"},
        { path: "./assets/cdnlogo.com_php.svg",  alt: "php_icon"},
        { path: "./assets/cdnlogo.com_codeigniter.svg",  alt: "codeigniter_icon"},
        { path: "./assets/cdnlogo.com_laravel.svg",  alt: "laravel_icon"},
        { path: "./assets/cdnlogo.com_mysql.svg",  alt: "mysql_icon"},
        { path: "./assets/cdnlogo.com_postgresql.svg",  alt: "postgresql_icon"},
        { path: "./assets/cdnlogo.com_mongodb-icon.svg",  alt: "mongo_icon"},
        { path: "./assets/cdnlogo.com_sass.svg",  alt: "sass_icon"},
        { path: "./assets/cdnlogo.com_nodejs-icon.svg",  alt: "node_icon"},
        { path: "./assets/cdnlogo.com_react.svg",  alt: "react_icon"},
        { path: "./assets/cdnlogo.com_python.svg",  alt: "python_icon"},
        { path: "./assets/Go_Logo_Blue.svg",  alt: "golang_icon"},
        { path: "./assets/cdnlogo.com_bootstrap-5.svg",  alt: "bootstrap_icon"},
        { path: "./assets/cdnlogo.com_java.svg",  alt: "java_icon"},
        { path: "./assets/cpluslogo.svg",  alt: "cplus_icon"}
    ]
    let skillMap = "";
    skills.forEach((skill) => { skillMap += `<img src="${skill.path}" alt="${skill.alt}" style="width: 70px;"/>`})
    const display = document.getElementById("skillDisplay");
    display.innerHTML = skillMap;
});

function openTabs(e, tab) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById(tab).style.display= "block";
    e.currentTarget.className += "active";
}