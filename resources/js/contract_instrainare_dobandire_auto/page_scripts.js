$(document).ready(function () {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })

    $('.carousel').carousel({
        touch: false
    });

    // navigate to carousel page found in this session
    var myCarousel = new bootstrap.Carousel(document.getElementById('main-carousel'));
    var lastSeenIndex = sessionStorage.getItem('carouselPageIndex');
    if (lastSeenIndex !== null) {
        myCarousel.to(parseInt(lastSeenIndex, 10));
        $('html, body').animate({ scrollTop: 0 });
    }

    if (document.getElementById('seller-different-fiscal-address-checkbox').checked) {
        document.getElementById('seller-different-fiscal-address-card').classList.remove('d-none');
    }
    if (document.getElementById('buyer-different-fiscal-address-checkbox').checked) {
        document.getElementById('buyer-different-fiscal-address-card').classList.remove('d-none');
    }

    $('#main-carousel').carousel('pause');

    $('.carousel-button').click(function () {
        $('html, body').animate({ scrollTop: 0 });
    });

    // set labels for seller on page load
    setSellerLabels();

    // set label for seller on seller type change
    $('#seller-type').change(function () {
        setSellerLabels();
    });

    // set labels for buyer
    setBuyerLabels();

    // set label for buyer on buyer type change
    $('#buyer-type').change(function () {
        setBuyerLabels();
    });

    document.getElementById('seller-different-fiscal-address-checkbox').addEventListener('change', function () {
        var card = document.getElementById('seller-different-fiscal-address-card');
        card.classList.toggle('d-none', !this.checked);
    });

    document.getElementById('buyer-different-fiscal-address-checkbox').addEventListener('change', function () {
        var card = document.getElementById('buyer-different-fiscal-address-card');
        card.classList.toggle('d-none', !this.checked);
    });
});

function setSellerLabels() {
    var sellerType = $('#seller-type').val();
    if (sellerType === 'PF') {
        $("#seller-individual-name-label").text("Nume complet");
        $("#seller-address-type-header").text("Domiciliu");
        $("#seller-address-type-info-div").prop('hidden', false);

        $("#seller-individual-name-info-pf").prop('hidden', false);
        $("#seller-individual-name-info-pj").prop('hidden', true);

        $("#seller-identity-info-div").prop('hidden', false);
        $("#seller-individual-id-series-div").prop('hidden', false);
        $("#seller-individual-id-nr-div").prop('hidden', false);
        $("#seller-individual-cnp-label").text("CNP");

        $("#seller-different-fiscal-address-pf-info-div").prop('hidden', false);
    } else {
        $("#seller-individual-name-label").text("Societate");
        $("#seller-address-type-header").text("Adresă sediu");

        $("#seller-address-type-info-div").prop('hidden', true);

        $("#seller-individual-name-info-pf").prop('hidden', true);
        $("#seller-individual-name-info-pj").prop('hidden', false);

        $("#seller-identity-info-div").prop('hidden', true);
        $("#seller-individual-id-series-div").prop('hidden', true);
        $("#seller-individual-id-nr-div").prop('hidden', true);
        $("#seller-individual-cnp-label").text("CIF");

        $("#seller-different-fiscal-address-pf-info-div").prop('hidden', true);
    }
}

function setBuyerLabels() {
    var buyerType = $('#buyer-type').val();
    if (buyerType === 'PF') {
        $("#buyer-individual-name-label").text("Nume complet");
        $("#buyer-address-type-header").text("Domiciliu");
        $("#buyer-address-type-info-div").prop('hidden', false);

        $("#buyer-individual-name-info-pf").prop('hidden', false);
        $("#buyer-individual-name-info-pj").prop('hidden', true);

        $("#buyer-identity-info-div").prop('hidden', false);
        $("#buyer-individual-id-series-div").prop('hidden', false);
        $("#buyer-individual-id-nr-div").prop('hidden', false);
        $("#buyer-individual-cnp-label").text("CNP");

        $("#buyer-different-fiscal-address-pf-info-div").prop('hidden', false);
    } else {
        $("#buyer-individual-name-label").text("Societate");
        $("#buyer-address-type-header").text("Adresă sediu");

        $("#buyer-address-type-info-div").prop('hidden', true);

        $("#buyer-individual-name-info-pf").prop('hidden', true);
        $("#buyer-individual-name-info-pj").prop('hidden', false);

        $("#buyer-identity-info-div").prop('hidden', true);
        $("#buyer-individual-id-series-div").prop('hidden', true);
        $("#buyer-individual-id-nr-div").prop('hidden', true);
        $("#buyer-individual-cnp-label").text("CIF");

        $("#buyer-different-fiscal-address-pf-info-div").prop('hidden', true);
    }
}

function setCarouselPageIndex(index) {
    sessionStorage.setItem('carouselPageIndex', index);
}
