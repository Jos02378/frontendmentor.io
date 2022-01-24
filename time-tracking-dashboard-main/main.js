const cardContainer = document.getElementById('card_container');
const timeOptions = document.getElementsByClassName('card-profile__option');

let newData;

// Get Data
fetch('data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    newData = data;
    loadCards();
  })
  .catch(function (err) {
    console.log(err);
  });

function loadCards() {
  newData.map((data) => {
    const card = document.createElement('article');
    const statsCardContainer = document.createElement('div');
    const cardWrapper = document.createElement('div');
    const cardTitle = document.createElement('h2');
    const cardElipsis = document.createElement('i');
    const cardWrapperTwo = document.createElement('div');
    const cardCurrentTime = document.createElement('h3');
    const cardDescription = document.createElement('p');

    const cardClassType = data.title.split(' ').join('-').toLowerCase();

    card.className = `card-stats card--${cardClassType}`;
    statsCardContainer.className = 'card-stats__container';

    cardWrapper.className = 'card-stats__wrapper';
    cardWrapperTwo.className = 'card-stats__wrapper wrapper--down';

    cardTitle.className = 'card-stats__heading heading--bold';
    cardTitle.innerHTML = data.title;

    cardCurrentTime.className = 'card-stats__heading heading--big';
    cardCurrentTime.innerHTML = `${data.timeframes.weekly.current}hrs`;

    cardDescription.className = 'card-stats__description';
    cardDescription.innerHTML = `Last Week - ${data.timeframes.weekly.previous}hrs`;

    cardElipsis.className = 'card-stats__icon';

    cardWrapper.appendChild(cardTitle);
    cardWrapper.appendChild(cardElipsis);

    cardWrapperTwo.appendChild(cardCurrentTime);
    cardWrapperTwo.appendChild(cardDescription);

    statsCardContainer.appendChild(cardWrapper);
    statsCardContainer.appendChild(cardWrapperTwo);

    card.appendChild(statsCardContainer);

    cardContainer.appendChild(card);
  });
}

for (let i = 0; i < timeOptions.length; i++) {
  timeOptions[i].addEventListener('click', () => {
    const activeElement = document.getElementsByClassName('active');
    const data = timeOptions[i].getAttribute('data-time');
    activeElement[0].classList.remove('active');
    timeOptions[i].classList.add('active');
    changeTime(data);
  });
}

function changeTime(time) {
  const cards = document.getElementsByClassName('card-stats');
  for (let i = 0; i < cards.length; i++) {
    let cardDescription = cards[i].getElementsByTagName('p');
    let cardHourHeading = cards[i].getElementsByTagName('h2');

    cardHourHeading[0].innerText = `${newData[i].timeframes[time].current}hrs`;
    cardDescription[0].innerText = `Last Week - ${newData[i].timeframes[time].previous}hrs`;
  }
}
