onEvent("player.logged_in", (event) => {
  event.player.paint({
    coordinates: {
      type: "text",
      text: "now loading...",
      scale: 1.5,
      x: 0,
      y: 0,
      alignX: "right",
      alignY: "bottom",
      draw: "ingame",
    },
  });
});
