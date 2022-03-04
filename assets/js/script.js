let counter = 0;
let forms = document.querySelectorAll('.step');
forms.forEach(element => element.style.display = 'none'); 
forms[0].style.display = 'flex';
let nextArray = document.querySelectorAll('#next');
let prevArray = document.querySelectorAll('#prev');
let stepsCircleArray = document.querySelectorAll('.steps');


nextArray.forEach(element => element.addEventListener("click", function(){
   if (counter == 5) {
      counter = 5;
   }
   else {
      forms[counter].style.display = "none";
      stepsCircleArray[counter].classList.add('completed');
      counter++;
   }
   forms[counter].style.display = "flex";
   console.log(counter);
}))

prevArray.forEach(element => element.addEventListener("click", function(){
   if (counter == 0) {
      counter = 0;
   }
   else {
      forms[counter].style.display = "none";
      counter--;
      stepsCircleArray[counter].classList.remove('completed');
      forms[counter].style.display = "flex";
   }
   console.log(counter);
}))

 












