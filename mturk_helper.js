function turkSetHitID( form_name, button_name ) {
  if (form_name == null) {
    form_name = "mturk_form";
  }
  hitID = turkGetParam('hitId', "");
  document.getElementById('hitId').value = hitID;
}

function turkSetWorkerID( form_name, button_name ) {
  if (form_name == null) {
    form_name = "mturk_form";
  }

  workerID = turkGetParam('workerId', "");
  document.getElementById('workerId').value = workerID;
} 