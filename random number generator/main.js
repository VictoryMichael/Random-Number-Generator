const generatBtn = document.querySelector('.generate');
const result = document.querySelector('.result');
   

function containsAnyLetters(str) {
    return /[a-zA-Z]/.test(str);
  }


  generatBtn.addEventListener('click', generateRandomNumber )

function generateRandomNumber(){

const maxNumber = document.querySelector('.max').value;
const minNumber = document.querySelector('.min').value;


randomNum = Math.floor(Math.random()* parseInt(maxNumber))

if(randomNum > parseInt(minNumber)) {
    result.innerHTML = randomNum;
}  else if(containsAnyLetters){
    alert('Invalid Input. Try Again')
}

}
