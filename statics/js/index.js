$(document).ready(function () {
  const countries = [
    { name: "Japan", flag: "https://flagcdn.com/w40/jp.png" },
    { name: "China", flag: "https://flagcdn.com/w40/cn.png" },
    { name: "South Korea", flag: "https://flagcdn.com/w40/kr.png" },
    { name: "Taiwan", flag: "https://flagcdn.com/w40/tw.png" },
    { name: "North Korea", flag: "https://flagcdn.com/w40/kp.png" },
    { name: "Mongolia", flag: "https://flagcdn.com/w40/mn.png" },
    { name: "Macau", flag: "https://flagcdn.com/w40/mo.png" },
    { name: "Hong Kong", flag: "https://flagcdn.com/w40/hk.png" },
  ];

  const heritages = [
    "Great Wall of China",
    "Mount Fuji",
    "Jeju Volcanic Island",
    "Historic Kyoto",
  ];

  const dishes = ["Sushi", "Kimchi", "Peking Duck", "Dimsum"];
  $("#countries").hover(
    function () {
      $(this)
        .addClass("flex-container")
        .html(
          countries
            .map(
              (c) =>
                `<p><img src="${c.flag}" alt="${c.name} Flag" style="width:20px; height:auto; margin-right:10px;"> ${c.name}</p>`
            )
            .join("")
        );
    },
    function () {
      $(this).removeClass("flex-container").html("<h2>8</h2><p>Countries</p>");
    }
  );

  $("#heritages").hover(
    function () {
      $(this).html(heritages.map((h) => `<p>${h}</p>`).join(""));
    },
    function () {
      $(this).html("<h2>99+</h2><p>UNESCO World Heritage Sites</p>");
    }
  );

  $("#dishes").hover(
    function () {
      $(this).html(dishes.map((d) => `<p>${d}</p>`).join(""));
    },
    function () {
      $(this).html("<h2>50+</h2><p>Globally Famous Dishes</p>");
    }
  );

  $("#japan-card").hover(
    function () {
      $(this).html(`
        <a href="japan.html" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-decoration: none; height: 100%; color: inherit; position: relative;">
          <img src="https://flagcdn.com/w40/jp.png" alt="Japan Flag" style="width:5rem; height:auto; margin-bottom:10px;">
          <span style="position: absolute; right: 15px; font-size: 1rem;">
            <i class="arrow-icon" style="border: solid #000; border-width: 0 5px 5px 0; display: inline-block; padding: 8px; transform: rotate(-45deg); -webkit-transform: rotate(-45deg);"></i>
          </span>
        </a>
      `);
    },
    function () {
      $(this).html("<h2>Japan</h2>");
    }
  );
  $("#china-card").hover(
    function () {
      $(this).html(`
        <a href="china.html" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-decoration: none; height: 100%; color: inherit; position: relative;">
          <img src="https://flagcdn.com/w40/cn.png" alt="China Flag" style="width:5rem; height:auto; margin-bottom:10px;">
          <span style="position: absolute; right: 15px; font-size: 1rem;">
            <i class="arrow-icon" style="border: solid #000; border-width: 0 5px 5px 0; display: inline-block; padding: 8px; transform: rotate(-45deg); -webkit-transform: rotate(-45deg);"></i>
          </span>
        </a>
      `);
    },
    function () {
      $(this).html("<h2>China</h2>");
    }
  );
  $("#sk-card").hover(
    function () {
      $(this).html(`
        <a href="sk.html" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-decoration: none; height: 100%; color: inherit; position: relative;">
          <img src="https://flagcdn.com/w40/kr.png" alt="South korea Flag" style="width:5rem; height:auto; margin-bottom:10px;">
          <span style="position: absolute; right: 15px; font-size: 1rem;">
            <i class="arrow-icon" style="border: solid #000; border-width: 0 5px 5px 0; display: inline-block; padding: 8px; transform: rotate(-45deg); -webkit-transform: rotate(-45deg);"></i>
          </span>
        </a>
      `);
    },
    function () {
      $(this).html("<h2>South Korea</h2>");
    }
  );
});
