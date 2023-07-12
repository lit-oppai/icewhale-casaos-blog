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

import header from '@/header.html'
import sidebar from '@/sidebarRight.html'
import single from '@/single.html'

const body = document.querySelector('body')
const headerElement = document.createElement('header')
const divElement = document.createElement('div')
const footerElement = document.createElement('footer')
headerElement.innerHTML = header
divElement.classList.add('body', 'background')
divElement.innerHTML = sidebar + single
headerElement.classList.add('header')
// body.appendChild(headerElement, divElement, footerElement)
body.appendChild(headerElement)
body.appendChild(divElement)
body.appendChild(footerElement)
