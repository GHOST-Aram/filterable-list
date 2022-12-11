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

    //elipsis btns
    const detailsBtns = document.querySelectorAll('.details-btn')

    //Manage Contacts button-display view, edit, delete icons here
    const managerDivs = document.querySelectorAll('.manager-icons')

    //Add click event listener to elipsis btns
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

    //Add event listener to view, edit and delete icons
    const iconsBtns = document.querySelectorAll('.manager-icons button')
    iconsBtns.forEach(btn =>{
        btn.addEventListener('click', ()=>{
            if(btn.id === 'view-btn'){
                //Get name of the contact
                const iconsDiv = btn.parentElement
                const contactDiv = iconsDiv.parentElement
                const name = contactDiv.firstElementChild.textContent

                const contact = getContact(contactList, name)
                const detailsDiv = createDetails(contact)
                contactDiv.parentNode.insertBefore(detailsDiv, contactDiv.nextSibling)
            }
            // else if(event.target.id === 'delete-btn')
            //     deleteContact()
            // else if(event.target.id === 'edit-btn')
            //     editContact()
        },{once:true})
    })
})
})

//Filter aka search
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
