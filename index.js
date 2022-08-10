let link = document.createElement('style')
let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
let dogContent = document.createElement('div')    
let dogImage = document.createElement('img')     
let dogDetails = document.createElement('div')  
let descriptionTitle = document.createElement('h3')
let descriptionParagraph = document.createElement('p')
let feedingTimeTitle = document.createElement('h3')
let feedingTimesList = document.createElement('ul')

const getFeedingTimes = () => {
    const times = []
    for (let i = 1; i <= 3; i++) {
        times.push(document.createElement('li'))
    }
    return times
}

const feedingTimes = getFeedingTimes()

header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogImage.setAttribute('alt', 'Image of Rizzo the dog.')
dogContent.append(dogImage)

dogContent.append(dogDetails)

descriptionTitle.textContent = 'Description:'
dogContent.append(descriptionTitle)

descriptionParagraph.textContent = `This gentle dog is aloof toward her owner, and never comes when called.
She always acts as though any stranger she meets will harm her, and
dislikes other animals.`
dogContent.append(descriptionParagraph)

feedingTimeTitle.textContent = 'Feeding Times:'
dogContent.append(feedingTimeTitle)

feedingTimes[0].textContent = '9:00 AM'
feedingTimes[1].textContent = '12:00 pm'
feedingTimes[2].textContent = '5:00 pm'

feedingTimesList.append(feedingTimes[0])
feedingTimesList.append(feedingTimes[1])
feedingTimesList.append(feedingTimes[2])
dogContent.append(feedingTimesList)
