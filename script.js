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

const searchBox = document.querySelector('input')

searchBox.addEventListener('input', ()=>{
    filterContacts(searchBox.value)
})
