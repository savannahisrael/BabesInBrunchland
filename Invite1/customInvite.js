$("#floralInvite").show();
$("#eggInvite").hide();
$("#foodInvite").hide();
$("#bubblyInvite").hide();


$('body').on('focus', '[contenteditable]', function() {
    const $this = $(this);
    $this.data('before', $this.html());
}).on('blur keyup paste input', '[contenteditable]', function() {
    const $this = $(this);
    if ($this.data('before') !== $this.html()) {
        $this.data('before', $this.html());
        $this.trigger('change');

        var customText = document.getElementsByClassName("customText");
        var editedVersion = customText.innerHTML;

        localStorage.userEdits = editedVersion;
        console.log("Changes Saved!")
    }
});

$("#downloadButton").on("click", fucntion( {
    GrabzIt("ODNkNjJmNzIxYTgxNGY5MGI4OTc0MmMyMjc5YzIzNmQ=").ConvertURL("https://savannahisrael.github.io/Invite/customInvite.html",
{"target": "#floralInvite", "bheight": -1, "height": -1, "width": -1, "download": 1}).Create();
}))