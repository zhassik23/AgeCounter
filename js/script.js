// variables
var birthdate = document.getElementById('birthdate');
var year = document.getElementById('ageYears');
var month = document.getElementById('ageMonths');
var day = document.getElementById('ageDays');
var hour = document.getElementById('ageHours');
var minute = document.getElementById('ageSeconds');
var second = document.getElementById('ageMiliSeconds');
var options = {
	year: 'numeric', 
	month: 'long', 
	day: 'numeric'
};

birthdate.addEventListener('change', function() {
	// Make two dates
	var birthday = new Date(this.value);
	var now = moment();

	// Calculate the difference in seconds
	var difference = now.diff(birthday);

	// Make duration object
	var duration = moment.duration(difference);

	// Now it is time to print values in boxes
	year.innerHTML = duration.years();
	month.innerHTML = duration.months();
	day.innerHTML = duration.days();
	hour.innerHTML = duration.hours();
	minute.innerHTML = duration.minutes();
	second.innerHTML = duration.seconds();
})