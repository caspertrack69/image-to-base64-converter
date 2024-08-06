// Function to handle file upload and conversion to Base64
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        // Validate file type
        if (!file.type.startsWith('image/')) {
            showCustomAlert('Please upload a valid image file only.');
            return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
            const base64String = e.target.result;
            // Update the image and textarea with the base64 result
            document.getElementById('converted-image').innerHTML = `<img src="${base64String}" alt="Converted Image">`;
            document.getElementById('base64-output').value = base64String;
        };
        reader.readAsDataURL(file);
    }
}

// Function to copy the Base64 link to clipboard
function copyLink() {
    const outputLink = document.getElementById('base64-output');
    outputLink.select();
    document.execCommand('copy');
    showCustomAlert('Link copied to clipboard!');
}

// Function to show a custom alert
function showCustomAlert(message) {
    const alertBox = document.createElement('div');
    alertBox.className = 'custom-alert';
    alertBox.innerHTML = `
        <div class="alert-content">
            <p>${message}</p>
            <button class="alert-close-btn" onclick="closeCustomAlert()">OK</button>
        </div>
    `;
    document.body.appendChild(alertBox);
    alertBox.style.display = 'block';
}

// Function to close the custom alert
function closeCustomAlert() {
    const alertBox = document.querySelector('.custom-alert');
    if (alertBox) {
        alertBox.style.display = 'none';
        document.body.removeChild(alertBox);
    }
}
