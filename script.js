 document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
});

function loadVisitorCount() {
    fetch("fetch_counter.php?nocache=" + new Date().getTime(), {
        cache: "no-store"   // cache disable
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("totalVisitors").innerText = data.total;
        document.getElementById("todayVisitors").innerText = data.today;
    })
    .catch(error => console.error("Error:", error));
}

loadVisitorCount();
setInterval(loadVisitorCount, 5000);