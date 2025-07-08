export const whyThisWebsite = {
    header: "Why this website?",
    paragraphs: [
        "I decided to create this website because I wanted to have a personal space on the internet where I could share information about myself and what I am up to. Therefore, anyone interested to get to know me can do so throught a more interactive and pleasant interface.",
        "Another goal of this website is to provide me with the change to learn a bit of WebDev in a risk-free environment. I have always believed that a good presentation can make or break your projects, so learning how to do it for myself can the ultimate testament of this. Thus, by figuring out how to present myself and my projects I would like to develop a mindset where I not only think about how to build thing but also how to make them more accessible for the world at large.",
        "I hope this website shows my personality, skills, and projects through a nicely done interface. Enjoy!"
    ]
}

var birthDate = new Date("2002-04-05")
var today = new Date()

var age = today.getFullYear() - birthDate.getFullYear();
var monthDiff = today.getMonth() - birthDate.getMonth();
var dayDiff = today.getDate() - birthDate.getDate();

if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
}

export const aboutMe = {
    header: "A bit about me",
    paragraphs: [
        `Hello, my name is Mihai Mitrea and I am ${String(age)} years old. I was born in Bucharest, Romania and have lived there for my entire childhood.`,
        "???"
    ]
}

export const education = {
    header: "My Education",
    paragraphs: [
        ""
    ]
}