// استهداف جميع أزرار التبويب
const buttonsControl = document.querySelectorAll(".li-choose");

// استدعاء الوظيفة showTab() عند النقر على أزرار التبويب
buttonsControl.forEach((button) => {
  button.addEventListener("click", () => {
    const btnControlId = button.getAttribute("data-choose");
    showDivContent(btnControlId);
  });
});

// عرض علامة التبويب المحددة وإخفاء الأخرى
function showDivContent(tabId) {
  const tabContents = document.querySelectorAll(".content");

  tabContents.forEach((content) => {
    if (content.id === tabId) {
      // content.style.display = "block";
      content.classList.add(`show-content`);
    } else {
      // content.style.display = "none";
      content.classList.remove(`show-content`);
    }
  });

  // إضافة/إزالة الصنف "active" لتحديد العلامة المحددة
  buttonsControl.forEach((button) => {
    if (button.getAttribute("data-choose") === tabId) {
      button.classList.add("active-control");
    } else {
      button.classList.remove("active-control");
    }
  });
}
