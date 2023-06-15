import photoUrl from "./images/img-02.png";

export default function User({name}){
    const $li = document.createElement('LI');
    $li.innerHTML = `<img src="${photoUrl}" alt="사진"> ${name}`;
    $li.addEventListener('click',()=>{alert(name);});
    return $li
}//User