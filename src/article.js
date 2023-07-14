// Test import of a JavaScript module
// import { example } from '@/js/example'

// Test import of an asset
// import webpackLogo from '@/images/webpack-logo.svg'

// Test import of style
import '@/styles/index.scss'

// Appending to the DOM
// const logo = document.createElement('img')
// logo.src = webpackLogo

// const heading = document.createElement('h1')
// heading.textContent = example()

// Test a background image url in CSS
// const imageBackground = document.createElement('div')
// imageBackground.classList.add('image')

// Test a public folder asset
// const imagePublic = document.createElement('img')
// imagePublic.src = '/assets/example.png'

// import home from '@/pages/home.html'
// const homePageDivElement = document.createElement('div')
// homePageDivElement.innerHTML = home
//
// const app = document.querySelector('#root')
// app.append(homePageDivElement)

// init

// import header from '@/header.html'
// import sidebar from '@/sidebarRight.html'
// import single from '@/single.html'
//
// const body = document.querySelector('body')
// const headerElement = document.createElement('header')
// const divElement = document.createElement('div')
// const footerElement = document.createElement('footer')
// headerElement.innerHTML = header
// divElement.classList.add('body', 'background')
// divElement.innerHTML = sidebar + single
// headerElement.classList.add('header')
// // body.appendChild(headerElement, divElement, footerElement)
// body.appendChild(headerElement)
// body.appendChild(divElement)
// body.appendChild(footerElement)

//init header
if (screen.width <= 375) {
  const headerNav = document.querySelector('#header-nav')
  headerNav.classList.add('close')
  // add event listener
  const headerNavButton = document.querySelector('#header-extra-button')
  headerNavButton.addEventListener('click', () => {
    headerNav.classList.remove('close')
    headerNav.classList.add('open')
  })
  // global click event
  document.addEventListener('click', (e) => {
    // close menu
    if (!e.target.closest('#header-extra-button') && !e.target.closest('#header-nav')) {
      headerNav.classList.add('close')
      headerNav.classList.remove('open')
    }
  })
} else {
  const headerNav = document.querySelector('#header-extra')
  headerNav.classList.add('close')
}

// init search
document.querySelector('.searchIcon').addEventListener('click', (e) => {
  const ICON = document.querySelector('.searchIcon')
  const INPUT = document.querySelector('.searchInput')
  ICON.classList.add('close')
  INPUT.classList.remove('close')
  INPUT.focus()
})

// global click event
document.addEventListener('click', (e) => {
  // close search
  const ICON = document.querySelector('.searchIcon')
  const INPUT = document.querySelector('.searchInput')
  if (!e.target.closest('.searchInput') && !e.target.closest('.searchIcon')) {
    ICON.classList.remove('close')
    INPUT.classList.add('close')
  }
})
