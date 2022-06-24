let display = document.querySelector("#initialValue");

//let minus = document.querySelector("#decrement");
let plus = document.querySelector("#increment");
let reset = document.querySelector("#reset");
let dark = document.querySelector("#dark");
let light = document.querySelector("#light");
let body = document.querySelector("body")


plus.addEventListener("click", ()=>{
  handleIncreased();
} )

/* minus.addEventListener("click", ()=>{
  clickCounter()

} )*/

reset.addEventListener("click", ()=>{
  handleReset()

} )



function nightMode() {
  body.classList.toggle("mode")

}



let num = 0;
/*function handleIncreased(){
  num = num +1
  display.innerHTML =num;
}*/

/*function handleDeccreased(){
  num = num -1
  display.innerHTML =num;
}*/

function handleReset(){
  num = 0;
  display.innerHTML =num;
}



function clickCounter() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount)+1;
  } else {
    localStorage.clickcount = 1;
  }
  display.innerHTML = localStorage.clickcount;
}
</script>





