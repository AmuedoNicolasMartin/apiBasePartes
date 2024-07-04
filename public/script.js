'use strict'
require('bootstrap');

//ejemplo post

document.getElementById('PostForm').addEventListener('submit', e => {
    e.preventDefault();
    const content = {
        pass: e.target[0].value,
        email: e.target[1].value,
        name: e.target[2].value,
        age: e.target[3].value,
        fecha: e.target[4].value,
        activo: e.target[5].checked,
        //pass: e.target[0].value, 
        //name: e.target[1].value,SS
        //email: e.target[2].value,
        //age: e.target[3].value,
        //fecha: e.target[4].value,
        //activo: e.target[5].checked
    };
    fetch('/acounts/',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json'
        },
        body: JSON.stringify(content)
    })
    .then(res => res.json())
    .then(data => {document.getElementById('jsonPost').innerText = JSON.stringify(data)});
});