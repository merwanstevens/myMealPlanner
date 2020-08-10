console.log("js is connected");

/**/
/**/
/**/
/**/
/**/
/**/
/*a*/
/*b*/
/*c*/
/*d*/
/*e*/
/*f*/
/*g*/
/*h*/
/*i*/
/*j*/
/*k*/
/*l*/
/*m*/
/*n*/
/*o*/
/*p*/
/*q*/
/*r*/
/*s*/
/*t*/
function thumbNailBuilder(data){
	var url = data["meals"][i]["strMealThumb"];

	var youTube = data["meals"][i]["strYoutube"];

	var webSite = data["meals"][i]["strSource"];

	var title = data["meals"][i]["strMeal"];

	var imageParent = document.getElementById("result");
		imageParent.setAttribute("class", "row");

	var imgDiv = document.createElement("div");
		imgDiv.setAttribute("class", "col imgDiv");

	var nImgWrapper = document.createElement("div");
		nImgWrapper.style.width = "300px";
		nImgWrapper.setAttribute("class", "nImgWrapper");

	var nImg = document.createElement("img");
		nImg.src = url;
		nImg.style.width = "300px";

	var mealTitle = document.createElement("p");
		mealTitle.setAttribute("class", "mealTitle");
		mealTitle.innerHTML = title;

	var imgDivNavBar = document.createElement("div");
		imgDivNavBar.setAttribute("class", "imgDivNavBar");
		imgDivNavBar.style.width = "300px";

	var imgDivTtlBar = document.createElement("div");
		imgDivTtlBar.setAttribute("class", "imgDivTtlBar");
		imgDivTtlBar.style.width = "300px";

	var ytAnchor = document.createElement("a");
		ytAnchor.href = youTube;
		ytAnchor.setAttribute("target", "blank");

	var origenAnchor = document.createElement("a");
		origenAnchor.href = webSite;
		origenAnchor.setAttribute("target", "blank");

	var iconFilm = document.createElement("i");
		iconFilm.setAttribute("class", "fas fa-film icon");
		iconFilm.style.fontSize="24px";

	var iconOrigen = document.createElement("i");
		iconOrigen.setAttribute("class", "far fa-file-alt icon");
		iconOrigen.style.fontSize="24px";

		ytAnchor.appendChild(iconFilm);

		origenAnchor.appendChild(iconOrigen);

		imgDivTtlBar.appendChild(mealTitle);

		imgDivNavBar.appendChild(ytAnchor);

		imgDivNavBar.appendChild(origenAnchor); 

		nImgWrapper.appendChild(nImg);

		nImgWrapper.appendChild(imgDivTtlBar);

		nImgWrapper.appendChild(imgDivNavBar);

		imgDiv.appendChild(nImgWrapper);

		imageParent.appendChild(imgDiv);

}
/*u*/
/*v*/
/*w*/
/*x*/
/*y*/
/*z*/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/*Example of API output*/

/*
idMeal: "52977"
strArea: "Turkish"
strCategory: "Side"
strDrinkAlternate: null
strIngredient1: "Lentils"
strIngredient2: "Onion"
strIngredient3: "Carrots"
strIngredient4: "Tomato Puree"
strIngredient5: "Cumin"
strIngredient6: "Paprika"
strIngredient7: "Mint"
strIngredient8: "Thyme"
strIngredient9: "Black Pepper"
strIngredient10: "Red Pepper Flakes"
strIngredient11: "Vegetable Stock"
strIngredient12: "Water"
strIngredient13: "Sea Salt"
strIngredient14: ""
strIngredient15: ""
strIngredient16: ""
strIngredient17: ""
strIngredient18: ""
strIngredient19: ""
strIngredient20: ""
strInstructions: "Pick through your lentils for any foreign debris, rinse them 2 or 3 times, drain, and set aside.  Fair warning, this will probably turn your lentils into a solid block that you’ll have to break up later
↵In a large pot over medium-high heat, sauté the olive oil and the onion with a pinch of salt for about 3 minutes, then add the carrots and cook for another 3 minutes.
↵Add the tomato paste and stir it around for around 1 minute. Now add the cumin, paprika, mint, thyme, black pepper, and red pepper as quickly as you can and stir for 10 seconds to bloom the spices. Congratulate yourself on how amazing your house now smells.
↵Immediately add the lentils, water, broth, and salt. Bring the soup to a (gentle) boil.
↵After it has come to a boil, reduce heat to medium-low, cover the pot halfway, and cook for 15-20 minutes or until the lentils have fallen apart and the carrots are completely cooked.
↵After the soup has cooked and the lentils are tender, blend the soup either in a blender or simply use a hand blender to reach the consistency you desire. Taste for seasoning and add more salt if necessary.
↵Serve with crushed-up crackers, torn up bread, or something else to add some extra thickness.  You could also use a traditional thickener (like cornstarch or flour), but I prefer to add crackers for some texture and saltiness.  Makes great leftovers, stays good in the fridge for about a week."
strMeal: "Corba"
strMealThumb: "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg"
strMeasure1: "1 cup "
strMeasure2: "1 large"
strMeasure3: "1 large"
strMeasure4: "1 tbs"
strMeasure5: "2 tsp"
strMeasure6: "1 tsp "
strMeasure7: "1/2 tsp"
strMeasure8: "1/2 tsp"
strMeasure9: "1/4 tsp"
strMeasure10: "1/4 tsp"
strMeasure11: "4 cups "
strMeasure12: "1 cup "
strMeasure13: "Pinch"
strMeasure14: " "
strMeasure15: " "
strMeasure16: " "
strMeasure17: " "
strMeasure18: " "
strMeasure19: " "
strMeasure20: " "
strSource: "https://findingtimeforcooking.com/main-dishes/red-lentil-soup-corba/"
strTags: "Soup"
strYoutube: "https://www.youtube.com/watch?v=VVnZd8A84z4"
*/

