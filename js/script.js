const accountEmail = 'jem.dale@gmail.com';
const apiKey = '13hDbwaWb3tCM4TX9hLbB7FNIdW2ilqNVrdOqj2I';
const accountID = '4172c9df-0d1d-4cee-9398-18adda75081c';

function getFetch() {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.querySelector('img').src = data.hdurl;
            document.querySelector('.overlay__title').innerText = `${data.title}`;
            document.querySelector('.overlay__text').innerText = `${data.explanation}`;
            let date = data.date.split('-');
            date = [date[1], date[2], date[0]].join('-');
            document.querySelector('.overlay__date').innerText = `${date}`;
        })
        .catch(error => {
            console.log(error);
        });

}

getFetch();