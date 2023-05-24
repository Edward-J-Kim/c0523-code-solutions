const $contactForm = document.querySelector('#contact-form');

function handleSubmit(event) {
  event.preventDefault();
  const name = $contactForm.elements.name.value;
  const email = $contactForm.elements.email.value;
  const message = $contactForm.elements.message.value;
  const Data = {
    Name: name,
    Email: email,
    Message: message,
  };
  console.log('Data:', Data);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', handleSubmit);
