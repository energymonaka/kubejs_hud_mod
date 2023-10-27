onEvent("player.logged_in", (event) => {
  event.player.paint({
    coordinates: {
      type: "text",
      text: "now loading...",
      scale: 1.2,
      alignX: "right",
      alignY: "bottom",
      draw: "ingame",
      color: "#BCBCBC",
      shadow: true,
    },
  });
});
