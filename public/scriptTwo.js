'use strict'

//ejemplo jsonLocal
document.getElementById('but').addEventListener('click', e => {
    e.preventDefault();
    fetch('./public/jsonArch/apisota.json')
    .then(res => res.json())
    .then(data => document.querySelector('.infojson').innerText = JSON.stringify(data));
});
/*document.querySelector('.btn btn-default').addEventListener('click', e =>{
    e.preventDefault();
    fetch('./apisota.json')
    .then(res => res.json())
    .then(data => document.querySelector('.infojson').innerText = JSON.stringify(data));
})*/