onEvent("client.tick", (event) => {
  let coordinates_y = event.player.creativeMode ? -22 : -38;
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
      y: coordinates_y,
      alignX: "center",
      alignY: "bottom",
      draw: "ingame",
      color: "#575757",
    },
  });
});
