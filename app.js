const scriptURL = 'https://script.google.com/macros/s/AKfycbxvVr-kwnr47gKZ6ww1hYFDtr312Lv3t9EbJXJCKLavYhNf1ooA24_h-mvPZ6rM0Fro/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(res => alert("Code Loaded")).then(setTimeout(form.reset(), 1000)) 
      .catch(err => alert('Error: '+err.message))
  })
