// handle on click elememt

let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)


// mobile & tablet
let navIcon = $(".header__mobile-tablet-icon") //get element navbar icon mobile & tablet
let navOverplay = $(".header__mobile-tablet__overplay") //get element overplaymobile & tablet
let navList_c_m = $(".header__mobile-tablet-nav") //get element list mobile & tablet
let navItems_c_m = $$(".header__mobile-tablet-nav-item")
let closeNav = $(".header__mobile-tablet-nav-close") ////get element close navbar mobile & tablet

// header
let headerE = $(".header")
let navList_l = $(".header__navbar-list")

// slideshow
let myIndex = 0; //set slidershow
let stopTimeout; //set slidershow

// about
let aboutEle = $(".about")

// my services
let servicesEle = $(".services")
let testimonialBoxs = $$(".services__custom-testimonial-box")
let testimonialIndicators = $$(".services__custom-testimonial__indicator")
    // 
let portfolioEle = $(".portfolio")

// blog
let blogEle = $(".blog")
let modelEle = $(".model")
let modelOver = $(".model__overplay")
let modelBlog = $(".blog__details")

// my contact
let contactEle = $(".contact")



// xử lí hành động
function handleClick() {


    //click show navbar mobile & tablet
    navIcon.onclick = () => {
            navOverplay.style.display = "block"
            navList_c_m.classList.add("active")
            navList_c_m.classList.add("animationLeftNav")
        }
        //  ẩn thanh nave mobile & table
    function hideNav() {
        navOverplay.style.display = "none"
        navList_c_m.classList.remove("active")
    }



    // ==close list mobile & tablet==
    // ==click button close nav
    closeNav.onclick = () => {
        hideNav()
    }

    // ==click button nav overplay
    navOverplay.onclick = () => {
        hideNav()
    }

    // click nav item close list nav
    navItems_c_m.forEach((navItem, index) => {
        navItem.onclick = () => {
            hideNav()
        }

    })


    //show navbar khi cuộn
    document.onscroll = function() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop >= 100) {
            headerE.style.background = "var(--white-color)" //color từ màu trong chuyển sang màu trắng
            headerE.style.boxShadow = "0 0 8px #d8d5d6"
            headerE.style.color = "var(--text-color)"
            navIcon.style.color = "var(--text-color)"
            navList_l.classList.add("item-text--color")
        } else {
            headerE.style.background = "none"
            headerE.style.color = "var(--white-color)"
            navIcon.style.color = "var(--white-color)"
            headerE.style.boxShadow = "none"
            navList_l.classList.remove("item-text--color")
        }
        if (scrollTop >= 500) {
            $(".btn-slide-up").style.display = "flex"
        } else {
            $(".btn-slide-up").style.display = "none"
        }

        // xóa activeItem nav
        function RemoveActiveItemNav() {
            $(".header__navbar-item.active").classList.remove("active")
            $(".header__mobile-tablet-nav-item.active").classList.remove("active")
        }

        //thêm activeItem nav 
        function AddActiveItemNav(index) {
            $(`.header__navbar-item:nth-child(${index})`).classList.add("active")
            $(`.header__mobile-tablet-nav-item:nth-child(${index})`).classList.add("active")

        }

        // get OffsetTop


        function getOffSetTop(element) {
            return element.offsetTop - 100
        }
        // // get OffsetTop
        // function getOffSetBot(element) {
        //     return element.offsetTop + element.offsetHeight
        // }




        function indexItemNav() {
            let indexItem = 1;
            if (scrollTop >= getOffSetTop(contactEle))
                indexItem = 6;
            else {
                if (scrollTop >= getOffSetTop(blogEle))
                    indexItem = 5;
                else {
                    if (scrollTop >= getOffSetTop(portfolioEle))
                        indexItem = 4;
                    else {
                        if (scrollTop >= getOffSetTop(servicesEle))
                            indexItem = 3;
                        else {
                            {
                                if (scrollTop >= getOffSetTop(aboutEle))
                                    indexItem = 2;
                            }
                        }
                    }
                }
            }
            RemoveActiveItemNav()
            AddActiveItemNav(indexItem)

        }
        indexItemNav()



    }



    //click modeloverplay for close model
    modelOver.onclick = () => {
        modelEle.style.display = "none"
        modelBlog.style.display = "none"

    }
}

