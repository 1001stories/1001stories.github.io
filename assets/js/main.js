document.getElementById("devi").addEventListener("mouseover", function () {
	event.preventDefault()
	document.getElementById("bio").innerHTML = "<a href='https://devi-lockwood.com/'>Devi Lockwood</a> is a multimedia journalist and current student in the Graduate Program in Science Writing at MIT. For four years before MIT, she traveled the world to document 1,001 voices on water and climate change. You can read her writing in The Washington Post, The New York Times, The Guardian, Slate, Bicycling Magazine, Yale Climate Connections, and elsewhere. In 2014, Devi graduated Phi Beta Kappa, summa cum laude from Harvard University, where she studied folklore and mythology. After MIT, Devi is starting a one-year fellowship at the New York Times Opinion desk.";
	document.getElementById("headshot").src = "assets/img/team-devi-feature.jpeg";
	document.getElementById("name").innerHTML = "Devi Lockwood";
})

document.getElementById("anna").addEventListener("mouseover", function () {
	event.preventDefault()
	document.getElementById("bio").innerHTML = "<a href='http://annawchung.com/' target='_blank'>Anna Woorim Chung</a> is a digital media researcher and designer at the <a href='https://civic.mit.edu/'>MIT Center for Civic Media</a>. Her current research explores social media, algorithmic curation, and ethical design. Prior to MIT, she studied media studies and and computer science at Pomona College. Her other interests include cooking, skateboarding, napping, and making maps.";
	document.getElementById("headshot").src = "assets/img/team-anna-feature1.jpg";
	document.getElementById("name").innerHTML = "Anna Chung";
})

document.getElementById("samia").addEventListener("mouseover", function () {
	event.preventDefault()
	document.getElementById("bio").innerHTML = "<a href='samiabouzid.com'>Samia Bouzid</a> is a multimedia storyteller who tells stories about science and the places it intersects with people’s lives. She has written scripts and edited videos for the NOVA | PBS YouTube channel “What the Physics?!” and written for the digital magazine “NOVA Next.” She currently works as a researcher at the Richard Lewis Media Group, which develops media for museums. She received her M.A. from the CUNY Graduate School of Journalism. She is currently based in Boston.";
	document.getElementById("headshot").src = "assets/img/team-samia-feature.jpg";
	document.getElementById("name").innerHTML = "Samia Bouzid";
})

document.getElementById("jeff").addEventListener("mouseover", function () {
	event.preventDefault()
	document.getElementById("bio").innerHTML = "<a href='http://www.jeff-del.com/'>Jeff DelViscio</a> is the former director of multimedia and creative at STAT, where he oversaw all interactive journalism and launched and top edited two podcasts. He previously spent over eight years at The New York Times where, among other accomplishments, he brought audio into Times storytelling during the audio slide show craze of the mid-2000s. He also worked on several podcasts before it became cool (again). He holds dual master’s degrees from Columbia in journalism and in earth and environmental sciences. He has worked aboard oceanographic research vessels and tracked money and politics in science from Washington, D.C. He is a Knight Science Journalism Fellow at MIT this year.";
	document.getElementById("headshot").src = "assets/img/team-jeff-feature1.jpg";
	document.getElementById("name").innerHTML = "Jeff Delviscio";
})
