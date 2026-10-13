function updateDateTime() {
  const now = new Date();
  const options = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
    hour12: true 
  };
  const dtElement = document.getElementById('live-datetime');
  if (dtElement) {
    dtElement.innerText = now.toLocaleString('en-IN', options);
  }
}

updateDateTime();
setInterval(updateDateTime, 1000);

// Emergency Fallback to hide loader
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('page-loader');
    if (loader) loader.style.display = 'none';
  }, 1000);
});

// Service Worker Registration for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(reg => console.log('Service Worker registered!', reg))
      .catch(err => console.log('Service Worker registration failed:', err));
  });
}
