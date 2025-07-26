const openPopup = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");

openPopup.addEventListener("click", () => {
    document.querySelector('.modal').style.display = "flex";
});

closePopup.addEventListener("click", () => {
     document.querySelector('.modal').style.display = "none";
});