// Navigation
const topNav = document.getElementById("my-top-nav");
const burgerExpand = () => {
    if (topNav.className === "topnav") {
        topNav.className += " responsive";
    } else {
        topNav.className = "topnav";
    }
}
document.querySelector("#burger-button").addEventListener("click", ()=>{burgerExpand()});
// Experience Section
    // changing menu and content
const experienceButtonContent= ["paralegal", "legal", "class", "hrights"];
const educButtonContent = ["masters", "bachelors"];
const addRemoveClass = (active, item, classToAddRemove, list) => {
        var inactive = list.filter(inactiveItem => inactiveItem !== active);
        document.querySelector(`#${active}-${item}`).classList.remove(classToAddRemove);
        for (let i = 0; i < inactive.length; i++) {
            document.querySelector(`#${inactive[i]}-${item}`).classList.add(classToAddRemove)}
        if (item==="button"){
            document.querySelector(`#${active}-${item}`).classList.add("active-button");
            for (let i = 0; i < inactive.length; i++) {
                document.querySelector(`#${inactive[i]}-${item}`).classList.remove("active-button")}
        }
}
experienceButtonContent.forEach((contentItem) => {
    document.querySelector(`#${contentItem}-button`).addEventListener("click", () => {
        addRemoveClass(contentItem, "button", "inactive-button", experienceButtonContent);
        addRemoveClass(contentItem, "content", "hidden", experienceButtonContent)
    })
})
// Education Section
    // changing menu and content
educButtonContent.forEach((contentItem) => {
    document.querySelector(`#${contentItem}-button`).addEventListener("click", () => {
        addRemoveClass(contentItem, "button", "inactive-button", educButtonContent);
        addRemoveClass(contentItem, "content", "hidden", educButtonContent)
    })
})
// Skill Section
    // left and right button
const skillButtonsDirection = ["left", "right"];
scrollToLeftRight = (direction) => {
    if (direction === "right"){ 
        document.querySelector(".sliding-container").scrollLeft +=80
    } else{
        document.querySelector(".sliding-container").scrollLeft -=80
    }
}
whileMouseOverClick = (element, action, time, direction) => {
    var interval = null;
    element.addEventListener("mouseover", function() {
        interval = setInterval(action, time, direction);
    });
    element.addEventListener("click", function() {
        action(direction)
    })
    element.addEventListener("mouseout", function() {
        clearInterval(interval);
    });
}
skillButtonsDirection.forEach(button => {
    whileMouseOverClick(document.querySelector(`#${button}-button`), 
        scrollToLeftRight, 500, button);
    })
    // changing menu and content
const skillButtonContent = ["soft", "tech"];
const addRemoveSlidingClass = (active, list) => {
    var inactive = list.filter(inactiveItem => inactiveItem !== active);
    document.querySelector(`#${active}-content`).classList.remove("hidden");
    document.querySelector(`#${active}-content`).classList.add("sliding-left-right");
    for (let i = 0; i < inactive.length; i++) {
        document.querySelector(`#${inactive[i]}-content`).classList.add("hidden");
        document.querySelector(`#${inactive[i]}-content`).classList.remove("sliding-left-right");
    }
}
skillButtonContent.forEach((contentItem) => {
    document.querySelector(`#${contentItem}-button`).addEventListener("click", () => {
        addRemoveClass(contentItem, "button", "inactive-button", skillButtonContent);
        addRemoveClass(contentItem, "content", "hidden", skillButtonContent);
        addRemoveSlidingClass(contentItem, skillButtonContent)
    })
})
const skillButtonContent2 = ["cert", "language"];
skillButtonContent2.forEach((contentItem) => {
    document.querySelector(`#${contentItem}-button`).addEventListener("click", () => {
        addRemoveClass(contentItem, "button", "inactive-button", skillButtonContent2);
        addRemoveClass(contentItem, "content", "hidden", skillButtonContent2);
    })
})