handleClick()




// slidershow testimonial
function removeActiveTesti() {
    testimonialBoxs.forEach((testimonialBox, index) => {
        testimonialBox.classList.remove("active")
    })
    testimonialIndicators.forEach((testimonialIndicator, index) => {
        testimonialIndicator.classList.remove("active")
    })
}

function addActiveTesti() {
    testimonialBoxs[myIndex].classList.add("active")
    testimonialIndicators[myIndex].classList.add("active")
}
//hiển thị   slidershow testimotial và tự động chuyển đổi trong 8s
function slidershowTestimonial() {
    stopTimeout = setTimeout(slidershowTestimonial, 10000);
    removeActiveTesti();
    myIndex++;
    if (myIndex == testimonialBoxs.length) {
        myIndex = 0
    }

    addActiveTesti()
        // Change image every 2 seconds
}
slidershowTestimonial();

// chuyển đổi các đánh giả của khách hàng
function plusDivs(number) {
    removeActiveTesti()
    if (number === -1) {
        myIndex = (myIndex == 0) ? (testimonialBoxs.length - 1) : myIndex - 1

    }
    if (number == 1) {
        myIndex = myIndex == (testimonialBoxs.length - 1) ? 0 : myIndex + 1
    }

    addActiveTesti()
    clearTimeout(stopTimeout);
    stopTimeout = setTimeout(slidershowTestimonial, 10000);

}
// chỉ mục đang chọn của đánh giá khách hàng
function currentIndicator() {
    testimonialIndicators.forEach((currentIndicator, index) => {
        currentIndicator.onclick = () => {
            removeActiveTesti()
            myIndex = index;

            addActiveTesti()
            clearTimeout(stopTimeout);
            stopTimeout = setTimeout(slidershowTestimonial, 10000);

        }

    })

}
currentIndicator()



// choose color
let chooseColorEle = $(".choose-color")
let colorList = $(".choose-color__list")
let settingcolor = $(".setting-color ")
let rootStyle = document.documentElement.style;

function chooseColor() {
    let colors = [{
            name: "Pink",
            code: "#ff1e56"
        },
        {
            name: "Green",
            code: "#79d70f"
        },
        {
            name: "blue",
            code: "#40bad5"
        },
        {
            name: "orange",
            code: "#ff7315"
        },
        {
            name: "violet",
            code: "#9818d6"
        },
        {
            name: "Yellow",
            code: "#ffd31d"
        },
        {
            name: "fuchsia",
            code: "#ff00ff"
        },
        {
            name: "tomato",
            code: "#ff5d56"
        },
    ]
    let colorHtmls = colors.map((color, index) => {
        return `    <li class="choose-color__item " style="--color:${color.code}">
                        <i class="fas fa-check " ></i>
                    </li>
                   
        `
    })
    colorList.innerHTML = colorHtmls.join(" ")
    let colorItemEles = $$(".choose-color__item")
        //chọn nút setting màu
    settingcolor.onclick = () => {
        chooseColorEle.classList.toggle("active")
        chooseColorEle.classList.add("animationLeft")
    }

    // remove màu đã chọn
    function removetick() {
        colorItemEles.forEach((colorItemEle, index) => {
            colorItemEle.classList.remove("active")
        });

    }

    function tickColor() {
        colorItemEles.forEach((colorItemEle, index) => {

            colorItemEle.onclick = () => {
                removetick()
                colorItemEle.classList.add("active")
                rootStyle.setProperty('--primary-color', colors[index].code);
            }
        });
    }
    tickColor()





}
chooseColor()




