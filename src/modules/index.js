function loadPage(page_path) {
    $("#main-content").html('');
    $("#main-content").load(page_path);
}

$(document).ready(() => {
    loadPage("training/training.html")
});
