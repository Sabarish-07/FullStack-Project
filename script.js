function shownav() {
    var sidenavbar = document.querySelector(".sidenavbar");
    if (sidenavbar) {
        sidenavbar.style.left = "0%";
    }
}

function closenav() {
    var sidenavbar = document.querySelector(".sidenavbar");
    if (sidenavbar) {
        sidenavbar.style.left = "-60%";
    }
}


document.addEventListener("DOMContentLoaded", function () {
    

    const ctx = document.getElementById('doughnut');
    if (ctx) {
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Skills', 'PIC', 'Academics', 'Rewards', 'T & P', 'R & D'],
                datasets: [{
                    label: 'No. of. Interns',
                    data: [40, 30, 20, 20, 15, 15],
                    borderWidth: 1
                }]
            },
        });
    }

    document.querySelectorAll(".user-result").forEach(function (element) {

        element.addEventListener("click", function () {
            window.location.href = 'user-view.html';
        });

    });


    document.querySelectorAll(".result").forEach(function (element) {

        element.addEventListener("click", function () {
            window.location.href = 'view.html';
        });

    });


    const searchName = document.getElementById("searchName");
    const searchID = document.getElementById("searchID");
    const searchTeam = document.getElementById("searchTeam");
    const searchGender = document.getElementById("searchGender");
    const searchStatus = document.getElementById("searchStatus");
    const searchData = document.getElementById("searchData");

    function filterResults() {
        if (!searchName || !searchID || !searchTeam || !searchGender || !searchStatus || !searchData) {
            return;
        }

        const nameFilter = searchName.value.toLowerCase();
        const idFilter = searchID.value.toLowerCase();
        const teamFilter = searchTeam.value;
        const genderFilter = searchGender.value;
        const statusFilter = searchStatus.value;

        const results = searchData.getElementsByClassName("result");

        for (let i = 0; i < results.length; i++) {
            const name = results[i].getElementsByTagName("p")[1]?.textContent.toLowerCase() || '';
            const id = results[i].getElementsByTagName("p")[0]?.textContent.toLowerCase() || '';
            const team = results[i].getElementsByTagName("p")[2]?.textContent || '';
            const gender = results[i].getElementsByTagName("p")[4]?.textContent || '';
            const status = results[i].getElementsByTagName("p")[5]?.textContent || '';

            if (
                (name.includes(nameFilter) || nameFilter === "") &&
                (id.includes(idFilter) || idFilter === "") &&
                (team === teamFilter || teamFilter === "") &&
                (gender === genderFilter || genderFilter === "") &&
                (status === statusFilter || statusFilter === "")
            ) {
                results[i].style.display = "";
            } else {
                results[i].style.display = "none";
            }
        }
    }

    if (searchName) searchName.addEventListener("input", filterResults);
    if (searchID) searchID.addEventListener("input", filterResults);
    if (searchTeam) searchTeam.addEventListener("change", filterResults);
    if (searchGender) searchGender.addEventListener("change", filterResults);
    if (searchStatus) searchStatus.addEventListener("change", filterResults);

    const photoInput = document.getElementById('photo');
    if (photoInput) {
        photoInput.addEventListener('change', function (event) {
            const photobox = document.getElementById('photobox');
            const file = event.target.files[0];

            if (file && photobox) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    photobox.innerHTML = `<img src="${e.target.result}" style="width:150px; height:150px; border-radius:8px">`;
                };
                reader.readAsDataURL(file);
            }
        });
    }


    var googleButton = document.getElementById("googleSignIn");

    if (googleButton) {
        googleButton.addEventListener("click", function () {
            window.location.href = "user-index.html"; 
        });
    }
    

});






