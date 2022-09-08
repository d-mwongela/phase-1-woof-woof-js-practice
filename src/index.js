document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/pups')
    .then(res => res.json())
    // .then(pups => console.log(pups))
    .then(pups => pups.forEach(pup => {
        const dogBar = document.querySelector('#dog-bar')
        const dogSpan = document.createElement('span')
        dogSpan.innerText = pup.name

        dogBar.append(dogSpan)

        dogSpan.addEventListener('click', () => {
            const dogInfo = document.querySelector('#dog-info')
            dogInfo.innerHTML = ''

            const dogImg = document.createElement('img')
            dogImg.src = pup.image

            const dogH2 = document.createElement('h2')
            dogH2.innerHTML = pup.name

            const dogButton = document.createElement('button')
            dogButton.textContent = pup.isGoodDog ? 'Good Dog!' : 'Bad Dog!'

            dogInfo.append(dogImg, dogH2, dogButton)

            dogButton.addEventListener('click', () => {
                dogButton.innerText = dogButton.innerText === 'Good Dog!' ? 'Bad Dog!' : 'Good Dog!'
            })
        })
    }))

})