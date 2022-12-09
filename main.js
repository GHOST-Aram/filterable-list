//filter input
const searchBox = document.querySelector('input')
//Get contact form
const contactForm = document.querySelector('#contact-form')
const closebtn = document.querySelector('#close-btn')
const addBtn = document.querySelector('#add-contact-btn')
const savebtn = document.querySelector('#save-btn')


let contactList = []

//On load
window.addEventListener('load', () => {
    //Initialize contactList
    //Use local storage

    contactList = checkLocalStorage()
    displayContacts(contactList)


    //Manage Contacts button-display view, edit, delete icons here
    const detailsBtns = document.querySelectorAll('.details-btn')
    const managerDivs = document.querySelectorAll('.manager-icons')
    detailsBtns.forEach(btn=>{
        btn.addEventListener('click', (event) =>{
            managerDivs.forEach(managerDiv=>{
            if(managerDiv === event.target.nextElementSibling){
                if(managerDiv.style.display === 'none')
                    managerDiv.style.display = 'block'
                else
                    managerDiv.style.display = 'none'
                
            }
    })
    })
})
})
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
    render(contactObj)
} )

window.addEventListener('load', ()=>{
    
})
