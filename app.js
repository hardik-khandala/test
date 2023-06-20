const scriptURL = 'https://script.google.com/macros/s/AKfycbxiz6te9xULGyvsSBLVk24t-yqN_6cuao0CHOnkeRA41Mc8Azbxg1T1rS9QtiCjvClr/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(setTimeout(form.reset(), 1000)) 
      .catch(err => alert('Error: '+err.message))
  })
