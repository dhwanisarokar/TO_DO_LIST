console.log('Script is loaded.');

const d = new Date();
let text = d.toLocaleDateString('en-us', {weekday:"short", year:"numeric", month:"short", day:"numeric"})
document.getElementById("date").innerHTML = text;