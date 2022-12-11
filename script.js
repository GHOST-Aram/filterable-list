const alphabet = document.querySelectorAll('#contact-list h4') 

//Check local storage
function checkLocalStorage(){
        const local = JSON.parse(window.localStorage.getItem('contacts'))
    if(Array.isArray(local))
        contactList = local
    else
        window.localStorage.setItem('contacts', JSON.stringify(contactList))
    if(contactList.length < 1){
        const noContactText =  document.querySelector('#no-contact')
        noContactText.style.display = 'block'
    }
    return contactList
}
//Clear form
function clearForm(form){
    const inputList = form.querySelectorAll(`input[type=text]`)
    const gender = document.querySelector('form select')
    
    inputList.forEach(input =>{
        input.value=''
    })
    gender.value=''
}
//Abort creating contact
function closeContactForm(form){
    form.style.display = 'none'
}

//Creat Contact
function createContact(){
    const contactInfo = document.querySelectorAll(`form input[type=text]`)
    const gender = document.querySelector('form select')
    const contactObj = {
        name:contactInfo[0].value,
        phone1:contactInfo[1].value,
        phone2:contactInfo[2].value,
        email:contactInfo[3].value,
        company:contactInfo[4].value,
        techStack:contactInfo[5].value,
        twitter:contactInfo[6].value,
        gender:gender.value,
        
    }
    return contactObj
}
//Create contact node
function createContactDiv(nameNode){
    const contactDiv = document.createElement('div')
    contactDiv.classList.add('contact','flex')

    // vertical elipsis icon
    const icon = document.createElement('i')
    icon.className = 'fa-solid fa-ellipsis-vertical'

    //vertical elipsis btn
    const btn = document.createElement('button')
    btn.classList.add('details-btn')
    btn.appendChild(icon)

    //manager icons view, edit & delete icons
    const managerDiv = creatManagerIcons()

    contactDiv.appendChild(nameNode)
    contactDiv.appendChild(btn)
    contactDiv.appendChild(managerDiv)

    return contactDiv
}
//Create contact detail
function createDetails(contact){
    const detailsDiv = document.createElement('div')
    detailsDiv.className = 'contact-details'
    
        
    if(contact.hasOwnProperty("phone1")){
        let p = document.createElement('p')
        p.textContent = "Phone " + contact.phone1
        detailsDiv.appendChild(p)
    }
        
    if(contact.hasOwnProperty("phone2")){
        let p2 = document.createElement('p')
        p2.textContent = "Phone " + contact.phone2
        detailsDiv.appendChild(p2)
    }
        
    if(contact.hasOwnProperty("email")){
        let p3 = document.createElement('p')
        p3.textContent = "Email " + contact.email
        detailsDiv.appendChild(p3)
    }
        
    if(contact.hasOwnProperty("company")){
        let p4 = document.createElement('p')
        p4.textContent = "Company " + contact.company
        detailsDiv.appendChild(p4)
    }
        
    if(contact.hasOwnProperty("techStack")){
        let p5 = document.createElement('p')
        p5.textContent = "Tech-stach " + contact.techStack
        detailsDiv.appendChild(p5)
    }
        
    if(contact.hasOwnProperty("gender")){
        let p6 = document.createElement('p')
        p6.textContent = "Gender " + contact.gender
        detailsDiv.appendChild(p6)
    }
    

    const twitterLink = document.createElement('a')
    twitterLink.setAttribute('href',`https://twitter.com/${contact.twitter}`)
    twitterLink.textContent = 'Twitter ' + contact.twitter
    detailsDiv.insertBefore(twitterLink, detailsDiv.lastElementChild)
    return detailsDiv
}
//Create contact name node
function createNameNode(contactObj){
    const nameNode = document.createElement('p')
    nameNode.classList.add('contact-name')
    nameNode.textContent = contactObj.name

    return nameNode
}

//CONTACT DETAILS BUTTONs
//Triggered by the vertical ellipsis
//View edit delete
function creatManagerIcons(){
    const btnsDiv = document.createElement('div')
    btnsDiv.className = 'manager-icons'
    for(let index = 0; index < 3; index++){
        const btn = document.createElement('button')
        const icon = document.createElement('i')

        btn.className = `manager-btn btn`

        if(index===0){
            icon.className = 'fa-solid manager-icon fa-eye'
            btn.id = `view-btn`
        }
        if(index===1){
            icon.className = 'fa-solid manager-icon fa-pen'
            btn.id = `edit-btn`
        }
        if(index===2){
            icon.className = 'fa-solid manager-icon fa-trash-can'
            btn.id = `delete-btn`
        }
        btn.appendChild(icon)
        btnsDiv.appendChild(btn)
    }
    return btnsDiv
}
//RENDER CONTACT LIST
function displayContacts(contactList){
    contactList.forEach(contact=>{
        render(contact)
    })
}

//Filter list when user types in searchbox
function filterContacts(input){
    const contacts = document.querySelectorAll('.contact-group p')

    const regex = new RegExp(input.toLowerCase())

    alphabet.forEach(h4=>{
        h4.style.display = 'none'
    })
    contacts.forEach(contact => {
        if(regex.test(contact.textContent.toLowerCase())){
            contact.parentElement.parentElement.firstElementChild.style.display = 'block'
            contact.parentElement.style.display = 'flex'
            contact.style.color = 'maroon'
            contact.nextElementSibling.firstChild.style.color = 'maroon'
        }
        else{
            contact.parentElement.style.color = 'grey'
            contact.nextElementSibling.firstChild.style.color = 'grey'
            contact.parentElement.style.display = 'none'
        }
        if(input.trim()===''){
            contact.style.color = 'grey'
            contact.nextElementSibling.firstChild.style.color = 'grey'
        }
    });
}
//Get contact from contact list
function getContact(list, contName){
    let contact = 'contact'
    list.forEach(element => {
        if(element.name === contName)
            contact = element
    });
    return contact
}

//open Contact form

function openContactForm(form){
    clearForm(form)
    form.style.display = 'block'
}

//RENDER CONTACT NAME
function render(object){
    const nameNode = createNameNode(object)
    const firstLetter = nameNode.textContent.trim().charAt(0).toUpperCase()
    
    //Render aplhabetically
    alphabet.forEach(letter=>{
        
        if(letter.textContent === firstLetter){
            letter.style.display = 'block'
            const contactDiv = createContactDiv(nameNode)
            contactDiv.prepend(nameNode)
            letter.parentElement.appendChild(contactDiv)
        }
    })
}

//SAVE CONTACT
function saveContact(list, contactObj){
    list.push(contactObj)
    window.localStorage.setItem('contacts', JSON.stringify(list))
}




/*--------------------------------------------------------------------*/
