import { Adduser, Edituser, deletuser } from "./API.js";


let box=document.querySelector('.box')
let add=document.querySelector('.add')
let dialog_1=document.querySelector('.dialog_1')
let form_1=document.querySelector('.form_1')
let dialog_2=document.querySelector('.dialog_2')
let form_2=document.querySelector('.form_2')
let cancel_1=document.querySelector('.Cancel_1')
let cancel_2=document.querySelector('.Cancel_2')


function getData(data) {
    box.innerHTML=""
    data.forEach((el) => {
        let div=document.createElement('div')
        div.classList.add('div_1')
        let title=document.createElement('h1')
        title.innerHTML=el.title
        title.style.marginLeft='10px'
        title.style.paddingTop='10px'
        title.style.paddingBottom='10px'
        if (el.complited==true) {
            title.classList.toggle('line')
        }
        let desc=document.createElement('p')
        desc.innerHTML=el.description
        desc.style.marginLeft='10px'
        desc.style.paddingBottom='30px'
        desc.style.width='90%'
        let divbtnall=document.createElement('div')
        divbtnall.style.display='flex'
        divbtnall.style.justifyContent='space-between'
        divbtnall.classList.add('section_middle')
        let divbtn=document.createElement('div')
        divbtn.style.display='flex'
        let divbtn2=document.createElement('div')
        divbtn2.style.display='flex'
        let editbtn=document.createElement('img')
        editbtn.src='EditFilled.png'
        editbtn.onclick=()=> {
            dialog_2.showModal()
            form_2['title'].value=el.title
            form_2['description'].value=el.description
            form_2.onsubmit=(e)=> {
                e.preventDefault()
                let user={ 
                    title: form_2['title'].value,
                    description: form_2['description'].value
                }
                Edituser(el.id,user)
                dialog_2.close()
            }
        }
        let deletbtn=document.createElement('img')
        deletbtn.src='DeleteFilled.png'
        deletbtn.onclick=()=> {
            deletuser(el.id)
        }
        let text=document.createElement('span')
        text.innerHTML='done'
        let check=document.createElement('input')
        check.type='checkbox'
        check.style.zoom="1.7"
        check.checked=el.complited
        check.onclick=()=> {
            el.complited=!el.complited
            Edituser(el.id,el)
        }
        divbtn.append(editbtn,deletbtn)
        divbtn2.append(check,text)
        divbtnall.append(divbtn,divbtn2)
        div.append(title,desc,divbtnall)
        box.append(div)
    });
}


add.onclick=()=> {
    dialog_1.showModal()
}

form_1.onsubmit=(e)=> {
    e.preventDefault()
    let user={
        title: form_1['title'].value,
        description: form_1['description'].value
    }
    Adduser(user)
    dialog_1.close()
}

cancel_1.onclick=()=> {
    dialog_1.close()
}

cancel_2.onclick=()=> {
    dialog_2.close()
}


export default getData