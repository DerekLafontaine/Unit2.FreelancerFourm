//  Model-View-Controller (MVC)

// Model - our Data

// View - "whats on the page?" HTML/CSS

// Controller - When you click a button what happens?

/* ==============
    MODEL : Our Data
  =============== */

// I want to show all of the candy in my bag


  
  let free = [
    {
      name: 'Alice',
      price: 30,
      occupation: 'Writer'
      
     
    },
    {
      name: 'Bob',
      price: 50,
      occupation: 'Teacher'
      
     
    },
    {
      name: "Carol",
      price: 70,
      occupation: 'Programer'
    
    },
 
  ]
  
  function renderFree() {
    let freeOne = document.getElementById('free-lancer')
  
    for (let i = 0; i < free.length; i++) {
      let currentFree = free[i]
  
     
      let freeDiv = document.createElement('div')
      freeDiv.className = 'free'
  
      
      freeDiv.innerHTML = `<h2>${currentFree.name}</h2>
                            <h3>Starting Price: $ ${currentFree.price}</h3>
                            <h2>Occupation: ${currentFree.occupation}</h2>
                            `
  
      
      freeOne.appendChild(freeDiv)
    }
  }
  
  renderFree()
  
  function rainbowRandomizer() {
    let colors = ['red', 'blue']
  
    let selectedColor = colors[Math.floor(Math.random() * colors.length)]
  
    let h3 = document.querySelector(' div > h3  ')
    h3.style.color = selectedColor
  }
  
  rainbowRandomizer()
  
  // After a selected amount of time, it will run what is inside of the timeout
  setTimeout(() => {
    rainbowRandomizer()
  }, 1000)
  
  // Like timeout but will continue to run at every selected interval
  setInterval(() => {
    rainbowRandomizer()
  }, 1000)
  
  window.prompt('The average starting is $40.')
  
  