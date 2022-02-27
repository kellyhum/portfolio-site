const toggle = () => {
    const current = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', current);
}

export default toggle;