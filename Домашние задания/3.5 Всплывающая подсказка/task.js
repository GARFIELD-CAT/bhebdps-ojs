document.querySelectorAll(".has-tooltip").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    let currentLink = event.target;
    let currentTooltip = this.nextElementSibling;
    let coordinates = currentLink.getBoundingClientRect();

    if (!currentTooltip || !currentTooltip.classList.contains("tooltip")) {
      let tooltipDiv = document.createElement("div");
      tooltipDiv.className = "tooltip";
      tooltipDiv.innerHTML = currentLink.title;
      tooltipDiv.style.left = `${coordinates.left}px`;
      tooltipDiv.style.top = `${coordinates.top + 20}px`;
      link.after(tooltipDiv);
      currentTooltip = tooltipDiv;
    } else {
      currentTooltip.style.left = `${coordinates.left}px`;
      currentTooltip.style.top = `${coordinates.top + 20}px`;
    }

    document.querySelectorAll(".tooltip_active").forEach((activeTooltip) => {
      if (activeTooltip !== currentTooltip) {
        activeTooltip.classList.remove("tooltip_active");
      }
    });

    currentTooltip.classList.toggle("tooltip_active");
  });
});
