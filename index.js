const input = document.querySelector("input.amount")
const container = document.querySelector(".master-container")
const button = document.querySelector(".button")
const currencySwitcher = document.querySelector(".dropdown-button")
const currencyContainer = document.querySelector(".currency-container")
const confirmationContainer = document.querySelector(".confirmation")
const close = document.querySelector(".close")
const exit = document.querySelector(".exit")

const beka = document.querySelector(".amount-to-pay-container:before")

const clickCopy = document.querySelector("#click-to-copy")
const copied = document.querySelector(".copied-to-clipboard")

const convertedAmount = document.querySelector(".chosen-currency-amount")
const usdValue = document.querySelector(".usd-value")



let value = "0"

shrink = function () {
    container.classList.add("shrink")
}

enlarge = function () {
    container.classList.remove("shrink")
}


input.addEventListener("focus", function () {
    shrink()
})

input.addEventListener("blur", function () {
    enlarge()
})


currencySwitcher.addEventListener("click", function() {
    currencyContainer.classList.add("visible")
})

close.addEventListener("click", function() {
    currencyContainer.classList.remove("visible")
})

exit.addEventListener("click", function() {
    window.location.reload(false)
})


clickCopy.addEventListener("click", function() {
    copied.classList.add("copied")
})


input.addEventListener("keyup", function(event) {
    if (input.value > 0) {
        button.classList.remove("disabled")
    }
    if (input.value <= 0) {
        button.classList.add("disabled")
    }

    roundtoThree = function(num) {    
        return +(Math.round(num + "e+3")  + "e-3");
    }

    convertedAmount.innerHTML =  input.value
    usdValue.innerHTML = input.value
    return value = input.value
  })


  button.addEventListener("click", function(event){
    console.log('hehe')
    event.preventDefault()
    if (value > 0) {
        console.log('it works!')
        confirmationContainer.classList.add("visible")
        confirmationContainer.classList.add("ontop")
    }
    if (value <= 0) {
        shrink()
        input.focus()
        container.classList.remove("animate-disabled")
        setTimeout(() => container.classList.add("animate-disabled"), 0)
    }
  })

