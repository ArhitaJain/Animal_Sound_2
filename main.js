function start()
{
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/B7ikdRcBy/model.json',modelReady())
}

function modelReady()
{
  classifier.classify(got_results);
}

function got_results(error, result)
{
  console.log("got_results()")
}