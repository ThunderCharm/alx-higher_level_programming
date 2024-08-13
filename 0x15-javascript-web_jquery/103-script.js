$(document).ready(function() {
    function fetchTranslation() {
        const langCode = $("#language_code").val();
        const url = "https://www.fourtonfish.com/hellosalut/hello/?lang=" + langCode;

        $.get(url, function(data) {
            $("#hello").text(data.hello);
        });
    }

    // Fetch translation when the button is clicked
    $("#btn_translate").click(function() {
        fetchTranslation();
    });

    // Fetch translation when Enter key is pressed in the input field
    $("#language_code").keypress(function(event) {
        if (event.key === "Enter") {
            fetchTranslation();
        }
    });
});
