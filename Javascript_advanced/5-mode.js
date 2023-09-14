#!/usr/bin/node
const changeMode = (size, weight , transform, background, color ) => {
    return () => {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.transform = transform;
        document.body.style.background = background;
        document.body.style.color = color; 
    }
    
}
const main = () => {
    const body = document.body;
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    const par = document.createElement('p');
    par.innerText = 'Welcome Holberton!';

    const btnSpooky = document.createElement('button');
    const btnSpookyText = document.createTextNode('Spooky');
    btnSpooky.appendChild(btnSpookyText);
    btnSpooky.addEventListener('click', spooky);

    const btnDark = document.createElement('button');
    const btnDarkText = document.createTextNode('Dark mode');
    btnDark.appendChild(btnDarkText);
    btnDark.addEventListener('click', darkMode);
    

    const btnScream = document.createElement('button');
    const btnScreamText = document.createTextNode('Scream mode');
    btnScream.appendChild(btnScreamText);
    btnScream.addEventListener('click', screamMode);
   

    body.appendChild(par);
    body.appendChild(btnSpooky);
    body.appendChild(btnDark);
    body.appendChild(btnScream);

}
main();