const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const image = document.getElementById('myImage');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();


yesBtn.addEventListener('click', () => 
    {
        question.innerHTML = "BITCHHHH!!";
        image.src = 'maomaoEnding.gif';
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
    });

var clickCount = 0;

noBtn.addEventListener('click', () => 
    {
        clickCount++
        if(clickCount == 1)
            {   
                yesBtn.style.transform = 'scale(2)';
                yesBtn.style.left = '350px';
                noBtn.innerHTML = "are you sure?";
            }
        else if(clickCount == 3)
            {
                image.src = ''
                noBtn.innerHTML = "be honest you little giga :(";
                noBtn.style.transform = 'scale(0.7)';
                image.src = 'maomao2.gif';
            }
        else if(clickCount == 6)
            {
                noBtn.innerHTML = "i won't bite but i will scratch his a$sS";
                image.src = 'maomao3.gif';
                noBtn.style.transform = 'scale(0.55)';
                yesBtn.style.transform = 'scale(2.5)';
            }
        else if(clickCount == 9)
            {
                noBtn.innerHTML = "heck no?";
                image.src = 'maomao4.gif';
                yesBtn.style.transform = 'scale(4)';
                noBtn.style.transform = 'scale(0.33)';
            }
        else if(clickCount == 13)
            {   
                yesBtn.style.transform = 'scale(5)';
                yesBtn.style.top = '450px';
                image.src = 'maomaoSmirk.gif';
                noBtn.innerHTML = "AKO NA LANG KASI UWU";
                noBtn.disabled = true;
            }

        const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1
        const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    
        noBtn.style.left = i + 'px';
        noBtn.style.top = j + 'px';
    });