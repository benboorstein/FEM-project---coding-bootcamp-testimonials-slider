const testimonials = [
    { // Tanya
        quote: '“ I\’ve been interested in coding for a while but never taken the jump, until now. I couldn\’t recommend this course enough. I\’m now in the job of my dreams and so excited about the future. ”',
        quoteAttrName: 'Tanya Sinclair',
        quoteAttrPosition: 'UX Engineer',
        pic: './assets/img/image-tanya.jpg',
        picAlt: 'Picture of Tanya'
    },
    { // John
        quote: '“ If you want to lay the best foundation possible I\’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
        quoteAttrName: 'John Tarkpor',
        quoteAttrPosition: 'Junior Front-end Developer',
        pic: './assets/img/image-john.jpg',
        picAlt: 'Picture of John'
    },
    { // Frank - just here to test/prove that this app works with more than 2 testimonials
        quote: '“ I\'m Frank. ”',
        quoteAttrName: 'Frank Smith',
        quoteAttrPosition: 'Senior Dude',
        pic: '#',
        picAlt: 'Picture of Frank'
    }  
]

// FYI: The way the below is written means this app would work even if there were, say, 20 objects in the testimonials array instead of just 2.
let counter = 0

function getTestimonial(num) {
    counter += num

    if (counter < 0) {
        counter = testimonials.length - 1
    } else if (counter > testimonials.length - 1) {
        counter = 0
    }

    // *** Read each of the below lines as: Update the thing on the left with the result of the expression on the right. ***
    document.querySelector('.quotation').innerText = testimonials[counter].quote 
    document.getElementsByTagName('span')[0].innerText = testimonials[counter].quoteAttrName
    document.getElementsByTagName('span')[1].innerText = testimonials[counter].quoteAttrPosition
    document.querySelector('.john-pic').src = testimonials[counter].pic
    document.querySelector('.john-pic').alt = testimonials[counter].picAlt
}

// TO REMEMBER:
// "event" (if it were passed as a parameter of the anonymous function below) is technically passed through as a parameter of an event listener's anonymous function whether we explicitly reference it or not, right? Yes.
// And the only reason to explicitly reference it is because we plan to do something with it, right? Yes, except for what's mentioned below.
// So what are we planning to do with it here? Nothing, and that's why we removed it.
// THE REASON WE'D PASS "event" in if we were passing in any other parameter (e.g., num): We don't want num to become "event", so we have to pass in "event", because "event" will always be the first parameter of a function that's part of addEventListener.
document.querySelector('.next-arrow').addEventListener('click', function() { 

    getTestimonial(1)
     
})

document.querySelector('.prev-arrow').addEventListener('click', function() {

    getTestimonial(-1)

})








/* First version of JS code for FEM project (keep just for comparison/learning sake):

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









