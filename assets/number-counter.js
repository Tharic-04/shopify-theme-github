// function numberCounter() {       
//         var dataId = $('.number-counter').attr('data-section-id');  
//         $('.inview-' + dataId + '-initialized').bind('inview', function(event, visible) {
//             if (visible) {
//                 //$(this).stop().animate({ opacity: 1 });

//                 $('.number-counter-value').each(function() {
//                     var $this = $(this),
//                         max_value = $this.attr('data-value');
//                     $({
//                         counter_value: $this.text()
//                     }).animate({
//                         counter_value: max_value
//                     }, {
//                         step: function step() {
//                             $this.text(Math.floor(this.counter_value));
//                         },
//                         duration: 1500,
//                         easing: 'swing',
//                         complete: function complete() {
//                             $this.text(this.counter_value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")); //For placing comma(,) after particular digit
//                         }
//                     });
//                 });
//             } else {
//                 //  $(this).stop().animate({ opacity: 0 });
//             }
//         });
//     }
//     $(document).ready(function(){
//     numberCounter();  
//     });

function numberCounter() {
    var dataId = $('.number-counter').attr('data-section-id');

    // Bind the inview event handler to the specific section
    $('.inview-' + dataId + '-initialized').bind('inview', function(event, visible) {
        if (visible) {
            // Loop through each visible counter value within the current section
            $(this).find('.number-counter-value').each(function() {
                var $this = $(this),
                    max_value = $this.attr('data-value');
                
                // Check if the counter value has already been animated
                if (!$this.hasClass('animated')) {
                    $this.addClass('animated'); // Mark as animated to prevent duplicate animation
                    
                    // Animate the counter value
                    $({
                        counter_value: 0 // Start from 0
                    }).animate({
                        counter_value: max_value
                    }, {
                        step: function step() {
                            $this.text(Math.floor(this.counter_value));
                        },
                        duration: 1500,
                        easing: 'swing',
                        complete: function complete() {
                            // Remove commas from the counter value
                            $this.text(this.counter_value.toString().replace(/\,/g, ''));
                        }
                    });
                }
            });
        } else {
            // Reset the counter values when they are not visible
            $(this).find('.number-counter-value').removeClass('animated').text('0');
        }
    });
}

$(document).ready(function(){
    numberCounter();  
});



