const scriptURL = 'https://script.google.com/macros/s/AKfycbx5JB8etreQPyINd7BDne4m-VFAZdIwSM2wMS9RWffB3LvYqOwhzmb-eA-KmfQPgZqm/exec'


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'post', body: new FormData(form) })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})
