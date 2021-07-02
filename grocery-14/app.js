// ****** SELECT ITEMS **********

const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option

let editElement;
let editFlag = false;
let editId = "";

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener('submit',addItem);
// clear items
clearBtn.addEventListener('click',clearItems);
// load items
window.addEventListener('DOMContentLoaded',setupItems);


// ****** FUNCTIONS **********
// addind item
function addItem(e){
    e.preventDefault();
    const id = new Date().getTime().toString();
    const value = grocery.value;
    if(value!=="" && editFlag ===false){
        createItemList(id,value);
        // display alert
        displayAlert('item added','success');
        // show container
        container.classList.add("show-container");
        // add to local storage
        addToLocalStorage(id,value);
        // set back to default
        setBackToDefault();
        
    }
    else if(value!=="" && editFlag===true){
        editElement.innerHTML = value;
        displayAlert('value changed','success');
        editLocalStorage(editId,value);
        setBackToDefault();
    }
    else{
        displayAlert('Empty item','danger');
    }
}

// display alert
function displayAlert(text,action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    // remove alert
    setTimeout(function(){
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    },1000)
}

// back to default state
function setBackToDefault(){
    grocery.value = '';
    editFlag = false;
    editId = "";
    submitBtn.textContent = 'submit';
}

// clear items
function clearItems(){
    const items = document.querySelectorAll('.grocery-item');
    if(items.length>0){
        items.forEach(function(item){
            
            list.removeChild(item);
        })
        container.classList.remove('show-container');
        displayAlert('cleared all items','danger');
        setBackToDefault();
        localStorage.removeItem('list');
    }else{
        console.log('somthing went wrong..');
    }
    
}

// delete items
function deleteItem(e){
    // remove from the list
    const item = e.currentTarget.parentElement.parentElement;
    const id = item.dataset.id;
    list.removeChild(item);
    if(list.children.length === 0){
        container.classList.remove('show-container');
    }
    displayAlert('item removed','danger');
    setBackToDefault();
    // remove item from local storage
    removeFromLocalStorage(id);
    
}
// edit items
function editItem(e){
    element = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.parentElement.querySelector('.title');
    editId = element.dataset.id;
    editFlag =true;
    grocery.value = editElement.innerHTML;
    submitBtn.textContent = 'edit';
}

// ****** LOCAL STORAGE *********

// add to local storage

function addToLocalStorage(id,value){
    // localStorage.setItem(id,JSON.stringify([value,]));
    const grocery = {id,value};
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem('list',JSON.stringify(items));
    
}

// getting local storage
function getLocalStorage(){
    return localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[];
}


// remove from local storage
function removeFromLocalStorage(id){
    let items = getLocalStorage();
    items = items.filter(function(item){
        if(item.id !== id){
            return item
        }
    })
    localStorage.setItem('list',JSON.stringify(items));
}

//edit local storage
function editLocalStorage(id,value){
    let items = getLocalStorage();
    items = items.map(function(item){
        if(item.id === id){
            item.value = value;
        }
        return item;
    })
    localStorage.setItem('list',JSON.stringify(items));
    
}
// ****** SETUP ITEMS **********

function setupItems(){
    let items = getLocalStorage();
    if(items.length>0){
        items.forEach(function(item){
            createItemList(item.id,item.value);
        })
        container.classList.add('show-container');
    }
}

function createItemList(id,value){
    const element = document.createElement('article');
        // 1)myway
        element.setAttribute('data-id',`${id}`);
        // 2) another way
        // const attr = element.createAttribute('data-id');
        // attr.value = id;
        // element.setAttributeNode(attr);
        element.classList.add('grocery-item');
        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
          <button class="edit-btn" type="button"><i class="fas fa-edit"></i></button>
          <button class="delete-btn" type="button"><i class="fas fa-trash"></i></button>
        </div>`;
        // adding eventlistners dynamically
        const deleteBtn = element.querySelector('.delete-btn');
        const editBtn = element.querySelector('.edit-btn');
        deleteBtn.addEventListener('click',deleteItem);
        editBtn.addEventListener('click',editItem);
        // append child
        list.appendChild(element);
}









