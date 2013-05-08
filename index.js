function string() {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLNMOPQRSTUVWXYZ";
  for (var i=0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
function number() {
  var text = "";
  var possible = "0123456789";
  for (var i=0; i < 2; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
function alphanumeric() {
  var text = "";
  var possible = "123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLNMOPQRSWXYZ";
  for (var i=0; i < 2; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
module.exports = {
  string: string,
  number: number,
  alphanumeric: alphanumeric
}