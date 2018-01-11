function inputChange(e) {
  if(e.keyCode === 13){
    e.preventDefault();
    const busID = document.getElementById("busID").value;
    console.log(busID);
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `http://api.translink.ca/RTTIAPI/V1/stops/${busID}?apikey=GMPEN4nbnZxrUBYQYkVh`;
    fetch(proxyurl + url)
      .then(response => response.text())
      .then(contents => console.log(contents))
      .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  }
}
