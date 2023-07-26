const ROOT = document.getElementById('root')

const btnModal = document.createElement('button')
ROOT.append(btnModal)
btnModal.textContent = 'SHOW MODAL'
btnModal.style.cssText = `
background-color: grey;
color: black;
font-size: 1rem;
margin-top: 50px;
margin-left: 20px;
display: block;
padding: 8px 10px;
border-radius: 5px;
border-color: black;
cursor: pointer;
`
btnModal.addEventListener('mouseover', () => {
    btnModal.style.backgroundColor = 'red   '
})
btnModal.addEventListener('mouseout', () => {
    btnModal.style.backgroundColor = 'grey'
})


const modal = document.createElement('div')
modal.style.cssText = `

position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: #00000060;
display: flex;
justify-content: center;
align-items: center;
`


const modalWindow = document.createElement('div')
modalWindow.style.cssText = `
width: 700px;
height:300px;
background-color: #fff;

position: fixed;
top: 370px;
left: 50%;
transform: translate(-50%, -50%);

padding: 20px;
font-size: 1.5rem;
`

modal.append(modalWindow)


btnModal.addEventListener('click', () => {
    console.log('clicked');
    ROOT.append(modal)
    body.style.cssText = `
    background-color: white;

    `
})

const closeModal = document.createElement('button');


closeModal.textContent = 'x'
modalWindow.append(closeModal)

closeModal.style.cssText = `
position: absolute;
top: 0;
right: 0;
background-color: white;
width: 30px;
height: 30px;
color: black;
border: none;
font-size:30px;
`

closeModal.addEventListener('click', () => {
    modal.remove()
})

modal.addEventListener('click', (event) => {
    if(event.target === modal){
        modal.remove()
    }
})

const h1 = document.createElement('h1')
h1.textContent = 'Warning!'
modalWindow.append(h1)
h1.style.cssText = `
font-family: sans-serif;
font-size:40px;
`
const p = document.createElement('p')
modalWindow.append(p)
p.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum voluptatem numquam libero doloribus unde, repudiandae cumque autem vel blanditiis quod, voluptatum eos nihil fugit. Veritatis veniam laboriosam impedit provident asperiores?'
p.style.cssText = `
font-family: sans-serif;
margin-top: 20px;
`
const btn1 = document.createElement('button')
modalWindow.append(btn1)
btn1.textContent = 'ACCEPT'
btn1.style.cssText = `
border: block;
border-radius: 10px;
font-size: 25px;
weight: 200px;  
margin-top: 40px;
color: white;
background-color: green;
`
const btn2 = document.createElement('button')
modalWindow.append(btn2)
btn2.textContent = 'DESLINE'
btn2.style.cssText = `
border: block;
border-radius: 10px;
font-size: 25px;
weight: 200px;  
margin-top: 40px;
color: white;
background-color: red;
margin-left: 10px;
// btn1.addEventListener('mouseover', () => {
//     btn1.style.backgroundColor = 'grey'

// })
// btn1.addEventListener('mouseout', () => {
//     btn1.style.backgroundColor = 'green'

// })


// btn2.addEventListener('mouseover', () => {
//     btn2.style.backgroundColor = 'grey'

// })
// btn2.addEventListener('mouseout', () => {
//     btn2.style.backgroundColor = 'red'

// })

// const body = document.querySelector('body')
// const light = document.getElementById('light')
// body.append(light)
// const dark = document.createElement('button')
// dark.textContent = 'dark'
// light.append(dark)
// const white = document.createElement('button')


// dark.addEventListener('mouseover', () => {
//     dark.style.color = 'blue'
// })

// dark.addEventListener('mouseout', () => {
//     dark.style.color = 'grey'
// })

// dark.style.cssText = `

function toggleMode() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode'); 
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('mode', 'dark'); 
    } else {
      localStorage.setItem('mode', 'white'); 
    }
  }
  
  const savedMode = localStorage.getItem('mode');
  if (savedMode === 'dark') {
    document.querySelector('body').classList.add('dark-mode'); 
  }




// margin-left: 1100px;
// position: absolute;
// margin-top: -80px;
// font-size: 20px;
// background-color: white;
// border-radius: 10px;
// border-color: green;
// border: none;
// color: grey;
// `

// dark.addEventListener('click', () => {
//     body.style.cssText = `
//     background-color: black;
    
//     `
//     btnModal.style.backgroundColor = 'black'
//     btnModal.style.color = 'white'
//     btnModal.style.borderColor = 'white'
//     h1.style.cssText = `
//     color: 
//     `
//     modalWindow.style.cssText = `
//     width: 700px;
// height:300px;
// background-color: black;

// position: fixed;
// top: 370px;
// left: 50%;
// transform: translate(-50%, -50%);

// padding: 20px;
// font-size: 1.5rem;
//     `
//   h1.style.cssText = `
//   color: white;
//   `
//   p.style.cssText = `
//   color: white;
//   font-family: sans-serif;

//   `

// })



