document.addEventListener("DOMContentLoaded", () => {
  const individualDesks = 10;
  const teamDesks = 5;
  const desks = {
    individual: Array(individualDesks).fill(false),
    team: Array(teamDesks).fill(false),
  };

  const renderDesks = () => {
    const individualDeskContainer = document.getElementById("individual-desks");
    const teamDeskContainer = document.getElementById("team-desks");
    individualDeskContainer.innerHTML = "";
    teamDeskContainer.innerHTML = "";

    desks.individual.forEach((booked, index) => {
      const desk = document.createElement("div");
      desk.className = `desk ${booked ? "booked" : ""}`;
      desk.textContent = `Desk ${index + 1}`;
      individualDeskContainer.appendChild(desk);
    });

    desks.team.forEach((booked, index) => {
      const desk = document.createElement("div");
      desk.className = `desk ${booked ? "booked" : ""}`;
      desk.textContent = `Desk ${index + 1}`;
      teamDeskContainer.appendChild(desk);
    });
  };

  renderDesks();
});

// handle booking
document.addEventListener("DOMContentLoaded", () => {
  const individualDesks = 10;
  const teamDesks = 5;
  const desks = {
    individual: Array(individualDesks).fill(false),
    team: Array(teamDesks).fill(false),
  };

  const renderDesks = () => {
    const individualDeskContainer = document.getElementById("individual-desks");
    const teamDeskContainer = document.getElementById("team-desks");
    individualDeskContainer.innerHTML = "";
    teamDeskContainer.innerHTML = "";

    desks.individual.forEach((booked, index) => {
      const desk = document.createElement("div");
      desk.className = `desk ${booked ? "booked" : ""}`;
      desk.textContent = `Desk ${index + 1}`;
      individualDeskContainer.appendChild(desk);
    });

    desks.team.forEach((booked, index) => {
      const desk = document.createElement("div");
      desk.className = `desk ${booked ? "booked" : ""}`;
      desk.textContent = `Desk ${index + 1}`;
      teamDeskContainer.appendChild(desk);
    });
  };

  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const deskType = document.getElementById("desk-type").value;
    const membershipTier = document.getElementById("membership-tier").value;
    const hours = parseInt(document.getElementById("hours").value);

    let rate = 0;
    if (deskType === "individual") {
      if (membershipTier === "basic") rate = 10;
      else if (membershipTier === "premium") rate = 15;
      else if (membershipTier === "executive") rate = 20;
    } else if (deskType === "team") {
      rate = 25;
    }

    let totalCharge = rate * hours;
    if (hours > 3) {
      totalCharge *= 0.9; // Apply 10% discount
    }

    const availableDeskIndex = desks[deskType].indexOf(false);
    if (availableDeskIndex === -1) {
      alert("No desks available for the selected type.");
    } else {
      desks[deskType][availableDeskIndex] = true;
      renderDesks();

      document.getElementById(
        "total-charge"
      ).textContent = `Total Charge: $${totalCharge.toFixed(2)}`;
      const totalRevenueElement = document.getElementById("total-revenue");
      const totalRevenue = parseFloat(totalRevenueElement.textContent);
      totalRevenueElement.textContent = (totalRevenue + totalCharge).toFixed(2);
    }
  });

  renderDesks();
});