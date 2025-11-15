const formData = { email: "", message: "" };
const form = document.querySelector('.feedback-form');
const localStorageKey = "feedback-form-state";

form.addEventListener('input', onFormInput);

    function onFormInput(event) {
        const { name, value } = event.target;

        formData[name] = value;
        localStorage.setItem(localStorageKey, JSON.stringify(formData));
    }

const savedData = localStorage.getItem(localStorageKey);

if (savedData !== null) {
    const parsedData = JSON.parse(savedData);

    formData.email = parsedData.email;
    formData.message = parsedData.message;

    form.elements.email.value = parsedData.email;
    form.elements.message.value = parsedData.message;
}

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    if (formData.email === '' || formData.message === '') {
        alert('Fill please all fields');
        return;
    }
    console.log(formData);
    localStorage.removeItem(localStorageKey);

    formData.email = '';
    formData.message = '';

    form.reset();
}