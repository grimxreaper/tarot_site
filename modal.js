const counselingBlock = document.querySelector(".service_block_counseling");
const coursesBlock = document.querySelector(".service_block.courses");
const tarotBlock = document.querySelector(".service_block.tarot");

if (counselingBlock) {
  counselingBlock.addEventListener("click", (e) => {
    // console.log(e)
    e.preventDefault();

    const modalToggle = e.target.closest(".cta_counseling");
    console.log(modalToggle);

    if (!modalToggle) return;
    //target parent and then the parent's sibling
    const modal = modalToggle.parentNode.nextElementSibling;
    const closeButton = modal.querySelector(".close_button");

    //opens modal and adds animation
    const modalOpen = _ => {
        modal.classList.add("is-open");
        modal.style.animation = 'modalIn 500ms forwards'
    }

    const modalClose = _ => {
        modal.classList.remove('is-open')
        modal.removeEventListener('animationend', modalClose)
    }
    //closes modal
    closeButton.addEventListener("click", _ => {
        modal.style.animation = 'modalOut 500ms forwards'
        // modal.classList.remove("is-open");
        modal.addEventListener('animationend', modalClose)
    });

    document.addEventListener('keydown', e => {
        console.log(e)
    })

    modalOpen()
  });
}

if (coursesBlock){
  coursesBlock.addEventListener("click", (e) => {

    e.preventDefault();

    console.log('here');

    const modalToggle = e.target.closest(".cta_courses");
    console.log(modalToggle);

    if (!modalToggle) return;
    //target parent and then the parent's sibling
    const modal = modalToggle.parentNode.nextElementSibling;
    const closeButton = modal.querySelector(".close_button");

    //opens modal and adds animation
    const modalOpen = _ => {
        modal.classList.add("is-open");
        modal.style.animation = 'modalIn 500ms forwards'
    }

    const modalClose = _ => {
        modal.classList.remove('is-open')
        modal.removeEventListener('animationend', modalClose)
    }
    //closes modal
    closeButton.addEventListener("click", _ => {
        modal.style.animation = 'modalOut 500ms forwards'
        // modal.classList.remove("is-open");
        modal.addEventListener('animationend', modalClose)
    });

    document.addEventListener('keydown', e => {
        console.log(e)
    })

    modalOpen()

  })
}

if (tarotBlock){
  tarotBlock.addEventListener("click", (e) => {
    e.preventDefault();

    console.log('here');

    const modalToggle = e.target.closest(".cta_tarot");
    console.log(modalToggle);

    if (!modalToggle) return;
    //target parent and then the parent's sibling
    const modal = modalToggle.parentNode.nextElementSibling;
    const closeButton = modal.querySelector(".close_button");

    //opens modal and adds animation
    const modalOpen = _ => {
        modal.classList.add("is-open");
        modal.style.animation = 'modalIn 500ms forwards'
    }

    const modalClose = _ => {
        modal.classList.remove('is-open')
        modal.removeEventListener('animationend', modalClose)
    }
    //closes modal
    closeButton.addEventListener("click", _ => {
        modal.style.animation = 'modalOut 500ms forwards'
        // modal.classList.remove("is-open");
        modal.addEventListener('animationend', modalClose)
    });

    document.addEventListener('keydown', e => {
        console.log(e)
    })

    modalOpen()

  })
}