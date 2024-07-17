const ltContainer = document.getElementById('les-tue-container');
const courseContainer = document.getElementById('courses-container');
const pastpapersContainer = document.getElementById('pastpapers-container');
const instructionContainer = document.getElementById('instruction-container');
const lessonContainer = document.getElementById('lesson-container');

var navigationalElements = [];
var speCourses = [];
var spePastpapers = [];
var speInstructions = [];

let pastElement = 0;

// Navigation Panel
const lt = [
    ["My Lessons", "res/imgs/ebook.svg"],
    ["My Tutes", "res/imgs/tute.svg"]
];
const courses = [
    "A/L 2026",
    "A/L 2025",
    "A/L 2024",
    "Grade 11",
    "Grade 10",
    "GIT",
    "OL Video Modules",
    "AL Video Modules"
];
const pastpapers = [
    "A/L Pastpapers",
    "O/L Pastpapers"
];
const instructions = [
    "Payment Details"
];

// Content Panel
const lessons = [
    "HTML",
    "CSS",
    "Javascript",
    "Python",
    "C#",
    "Java"
];
const tutes = [
    "June Month",
    "July Month",
    "August Month",
    "September Month",
    "October Month",
    "November Month"
];

// Lessons And Tutes
for (let i in lt) {
    const element = document.createElement('a');
    const divIconholder = document.createElement('div');
    const divIcon = document.createElement('img');
    const p = document.createElement('p');
    element.href = '#';
    element.classList = 'side-panel-element';
    divIcon.src = lt[i][1];
    divIcon.alt = '';
    divIconholder.id = `spe-icon`;
    p.id = `spe-text`;
    p.innerText = lt[i][0];
    divIconholder.appendChild(divIcon);
    element.appendChild(divIconholder);
    element.appendChild(p);
    ltContainer.appendChild(element);
    navigationalElements.push([element, false]);
}
// Courses
for (let i in courses) {
    const element = document.createElement('a');
    const divIconholder = document.createElement('div');
    const divIcon = document.createElement('img');
    const p = document.createElement('p');
    element.href = '#';
    element.classList = 'side-panel-element';
    divIcon.src = 'res/imgs/library-book.svg';
    divIcon.alt = '';
    divIconholder.id = `spe-icon`;
    p.id = `spe-text`;
    p.innerText = courses[i];
    divIconholder.appendChild(divIcon);
    element.appendChild(divIconholder);
    element.appendChild(p);
    courseContainer.appendChild(element);
    navigationalElements.push([element, false]);
}
// Pastpapers
for (let i in pastpapers) {
    const element = document.createElement('a');
    const divIconHolder = document.createElement('div');
    const divIcon = document.createElement('img');
    const p = document.createElement('p');
    element.href = '#';
    element.classList = 'side-panel-element';
    divIcon.src = 'res/imgs/book.svg';
    divIcon.alt = '';
    divIconHolder.id = `spe-icon`;
    p.id = `spe-text`;
    p.innerText = pastpapers[i];
    divIconHolder.appendChild(divIcon);
    element.appendChild(divIconHolder);
    element.appendChild(p);
    pastpapersContainer.appendChild(element);
    navigationalElements.push([element, false]);
}
// Instructions
for (let i in instructions) {
    const element = document.createElement('a');
    const divIconHolder = document.createElement('div');
    const divIcon = document.createElement('img');
    const p = document.createElement('p');
    const divIndicator = document.createElement('div');
    element.href = '#';
    element.classList = 'side-panel-element';
    divIcon.src = 'res/imgs/payment-method.svg';
    divIcon.alt = '';
    divIconHolder.id = `spe-icon`;
    p.id = `spe-text`;
    divIndicator.id = `spe-indicator`;
    p.innerText = instructions[i];
    divIconHolder.appendChild(divIcon);
    element.appendChild(divIconHolder);
    element.appendChild(p);
    element.appendChild(divIndicator);
    instructionContainer.appendChild(element);
    navigationalElements.push([element, false]);
}

// lessons
for (let i in lessons) {
    const element = document.createElement('div');
    const title = document.createElement('h1');
    const div = document.createElement('div');
    const p = document.createElement('p');
    const button = document.createElement('a');
    element.classList = 'lesson-card';
    title.id = `lesson-title`;
    div.classList = `lct-underline`;
    p.id = `lesson-details`;
    button.id = `lc-button`;
    button.href = `#`;
    button.innerText = 'Join';
    title.innerText = lessons[i];
    p.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat veritatis dignissimos, accusamus, molestias nulla laudantium maiores doloremque.';
    element.appendChild(title);
    element.appendChild(div);
    element.appendChild(p);
    element.appendChild(button);
    lessonContainer.appendChild(element);
}

function selectCategory(element) {
    // Deselecting past element
    navigationalElements[pastElement][1] = false;
    navigationalElements[pastElement][0].id = '';
    // Selecting new element
    navigationalElements[element][1] = true;
    navigationalElements[element][0].id = 'selected';
    pastElement = element;

    console.log(navigationalElements[element][0].innerText + ' Selected')
}
selectCategory(0)

function notificationButtonPressed() {
    console.log('Button Pressed');
}
function profileButtonPressed() {
    console.log('Button Pressed');
}

for (let i in navigationalElements) {
    navigationalElements[i][0].addEventListener("click", () => {
        selectCategory(i);
    })
}

// const update = () => {
//     navigationalElements.onclick() = selectCategory(2);
//     requestAnimationFrame(update);
// }
// update();