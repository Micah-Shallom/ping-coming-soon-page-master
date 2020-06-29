const submit=document.getElementById('submit');
const email=document.getElementById('input');
const small=document.getElementsByTagName('small');
const form=document.getElementById('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkemail(email);
})

const checkemail=(input)=>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)){
        showSuccess(input);
    }else{
        showError(input);
    }
}
const showError=(input)=>{
    const formContent=input.parentElement;
    formContent.className='formContent error';
}
const showSuccess=(input)=>{
    email.value='';
    const formContent=input.parentElement;
    formContent.className='formContent';
}