const input = document.querySelector('.input-field')
const button = document.querySelector('.add')
const list = document.querySelector('.item-list')


button.addEventListener("click", addToList)
list.addEventListener('click', deleteVal)
list.addEventListener('click',editVal)


function addToList(event){
    event.preventDefault();
    const newDiv = document.createElement('div')
    newDiv.classList.add('items')
    // add field
    const newInp = document.createElement('input')
    newInp.setAttribute("type","text")
    newInp.classList.add("item-field")
    newInp.value = input.value
    newInp.disabled = true
    newDiv.appendChild(newInp)
    // add button 1
    const editButton = document.createElement('button')
    editButton.classList.add("edit")
    editButton.innerHTML = '<i class="fas fa-pencil-alt"></i>'
    newDiv.appendChild(editButton)
    // add delete button
    const delButton = document.createElement('button')
    delButton.classList.add("delete")
    delButton.innerHTML = '<i class="far fa-trash-alt"></i>'
    newDiv.appendChild(delButton)
    // adding newdiv to old div
    list.appendChild(newDiv)
    input.value = ""
}

function deleteVal(event){
    const item = event.target
    
    if (item.classList[0] === "delete"){
        const pdiv = item.parentElement
        pdiv.remove()
    }
}

function editVal(event){
    const item = event.target
    if (item.classList[0] === 'edit'){
        changeIcon(item);
    }
}

function changeIcon(item){
    const field = item.previousElementSibling
    if (field.disabled == true){
        field.disabled = false;
        item.innerHTML = '<i class="fa fa-check"></i>'}
    else{
        field.disabled = true
        item.innerHTML = '<i class="fas fa-pencil-alt">'
    }
}