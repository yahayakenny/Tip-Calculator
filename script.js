const total = document.getElementById('total');
const share = document.getElementById('share');
const service = document.getElementById('service');
const form = document.getElementById('form');
const display = document.getElementById('display')

const handleError = () => {
  const error = document.getElementById('error-1');
  error.className = 'error error-1';
  error.style.color = 'red';
};

const handleError2 = () => {
  const error2 = document.getElementById('error-2');
  error2.className = 'error error-2';
  error2.style.color = 'red';
};


const calcTotal = () => {
  if (service.value == 'great') {
      const percent = 0.2 * Number(total.value);
      const totalAmount = percent + Number(total.value);
      return totalAmount;
  } 
  if (service.value == 'good') {
      const percent = 0.1 * Number(total.value);
      const totalAmount = percent + Number(total.value);
      return totalAmount;
  } 
  if (service.value == 'bad') {
      const percent = 0.02 * Number(total.value);
      const totalAmount = percent + Number(total.value);
      return totalAmount;
  } 

};

const handleForm = (e) => {
    if (total.value == '') {
      total.style.border = '2px solid red';
      handleError();
      
    } else {
      total.style.border = '2px solid green';
    }
    if (share.value == '') {
      share.style.border = '2px solid red';
      handleError2();
      
    } else {
      share.style.border = '2px solid green';
    }
    display.innerHTML = `<p>Your total bill is:  
    ₦${calcTotal()} including the tip.</p>
  
    <p>Each person should pay: ₦${Math.ceil(calcTotal()/ Number(share.value))}. </p>
    `
    e.preventDefault();

  };


form.addEventListener('submit', handleForm);
