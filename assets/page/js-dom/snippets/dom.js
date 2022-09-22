// When the web page has loaded the content, it is safe to access with JS.
// Wait until JS is notified of this Event, then call `setupPage()`:
document.addEventListener('DOMContentLoaded', setupPage)

// Now lookup the menu button by it's `id` HTML attribute,
// and use `.onclick` property to assign a function to call when pressed:
function setupPage() {
  document.getElementById('nav-btn').onclick = toggleMenu
}

// Query for the HTML element with ID `nav-menu` assigned,
// then toggle the `reveal-menu` CSS class to toggle displaying the menu:
function toggleMenu() {
  document.getElementById('nav-menu').classList.toggle('reveal-menu')
}
