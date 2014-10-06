function welcome() {
  var miniMessage = new gadgets.MiniMessage();
  miniMessage.createStaticMessage("Welcome to the OpenSocial widget!");
  miniMessage.createStaticMessage("Check developer tools 'sources' tab to see all resources that a gadget is using, including HTML, CSS, and JavaScript.");
  miniMessage.createStaticMessage("This message was generated with 'miniMessage' feature.");
}

gadgets.util.registerOnLoadHandler(welcome);