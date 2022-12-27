// Icons
const sunIcon = document.querySelector('.sun')
const moonIcon = document.querySelector('.moon')

// Theme vars
const userTheme = localStorage.getItem("theme")
const systemTheme = window.matchMedia("(prefers-colorScheme : dark)").matches // This means if user OS theme is dark then the variable will be false

// Icon toggling
const iconToggle = () => {
    sunIcon.classList.toggle("hidden")
    moonIcon.classList.toggle("hidden")
}

// Initial theme check
const themeCheck = () => {
    if(userTheme === 'dark' || (!userTheme && systemTheme)){
        document.documentElement.classList.add("dark") // accessing root node of document and adding the dark class
        moonIcon.classList.add("hidden")
        return
    }
    sunIcon.classList.add("hidden")
}

// Manual theme switch
const themeSwitch = () => {
    if(document.documentElement.classList.contains("dark")){
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme","light")
        iconToggle()
        return
    }
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme","dark")
    iconToggle()
}

// Switch on icon click
sunIcon.addEventListener("click",()=>{
    themeSwitch();
})

moonIcon.addEventListener("click",()=>{
    themeSwitch();
})

// Check theme on initial load
themeCheck();