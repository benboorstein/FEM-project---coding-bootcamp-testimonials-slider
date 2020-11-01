document.querySelector('.next-arrow').addEventListener('click', goToSecondPage);

function goToSecondPage() {
    document.querySelector('.quotation').innerText = '“ I\’ve been interested in coding for a while but never taken the jump, until now. I couldn\’t recommend this course enough. I\’m now in the job of my dreams and so excited about the future. ”';
    document.getElementsByTagName('span')[0].innerText = 'Tanya Sinclair'; // Is there a better way to do this? What if many spans?
    document.getElementsByTagName('span')[1].innerText = 'UX Engineer'; // Is there a better way to do this? What if many spans?
    document.querySelector('.john-pic').src = './assets/img/image-tanya.jpg';
    document.querySelector('.john-pic').alt = 'Picture of Tanya';
}


// DOES ALL THIS BELOW REALLY NEED TO BE SPELLED OUT JUST as much as above, given that what's below is just what's already in the HTML?
document.querySelector('.prev-arrow').addEventListener('click', goToFirstPage);

function goToFirstPage() {
    document.querySelector('.quotation').innerText = '“ If you want to lay the best foundation possible I\’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”';
    document.getElementsByTagName('span')[0].innerText = 'John Tarkpor'; 
    document.getElementsByTagName('span')[1].innerText = 'Junior Front-end Developer';
    document.querySelector('.john-pic').src = './assets/img/image-john.jpg';
    document.querySelector('.john-pic').alt = 'Picture of John';
}








