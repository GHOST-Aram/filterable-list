
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

//Create contact name node
function createNameNode(contactObj){
    const nameNode = document.createElement('p') 
    nameNode.classList.add('contact-name')
    nameNode.textContent = contactObj.name
    return nameNode
}
//Filter list when user types in searchbox
function filterContacts(input){
    const contacts = document.querySelectorAll('.contact-group p')
    const alphabet = document.querySelectorAll('#contact-list h4') 

    const regex = new RegExp(input.toLowerCase())

    alphabet.forEach(h4=>{
        h4.style.display = 'none'
    })
    contacts.forEach(contact => {
        if(regex.test(contact.textContent.toLowerCase())){
            contact.parentElement.firstElementChild.style.display = 'block'
            contact.style.display = 'block'
            contact.style.color = 'maroon'
        }
        else{
            contact.style.color = 'grey'
            contact.style.display = 'none'
        }
        if(input.trim()==='')
        contact.style.color = 'grey'

    });
}
//open Contact

function openContactForm(form){
    clearForm(form)
    form.style.display = 'block'
}

//RENDER CONTACT NAME
function render(alphabet, object){
    const nameNode = createNameNode(object)
    const firstLetter = nameNode.textContent.trim().charAt(0).toUpperCase()
    alphabet.forEach(letter=>{

        if(letter.textContent === firstLetter){
            letter.style.display = 'block'
            letter.parentElement.appendChild(nameNode)
        }
    })
}
//SAVE CONTACT
function saveContact(list, contactObj){
    list.push(contactObj)
}


//filter input
const searchBox = document.querySelector('input')
//Get contact form
const contactForm = document.querySelector('#contact-form')
const closebtn = document.querySelector('#close-btn')
const addBtn = document.querySelector('#add-contact-btn')
const savebtn = document.querySelector('#save-btn')
const alphabetHeadings = document.querySelectorAll('#contact-list h4')
const contactList = []

//Filter
searchBox.addEventListener('input', ()=>{
    filterContacts(searchBox.value)
})

//Add contact
addBtn.addEventListener('click', ()=>{
    openContactForm(contactForm)
})


//Close contact form
closebtn.addEventListener('click',()=>{
    closeContactForm(contactForm)
})

//saveContact
savebtn.addEventListener('click',(event)=>{
    event.preventDefault()
    const contactObj = createContact()
    saveContact(contactList, contactObj)
    closeContactForm(contactForm)
    render(alphabetHeadings, contactObj)
} )

