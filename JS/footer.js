function footerContent()
{
    const footer = document.getElementById('footer');
    footer.innerHTML = `<p>© <span id="links">Xander Wauters</span> 2024</p>`;

    const linkedInPage = document.getElementById('links');
    linkedInPage.addEventListener('click', () =>
    {
        window.open('https://www.linkedin.com/in/xander-wauters-046868253/');
    });
}
footerContent();