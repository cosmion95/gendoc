function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    body.setAttribute('data-bs-theme', newTheme);

    fetch('/toggle_theme', {
        method: 'POST',
    });
}