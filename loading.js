const button = document.querySelector('#usdc-button')


button.addEventListener('click', function(event) {
    button.classList.add("loading-button")
    event.preventDefault()

})