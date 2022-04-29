const counselingBlock = document.querySelector('.service_block_counseling');

if (counselingBlock) {
    counselingBlock.addEventListener('click', e => {
        // console.log(e)
        e.preventDefault()

        const modalToggle = e.target.closest('.cta_counseling')
        console.log(modalToggle)

        if (!modalToggle) return
//target parent and then the parent's sibling
        const modal = modalToggle.parentNode.nextElementSibling

        modal.classList.add('is-open')

    })
}

