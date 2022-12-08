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
        gender:gender.value

    }
    return contactObj
}
//Filter list when user types in searchbox
function filterContacts(input){
    const contacts = document.querySelectorAll('.contacts-list p')
    const alphabet = document.querySelectorAll('.contacts-list h4') 

    const regex = new RegExp(input,'ig')

    alphabet.forEach(h4=>{
        h4.style.display = 'none'
    })
    
    contacts.forEach(contact => {
        if(regex.test(contact.textContent)){
            contact.parentElement.previousElementSibling.style.display = 'block'
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
    form.style.display = 'block'
}

//Save con====tact
function saveContact(contactObj){
    const confirmation = confirm('Create Contact')
    if(confirmation){
        alert('Contact successfully created')
    }else{
        alert('Create contact cancelled')
    }
}


//filter input
const searchBox = document.querySelector('input')

searchBox.addEventListener('input', ()=>{
    filterContacts(searchBox.value)
})
//Get contact form
const contactForm = document.querySelector('#contact-form')
//Add contact
const addBtn = document.querySelector('#add-contact-btn')

addBtn.addEventListener('click', ()=>{
    openContactForm(contactForm)
})

//Abort create contact
const closebtn = document.querySelector('#close-btn')

closebtn.addEventListener('click',()=>{
    closeContactForm(contactForm)
})

//saveContact
const savebtn = document.querySelector('#save-btn')

savebtn.addEventListener('click',(event)=>{
    event.preventDefault()
    const contactObj = createContact()
    saveContact(contactObj)
    closeContactForm(contactForm)
} )

