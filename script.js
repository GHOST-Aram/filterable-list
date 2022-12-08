function filterContacts(input){
    const contacts = document.querySelectorAll('p')
    
    const regex = new RegExp(input,'ig')
    contacts.forEach(contact => {
        if(regex.test(contact.textContent))
            contact.style.display = 'block'
        else
            contact.style.display = 'none'
    });
}

const contactGroup = document.querySelectorAll('.contact-group')
const searchBox = document.querySelector('input')

searchBox.addEventListener('keyup', (event)=>{
    filterContacts(searchBox.value)
    console.log(event)
})