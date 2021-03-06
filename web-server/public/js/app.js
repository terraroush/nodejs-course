const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#messageOne')
const messageTwo = document.querySelector('#messageTwo')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'loading...'
    messageTwo.textContent = ''
    
    fetch(`http://localhost:3000/weather?city=${location}`).then((response) => {
        response.json().then(data => {
            if (data.error) {
                messageOne.textContent = ''
                messageTwo.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})