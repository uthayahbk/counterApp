let sub = document.querySelector("#sub")
let add = document.querySelector("#add")

console.log("click...")

add.addEventListener("click",() => {
    let result = document.querySelector("#output")
    let output = parseInt(result.innerText)+1
    result.innerText = output
})

sub.addEventListener("click",() => {
    let result = document.querySelector("#output")
    let output = parseInt(result.innerText)-1
    result.innerText = output
})

