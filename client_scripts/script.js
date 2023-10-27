onEvent("client.tick", (event) => {
  event.player.paint({
    coordinates: {
      type: "text",
      text: `now coordinates: ${String(Math.floor(event.player.x))}`,
      scale: 1,
      x: -4,
      y: -4,
      alignX: "right",
      alignY: "bottom",
      draw: "ingame",
    },
  });
});
