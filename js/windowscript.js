document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.querySelector(".history__window-buttonbuy");
  const historyWindow = document.querySelector(".history__window");
  const mainContent = document.querySelector(".main-content");
  let isFixed = false;
  let newRowElement = null;

  submitButton.addEventListener("click", function () {
    if (!isFixed) {
      historyWindow.classList.add("fixed");
      const newRow = document.createElement("div");
      newRow.classList.add("history__window-row");
      newRow.innerHTML = `
                <div class="history__window-row__left">
                    <div class="history__window-main__img">
                        <img src="./img/detail/history_image3.png" alt="image" class="history__window-img">
                        <span class="history__window-checked"><img src="./img/icons/verification(blue).svg" alt="image"></span>
                    </div>
                    <div class="history__window-text">
                        <span class="history__window__text-name">Jennifer</span>
                        <span class="history__window__text-date">May 16, 2022 at 6:08</span>
                    </div>
                </div>
                <div class="history__window-row__right">
                    <div class="history__window-row__right-price">
                        <div class="history__window-row__right-item">
                            <img src="./img/icons/ETH.png" alt="image" class="history__window-row__right-ETH">
                            <span class="history__window-row__right-ETH__price">1.44</span>
                        </div>
                    </div>
                </div>
            `;

      const rows = historyWindow.querySelectorAll(".history__window-row");
      if (rows.length > 1) {
        rows[rows.length - 1].insertAdjacentElement("afterend", newRow);
      }

      newRowElement = newRow;
    } else {
      historyWindow.classList.remove("fixed");
      if (newRowElement) {
        newRowElement.remove();
        newRowElement = null;
      }
    }
    isFixed = !isFixed;
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.querySelector(".history__window-buttonbuy");
  const historyWindow = document.querySelector(".history__window");
  const overlay = document.querySelector(".overlay");
  let newRowElement = null;

  submitButton.addEventListener("click", function () {
    if (overlay.style.display === "none" || overlay.style.display === "") {
      overlay.style.display = "block"; 
    } else {
      overlay.style.display = "none"; 
    }
  });


  overlay.addEventListener("click", function () {
    overlay.style.display = "none";
  });
});
