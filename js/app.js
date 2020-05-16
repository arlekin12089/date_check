function titleizeName(name) {

    let nameNew = name.toLowerCase().split(" ");
    let newArr = [];
    nameNew.map((word)=>{
     word =  word.slice(0,1).toUpperCase() + word.slice(1);
       newArr.push(word);
    })
      return newArr.join(" ");
}

function calculateAge(date) {
    let yearsNow = +date;
    let todayDate = new Date();
    let todayYear = todayDate.getFullYear();
    let years = todayYear - yearsNow;
    return years;
}

function colorizeBorder(age, element) {
    let avatar = document.querySelector('.avatar');  
    if (age <= 18) {
        avatar.classList.add('border_green');  
    } else if (age > 25) {
        avatar.classList.add('border_red');  
    } else {
        avatar.className = "avatar";
    }

}

(function () {
    const ageCalculator = document.getElementById('ageCalculator');

    ageCalculator.addEventListener('submit', event => {
        event.preventDefault();
        let name = document.getElementById('name').value;

        if (!!name) {
            name = name.trim();
        }

        if (name !== "") {
            const nameToPresent = document.getElementById('name__present');
            nameToPresent.innerText = titleizeName(name);
        }

        const date = document.getElementById('dob').value;
        const ageByDate = calculateAge(date);

        if (ageByDate) {
            const age = document.getElementById('age');
            age.innerText = ageByDate;
        }

        // Reaveal hidden age container
        if (name !== "" && date !== "") {
            const ageContainer = document.querySelector('.age__container');
            ageContainer.style.display = "block";
            const avatar = document.querySelector('.avatar');
            colorizeBorder(ageByDate, avatar); // fixes up color
        }
    });
})()
