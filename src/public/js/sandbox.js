const Url = 'http://localhost:4000/Allusuarios';

fetch(Url).then(data => {return data.json()}).then(res => {console.log(res)});