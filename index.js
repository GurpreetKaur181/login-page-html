let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.namefield');
let title = document.querySelector('.title');
let Text = document.querySelector('.text');


    signInBtn.addEventListener('click',()=>{
    nameField.computedStyleMap.maxHeight ='0';
    title.innerHTML = 'Signin';
    Text.innerHTML ='Lost password';
    signUpBtn.classList.add('disable');
    signUpBtn.classList.remove('disable');
             
});
    
        signUpBtn.addEventListener('click',()=>{
        nameField.computedStyleMap.maxHeight ='60';
        title.innerHTML = 'Sign UP';
        signUpBtn.classList.remove('disable');
        signUpBtn.classList.add('disable');
             
});
    



