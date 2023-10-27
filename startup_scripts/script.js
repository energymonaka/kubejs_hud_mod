onEvent("block.registry", (event) => {
  event.create("yorha_block").material("metal").displayName("YoRHa");
});

onEvent("player.logged_in", (event) => {
  event.player.paint({
    coordinates: {
      type: "text",
      text: "now loading",
      scale: 1,
      x: -4,
      y: -4,
      alignX: "right",
      alignY: "bottom",
      draw: "ingame",
    },
  });
});
