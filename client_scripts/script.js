onEvent("client.tick", (event) => {
  event.player.paint({
    coordinates: {
      type: "text",
      text: `
			${String(Math.round(event.player.x))} 
			${String(Math.round(event.player.y))} 
			${String(Math.round(event.player.z))}
			`,
      scale: 1.2,
      x: 0,
      y: event.player.creativeMode ? -22 : -38,
      alignX: "center",
      alignY: "bottom",
      draw: "ingame",
      color: "#BCBCBC",
      shadow: true,
    },
  });
});
