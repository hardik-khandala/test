const scriptURL = 'https://script.google.com/macros/s/AKfycby3VHcmERPLlXH_H5z5P705wr3LfRoshw7cH9FPx_dp9DQGnAziaY47M04pXTG3qSo8/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(setTimeout(form.reset(), 1000)) 
      .catch(err => alert('Error: '+err.message))
  })
