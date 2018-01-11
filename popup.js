function inputChange(e) {
  if(e.keyCode === 13){
    e.preventDefault();
    const busID = document.getElementById("busID").value;
    console.log(busID);
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `http://api.translink.ca/RTTIAPI/V1/stops/${busID}/estimates?apikey=GMPEN4nbnZxrUBYQYkVh&count=3&timeframe=60`
    fetch(proxyurl + url, {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(res => {
        const busTime = res[0].Schedules
        let times = busTime.map( bus => {
          return (`<li> ${bus.ExpectedLeaveTime} </li>`)
        }).join(' ')
        document.getElementById('busTimes').innerHTML = times
      });
  }
}
