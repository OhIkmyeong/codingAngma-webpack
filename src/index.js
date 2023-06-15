import {hello,add} from "./util";
import "./reset.css"
import "./style.css"
import img01 from "./images/img-01.png";
import List from "./List";

const text = hello("코딩앙마");
const num = add(parseInt(Math.random()*10),parseInt(Math.random()*10));

document.getElementById('root').innerHTML = `(${num}) ${text}`;

const $img = `<img src="${img01}" alt="썸네일">`;

document.getElementById('root').innerHTML += $img;

const users = [
    {id : 1, name:"aaa"},
    {id : 2, name:"bbb"},
    {id : 3, name:"ccc"},
    {id : 4, name:"ddd"},
    {id : 5, name:"eee"},
    {id : 6, name:"fff"},
];

document.body.appendChild(List({userList : users}))