<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <!-- This should be essentially be a no-opt in the popup -->
    <meta http-equiv="refresh" content="86400" />
    <title>Snowflake</title>
    <link rel="icon" id="icon" href="assets/toolbar-off.ico" />
    <link rel="stylesheet" href="embed.css" />
    <script src="popup.js"></script>
    <script src="embed.js"></script>
    <meta name="version" content="0.5.4" />
  </head>
  <body>
    <div id="active">
      <div id="statusimg"></div>
      <p id="statustext">__MSG_popupStatusOff__</p>
      <p id="statusdesc"></p>
      <button type="button" id="retry">__MSG_popupRetry__</button>
    </div>
    <div class="b button">
      <label id="toggle" for="enabled">__MSG_popupEnabled__</label>
      <label class="switch">
        <input id="enabled" type="checkbox" />
        <span class="slider round"></span>
      </label>
    </div>
    <div class="b learn">
      <a target="_blank" href="https://snowflake.torproject.org/">__MSG_popupLearnMore__</a>
    </div>
  </body>
</html>
