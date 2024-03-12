let data = {
    "basics": {
        "name": "Jai Ganesh G",
        "email": "jai@gmail.com",
        "phone": "+91 9838843221",
        "degree": "B.E. Computer Science",
        "summary": "Experienced front-end developer with 4.6 years of expertise in building interactive and responsive user interfaces. Skilled in HTML, CSS, and JavaScript, with proficiency in popular frameworks like Angular. ",
        "location": {
            "address": "Chrompet",
            "postalCode": "6000047",
            "city": "Chennai",
            "region": "Hindu"
        }
    },
    "work": [{
        "company": "Novac Technology Pvt.Ltd",
        "position": "Software Engineer",
        "startDate": "12/08/2019",
        "endDate": "currently working"
    }],
    "education": [{
        "institution": "Apollo Piyadarshanam Intitute oftechnology",
        "area": "Chennai",
        "studyType": "Full Time",
        "startDate": "23/06/2011",
        "endDate": "12/08/2015",
        "courses": [
            "python", "angular"
        ]
    }],
    "skills": [{
        "name": "Programming Languages",
        "keywords": [
            "HTML", "CSS", "JS", "Angular", "python", "saaa", "GIT", "pug"
        ]
    }],
    "languages": [{
        "language": ["English", "tamil"],
        "fluency": ["intermediate", "Expert"]

    }],
    "interests": [{
        "name": "Sports",
        "keywords": [
            "Cricket", "Football"
        ]
    }]
}


//
console.log(data);

//type of For loop
// for loop
let lang = data.languages[0].language;
for (let i = 0; i < lang.length; i++) {
    console.log(lang[i]);
}
//"for each" work for array only
let key = data.skills[0].keywords;
key.forEach(function(item) {
    console.log(item);
});
//"for in" work for both array and object
for (let x in lang) {
    console.log(lang[x]); // for array
}
let work = data.work[0];
for (let y in work) {
    console.log(work[y]); //for object
}

//"for of" work for array only
for (let a of lang) {
    console.log(a); //for object
}