// skill
function renderSkills() {
    let skills = [{
            name: "HTML",
            percent: "10%"
        },
        {
            name: "CSS",
            percent: "50%"
        },
        {
            name: "SASS",
            percent: "57%"
        },
        {
            name: "Bootstrap",
            percent: "80%"
        },
        {
            name: "Jave Script",
            percent: "57%"
        },
        {
            name: "ReactJS",
            percent: "100%"
        },
        {
            name: "ReactNative",
            percent: "4%"
        },
        {
            name: "Photoshop CS6",
            percent: "1%"
        },
    ]
    let skillsBox = $(".skills-box")
    let htmls = skills.map((skill, index) => {
        return ` <div class="col l-6 m-12 c-12">
        <div class="skill">
            <div class="skill__prossgress-text">
                <span class="skill__prossgress-title">${skill.name}</span>
                <span class="skill__prossgress-percent">${skill.percent}</span>
            </div>
            <div class="skill__prossgressbar">
                <div style="--percent:${skill.percent}"class="skill__prossgress"></div>
            </div>
        </div>
    </div>`
    });
    skillsBox.innerHTML = htmls.join(" ")
}
renderSkills()



// portfolio
function renderPortfolio() {

    let portfolioBtns = $$(".portfolio__btn")
    let portfolioEle = $(".portfolio .row")

    let portfoliosList = [{
            img: "./assets/img/img-1.jpg",
            icon: "fas fa-image",
            link: "#",
            title: "PROJECT DESIGN 1",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus dignissimos fuga, ab nemo laborum blanditiis minima iure incidunt magni magnam possimus harum debitis dolore, corporis voluptatibus nesciunt atque nam!",
            client: "Hihi",
            idcategory: 1,
            category: "Design",
            technologies: "HTML5,CSS3,WordPress,PHP",
            pjdate: "21 May 2021",
            pjurl: "www.example.com",
            share: "#"
        },
        {
            img: "./assets/img/music-1.jpg",
            icon: "fas fa-music",
            link: "#",
            title: "PROJECT DESIGN 1",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus dignissimos fuga, ab nemo laborum blanditiis minima iure incidunt magni magnam possimus harum debitis dolore, corporis voluptatibus nesciunt atque nam!",
            client: "Hihi",
            idcategory: 2,
            category: "Music",
            technologies: "HTML5,CSS3,WordPress,PHP",
            pjdate: "21 May 2021",
            pjurl: "www.example.com",
            share: "#"
        },
        {
            img: "./assets/img/video-2.png",
            icon: "fab fa-youtube",
            link: "#",
            title: "PROJECT DESIGN 1",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus dignissimos fuga, ab nemo laborum blanditiis minima iure incidunt magni magnam possimus harum debitis dolore, corporis voluptatibus nesciunt atque nam!",
            client: "Hihi",
            idcategory: 3,
            category: "Video",
            technologies: "HTML5,CSS3,WordPress,PHP",
            pjdate: "21 May 2021",
            pjurl: "www.example.com",
            share: "#"
        },
        {
            img: "./assets/img/img-2.jpg",
            icon: "fas fa-image",
            link: "#",
            title: "PROJECT DESIGN 1",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus dignissimos fuga, ab nemo laborum blanditiis minima iure incidunt magni magnam possimus harum debitis dolore, corporis voluptatibus nesciunt atque nam!",
            client: "Hihi",
            idcategory: 1,
            category: "Design",
            technologies: "HTML5,CSS3,WordPress,PHP",
            pjdate: "21 May 2021",
            pjurl: "www.example.com",
            share: "#"
        },

        {
            img: "./assets/img/video-1.jpeg",
            icon: "fab fa-youtube",
            link: "#",
            title: "PROJECT DESIGN 1",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus dignissimos fuga, ab nemo laborum blanditiis minima iure incidunt magni magnam possimus harum debitis dolore, corporis voluptatibus nesciunt atque nam!",
            client: "Hihi",
            idcategory: 3,
            category: "Video",
            technologies: "HTML5,CSS3,WordPress,PHP",
            pjdate: "21 May 2021",
            pjurl: "www.example.com",
            share: "#"
        },

        {
            img: "./assets/img/video-1.jpeg",
            icon: "fab fa-youtube",
            link: "#",
            title: "PROJECT DESIGN 1",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus dignissimos fuga, ab nemo laborum blanditiis minima iure incidunt magni magnam possimus harum debitis dolore, corporis voluptatibus nesciunt atque nam!",
            client: "Hihi",
            idcategory: 3,
            category: "Video",
            technologies: "HTML5,CSS3,WordPress,PHP",
            pjdate: "21 May 2021",
            pjurl: "www.example.com",
            share: "#"
        },
        {
            img: "./assets/img/music-1.jpg",
            icon: "fas fa-music",
            link: "#",
            title: "PROJECT DESIGN 1",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus dignissimos fuga, ab nemo laborum blanditiis minima iure incidunt magni magnam possimus harum debitis dolore, corporis voluptatibus nesciunt atque nam!",
            client: "Hihi",
            idcategory: 2,
            category: "Music",
            technologies: "HTML5,CSS3,WordPress,PHP",
            pjdate: "21 May 2021",
            pjurl: "www.example.com",
            share: "#"
        },
        {
            img: "./assets/img/music-1.jpg",
            icon: "fas fa-music",
            link: "#",
            title: "PROJECT DESIGN 1",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus dignissimos fuga, ab nemo laborum blanditiis minima iure incidunt magni magnam possimus harum debitis dolore, corporis voluptatibus nesciunt atque nam!",
            client: "Hihi",
            idcategory: 2,
            category: "Music",
            technologies: "HTML5,CSS3,WordPress,PHP",
            pjdate: "21 May 2021",
            pjurl: "www.example.com",
            share: "#"
        },

        {
            img: "./assets/img/img-1.jpg",
            icon: "fas fa-image",
            link: "#",
            title: "PROJECT DESIGN 1",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus dignissimos fuga, ab nemo laborum blanditiis minima iure incidunt magni magnam possimus harum debitis dolore, corporis voluptatibus nesciunt atque nam!",
            client: "Hihi",
            idcategory: 1,
            category: "Design",
            technologies: "HTML5,CSS3,WordPress,PHP",
            pjdate: "21 May 2021",
            pjurl: "www.example.com",
            share: "#"
        },




    ]
    let htmlsportfoliosList = portfoliosList.map((portfolio, index) => {
        return `<div class="col l-4 m-6 c-12">
        <div class="portfolio__wrap">
            <img src="${portfolio.img}" alt="" class="portfolio__wrap-img">
            <div class="portfolio__wrap-detail">
                <div class="portfolio__wrap-detail-title">
                    IMAGE PROJECT
                </div>
                <div class="portfolio__wrap-detail-name">
                ${portfolio.category}
                </div>
                <div class="portfolio__wrap-detail-icons">
                    <div class="portfolio__wrap-detail-icon"><i class="${portfolio.icon}"></i></div>
                    <div class="portfolio__wrap-detail-icon"><i class="fas fa-link"></i></div>
                </div>
            </div>
        </div>
    </div>       `
    })
    portfolioEle.innerHTML = htmlsportfoliosList.join(" ")



    //hàm xóa btn đang đc chọn
    function removeActivePortfolioBtn() {
        portfolioBtns.forEach((portfolioBtn, index) => {
            portfolioBtn.classList.remove("btn-primary")
        })
    }


    //xử lí các hành động click trong Portfolio(danh mục đầu tư)
    function handleClickPortfolio() {
        function ClickPortfolioBtn() {
            let portfolioWrap = $$(".portfolio .col")

            portfolioBtns.forEach((portfolioBtn, index) => {
                portfolioBtn.onclick = () => {

                    removeActivePortfolioBtn()
                    portfolioBtn.classList.add("btn-primary")
                    showPortfoli(index)


                }
            })


            function showPortfoli(indexPo) {

                if (indexPo == 0) { renderPortfolio() } else {
                    portfoliosList.forEach((portfolio, index) => {
                        portfolioWrap[index].style.display = "none"
                        if (indexPo === portfolio.idcategory) {
                            portfolioWrap[index].style.display = "block"

                        }

                    })
                }

            }

        }
        ClickPortfolioBtn()

    }
    handleClickPortfolio()


}
renderPortfolio()


