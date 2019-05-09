// CODE here for your Lambda Classes

class Person{
    constructor(stats){
        this.name=stats.name
        this.age=stats.age
        this.location=stats.location
    }
    speak(){
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person{
    constructor(stats){
        super(stats)
        this.specialty=stats.specialty
        this.favLanguage=stats.favLanguage
        this.catchPhrase=stats.catchPhrase
    }
    demo(subject){
        console.log(`Today, we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student.name} recieves a perfect score on ${subject}`);
    }
    gradeStudent(student){
        let score=Math.floor(Math.random()*20-10)
        student.score+=score
    }
}

class Student extends Person{
    constructor(stats){
        super(stats)
        this.previousBackground=stats.previousBackground||'None'
        this.className=stats.className
        this.favSubjects=stats.favSubjects
        this.grade=98
    }
    listSubjects(){
        this.favSubjects.forEach(item => {
            console.log(item);
        });
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${student.name} has begun sprint challenge on ${subject}`);
    }
    graduate(){
        if(this.grade>70){
            console.log(`${this.name} Graduated from Lambda!`);
        }else
            console.log(`${this.name} must continue class`);
    }
}

class Project_Manager extends Instructor{
    constructor(stats){
        super(stats)
        this.gradClassName=stats.gradClassName
        this.favInstructor=stats.favInstructor
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times`);
    }
    debugCode(student, subject){
        `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const dan=new Instructor({
    name:'Dan',
    age:'unk',
    favLanguage:'Javascript',
    specialty:"front end",
    catchPhrase:"I Love Cats"
})

const brandon=new Student({
    name:'Brandon',
    age:34,
    grade:100,
    priorExperience:'5 years',
    instructor:dan
})

const adam=new Project_Manager({
    name:'Paul "Adam" Mathieson',
    age:'unk',
    gradClassName:'WEB20',
    favInstructor:'unk'
})

console.log(dan);
console.log(brandon);
console.log(adam);
dan.speak()