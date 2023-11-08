onEvent("client.tick", (event) => {
  event.player.paint({
    client_xyz: {
      text: `
  ${Math.round(event.player.x)}
  ${Math.round(event.player.y)}
  ${Math.round(event.player.z)}
   `,
      y: event.player.creativeMode ? -22 : -38,
    },
  });
});
