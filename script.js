var slide = new Array("images/cyberduck.jpg", "images/veterinary.jpg", "images/scissors.jpg"),
    numero = 0,
    toTop = document.querySelector('.toTop'),

    array = [],
    sortList = [],
    countrySelect = document.querySelector('#country'),
    cOption;


// -------------------- //


function creating(element) {
    return document.createElement(element);
}

function append(parent, child) {
    return parent.appendChild(child);
}


///////////  Carousel  //////////


function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}


///////////  Country selector  ///////////


window.addEventListener('load', () => {
    fetch('ressources/cities.json')
        .then(res => res.json())
        .then((json) => {
            json.forEach(item => {
                if (!array.includes(item.countrycode.name))
                    array.push(item.countrycode.name);
            })

            sortList = array.sort();

            for (count of sortList) {
                cOption = creating('option');
                cOption.innerHTML = count;
                cOption.value = count;
                countrySelect.appendChild(cOption);
            }
        })
        .catch(
            function (error) {
                console.log(error);
            }
        )
})


///////////  Back-to-top  ///////////


window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    }
})



//////////  Modal  ////////////


let modalBtn = document.querySelectorAll('.pressPostBtn'),
    modalBtnArr = Array.from(modalBtn),
    modalOver = document.querySelectorAll('.modal-overlay'),
    modalOverArr = Array.from(modalOver),
    closeBtn = document.querySelectorAll('.close-btn'),
    closeBtnArr = Array.from(closeBtn);


modalBtnArr.forEach((element) => {
    element.addEventListener('click', () => {
        modalOverArr.classList.add('open-modal')
    })
})

closeBtn.addEventListener('click', () => {
    for (count of closeBtn) {
        modalOver[count].classList.remove('open-modal')
    }
})