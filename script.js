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
    ["June Month", true],
    ["July Month", true],
    ["August Month", false],
    ["September Month", false],
    ["October Month", false],
    ["November Month", false]
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
// let main = document.createElement('main');
// for (let i in lessons) {
//     createCPLessonElement(lessons[i]);
// }
// main.id = 'lesson-container';
// contentPanel.appendChild(main);
// tutes
// let main = document.createElement('main');
// for (let i in tutes) {
//     createCPTuteElement(tutes[i][0], tutes[i][1]);
// }
// main.id = 'lesson-container';
// contentPanel.appendChild(main);

function selectCategory(element) {
    // Deselecting past element
    navigationalElements[pastElement][1] = false;
    navigationalElements[pastElement][0].id = '';
    // Selecting new element
    navigationalElements[element][1] = true;
    navigationalElements[element][0].id = 'selected';
    pastElement = element;
    
    // *** Switching like this is just for testing purposes. ***
    if (navigationalElements[0][1] === true) {
        // lessons
        contentPanel.innerHTML = '<h1 class="cpb-title">My Lessons</h1>';
        let lessonContainer = document.createElement('main');
        for (let i in lessons) {
            createCPLessonElement(lessons[i], lessonContainer);
        }
        lessonContainer.id = 'lesson-container';
        contentPanel.appendChild(lessonContainer);
    } else if (navigationalElements[1][1] === true) {
        // tutes
        contentPanel.innerHTML = '<h1 class="cpb-title">My Lessons</h1>';
        let tuteContainer = document.createElement('main');
        for (let i in tutes) {
            createCPTuteElement(tutes[i][0], tutes[i][1], tuteContainer);
        }
        tuteContainer.id = 'tute-container';
        contentPanel.appendChild(tuteContainer);
    }

    console.log(navigationalElements[element][0].innerText + ' Selected')
}
selectCategory(0)

for (let i in navigationalElements) {
    navigationalElements[i][0].addEventListener("click", () => {
        selectCategory(i);
    })
}

function createCPTuteElement(_tute, _status, _container) {
    const element = document.createElement('div');
    const title = document.createElement('h1');
    const div = document.createElement('div');
    const p = document.createElement('p');
    element.classList = 'tute-card';
    title.id = `tute-title`;
    div.classList = `tct-underline`;
    p.id = `tute-details`;
    title.innerText = _tute;
    p.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat veritatis dignissimos, accusamus, molestias nulla laudantium maiores doloremque.';
    element.appendChild(title);
    element.appendChild(div);
    element.appendChild(p);
    if (_status) {
        const s = document.createElement('p');
        s.id = `tute-status-text`;
        s.innerText = 'delivered';
        element.appendChild(s);
        const button = document.createElement('a');
        button.id = `tc-ro-button`;
        button.href = `#`;
        button.innerText = 'Had issues with tute?';
        element.appendChild(button);
    } else {
        const button = document.createElement('a');
        button.id = `tc-o-button`;
        button.href = `#`;
        button.innerText = 'Pre-Order';
        element.appendChild(button);
    }
    _container.appendChild(element);
}
function createCPLessonElement(_lesson, _container) {
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
    title.innerText = _lesson;
    p.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat veritatis dignissimos, accusamus, molestias nulla laudantium maiores doloremque.';
    element.appendChild(title);
    element.appendChild(div);
    element.appendChild(p);
    element.appendChild(button);
    _container.appendChild(element);
}
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

// const update = () => {
//     navigationalElements.onclick() = selectCategory(2);
//     requestAnimationFrame(update);
// }
// update();