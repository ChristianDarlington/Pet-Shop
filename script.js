function handleSubmit(event) {
  event.preventDefault()
  console.log('Submitted Form')
  const form = document.querySelector('form')
  const newPet = {
    petName: form.elements.petName.value,
    petType: form.elements.petType.value,
    color: form.elements.color.value,
    age: form.elements.age.value
  }


  fetch('https://pet-boutique-cd.web.app/pets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPet),
  })  
    .then(response => response.json())
    .then(json => {
      form.innerHTML = '<h3>Thanks</h3>'
      
    })
    .catch(err => {
      form.innerHTML = '<h3>Error sending customer</h3>'
    })
}