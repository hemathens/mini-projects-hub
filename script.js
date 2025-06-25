// Load last project on refresh
window.addEventListener('load', () => {
  const lastProject = localStorage.getItem('lastProject');
  const iframe = document.getElementById('projectFrame');
  if (lastProject) {
    iframe.src = lastProject;
  } else {
    iframe.src = 'home.html';
  }
});

// Project selection
document.querySelectorAll('#projectList a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const projectPath = this.getAttribute('data-page');
    document.getElementById('projectFrame').src = projectPath;
    localStorage.setItem('lastProject', projectPath);
  });
});

// Back to Home
document.getElementById('backHomeBtn').addEventListener('click', () => {
  const iframe = document.getElementById('projectFrame');
  iframe.src = 'home.html';
  localStorage.removeItem('lastProject');
});

// Search filter
document.getElementById('searchBar').addEventListener('input', function () {
  const filter = this.value.toLowerCase();
  document.querySelectorAll('#projectList a').forEach(link => {
    const text = link.textContent.toLowerCase();
    link.style.display = text.includes(filter) ? 'block' : 'none';
  });
});
