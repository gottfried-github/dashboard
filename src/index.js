import './index.html'
import './index.scss'

const SIDEBAR_VISIBILITY_CLASS = 'container_sidebar_visible'

const handleOpenMobileMenu = () => {
  document.querySelector('.container').classList.add(SIDEBAR_VISIBILITY_CLASS)
}

const handleCloseMobileMenu = () => {
  document.querySelector('.container').classList.remove(SIDEBAR_VISIBILITY_CLASS)
}

const main = () => {
  const mobileMenuButton = document.querySelector('.header__menu-button')
  const sidebarCloseButton = document.querySelector('.sidebar__close-button')

  mobileMenuButton.addEventListener('click', handleOpenMobileMenu)
  sidebarCloseButton.addEventListener('click', handleCloseMobileMenu)
}

document.addEventListener('DOMContentLoaded', main)
