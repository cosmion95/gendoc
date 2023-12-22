async function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    body.setAttribute('data-bs-theme', newTheme);

    const url = 'http://127.0.0.1:3000/static/pdfs/contract_instrainare_dobandire_auto.pdf';
    const existingPdfBytes = await fetch(url);
}