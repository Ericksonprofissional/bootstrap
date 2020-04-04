$('#navbarNav').on('show.bs.collapse', function () {
    $('.topCasaFina-banner').css('transform', 'translate(-50%, 6%)')
})

$('#navbarNav').on('hidden.bs.collapse', function () {
    $('.topCasaFina-banner').css('transform', 'translate(-50%, -50%)')
})