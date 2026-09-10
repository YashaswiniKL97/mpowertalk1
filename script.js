/* =====================================================
   mPowerTalk NAVBAR
===================================================== */


/* =====================================================
   ELEMENTS
===================================================== */

const header =
    document.getElementById("siteHeader");


const hamburger =
    document.getElementById("hamburger");


const mobileMenu =
    document.getElementById("mobileMenu");


const languageSelector =
    document.querySelector(
        ".language-selector"
    );


const languageButton =
    document.getElementById(
        "languageButton"
    );


const currentLanguage =
    document.getElementById(
        "currentLanguage"
    );


const languageOptions =
    document.querySelectorAll(
        ".language-option"
    );


const mobileLanguageOptions =
    document.querySelectorAll(
        ".mobile-language-option"
    );


const navItems =
    document.querySelectorAll(
        ".desktop-navigation .nav-item"
    );


const mobileNavItems =
    document.querySelectorAll(
        ".mobile-nav-item"
    );



/* =====================================================
   NAVBAR SCROLL
===================================================== */

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 20
        ) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }
);



/* =====================================================
   HAMBURGER
===================================================== */

hamburger.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();


        const isOpen =
            mobileMenu.classList.toggle(
                "open"
            );


        hamburger.classList.toggle(
            "active",
            isOpen
        );


        hamburger.setAttribute(
            "aria-expanded",
            isOpen
        );

    }
);



/* =====================================================
   MOBILE NAV CLICK
===================================================== */

mobileNavItems.forEach(
    item => {

        item.addEventListener(
            "click",
            () => {

                setActiveItem(
                    mobileNavItems,
                    item
                );


                closeMobileMenu();

            }
        );

    }
);



/* =====================================================
   DESKTOP NAV CLICK
===================================================== */

navItems.forEach(
    item => {

        item.addEventListener(
            "click",
            () => {

                setActiveItem(
                    navItems,
                    item
                );

            }
        );

    }
);



/* =====================================================
   ACTIVE ITEM
===================================================== */

function setActiveItem(
    items,
    selectedItem
) {

    items.forEach(
        item => {

            item.classList.remove(
                "active"
            );

        }
    );


    selectedItem.classList.add(
        "active"
    );

}



/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

function closeMobileMenu() {

    mobileMenu.classList.remove(
        "open"
    );


    hamburger.classList.remove(
        "active"
    );


    hamburger.setAttribute(
        "aria-expanded",
        "false"
    );

}



/* =====================================================
   LANGUAGE DROPDOWN
===================================================== */

languageButton.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();


        languageSelector.classList.toggle(
            "open"
        );


        const isOpen =
            languageSelector.classList.contains(
                "open"
            );


        languageButton.setAttribute(
            "aria-expanded",
            isOpen
        );

    }
);



/* =====================================================
   DESKTOP LANGUAGE OPTIONS
===================================================== */

languageOptions.forEach(
    option => {

        option.addEventListener(
            "click",
            () => {

                const language =
                    option.dataset.language;


                changeLanguage(
                    language
                );


                languageSelector.classList.remove(
                    "open"
                );


                languageButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    }
);



/* =====================================================
   MOBILE LANGUAGE OPTIONS
===================================================== */

mobileLanguageOptions.forEach(
    option => {

        option.addEventListener(
            "click",
            () => {

                const language =
                    option.dataset.language;


                changeLanguage(
                    language
                );

            }
        );

    }
);



/* =====================================================
   CHANGE LANGUAGE
===================================================== */

function changeLanguage(
    language
) {


    /*
       Find every element that has
       English + Kannada values.
    */

    const translatableElements =
        document.querySelectorAll(
            "[data-en][data-kn]"
        );

        translatableElements.forEach(
    element => {

        if (
            language === "kn"
        ) {

            element.textContent =
                element.dataset.kn;

        } else {

            element.textContent =
                element.dataset.en;

        }

    }
);

    /* Current language button */

    if (
        language === "kn"
    ) {

        currentLanguage.textContent =
            "ಕನ್ನಡ";

    } else {

        currentLanguage.textContent =
            "EN";

    }



    /* Desktop selected option */

    languageOptions.forEach(
        option => {

            option.classList.toggle(
                "selected",
                option.dataset.language === language
            );

        }
    );



    /* Mobile selected option */

    mobileLanguageOptions.forEach(
        option => {

            option.classList.toggle(
                "active",
                option.dataset.language === language
            );

        }
    );



    /* HTML language */

    document.documentElement.lang =
        language === "kn"
            ? "kn"
            : "en";



    /* Save language */

    localStorage.setItem(
        "mpowerTalkLanguage",
        language
    );

}



/* =====================================================
   LOAD SAVED LANGUAGE
===================================================== */

const savedLanguage =
    localStorage.getItem(
        "mpowerTalkLanguage"
    );


if (
    savedLanguage
) {

    changeLanguage(
        savedLanguage
    );

} else {

    changeLanguage(
        "en"
    );

}



/* =====================================================
   CLOSE LANGUAGE DROPDOWN
===================================================== */

document.addEventListener(
    "click",
    event => {

        if (
            !languageSelector.contains(
                event.target
            )
        ) {

            languageSelector.classList.remove(
                "open"
            );


            languageButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);



/* =====================================================
   CLOSE MOBILE MENU OUTSIDE
===================================================== */

document.addEventListener(
    "click",
    event => {

        if (
            !mobileMenu.contains(
                event.target
            ) &&
            !hamburger.contains(
                event.target
            )
        ) {

            closeMobileMenu();

        }

    }
);



/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeMobileMenu();


            languageSelector.classList.remove(
                "open"
            );


            languageButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);
/* =====================================================
   HERO BANNER SLIDER
===================================================== */

const heroSlides =
    document.querySelectorAll(
        ".hero-slide"
    );

let currentHeroSlide = 0;


function showHeroSlide(
    index
) {

    heroSlides.forEach(
        slide => {

            slide.classList.remove(
                "hero-slide-active"
            );

        }
    );


    heroSlides[index].classList.add(
        "hero-slide-active"
    );

}


if (
    heroSlides.length > 1
) {

    setInterval(
        () => {

            currentHeroSlide++;

            if (
                currentHeroSlide >=
                heroSlides.length
            ) {

                currentHeroSlide = 0;

            }


            showHeroSlide(
                currentHeroSlide
            );

        },
        4000
    );

}