// my blog
function renderBlog() {

    let blogCardList = $(".blog .row")

    let blogs = [{
            title: "HOW TO DEVELOPER FONT-END 1",
            img: "./assets/img/img-1.jpg",
            date: "5 April 2021",
            quantityCmt: "1",
            destriptive: "Be brave enough to live life creatively. The creative place is where no one else has ever been.",
            details: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Blanditiis et sunt hic a, natus, eaque commodi saepe distinctio, quo labore repellat! Sint similique minus tenetur 
        cum distinctio. Omnis, sint soluta. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Velit ipsam accusantium 
        illum quia ut necessitatibus id impedit consectetur, culpa alias. Excepturi, exercitationem quos ipsam delectus optio animi officia expedita architecto?<br/>                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquam necessitatibus, eum rem reiciendis eveniet fugiat porro omnis ullam dignissimos iure dolorem aut minima,
         earum expedita incidunt recusandae ea aspernatur!`,
            Tag: "Web Design, Web Developer",

            cmt: [{
                name: "PHAM THANH TAM",
                img: "./assets/img/custom2.jpg",
                datetime: "12 December, 2021 at 11:00 pm",
                content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et tempora delectus eum, fugiat numquam maiores possimus mollitia vel laborum, dolores labore. Fugiat veritatis, sed officiis corporis delectus
                     incidunt obcaecati tempore Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum .`

            }]

        },
        {
            title: "HOW TO DEVELOPER FONT-END 2",
            img: "./assets/img/img-1.jpg",
            date: "5 April 2021",
            quantityCmt: "1",
            destriptive: "Be brave enough to live life creatively. The creative place is where no one else has ever been.",
            details: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Blanditiis et sunt hic a, natus, eaque commodi saepe distinctio, quo labore repellat! Sint similique minus tenetur 
        cum distinctio. Omnis, sint soluta. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Velit ipsam accusantium 
        illum quia ut necessitatibus id impedit consectetur, culpa alias. Excepturi, exercitationem quos ipsam delectus optio animi officia expedita architecto?<br/>                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquam necessitatibus, eum rem reiciendis eveniet fugiat porro omnis ullam dignissimos iure dolorem aut minima,
         earum expedita incidunt recusandae ea aspernatur!`,
            Tag: "Web Design, Web Developer",

            cmt: [{
                name: "PHAM THANH TAM",
                img: "./assets/img/custom2.jpg",
                datetime: "12 December, 2021 at 11:00 pm",
                content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et tempora delectus eum, fugiat numquam maiores possimus mollitia vel laborum, dolores labore. Fugiat veritatis, sed officiis corporis delectus
                     incidunt obcaecati tempore Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum .`

            }]

        },
        {
            title: "HOW TO DEVELOPER FONT-END 3",
            img: "./assets/img/img-1.jpg",
            date: "5 April 2021",
            quantityCmt: "1",
            destriptive: "Be brave enough to live life creatively. The creative place is where no one else has ever been.",
            details: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Blanditiis et sunt hic a, natus, eaque commodi saepe distinctio, quo labore repellat! Sint similique minus tenetur 
        cum distinctio. Omnis, sint soluta. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Velit ipsam accusantium 
        illum quia ut necessitatibus id impedit consectetur, culpa alias. Excepturi, exercitationem quos ipsam delectus optio animi officia expedita architecto?<br/>                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquam necessitatibus, eum rem reiciendis eveniet fugiat porro omnis ullam dignissimos iure dolorem aut minima,
         earum expedita incidunt recusandae ea aspernatur!`,
            Tag: "Web Design, Web Developer",

            cmt: [{
                name: "PHAM THANH TAM",
                img: "./assets/img/custom2.jpg",
                datetime: "12 December, 2021 at 11:00 pm",
                content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et tempora delectus eum, fugiat numquam maiores possimus mollitia vel laborum, dolores labore. Fugiat veritatis, sed officiis corporis delectus
                     incidunt obcaecati tempore Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum .`
            }]

        }
    ]
    let blogshtml = blogs.map((blog, index) => {
        return `  
            <div class="col l-4 m-6 c-12">
                <div class="blog__card">
                    <div class="blog__card-img">
                        <img src="${blog.img}" alt="" class="blog__card-img-link">
                    </div>

                    <div class="blog__card-content">
                        <h3 class="blog__card-title">
                          ${blog.title}
                        </h3>
                        <span class="blog__card-date">
                            <i class="fas fa-calendar-alt blog__card-date-icon"></i>
                            ${blog.date}
                        </span>
                        <span class="blog__card-comment">
                            <i class="fas fa-comments blog__card-comment-icon"></i>
                            ${blog.quantityCmt} comments
                        </span>
                        <p class="blog__card-descriptive">${blog.destriptive}</p>
                        <a class="blog__card-more">READ MORE <i class="fas fa-angle-double-right"></i></a>

                    </div>

                </div>
            </div>
   
        `

    })
    blogCardList.innerHTML = blogshtml.join(" ")
    const blogCardAll = $$(".blog__card") //get all element blog card 

    blogCardAll.forEach((blogCard, index) => {
        blogCard.onclick = (e) => {
            //open
            const blogCardImg = blogCard.querySelector(".blog__card-img-link");
            const blogCardMore = blogCard.querySelector(".blog__card-more");
            if (e.target == blogCardImg || e.target == blogCardMore) {
                modelEle.style.display = "block"
                modelBlog.style.display = "block"
            }
            modelBlog.innerHTML = `
            <h3 class="blog__details-post-title">DELTAILS BLOG
            </h3>
            <h3 class="blog__details-title">
                ${blogs[index].title}
            </h3>
            <span class="blog__card-date">
                <i class="fas fa-calendar-alt blog__card-date-icon"></i>
                5 April 2021
            </span>
            <span class="blog__card-comment">
                <i class="fas fa-comments blog__card-comment-icon"></i>
                12 comments
            </span>
            <p class="blog__card-descriptive"> ${blogs[index].destriptive}</p>
            <div class="grid">
                <div class="row">
                    <div class="col l-5">
                        <img src="${blogs[index].img}" class="blog__details-img" alt="">
                    </div>
                    <div class="col l-7">
                        <p class="blog__details-descriptive">
                        ${blogs[index].details}
                        </p>
                    </div>
                </div>
            </div>
            <div class="blog__details-tag-share">
                <div class="blog__details-tag">
                    <h3>TAGS: </h3>
                    <span>Web Design, Web Developer</span>
                </div>
                <div class="blog__details-share">
                    <h3>SHARE: </h3>
                    <span>
                        <a href="" class="blog__details-share-link">
                            <i class="fab fa-facebook-f blog__details-share-icon"></i></a>
                        <a href="" class="blog__details-share-link">
                            <i class="fab fa-instagram blog__details-share-icon"></i></a>
                        <a href="" class="blog__details-share-link">
                            <i class="fab fa-twitter blog__details-share-icon"></i></a>
                        <a href="" class="blog__details-share-link">
                            <i class="fab fa-linkedin blog__details-share-icon"></i></a>
                           
                    </span>
                </div>
            </div>
            <div class="blog__details-comment">
                <div class="blog__details-comment-logo">
                    <img src="${blogs[index].cmt[0].img}" alt="">
                </div>

                <div class="blog__details-comment-container">
                    <h4 class="blog__details-comment-container-name"> ${blogs[index].cmt[0].name}</h4>
                    <p class="blog__details-comment-container-datetime">${blogs[index].cmt[0].datetime}</p>
                    <p class="blog__details-comment-container-content">${blogs[index].cmt[0].content}</p>
                </div>

            </div>
            <div class="form-group">
                <div class="grid">
                    <h4 class="form-heading">LEAVE A REPLY</h4>
                    <div class="row">
                        <div class="col l-6 c-12 t-12 ">
                            <input type="text" placeholder="Name" class="form-control">
                        </div>
                        <div class="col l-6 c-12 t-12 ">
                            <input type="text" placeholder="Email" class="form-control">
                        </div>
                        <div class="col l-12 c-12 t-12 ">
                            <input type="text" placeholder="Website" class="form-control">
                        </div>
                        <div class="col l-12 c-12 t-12 ">
                            <textarea class="form-control form-control-area" rows="4" placeholder="Comment" required=""></textarea>
                        </div>
                    </div>
                    <button class="btn btn-sent"><i class="fab fa-telegram-plane btn-sent-icon"></i>SEND MESAGE</button>
                </div>

            </div>
            <div class="blog__details-close">
                <i class="fas fa-times"></i>
            </div>
            `
                //close
            var blogClose = $(".blog__details-close")
            blogClose.onclick = () => {
                modelEle.style.display = "none"
                modelBlog.style.display = "none"

            }
        }

    });




}
renderBlog()


// MAP

// let map;

// function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: -323.397, lng: 150.644 },
//         zoom: 8,
//     });
// }