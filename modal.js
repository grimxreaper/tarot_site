const counselingBlock = document.querySelector(".service_block_counseling");

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
        modal.style.animation = 'modalFade 500ms forwards'
    }
    //closes modal
    closeButton.addEventListener("click", (_) => {
      modal.classList.remove("is-open");
    });

    modalOpen()
  });
}
