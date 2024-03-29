const amount = document.getElementById("amount");
const guests = document.getElementById("guest");
const quality = document.getElementById("quality");
const tipAmount = document.getElementsByClassName("tip-amount");

calculate = () => {
    const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2);
    amount.value = '';
    guests.value = '';
    quality.value = '';

    if(tip === 'NaN'){
        tipAmount.innerHTML = 'Tip $0 each';
        showTipAmount();
    }
    else{
        tipAmount.innerHTML = 'Tip $' + tip + ' each';
        showTipAmount();
    }
}

function showTipAmount(){
    var x = tipAmount;
    x.chassName = 'show';
    setTimeout(function(){x.chassName = x.className.replace('show', '');},  3000);
}

