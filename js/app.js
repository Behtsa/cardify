// function loadPage() {
// 	var containerGallery = document.getElementById("gallery");
// 	var arrayOfImage = Array.from(containerGallery.getElementsByTagName("img"));
// 	console.log(arrayOfImage);
// 	var data = getData(arrayOfImage);
// 	removeGallery(containerGallery, arrayOfImage);
// 	createElementsGallery(data, containerGallery);
// }

// function getData(arrayOfImage) {
// 	var newData = arrayOfImage.map(function(item){
// 		var altImg = item.alt;
// 		var srcImg = item.src;
// 		var obj = {
// 			src : srcImg,
// 			alt : altImg
// 		}
// 		// console.log(obj);
// 		return obj;
// 	})
// 	//console.log(newData);
// 	return newData;
// }

// function removeGallery(containerGallery, arrayOfImage) {
// 	// containerGallery.innerHTML = " ";
// 	arrayOfImage.forEach(function(item){
// 		containerGallery.removeChild(item);
// 	})
// }

// function createElementsGallery(data, containerGallery) {
// 	console.log(data);
// 	data.forEach(function(item){
// 		var figure = document.createElement("figure");
// 		var img = document.createElement("img");
// 		var figcaption = document.createElement("figcaption");

// 		img.src = item.src;
// 		figcaption.innerText = item.alt;
// 		figure.appendChild(img);
// 		figure.appendChild(figcaption);
// 		containerGallery.appendChild(figure);
// 	})
// }



// loadPage();
 // ES6 ------------------------------------------ //

// ** usamos variables let cuando pasamos datos como parametro a otra funcion *** //
loadPage = () => {
	let containerGallery = document.getElementById("gallery");
	let arrayOfImage = Array.from(containerGallery.getElementsByTagName("img"));
	//console.log(arrayOfImage);
	let data = getData(arrayOfImage);
	removeGallery(containerGallery, arrayOfImage);
	createElementsGallery(data, containerGallery);
}

getData = arrayOfImage => {
		let newData = arrayOfImage.map( item => {
		let altImg = item.alt;
		let srcImg = item.src;
		const obj = {
			src : srcImg,
			alt : altImg
		}
		// console.log(obj);
		return obj;
	})
	//console.log(newData);
	return newData;
}

removeGallery = (containerGallery, arrayOfImage) => {
	// containerGallery.innerHTML = " ";
		arrayOfImage.forEach(item => {
		containerGallery.removeChild(item);
	})
}

// createElementsGallery = (data, containerGallery) => {
// 	console.log(data);
// 	data.forEach(item => {
// 		var figure = document.createElement("figure");
// 		var img = document.createElement("img");
// 		var figcaption = document.createElement("figcaption");

// 		img.src = item.src;
// 		figcaption.innerText = item.alt;
// 		figure.appendChild(img);
// 		figure.appendChild(figcaption);
// 		containerGallery.appendChild(figure);
// 	})
// }

// ******** template string **************** ///
createElementsGallery = (data, containerGallery) => {
	let output = ''; // se crea la variable vacia
	data.forEach(item => {
		output +=
		`<figure>
		 <img src= "${item.src}">
		 <figcaption>${item.alt}</figcaption>
	 	</figure>`
	 	containerGallery. innerHTML = output;
	})
	//console.log(output);
	//console.log(data);
	// containerGallery. innerHTML = output;
}



loadPage();