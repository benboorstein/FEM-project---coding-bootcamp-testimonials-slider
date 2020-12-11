
// creating variables for each aspect of the page that changes when an arrow is clicked
const johnQuotation = document.querySelector('.quotation').innerText = '“ If you want to lay the best foundation possible I\’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”';
const tanyaQuotation = document.querySelector('.quotation').innerText = '“ I\’ve been interested in coding for a while but never taken the jump, until now. I couldn\’t recommend this course enough. I\’m now in the job of my dreams and so excited about the future. ”';

const johnQuotationAttribution = document.getElementsByTagName('span')[0].innerText = 'John Tarkpor';
const tanyaQuotationAttribution = document.getElementsByTagName('span')[0].innerText = 'Tanya Sinclair';

const johnPosition = document.getElementsByTagName('span')[1].innerText = 'Junior Front-end Developer';
const tanyaPosition = document.getElementsByTagName('span')[1].innerText = 'UX Engineer';

const johnPic = document.querySelector('.john-pic').src = './assets/img/image-john.jpg';
const tanyaPic = document.querySelector('.john-pic').src = './assets/img/image-tanya.jpg';

const johnPicAlt = document.querySelector('.john-pic').alt = 'Picture of John';
const tanyaPicAlt = document.querySelector('.john-pic').alt = 'Picture of Tanya';

// putting the above variables into arrays
const quotation = [johnQuotation, tanyaQuotation];
const quotationAttributionName = [johnQuotationAttribution, tanyaQuotationAttribution];
const quotationAttributionPosition = [johnPosition, tanyaPosition];
const pic = [johnPic, tanyaPic];
const picAlt = [johnPicAlt, tanyaPicAlt];

// establishing what each of the (in this case only two) pages consists of
const johnPage = [quotation[0], quotationAttributionName[0], quotationAttributionPosition[0], pic[0], picAlt[0]];
const tanyaPage = [quotation[1], quotationAttributionName[1], quotationAttributionPosition[1], pic[1], picAlt[1]];

document.querySelector('.next-arrow').addEventListener('click', goToNextPage);

function goToNextPage() {
    if (johnPage) {
        tanyaPage;
    } else if (tanyaPage) {
        johnPage;
    }
}

goToNextPage();

























// PROBABLY BAD, BUT SAVE FOR NOW:
// function testimonialsSlider(quotationList, qANameList, qAPositionList, picList, picAltList) {
//   // Create a new testimonals slider from our lists
//   let randName = listOfNames[Math.floor(Math.random() * listOfNames.length)];
//   let randVerb = listOfVerbs[Math.floor(Math.random() * listOfVerbs.length)];
//   let randThing = listOfThings[Math.floor(Math.random() * listOfThings.length)];

//   document.getElementById('madlibs').textContent = `${randName} ${randVerb} about the ${randThing}`;
// }

// testimonialsSlider(quotation, quotationAttributionName, quotationAttributionPosition, pic, picAlt);







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









