// Your job is to define the different objects and arrays, their structure, and the corresponding properties for each, to represent the following information about Elizabeth's campaign.

// Her congressional district (you can use yours here)
// Her platform statements for the following issues.
// Taxes
// Jobs
// Infrastructure
// Health care
// Crime and enforcement
// URL for donation form
// Calendar of events
// Volunteer information
// Name
// Address
// Email
// Phone number
// Availability
// What activities each one is willing to do (e.g. answering phone calls, taking polls, etc.)
// Biography
// Image gallery
// Head shot
// Picture of family
// Picture of constituents
// Mission statement
// URL for registering to vote

// After you have defined all the objects for representing the data about Elizabeth's campaign, write a corresponding function for each one whose purpose is to change the state of the object. Then use your functions to modify the existing data.

// Things to think about.

// Am I modifying an array? Then the function argument should be added to the target array with the push() method.
// Am I modifying an object? Then I should pass both the key name to be modified, and its corresponding value.
// This challenge is for you to practice writing functions, so the more you can write, the better. It helps make neural connections in your brain at this point since you're still building your software vocabulary.

// Example:

// function addToImageGallery (newImage) {
//     ...
// }

// function changeBiography (newBiography) {
//     ...
// }

// function changePlatform (topic, newPlatformStatement) {
//     ...
// }

const elizabethSanger = {};
elizabethSanger.district = "Distric 12";
elizabethSanger.platform = {};
elizabethSanger.platform.taxes = "lower them";
elizabethSanger.platform.jobs = "more of them";
elizabethSanger.platform.infrastructure = "better roads and bridges";
elizabethSanger.platform.healthcare = "make it affordable";
elizabethSanger.platform.crime = "eliminate it";
elizabethSanger.donation = "http://elizabethsanger.com/donate";
elizabethSanger.calender = [];
elizabethSanger.volunteer = {};
elizabethSanger.volunteer.name = "";
elizabethSanger.volunteer.address = "";
elizabethSanger.volunteer.email = "";
elizabethSanger.volunteer.phonenumber = "";
elizabethSanger.volunteer.availability = "";
elizabethSanger.volunteer.activities = ["answering phone calls", "taking polls", "etc"];
elizabethSanger.biography = "Bio here";
elizabethSanger.images = [];
elizabethSanger.headshot = {};
elizabethSanger.family = {};
elizabethSanger.constituents = {};
elizabethSanger.mission = "";
elizabethSanger.vote = "http://elizabethsanger.com/vote";

console.log(elizabethSanger);

let newDistrict = function (district){
elizabethSanger.district = district;
console.log(elizabethSanger);
};
newDistrict("District 14");

let newTax = function (taxPolicy){
    elizabethSanger.platform.taxes = taxPolicy;
    console.log(elizabethSanger);
};
newTax("Raise Them Higher");

let newDonation = function (donation){
    elizabethSanger.donation = donation;
    console.log(elizabethSanger);
}
newDonation("http://fakeoffshoredonations.com");

let newImages = function (){
    elizabethSanger.images.push("fakepictures");
    console.log(elizabethSanger);
};
newImages();