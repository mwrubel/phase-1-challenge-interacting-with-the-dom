const getFetch = document.getElementById('fetch')
const getPersonContainer = document.getElementById('personContainer')
getFetch.addEventListener('click', () => {
    //console.log('test')
    fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        debugger
    })
    //get into person array
    data.
    //console.log(fetch('https://randomuser.me/api/'))
})
