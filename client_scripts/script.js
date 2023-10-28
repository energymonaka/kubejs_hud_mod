onEvent("player.logged_in", (event) => {
  event.player.paint({
    client_xyz: {
      type: "text",
      scale: 1.2,
      x: 0,
      alignX: "center",
      alignY: "bottom",
      draw: "ingame",
      color: "#BCBCBC",
      shadow: true,
    },
  });
});
onEvent("client.tick", (event) => {
  const xyz_text = `
  ${Math.round(event.player.x)}
  ${Math.round(event.player.y)}
  ${Math.round(event.player.z)}
   `;
  event.player.paint({
    client_xyz: {
      text: xyz_text,
      y: event.player.creativeMode ? -22 : -38,
    },
  });
});
