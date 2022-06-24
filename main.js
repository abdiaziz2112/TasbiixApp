let display = document.querySelector("#initialValue");

//let minus = document.querySelector("#decrement");
//let plus = document.querySelector("#increment");
let reset = document.querySelector("#reset");
//let dark = document.querySelector("#dark");
//let light = document.querySelector("#light");
let body = document.querySelector("body")


/*plus.addEventListener("click", ()=>{
  handleIncreased();
} )

minus.addEventListener("click", ()=>{
  clickCounter()

} )

reset.addEventListener("click", ()=>{
  handleReset()

} )
*/



function nightMode() {
  body.classList.toggle("mode")

}



/*let clickcount = 0;
/*function handleIncreased(){
  clickcount= clickcount +1
  display.innerHTML =clickcount;
}

function handleDeccreased(){
  clickcount = clickcount -1
  display.innerHTML = clickcount;
}*/

function handleReset(){
  clickcount = 0;
  display.innerHTML =clickcount;
}



function clickCounter() {
clickCounter()
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount)+1;
  } else {
    localStorage.clickcount = 1;
  }
  display.innerHTML = localStorage.clickcount;
}
</script>





