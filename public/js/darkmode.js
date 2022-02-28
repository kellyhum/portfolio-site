const toggle = () => {
    const current = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', current);

    const savedTheme = localStorage.getItem('theme')
    console.log(savedTheme)
}

export default toggle;