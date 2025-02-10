document.addEventListener("DOMContentLoaded", async function () {
    // Fetch and display GPU rental cards
    console.log("DOM fully loaded. Running scripts...");
    await loadGpuCards();
    await loadLeaderboardStats();
    await loadLeaderboard();
});

// --------------------------------------
// FETCH GPU RENTAL DATA AND DISPLAY CARDS
// --------------------------------------
async function loadGpuCards() {
    console.log("Fetching GPU data...");

    const gpuContainer = document.getElementById("gpuContainer");
    if (!gpuContainer) {
        console.error("Error: gpuContainer not found!");
        return;
    }

    try {
        // Fetch data from API
        const response = await fetch("https://service.fluxcore.ai/api/getGPUPrices");
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        const gpuData = await response.json();
        console.log("GPU data loaded:", gpuData);

        // Sort GPUs by number_of_gpus in descending order and take the top 4
        const topGpus = gpuData
            .sort((a, b) => b.number_of_gpus - a.number_of_gpus)
            .slice(0, 8);

        // Clear previous content (if any)
        gpuContainer.innerHTML = "";

        // Create and append GPU cards dynamically
        topGpus.forEach(gpu => {
            const card = document.createElement("div");
            card.classList.add("gpu-card", "gradientBorder");

            // Format median_price to two decimal places
            const formattedPrice = gpu.avg_price.toFixed(2);

            // Using median_price for pricing
            card.innerHTML = `
                <h2 class="sectionGPUTitleTextGrad">${gpu.short_name}</h2>
                <p>${gpu.number_of_gpus} Available<br>Starting at $${formattedPrice} / h</p>
        <a href="https://console.fluxedge.ai/" target="_blank" class="rent-btn gradientBorder">Rent Now</a>            `;

            gpuContainer.appendChild(card);
        });

        console.log("GPU cards appended to container.");
    } catch (error) {
        console.error("Failed to load GPU rental data:", error);
    }
}

// --------------------------------------
// FETCH AND DISPLAY LEADERBOARD STATS
// --------------------------------------
async function loadLeaderboardStats() {
    const apiUrl = "https://service.fluxcore.ai/api/getLeaderBoardStats";

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        
        const data = await response.json();
        console.log("Leaderboard Stats:", data);

        document.getElementById("totalRam").innerText = Math.floor(data.TotalRAM / 1000) + " TB";
        document.getElementById("totalCores").innerText = data.TotalCore;
        document.getElementById("benchmarks").innerText = data.TotalBenchmark;
        document.getElementById("cpu").innerText = data.TotalGPU;
        document.getElementById("storage").innerText = Math.floor(data.TotalStorage / 1000) + " TB";
    } catch (error) {
        console.error("Failed to load leaderboard stats:", error);
    }
}

// --------------------------------------
// FETCH AND DISPLAY LEADERBOARD TABLE
// --------------------------------------
async function loadLeaderboard() {
    const apiUrl = "https://service.fluxcore.ai/api/getLeaderBoard?limit=61&skip=0";

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        
        const data = await response.json();
        console.log("Leaderboard Data:", data);

        let tableContent = `
            <tr>
                <th class="roundtbl">Rank</th>
                <th>Provider</th>
                <th>Motherboard</th>
                <th>CPU</th>
                <th>GPU</th>
                <th>Memory</th>
                <th>Disk</th>
                <th class="roundtbr">Score</th>
            </tr>`;

        // Limit to 5 entries for performance
        data.slice(0, 5).forEach(r => {
            tableContent += `
                <tr>
                    <td>${r.Rank}</td>
                    <td>${r.Computer.Name}</td>
                    <td>${r.Computer.motherboard.model}</td>
                    <td>${r.Computer.cpus[0].model} (${r.Computer.cpus[0].num_cores} Cores)</td>
                    <td>${r.Computer.gpus[0].model}</td>
                    <td>${Math.floor(r.Computer.TotalMemory / 1024)} GB</td>
                    <td>${r.Computer.storages[0].model}</td>
                    <td>${Math.floor(r.Score)}</td>
                </tr>`;
        });

        document.getElementById("daTable").innerHTML = tableContent;
    } catch (error) {
        console.error("Failed to load leaderboard data:", error);
    }
}

// --------------------------------------
// NAVIGATION & FAQ FUNCTIONS (OPTIMIZED)
// --------------------------------------
function toggleClass(elementId, className) {
    document.getElementById(elementId)?.classList.toggle(className);
}

function myFunction() {
    toggleClass("myNav", "responsive");
}

function dropdownFunction() {
    toggleClass("myDropdown", "show");
}

function showFaq(number) {
    const faq = document.getElementById(`faq${number}`);
    const button = document.getElementById(`faqbtn${number}`);

    if (faq?.classList.contains("show")) {
        faq.classList.replace("show", "hide");
        button.classList.replace("closeFaq", "openFaq");
    } else {
        faq?.classList.replace("hide", "show");
        button.classList.replace("openFaq", "closeFaq");
    }
}
