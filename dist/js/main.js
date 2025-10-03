// Close all galleries
function closeAll() {
    document.querySelectorAll("[id^='gallery-']").forEach((el) => {
    el.classList.add("opacity-0", "scale-110", "pointer-events-none");
    });
    document.body.style.overflow = "auto"; // re-enable background scroll
}

// Open a specific gallery
function openGallery(id) {
    closeAll();
    const gallery = document.getElementById(`gallery-${id}`);
    gallery.classList.remove("opacity-0", "scale-110", "pointer-events-none");
    document.body.style.overflow = "hidden"; // lock background scroll
}
// Mobile menu toggle
const menuBtn = document.getElementById("mobile-menu-btn");
const menu = document.getElementById("mobile-menu");
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});