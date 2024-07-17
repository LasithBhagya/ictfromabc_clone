const ltContainer = document.getElementById('les-tue-container');
const courseContainer = document.getElementById('courses-container');
const pastpapersContainer = document.getElementById('pastpapers-container');
const instructionContainer = document.getElementById('instruction-container');
const contentPanel = document.getElementById('content-panel-body');

var navigationalElements = [];

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
    navigationalElements.push([element, false, "lessonsAndTutes"]);
}
// Courses
for (let i in courses) {
    createSPElement('#', 'res/imgs/library-book.svg', '', courses[i], courseContainer, "Courses");
}
// Pastpapers
for (let i in pastpapers) {
    createSPElement('#', 'res/imgs/book.svg', '', pastpapers[i], pastpapersContainer, "Pastpapers");
}
// Instructions
for (let i in instructions) {
    createSPElement('#', 'res/imgs/payment-method.svg', '', instructions[i], instructionContainer, "Instructions");
}

// lessons
let main = document.createElement('main');
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
    main.appendChild(element);
}
main.id = 'lesson-container';
contentPanel.appendChild(main);

function createSPElement(_link, _imgSrc, _imgAlt, _pText, _container, _category) {
    const element = document.createElement('a');
    const divIconholder = document.createElement('div');
    const divIcon = document.createElement('img');
    const p = document.createElement('p');
    element.href = _link;
    element.classList = 'side-panel-element';
    divIcon.src = _imgSrc;
    divIcon.alt = _imgAlt;
    divIconholder.id = `spe-icon`;
    p.id = `spe-text`;
    p.innerText = _pText;
    divIconholder.appendChild(divIcon);
    element.appendChild(divIconholder);
    element.appendChild(p);
    _container.appendChild(element);
    navigationalElements.push([element, false, _category]);
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