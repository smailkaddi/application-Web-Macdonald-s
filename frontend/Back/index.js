(function() {
    var $quiz = $(".quiz");

    init();

    function init() {
        bindEvents();
    }

    function removeActive() {
        $quiz.find(".quiz-slide").removeClass("active");
    }


    function gotoNextSlide(e) {
        var $trigger = $(e.currentTarget);
        var $slide = $trigger.closest('.quiz-slide');

        var $next = $slide.next('.quiz-slide');
        if ($next.length > 0) {
            // removeActive();
            $slide.addClass('quiz-slide-move-to-left');
            $next.addClass('active').addClass('quiz-slide-move-from-right')
        } else {

            var commandeType = document.querySelector('input[name="commandeType"]:checked').value;
            var paiementMethode = document.querySelector('input[name="paiementMethode"]:checked').value;

            console.log(commandeType, paiementMethode);

            window.location.href = `select.html?commandeType=${commandeType}&paiementMethode=${paiementMethode}`;


        }
    }

    function bindEvents() {
        $("[type='radio']").on('click', gotoNextSlide);
    }
})();