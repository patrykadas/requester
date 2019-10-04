const [red, green, blue] = [69, 111, 225]
const section1 = document.querySelector('.section1')
const text = document.querySelector('.amount-to-pay')
const container = document.querySelector('.amount-to-pay-container')
const dollar = document.querySelector('.dollar')



window.addEventListener('scroll', () => {
    const x =  (window.scrollY || window.pageYOffset)
    
    let y = (x * 0.7)
    let z = (x * 1.3)



    if (y > 34) {
        y = 34
    }

    let fontSize = ((34 - y) + 24)
    let height = 140 - z
    let opacity = x / 20

    if (height < 60) {
        height = 60
    }

    if (height > 140) {
        height = 140
    }

    if (fontSize > 52) {
        fontSize = 52
    }

    container.style.height = `${height}px`
    text.style.fontSize = `${fontSize}px`
    dollar.style.fontSize = `${fontSize}px`
    container.style.borderBottom = `1px solid rgba(235,235,235,${opacity})`

})
