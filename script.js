function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "myNav") {
      x.className += " responsive";
    } else {
      x.className = "myNav";
    }
  }

function dropdownFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


// api url
const api_url = 
      "https://pouwdev.runonflux.io/api/getLeaderBoardStats";
 
// Defining async function
async function getapi(url) {
   
    // Storing response
    const response = await fetch(url);
   
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    show(data);
}
// Calling that async function
getapi(api_url);

function show(data){
  let ram = document.getElementById("totalRam");
  ram.innerHTML = data.TotalRAM + " TB";
  let cores = document.getElementById("totalCores");
  cores.innerHTML = data.TotalCore;
  let benchmarks = document.getElementById("benchmarks");
  benchmarks.innerHTML = data.TotalBenchmark;
  let workers = document.getElementById("workers");
  workers.innerHTML = data.TotalMachine;
}

// api url
const api_url2 = 
      "https://pouwdev.runonflux.io/api/getLeaderBoard";
 
// Defining async function
async function getapi2(url) {
   
    // Storing response
    const response2 = await fetch(url);
   
    // Storing data in form of JSON
    var data = await response2.json();
    console.log(data);
    show2(data);
}
// Calling that async function
getapi2(api_url2);

function show2(data) {
    let tab = 
        `<tr>
        <th class="roundtbl">Rank</th>
        <th>Provider <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                viewBox="0 0 17 17" fill="none">
                <path
                    d="M7.95616 11.3094C8.15412 11.5237 8.49275 11.5237 8.69071 11.3094L11.7051 8.04631C12.0009 7.72607 11.7738 7.20703 11.3378 7.20703L5.30908 7.20703C4.87312 7.20703 4.64598 7.72607 4.94181 8.04631L7.95616 11.3094Z"
                    fill="white" />
            </svg></th>
        <th>Motherboard</th>
        <th>
            CPU<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"
                fill="none">
                <path
                    d="M8.55968 11.3094C8.75764 11.5237 9.09627 11.5237 9.29423 11.3094L12.3086 8.04631C12.6044 7.72607 12.3773 7.20703 11.9413 7.20703L5.9126 7.20703C5.47663 7.20703 5.2495 7.72607 5.54532 8.04631L8.55968 11.3094Z"
                    fill="white" />
            </svg>
        </th>
        <th>GPU <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"
                fill="none">
                <path
                    d="M8.55968 11.3094C8.75764 11.5237 9.09627 11.5237 9.29423 11.3094L12.3086 8.04631C12.6044 7.72607 12.3773 7.20703 11.9413 7.20703L5.9126 7.20703C5.47663 7.20703 5.2495 7.72607 5.54532 8.04631L8.55968 11.3094Z"
                    fill="white" />
            </svg></th>
        <th>Memory <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                viewBox="0 0 17 17" fill="none">
                <path
                    d="M8.55968 11.3094C8.75764 11.5237 9.09627 11.5237 9.29423 11.3094L12.3086 8.04631C12.6044 7.72607 12.3773 7.20703 11.9413 7.20703L5.9126 7.20703C5.47663 7.20703 5.2495 7.72607 5.54532 8.04631L8.55968 11.3094Z"
                    fill="white" />
            </svg></th>
        <th>
            Disk <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"
                fill="none">
                <path
                    d="M8.55968 11.3094C8.75764 11.5237 9.09627 11.5237 9.29423 11.3094L12.3086 8.04631C12.6044 7.72607 12.3773 7.20703 11.9413 7.20703L5.9126 7.20703C5.47663 7.20703 5.2495 7.72607 5.54532 8.04631L8.55968 11.3094Z"
                    fill="white" />
            </svg>
        </th>
        <th class="roundtbr">Score <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                viewBox="0 0 17 17" fill="none">
                <path
                    d="M8.55968 11.3094C8.75764 11.5237 9.09627 11.5237 9.29423 11.3094L12.3086 8.04631C12.6044 7.72607 12.3773 7.20703 11.9413 7.20703L5.9126 7.20703C5.47663 7.20703 5.2495 7.72607 5.54532 8.04631L8.55968 11.3094Z"
                    fill="white" />
            </svg></th>
         </tr>`;

    // Loop to access all rows 
    for (let r of data) {
        tab += `<tr> 
    <td>${r.Rank} </td>
    <td>${r.Computer.Name}</td>
    <td>${r.Computer.motherboard.model}</td> 
    <td>${r.Computer.cpus.model} <br>
    <span class="span2">${r.Computer.cpus.num_cores} CORES</span>
    </td> 
    <td>${r.Computer.cpus.model}</td>
    <td>${r.Computer.TotalMemory}</td>
    <td>?</td>
    <td>${r.Score}</td></tr>`
    let numr = `${r.Rank}`;
    if(numr == 5){
      break;
    };

    }
    // Setting innerHTML as tab variable
    document.getElementById("daTable").innerHTML = tab;
}

