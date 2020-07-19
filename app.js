$(() => {
    // General body style
    $("body").css({
        fontFamily: "arial",
        margin: 0,
        padding: 0,
    })

    // Header
    $(".header").css({
        padding: "10px",
        backgroundColor: "#e2e2e2"
    })

    // Paragraph
    $(".paragraph").css({
        padding: "10px",
        cursor: "pointer"
    })

    $(".paragraph").on("click", event => {
        const element = event.target;
        $(element).text($(element).text() + " Added with FakejQuery")
    })

    // Toggle div
    $(".toggle").css({
        display: "inline-block",
        transition: "all .1s ease",
        margin: "20px",
        padding: "20px",
        width: "150px",
        color: "white",
        backgroundColor: "rgb(100,50,255)"
    })

    $(".toggle").on("click", event => {
        const element = event.target;
        $(element).toggleClass("toggleClass")
    })

    // Source code link
    $("a").css("margin", "20px")
})