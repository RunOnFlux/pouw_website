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

function showFaq(number){
    if(number == 1){
        if(document.getElementById("faq1").classList.contains("show")){
            document.getElementById("faq1").classList.remove("show");
            document.getElementById("faq1").classList.add("hide");
            document.getElementById("faqbtn1").classList.add("openFaq");
            document.getElementById("faqbtn1").classList.remove("closeFaq");
        }else{
            document.getElementById("faq1").classList.add("show");
            document.getElementById("faq1").classList.remove("hide");
            document.getElementById("faqbtn1").classList.remove("openFaq");
            document.getElementById("faqbtn1").classList.add("closeFaq");
        }
    }else if(number == 2){
        if(document.getElementById("faq2").classList.contains("show")){
            document.getElementById("faq2").classList.remove("show");
            document.getElementById("faq2").classList.add("hide");
            document.getElementById("faqbtn2").classList.add("openFaq");
            document.getElementById("faqbtn2").classList.remove("closeFaq"); 
        }else{
            document.getElementById("faq2").classList.add("show");
            document.getElementById("faq2").classList.remove("hide");
            document.getElementById("faqbtn2").classList.remove("openFaq");
            document.getElementById("faqbtn2").classList.add("closeFaq");
        }
    }else if(number == 3){
        if(document.getElementById("faq3").classList.contains("show")){
            document.getElementById("faq3").classList.remove("show");
            document.getElementById("faq3").classList.add("hide");
            document.getElementById("faqbtn3").classList.add("openFaq");
            document.getElementById("faqbtn3").classList.remove("closeFaq");
        }else{
            document.getElementById("faq3").classList.add("show");
            document.getElementById("faq3").classList.remove("hide");
            document.getElementById("faqbtn3").classList.remove("openFaq");
            document.getElementById("faqbtn3").classList.add("closeFaq");
        }
    }else if(number == 4){
        if(document.getElementById("faq4").classList.contains("show")){
            document.getElementById("faq4").classList.remove("show");
            document.getElementById("faq4").classList.add("hide");
            document.getElementById("faqbtn4").classList.add("openFaq");
            document.getElementById("faqbtn4").classList.remove("closeFaq");
        }else{
            document.getElementById("faq4").classList.add("show");
            document.getElementById("faq4").classList.remove("hide");
            document.getElementById("faqbtn4").classList.remove("openFaq");
            document.getElementById("faqbtn4").classList.add("closeFaq");
        }
    }else if(number == 5){
        if(document.getElementById("faq5").classList.contains("show")){
            document.getElementById("faq5").classList.remove("show");
            document.getElementById("faq5").classList.add("hide");
            document.getElementById("faqbtn5").classList.add("openFaq");
            document.getElementById("faqbtn5").classList.remove("closeFaq");
        }else{
            document.getElementById("faq5").classList.add("show");
            document.getElementById("faq5").classList.remove("hide");
            document.getElementById("faqbtn5").classList.remove("openFaq");
            document.getElementById("faqbtn5").classList.add("closeFaq");
        }
    }
}


const api_url = "https://service.fluxcore.ai/api/getLeaderBoardStats";
 
async function getapi(url) {
   
    // Storing response
    const response = await fetch(url);
   
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    show(data);
}

getapi(api_url);

function show(data){
    let ram = document.getElementById("totalRam");
    ram.innerHTML = (Math.round(data.TotalRAM * 100 / 1000 ) / 100).toFixed(0) + " TB";
    let cores = document.getElementById("totalCores");
    cores.innerHTML = data.TotalCore;
    let benchmarks = document.getElementById("benchmarks");
    benchmarks.innerHTML = data.TotalBenchmark;
    let cpu = document.getElementById("cpu");
    cpu.innerHTML = data.TotalGPU;
    let storage = document.getElementById("storage");
    storage.innerHTML = (Math.round(data.TotalStorage * 100 / 1000 ) / 100).toFixed(0)+ " TB";
}

const api_url2 =  "https://service.fluxcore.ai/api/getLeaderBoard?limit=61&skip=0";
 
async function getapi2(url) {
    const response2 = await fetch(url);
    var data = await response2.json();
    console.log(data);
    show2(data);
}

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
    <td>${r.Computer.cpus[0].model} <br>
    <span class="span2">${r.Computer.cpus[0].num_cores} CORES</span>
    </td> 
    <td>${r.Computer.gpus[0].model}</td>
    <td>${Math.round(r.Computer.TotalMemory * 100 / 1024 ) / 100+ " GB"}</td>
    <td>${r.Computer.storages[0].manufacturer}</td>
    <td>${r.Score}</td></tr>`
    let numr = `${r.Rank}`;
    if(numr == 5){
      break;
    };

    }
    // Setting innerHTML as tab variable
    document.getElementById("daTable").innerHTML = tab;
}
