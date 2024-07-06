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

//ejemplo get
document.getElementById('get_form').addEventListener('submit', e => {
    e.preventDefault();
    const name = e.target[0].value;
    fetch(`/acounts/?name=${name}`)
    .then(res => res.json())
    .then(data => {document.getElementById('jsongete').innerText = JSON.stringify(data)});
});

//ejemplo patch
document.getElementById('alter_form').addEventListener('submit', e => {
    e.preventDefault();
    const content = {
        pass: e.target[0].value, 
        name: e.target[1].value,
        activo: e.target[2].checked
    };
    fetch('/acounts/',{
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json'
        },
        body: JSON.stringify(content)
    })
    .then(res => res.json())
    .then(data => {document.getElementById('jsonpatch').innerText = JSON.stringify(data)});
});

//ejemplo put
document.getElementById('put_form').addEventListener('submit', e => {
    e.preventDefault();
    const content = {
        _id: e.target[0].value,
        pass: e.target[1].value,
        name: e.target[2].value,
        email: e.target[3].value,
        activo: e.target[4].checked,
        age: e.target[5].value,
        fecha: e.target[6].value
    };
    fetch('/acounts/',{
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json'
        },
        body: JSON.stringify(content)
    })
    .then(res => res.json())
    .then(data => {document.getElementById('jsonUpdate').innerText = JSON.stringify(data)});
});

//ejemplo delete

document.getElementById('delete_form').addEventListener('submit', e => {
    e.preventDefault();
    const content = {
        pass: e.target[0].value,
        name: e.target[1].value
    };
    fetch('/acounts/',{
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json'
        },
        body: JSON.stringify(content)
    })
    .then(res => res.json())
    .then(data => {document.getElementById('jsonDelete').innerText = JSON.stringify(data)});
})