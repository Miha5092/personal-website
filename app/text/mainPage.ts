export const whyThisWebsite = {
    header: "Why this website?",
    paragraphs: [
        "I decided to create this website because I wanted to have a personal space on the internet where I could share information about myself and what I am up to. Therefore, anyone interested to get to know me can do so throught a more interactive and pleasant interface.",
        "Another goal of this website is to provide me with the chance to learn a bit of WebDev in a risk-free environment. I have always believed that a good presentation can make or break your projects, so learning how to do it for myself can the ultimate testament of this. Thus, by figuring out how to present myself and my projects I would like to develop a mindset where I not only think about how to build thing but also how to make them more accessible for the world at large.",
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
        `Hello, my name is Mihai Mitrea and I am ${String(age)} years old student from London, UK. I was born and raised in Bucharest, Romania, but I did my bachelor's in Computer Science in Delft, The Netherlands and my master's in Machine Learning in London, UK. `,
        'When at home, you can usually find me cooking or baking some goodies that I found on the internet or "stole" from my friends. I am a very big fan of food and the culture surounding it so I am constatly on the lookout for interesting culinary experiences. ' + "Other than that, I like to spend my time at home playing strategy games (Sid Meyer's Civilization, Hearts of Iron, Starcraft II, etc.) with others. I have also started reading more books as a substitute for YouTube or social media.",
        "However, what I enjoy doing the most with my free time is to be active. I try to do sports on a regular basis (I have to offset the cooking hobby somehow) and to to group activities with people I know. Although I can never decline an invitation for an interesting experience (jumping with a parachute, goint karting, or hiking in the mountains), I am also a big fan of more relaxed activities such as simple walks in the park or simply just hanging out."
    ]
}

export const education = {
    header: "My Education",
    paragraphs: [
        "???"
    ]
}