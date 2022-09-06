<script>
// When the user scrolls the page, execute myFunction

window.onscroll = function() {headerPositionChange()};

function headerPositionChange() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var bgimageSize = document.querySelector("#masthead .kadence-sticky-header").style.backgroundSize;
    const bgimageWidthHeight = bgimageHeight.split(" ");
    var bgimageWidth = bgimageWidthHeight[0].substring(0, bgimageWidthHeight[0].length -2);
    var bgimageHeight = bgimageWidthHeight[1].substring(0, bgimageWidthHeight[1].length -2);
    var scrolled = ((winScroll / height) * 200) + 100;
    document.querySelector("#masthead .kadence-sticky-header").style.backgroundPosition = "50% " + scrolled + "%";
}
</script>