/*=============== EMAIL JS ===============*/
const contactForm=document.getElementById('contact-form'),
      contactMessage=document.getElementById('contact-message')

const sendEmail =(e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_964mzlg','template_k7f92rg','#contact-form','Jl4Wya9cEJyBSDkVD')
    .then(()=>{
        //show sent message
        contactMessage.textContent=' Message sent successfully ✅'

        // Remove message after five seconds
        setTimeout(()=>{
            contactMessage.textContent=''
        },5000)//3andou 7a9 yektb 5000 caracteres.

        // Clear input fields
        contactForm.reset()//bech eli ktebtou ki tab3thou yetfasa5
    },()=>{
        // Show error message
        contactMessage.textContent='Message not sent (service error) ❌'//hathi ki tji erreur fil code
    })

}
contactForm.addEventListener('submit',sendEmail)