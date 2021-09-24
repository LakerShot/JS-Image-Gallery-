document.addEventListener('DOMContentLoaded', (event) => {
    const slides = [...document.querySelectorAll('.gallery__element')]

    const clearActiveClasses = () => {
        slides.forEach(slide => slide.classList.remove('gallery__element-active'))
    }

    const handleClick = (e) => {
        const parantElement = e.target.parentElement
        const isSlide = parantElement.getAttribute('data-slide')
        if (isSlide) {
            clearActiveClasses()
            parantElement.classList.add('gallery__element-active')
        }
    }

    const slideContainer = document.getElementById('gallery')
    slideContainer.addEventListener('click', handleClick)

});
