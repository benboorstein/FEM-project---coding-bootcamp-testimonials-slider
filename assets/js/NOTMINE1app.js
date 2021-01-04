const prev = document.getElementById("prev");
const next = document.getElementById("next");

const text = document.getElementById("text");
const nameP = document.getElementById("name");
const ocupation = document.getElementById("ocupation");
const profileImg = document.getElementById("profile-img");

const btns = [prev, next];

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (text.innerText.startsWith("“ If")) {
            text.innerText =
                "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”";
            nameP.innerHTML =
                'Tanya Sinclair<span id="ocupation">UX Engineer</span>';
            profileImg.setAttribute("src", "./images/image-tanya.jpg");
        } else if (text.innerText.startsWith("“ I’ve")) {
            text.innerText =
                "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”";
            nameP.innerHTML =
                'John Tarkpor<span id="ocupation">Junior Fron-end Developer</span>';
            profileImg.setAttribute("src", "./images/image-john.jpg");
        }
    });
});
