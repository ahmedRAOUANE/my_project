

let homeBtn = document.querySelector(".home-btn");
let myAccountBtn = document.querySelector(".my-account-btn");
let settingsBtn = document.querySelector(".settings-btn");
let homePage = document.querySelector(".home");
let myAccountPage = document.querySelector(".myAccount");
let settingsPage = document.querySelector(".settings");

$(document).ready(() => {
    $(homeBtn).click(() => {

        $(homePage)
        .addClass("active w-100")
        .removeClass("hide")
        .animate(
            {
                left: "0%"
            },
            "fast", () => {
                $(myAccountPage).removeClass("active w-100");
                $(settingsPage).removeClass("active w-100");
            }
        );

        $(myAccountPage)
        .animate(
            {
                left: "100%"
            }, "fast"
        );

        $(settingsPage)
        .animate(
            {left: "100%"},
            "fast"
        )

        $(homeBtn).addClass("active");
        $(myAccountBtn).removeClass("active");
        $(settingsBtn).removeClass("active");
    });

    $(myAccountBtn).click(() => {

        $(myAccountPage)
        .removeClass("hide")
        .addClass("active w-100")
        .animate(
            {
                left: "0"
            }, "fast", () => {
                $(homePage).removeClass("active w-100");
                $(settingsPage).removeClass("active w-100");
            }
        );

        $(homeBtn).removeClass("active");
        $(myAccountBtn).addClass("active");
        $(settingsBtn).removeClass("active");
        $(homePage).animate(
            {
                left: "-100%"
            },
            "fast",
        )

        $(settingsPage).animate(
            {left: "100%"},
            "fast"
        )
    })

    $(settingsBtn).click(() => {

        $(settingsPage)
        .addClass("active w-100")
        .removeClass("hide")
        .animate(
            {left: "0"},
            "fast",
            () => {
                $(homePage).removeClass("active w-100");
                $(myAccountPage).removeClass("active w-100");
            }
        );

        $(homeBtn).removeClass("active");
        $(myAccountBtn).removeClass("active");
        $(settingsBtn).addClass("active");
        $(myAccountPage).animate(
            {
                left: "-100%"
            },
            "fast"
        )
        
        $(homePage).animate(
            {left: "-100%"},
            "fast"
        )
    })
})
