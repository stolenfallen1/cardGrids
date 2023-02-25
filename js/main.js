// Filter
document.addEventListener("DOMContentLoaded", function() {
    const filterItems = document.querySelectorAll(".filter-item");

    filterItems.forEach(item => {
        item.addEventListener("click", function() {
            const value = this.getAttribute("data-filter");
            const postBoxes = document.querySelectorAll(".post-box");

            postBoxes.forEach(postBox => {
                postBox.classList.add("hide");
                setTimeout(() => {
                    if (value === "all") {
                    postBox.style.display = "block";
                    } else if (!postBox.classList.contains(value)) {
                    postBox.style.display = "none";
                    } else {
                    postBox.style.display = "block";
                    }

                    setTimeout(() => {
                    postBox.classList.remove("hide");
                    }, 100);
                }, 1000);
            });
        });
    });
});


// Add :active to the buttons
const filterItems = document.querySelectorAll(".filter-item");

filterItems.forEach(item => {
    item.addEventListener("click", function() {
        this.classList.add("active-filter");

        const siblings = Array.from(this.parentElement.children).filter(
        child => child !== this
        );

        siblings.forEach(sibling => {
        sibling.classList.remove("active-filter");
        });
    });
});

// Header Scroll 
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.pageYOffset > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


