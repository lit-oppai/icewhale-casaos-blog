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
// import sidebar from '@/sidebar.html'
// import home from '@/home.html'
//
// const body = document.querySelector('body')
// const headerElement = document.createElement('header')
// const divElement = document.createElement('div')
// const footerElement = document.createElement('footer')
// headerElement.innerHTML = header
// divElement.classList.add('body')
// divElement.innerHTML = sidebar + home
// headerElement.classList.add('header')
// // body.appendChild(headerElement, divElement, footerElement)
// body.appendChild(headerElement)
// body.appendChild(divElement)
// body.appendChild(footerElement)

// import Swiper JS
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
// import Swiper style
import 'swiper/css'
import 'swiper/css/pagination'

// const SWIPER = document.querySelector('.swiper')
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  // autoHeight: true,
  // freeMode: true,
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
})
// const SWIPER_BUTTON_NEXT = document.querySelector('.swiper-button-next')
// const SWIPER_BUTTON_PREV = document.querySelector('.swiper-button-prev')
// SWIPER_BUTTON_NEXT.addEventListener('click', () => {
//   swiper.slideNext()
// })
// SWIPER_BUTTON_PREV.addEventListener('click', () => {
//   swiper.slidePrev()
// })

// function changeElState(enevt) {
//   console.log(enevt)
//   // debugger
// }
//
// export { changeElState }
//
// window.changeElState = changeElState

// const REF = document.querySelector('.content-ref')
// document.addEventListener('click', (event) => {
//   console.log(event)
// })

function activateDirectory() {
  if (screen.width < 1440) {
    return
  }
  const contentId = getCurrentContentId()
  document.querySelector(`[data-content-id = "${contentId}"]`).classList.add('active')

  // 根据 id 获取对应目录项
  const currentItem = document.querySelector(`[data-content-id ='${contentId}']`)

  // 移除其他目录项的激活状态
  document.querySelectorAll('.content-ref.active').forEach((item) => {
    item.classList.remove('active')
    item.classList.add('ml-10')
  })

  // 使用 currentItem 激活
  currentItem.classList.add('active')
  currentItem.classList.remove('ml-10')
}

function getCurrentContentId() {
  // 获取当前可视区域的id
  const contentList = document.querySelectorAll('[id^="content"]')
  const contentIdList = Array.from(contentList).map((content) => {
    const contentId = content.getAttribute('id')
    const contentTop = content.getBoundingClientRect().top
    return {
      contentId,
      contentTop,
    }
  })
  const contentId = contentIdList
    .filter((content) => content.contentTop > 0)
    .sort((a, b) => a.contentTop - b.contentTop)[0].contentId
  return contentId
}

activateDirectory()
window.addEventListener('scroll', activateDirectory)
document.querySelectorAll('.content-ref').forEach((item) => {
  item.addEventListener('click', (e) => {
    console.log(e)
    const target = e.target
    const contentId = target.dataset['contentId']
    let realViewHeight = document.querySelector(`#${contentId}`).offsetTop - 108
    window.scrollTo({
      behavior: 'smooth',
      top: realViewHeight,
    })
    activateDirectory()
  })
})

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
