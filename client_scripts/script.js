onEvent("player.logged_in", (event) => {
  event.player.paint({
    client_xyz: {
      type: "text",
      scale: 1.2,
      x: 0,
      y: -38,
      alignX: "center",
      alignY: "bottom",
      draw: "ingame",
      color: "#BCBCBC",
      shadow: true,
    },
  });
});

onEvent("client.tick", (event) => {
  let player_coordinates = `
  ${Math.round(event.player.x)}
  ${Math.round(event.player.y)}
  ${Math.round(event.player.z)}
   `;

  event.player.paint({
    client_xyz: {
      text: player_coordinates,
      y: event.player.creativeMode ? -22 : -38,
    },
  });
});
