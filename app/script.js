document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('file_input');
    const imageName = document.getElementById('image_name');

    fileInput.addEventListener('change', function (event) {
        const files = event.target.files;
        if (files.length > 0) {
            imageName.textContent = files[0].name;
        } else {
            imageName.textContent = ''; // Clear the name if no file is selected
        }
    });

    document.querySelector("#predict_button").addEventListener("click", async  function () {
        const formData = new FormData();
        formData.append('file', fileInput.files[0]);
        const response = await fetch('http://127.0.0.1:8000/predict/', {
            method: 'POST',
            body: formData
        });
        const data = await response.json();

        document.getElementById("form").style.display = "none";
        document.getElementById("result").style.display = "flex";

        console.log(data.prediction);

        document.querySelector("#prediction").innerHTML = data.prediction;

    });

    document.querySelector("#closeBtn").addEventListener('click', function () {
        document.getElementById("form").style.display = "flex";
        document.getElementById("result").style.display = "none";
    });


});
