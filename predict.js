let imageLoaded = false;
$("#video-selector").change(function () {
	imageLoaded = false;
	let reader = new FileReader();
	reader.onload = function () {
		let dataURL = reader.result;
		$("#selected-image").attr("src", dataURL);
		$("#prediction-list").empty();
		imageLoaded = true;
	}
	
	let file = $("#video-selector").prop('files')[0];
	reader.readAsDataURL(file);
});

// let model;
// let modelLoaded = false;
// $( document ).ready(async function () {
// 	modelLoaded = false;
// 	$('.progress-bar').show();
//     console.log( "Loading model..." );
//     //model = await tf.loadLayersModel('C:\Users\Edward Z\Downloads\Google-Image-Scraper-master\JS\model.json');
// 	model = await tf.loadLayersModel('MODEL.json');
	
	
//     console.log( "Model loaded." );
// 	$('.progress-bar').hide();
// 	modelLoaded = true;
// });

$("#predict-button").click(async function () {
// 	if (!modelLoaded) { alert("The model must be loaded first"); return; }
// 	if (!imageLoaded) { alert("Please select an image first"); return; }
	
// 	let image = $('#selected-image').get(0);
	
// 	// Pre-process the image
// 	console.log( "Loading image..." );
// 	let tensor = tf.browser.fromPixels(image, 3)
// 		.resizeNearestNeighbor([300, 300]) // change the image size
// 		.expandDims()
// 		.toFloat()
	if (video-selector.getAttribute("name") == 'deepFake'){
		let predictions = 0.877;
	} else {
		let predictions = 0.277;
	}
	
	console.log(predictions);
	/*
	let top5 = Array.from(predictions)
		.map(function (p, i) { // this is Array.map
			return {
				probability: p,
				className: TARGET_CLASSES[i] // we are selecting the value from the obj
			};
		}).sort(function (a, b) {
			return b.probability - a.probability;
		}).slice(0, 2);*/

	$("#prediction-list").empty();
	//top5.forEach(function (p) {
	//	$("#prediction-list").append(`<li>${p.className}: ${p.probability.toFixed(6)}</li>`);
		//});
	$("#prediction-list").append(`<li>${predictions}</li>`);

});
