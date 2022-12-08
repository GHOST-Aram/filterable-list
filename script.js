function filterContacts(input){
    const contacts = document.querySelectorAll('p')    
    const regex = new RegExp(input,'ig')

    contacts.forEach(contact => {
        if(regex.test(contact.textContent)){
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

searchBox.addEventListener('input', (event)=>{
    filterContacts(searchBox.value)
})
