function loadTemplate(templateName) {
    document.getElementById('preview').src = `templates/${templateName}`;
}

document.getElementById('downloadBtn').addEventListener('click', function () {
    let iframe = document.getElementById('preview');
    let src = iframe.src;

    fetch(src)
        .then(response => response.text())
        .then(data => {
            let blob = new Blob([data], { type: 'text/html' });
            let link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = "custom_page.html";
            link.click();
        });
});
