
export const FixDate = () => {
    const today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes();
  var zoneMin = today.getTimezoneOffset() % 60;
  var zoneHur = Math.round(today.getTimezoneOffset() / 60);
  var zone = "";
  if (zoneHur < 0) {
    zoneHur = zoneHur * -1;
    zoneMin = zoneMin * -1;
    zone = "-" + zoneHur + ":" + zoneMin + "GMT";
  }
  if (zoneHur > 0) zone = "+" + zoneHur + ":" + zoneMin + "  GMT";
  const returnvalue=date + "  " + time + "    " + zone;
  return returnvalue
    
}


