fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((info) => {
      output = `
        <div class="bar ${info.day}" data-tooltip="R${info.amount}">
            <span class="day">${info.day}</span>
        </div>
        `;
      document.querySelector(".graphs").innerHTML += output;
    });
  });
