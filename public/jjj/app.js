

const weatherform=document.querySelector('form')
const search =document.querySelector('input')
const messageone= document.querySelector('#message-1')
const messagetwo= document.querySelector('#message-2')
messageone.textContent='hi'
messagetwo.textContent='hrishi'
weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
 const location=search.value
messageone.textContent='loading'
messagetwo.textContent='...'

fetch('/weather?address='+location).then((response)=>{
    console.log(response.json())
    if(!response.ok){
        throw response
    }
    
    response.json().then((data)=>{
        if(data.error){
 messageone.textContent= data.error
        }
        else{
            console.log(data.location)
            messageone.textContent=data.location
            messagetwo.textContent=data.forecast
        }
    
    })
}).catch((error)=>{
    retun ('error')
})
})