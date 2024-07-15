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

//atributo value="" para acceder a el mismo.
//y manejar un checkbox con querySelector.
document.getElementById('FormMascota').addEventListener('submit', e =>{
    e.preventDefault();
    var mascota = document.querySelector('.Mascota').value;
    var check = document.querySelector('.tiene').checked?true:false;
    document.getElementById('jsonResultMascota').innerHTML =`${mascota}:${check}`;
});