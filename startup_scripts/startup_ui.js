onEvent("player.logged_in", (event) => {
  event.player.paint({
    client_xyz: {
      type: "text",
      text: "none",
      scale: 1.2,
      x: 0,
      y: -38,
      alignX: "center",
      alignY: "bottom",
      draw: "ingame",
      color: "#CCCCCC",
      shadow: true,
    },
  });
});
