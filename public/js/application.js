$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them
  var jobId;
  $('#submit_tweet').on('submit', function(event){
      event.preventDefault();
      var data = $(this).serialize();

      $.post('/tweet', data, function(serverResponse){
        jobId = serverResponse;
        // window.location.href = '/status/' + jobId.job_id;

        $.get('/status/' + jobId.job_id, function(serverResponse) {
          if (serverResponse.job_status == true) {
            // Redirect after message is given
            alert('Successful');
            window.location.href = "/";
          }
          else {
            setTimeout('not quite', 1);
            window.location.href = "/status/" + job_id.job_id;
          }
        }, 'json');
      }, 'json');
  })
});

