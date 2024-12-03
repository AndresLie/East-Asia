$(document).ready(function () {
  const countries = [
    { name: "Japan", flag: "🇯🇵" },
    { name: "China", flag: "🇨🇳" },
    { name: "South Korea", flag: "🇰🇷" },
    { name: "Taiwan", flag: "🇹🇼" },
    { name: "North korea", flag: "🇹🇭" },
    { name: "Mongolia", flag: "🇻🇳" },
    { name: "Macau", flag: "🇮🇳" },
    { name: "Hong kong", flag: "🇮🇳" },
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
        .html(countries.map((c) => `<p>${c.flag} ${c.name}</p>`).join(""));
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
});
