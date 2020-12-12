/* may need to draw from:
testimonials[0].quote = document.querySelector('.quotation').innerText;
testimonials[0].quoteAttrName = document.getElementsByTagName('span')[0].innerText; 
testimonials[0].quoteAttrPosition = document.getElementsByTagName('span')[1].innerText;
testimonials[0].pic = document.querySelector('.john-pic').src;
testimonials[0].picAlt = document.querySelector('.john-pic').alt;

testimonials[1].quote = document.querySelector('.quotation').innerText;
testimonials[1].quoteAttrName = document.getElementsByTagName('span')[0].innerText;
testimonials[1].quoteAttrPosition = document.getElementsByTagName('span')[1].innerText;
testimonials[1].pic = document.querySelector('.john-pic').src;
testimonials[1].picAlt = document.querySelector('.john-pic').alt;
*/

const testimonials = [
    { // John
        quote: '“ If you want to lay the best foundation possible I\’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
        quoteAttrName: 'John Tarkpor',
        quoteAttrPosition: 'Junior Front-end Developer',
        pic: './assets/img/image-john.jpg',
        picAlt: 'Picture of John'
    },
    { // Tanya
        quote: '“ I\’ve been interested in coding for a while but never taken the jump, until now. I couldn\’t recommend this course enough. I\’m now in the job of my dreams and so excited about the future. ”',
        quoteAttrName: 'Tanya Sinclair',
        quoteAttrPosition: 'UX Engineer',
        pic: './assets/img/image-tanya.jpg',
        picAlt: 'Picture of Tanya'
    }
];

let currentPage = 0;

document.querySelector('.next-arrow').addEventListener('click', goToNextPage);

function goToNextPage(num) {
    num = 1;
    testimonials[0];
    // currentPage = num;
    // currentPage = testimonials[0];
}

document.querySelector('.prev-arrow').addEventListener('click', goToPrevPage);

function goToPrevPage(num) {
    num = -1;
    testimonials[1];
    // currentPage = num;
    // currentPage = testimonials[1];
}


























/* From Madlibs game; could be helpful (don't alter): 

const names = ["John", "Edward", "Sam"];
const verbs = ['thinks', 'wanders', 'runs'];
const things = ['store', 'town', 'pasture']; 

function madlibs(listOfNames, listOfVerbs, listOfThings) {
  // Create a new random madlib from our lists
  let randName = listOfNames[Math.floor(Math.random() * listOfNames.length)];
  let randVerb = listOfVerbs[Math.floor(Math.random() * listOfVerbs.length)];
  let randThing = listOfThings[Math.floor(Math.random() * listOfThings.length)];

  document.getElementById('madlibs').textContent = `${randName} ${randVerb} about the ${randThing}`;
}

madlibs(names, verbs, things);

*/


/* First version of JS code for FEM project (don't alter):

document.querySelector('.next-arrow').addEventListener('click', goToSecondPage);

function goToSecondPage() {
    document.querySelector('.quotation').innerText = '“ I\’ve been interested in coding for a while but never taken the jump, until now. I couldn\’t recommend this course enough. I\’m now in the job of my dreams and so excited about the future. ”';
    document.getElementsByTagName('span')[0].innerText = 'Tanya Sinclair'; // Is there a better way to do this? What if many spans?
    document.getElementsByTagName('span')[1].innerText = 'UX Engineer'; // Is there a better way to do this? What if many spans?
    document.querySelector('.john-pic').src = './assets/img/image-tanya.jpg';
    document.querySelector('.john-pic').alt = 'Picture of Tanya';
}


document.querySelector('.prev-arrow').addEventListener('click', goToFirstPage);

function goToFirstPage() {
    document.querySelector('.quotation').innerText = '“ If you want to lay the best foundation possible I\’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”';
    document.getElementsByTagName('span')[0].innerText = 'John Tarkpor'; 
    document.getElementsByTagName('span')[1].innerText = 'Junior Front-end Developer';
    document.querySelector('.john-pic').src = './assets/img/image-john.jpg';
    document.querySelector('.john-pic').alt = 'Picture of John';
}

*/









