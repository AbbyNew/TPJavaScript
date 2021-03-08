// Create your variables here
// ==========================================
let numberOfSeasons = 6;
let numberOfEpisodes = 12;
let episodeTime = 45;
let commercialTime = 5;
let totalVisulationTime = (episodeTime + commercialTime) * numberOfEpisodes * numberOfSeasons;

// ==========================================
// Contantes
const numberOfSecondsInAMinute = 60;
const numberOfMinutesInAnHour = 60;
const numberOfHoursInADay = 24;
const numberOfDaysInAWeek = 7;

let paragraph = document.querySelector('#info');
paragraph.innerText = `${numberOfSeasons} seasons, ${numberOfEpisodes} episodes per season, \n Total Time: ${totalVisulationTime} `;

const calculateButton = document.querySelector('#calculate-button');
//const weeks= document.querySelector('#weeks');
//const days= document.querySelector('#days');
//const hours= document.querySelector('#hours');
//const minutes= document.querySelector('#minutes');

// calculs
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
