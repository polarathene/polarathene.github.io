document.addEventListener('DOMContentLoaded', setupPage)

function setupPage() {
  document.getElementById('nav-btn').onclick = toggleMenu
}

function toggleMenu() {
  document.getElementById('nav-menu').classList.toggle('reveal-menu')
}
