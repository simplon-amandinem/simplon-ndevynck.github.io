function envoyer() {
	var titre2 = document.getElementById("titre").value;
	var nom2 = document.getElementById("nom").value;
	var prenom2 = document.getElementById("prenom").value;
	var adresse2 = document.getElementById("adresse").value;
	var ville2 = document.getElementById("ville").value;
	var cp2 = document.getElementById("cp").value;
	var site2 = document.getElementById("site").value;
	var mail2 = document.getElementById("mail").value;
	var tel2 = document.getElementById("tel").value;
	var sujet2 = document.getElementById("sujet").value;
	var msg2 = document.getElementById("msg").value;
	alert("les donner que vous nous envoyez sont: "+titre2+", "+nom2+", "+prenom2+", "+adresse2+", "+ville2+", "+cp2+", "+site2+", "+mail2+", "+tel2+", "+sujet2+", "+msg2);
};
