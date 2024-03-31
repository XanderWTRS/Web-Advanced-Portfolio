const gitHubPage = document.querySelectorAll('.GithubPage');

gitHubPage.forEach(link =>
{
    link.addEventListener('click', () =>
    {
        window.open('https://github.com/XanderWTRS');
    });
});