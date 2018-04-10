
$(document).ready(function() {

	/**
	 * Learn more button scroll
	 */
	
	$('.oa-learn-more-button').on('click', function() {
		var learnMoreOffset = $('.oa-learn-more-content').offset().top;

    $('html, body').animate({
    	scrollTop: learnMoreOffset
    }, 600);
	});


	/**
	 * Mailing list form submission
	 */

	var emailPattern = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);
	var $content = $('.oa-mailing-list-content');
	var $error = $content.children('.error');

	$('.oa-mailing-list-form').on('submit', function(e) {
		e.preventDefault();

		$error.text('');

		var value = $(e.target).find('input').val();
		var validEmail = emailPattern.test(value);

		if (!validEmail) {
			$error.text('Please enter a valid email');
			return;
		}

		$.ajax({
		  type: 'POST',
		  url: 'http://localhost:3000/subscribe',
		  data: {
		     email: value
		  },
		  success: function(data) {
		  	$content.html('<p>'+data+'</p>')
		  },
		  error: function(xhr, textStatus, error) {
		  	$error.text(xhr.responseText); 
		  }
		});
	});
});