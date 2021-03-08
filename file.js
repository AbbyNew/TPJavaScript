// ==========================================
// Contantes
const numberOfSecondsInAMinute = 60;
const numberOfMinutesInAnHour = 60;
const numberOfHoursInADay = 24;
const numberOfDaysInAWeek = 7;

// Create your variables here
// ==========================================
let numberOfSeasons = 1;
let numberOfEpisodes = 0;
//let episodeTime = 45;
let commercialTime = 5;

// Création d'une classe episode
class Episode {
	constructor(numero, title, duration, hasBeenWatched) {
		this.numero=numero; 
		this.title= title;
		this.duration=duration;  
		this.hasBeenWatched=hasBeenWatched; 
	}
};

// ----------------------- instances de la classe episode ------------------------
let episode1=new Episode(1, "Kiki, un chien bien sympathique ", 50, false) ;
let episode2=new Episode(2, "Kiki est parti faire pipi", 45, false) ;
let episode3=new Episode(3, "Kiki fait caca maintenant", 55, false) ;

// ----------------------- tableau d'épisodes -------------------
let listOfEpisodes = [] ; 
listOfEpisodes.push(episode1, episode2, episode3) ;

// ======================================
//let totalVisulationTime = (episodeTime + commercialTime) * numberOfEpisodes * numberOfSeasons;
numberOfEpisodes= listOfEpisodes.length ;
let totalVisulationTime=0 ; 
for (let episode of listOfEpisodes ){
	totalVisulationTime+= (episode.duration + commercialTime) ; 
} 

let paragraph = document.querySelector('#info');
paragraph.innerText = `${numberOfSeasons} seasons, ${numberOfEpisodes} episodes per season, \n Total Time: ${totalVisulationTime} `;

//let infoEpisode = document.querySelector('#detailEpisodes');
//infoEpisode.innerText = `Episode ${listOfEpisodes[numeroEpisodeCourant].numEpisodeCourant} - ${listOfEpisodes[numeroEpisodeCourant].episodeTitle} 
//   , Duration: ${listOfEpisodes[numeroEpisodeCourant].episodeDuration}  ${listOfEpisodes[numeroEpisodeCourant].hasBeenWatched ? '' : '\n NEW !!!'}`;

const body = document.querySelector('body');

for (let episode of listOfEpisodes ){

	let newDiv = document.createElement('div');
	newDiv.classList.add('series-frame2');

	let newTitle = document.createElement('h2');
	newTitle.innerText = `${ episode.title }` ;   
	
	let newParagraph = document.createElement('p');
	newParagraph.innerText = `Episode Num. ${episode.numero}, Duree: ${episode.duration}, ${episode.hasBeenWatched? '' : '\n NEW !!!'} ` ; 
	
	newDiv.append(newTitle);
  	newDiv.append(newParagraph);
  	body.append(newDiv);

}

const calculateButton = document.querySelector('#calculate-button');
//const weeks= document.querySelector('#weeks');
//const days= document.querySelector('#days');
//const hours= document.querySelector('#hours');
//const minutes= document.querySelector('#minutes');

// calculs pour les dates 
calculateButton.addEventListener('click', function() {
	if (this.textContent == 'Format Time') {

		this.textContent = 'No format';

		let numberOfWeeks = 0;
		let numberOfDays = 0;
		let numberOfHours = 0;
		let numberOfMinutes = 0;

		numberOfMinutes = totalVisulationTime;

		numberOfHours = Math.floor(numberOfMinutes / 60);
		numberOfMinutes = numberOfMinutes - numberOfHours * 60;

		numberOfDays = Math.floor(numberOfHours / 24);
		numberOfHours = numberOfHours - numberOfDays * 24;

		numberOfWeeks = Math.floor(numberOfDays / 7);
		numberOfDays = numberOfDays - numberOfWeeks * 7;

		//weeks.innerText = `${numberOfWeeks} weeks`;
		//days.innerText = `${numberOfdays} days`;
		//hours.innerText = `${numberOfHours} hours`;
		//minutes.innerText = `${numberOfMinutes} minutes`;

		paragraph.innerText = `${numberOfSeasons} seasons, ${numberOfEpisodes} episodes per season, \n Total Time: ${numberOfWeeks} weeks ${numberOfDays} days ${numberOfHours} hours ${numberOfMinutes} minutes   `;
	}
    else{

        this.textContent = 'Format Time';
        paragraph.innerText = `${numberOfSeasons} seasons, ${numberOfEpisodes} episodes per season, \n Total Time: ${totalVisulationTime} `;

    }
});
