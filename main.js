function startClassification()
{

    navigator.mediaDevices.getUserMedia({audio :true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', modelReady);
}

function gotResults(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      random_number_r = Math.floor(Math.random() * 255) + 1;
      random_number_g = Math.floor(Math.random() * 255) + 1;
      random_number_b = Math.floor(Math.random() * 255) + 1;
  
  
      document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
      document.getElementById("result_con").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat+ ' Detected lion - '+lion+ ' Detected cow - '+cow;
      
    
  
      if (results[0].label == "Barking") {
        img.src = 'bark.gif';
        dog = dog+1;
      }  if (results[0].label == "Meowing") {
        img.src = 'meow.gif';
        cat = cat + 1;
      }
      if (results[0].label == "roaring") {
        img.src = 'th.jpg';
        lion = lion+1;
      }  if (results[0].label == "Moowing") {
        img.src = 'th1.jpg';
        cow = cow + 1;
      }
}
}

  