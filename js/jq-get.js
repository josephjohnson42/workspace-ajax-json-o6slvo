var keys = '<p id="keys">Answer</p>';
$('#content').append(keys);

var remoteaddr =
  'https://us-central1-airesponse-1308f.cloudfunctions.net/addMessage';

$('#clickcheck').click(function () {
  // get the file and append the data
  var requestData = 'message=' + $('#mesg').val();
  console.log('Message is ' + requestData);

  $.get(remoteaddr, requestData)
    .done(function (data) {
      // How to display the data?
      console.log(data);
    })
    .fail(function () {
      alert('get request failed'); //data will still be saved
    });
});
