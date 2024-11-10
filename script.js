// Initialize arrays for resume data
var experienceList = [];
var educationList = [];
var achievementList = [];
var skillList = [];
var languageList = [];
// Function to add experience
function addExperience() {
    var jobTitle = document.getElementById('jobTitleInput').value;
    var company = document.getElementById('companyInput').value;
    var duration = document.getElementById('durationInput').value;
    var description = document.getElementById('jobDescriptionInput').value;
    var experience = { jobTitle: jobTitle, company: company, duration: duration, description: description };
    experienceList.push(experience);
    displayExperience();
}
// Function to add education
function addEducation() {
    var degree = document.getElementById('degreeInput').value;
    var school = document.getElementById('schoolInput').value;
    var duration = document.getElementById('eduDurationInput').value;
    var description = document.getElementById('educationDescriptionInput').value;
    var education = { degree: degree, school: school, duration: duration, description: description };
    educationList.push(education);
    displayEducation();
}
// Function to add achievement
function addAchievement() {
    var achievement = document.getElementById('achievementInput').value;
    var date = document.getElementById('achievementDateInput').value;
    var achievementItem = { achievement: achievement, date: date };
    achievementList.push(achievementItem);
    displayAchievements();
}
// Function to add skills
function addSkill() {
    var skill = document.getElementById('skillsInput').value;
    var proficiency = document.getElementById('skillsPercentage').value;
    var skillItem = { skill: skill, proficiency: proficiency };
    skillList.push(skillItem);
    displaySkills();
}
// Function to add languages
function addLanguage() {
    var language = document.getElementById('languagesInput').value;
    var proficiency = document.getElementById('languagesPercentage').value;
    var languageItem = { language: language, proficiency: proficiency };
    languageList.push(languageItem);
    displayLanguages();
}
// Function to generate resume
function generateResume() {
    var name = document.getElementById('name').value;
    var jobTitle = document.getElementById('title').value;
    var summary = document.getElementById('summary').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var location = document.getElementById('location').value;
    // Display data on the resume side
    document.getElementById('nameDisplay').innerText = name;
    document.getElementById('jobTitleDisplay').innerText = jobTitle;
    document.getElementById('summaryDisplay').innerText = summary;
    document.getElementById('emailDisplay').innerText = email;
    document.getElementById('phoneDisplay').innerText = phone;
    document.getElementById('locationDisplay').innerText = location;
    // Handle profile image display
    var profileImage = document.getElementById('profileImage').files[0];
    if (profileImage) {
        var reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profileImageDisplay').src = e.target.result;
            document.getElementById('profileImageDisplay').style.display = 'block';
        };
        reader.readAsDataURL(profileImage);
    }
    // Handle social media links display
    var linkedin = document.getElementById('linkedin').value;
    var github = document.getElementById('github').value;
    var twitter = document.getElementById('twitter').value;
    var facebook = document.getElementById('facebook').value;
    var socialLinksContainer = document.getElementById('socialLinks');
    socialLinksContainer.innerHTML = '';
    if (linkedin)
        socialLinksContainer.innerHTML += "<a href=\"".concat(linkedin, "\" target=\"_blank\">LinkedIn</a><br>");
    if (github)
        socialLinksContainer.innerHTML += "<a href=\"".concat(github, "\" target=\"_blank\">GitHub</a><br>");
    if (twitter)
        socialLinksContainer.innerHTML += "<a href=\"".concat(twitter, "\" target=\"_blank\">Twitter</a><br>");
    if (facebook)
        socialLinksContainer.innerHTML += "<a href=\"".concat(facebook, "\" target=\"_blank\">Facebook</a><br>");
    // Reset and display all sections
    displayExperience();
    displayEducation();
    displayAchievements();
    displaySkills();
    displayLanguages();
}
// Function to display all sections of the resume
function displayExperience() {
    var experienceContainer = document.getElementById('experienceList');
    experienceContainer.innerHTML = '';
    experienceList.forEach(function (item) {
        experienceContainer.innerHTML += "\n      <div class=\"experience-item\">\n        <h4>".concat(item.jobTitle, " at ").concat(item.company, "</h4>\n        <p><strong>Duration:</strong> ").concat(item.duration, "</p>\n        <p><strong>Description:</strong> ").concat(item.description, "</p>\n      </div>\n    ");
    });
}
function displayEducation() {
    var educationContainer = document.getElementById('educationList');
    educationContainer.innerHTML = '';
    educationList.forEach(function (item) {
        educationContainer.innerHTML += "\n      <div class=\"education-item\">\n        <h4>".concat(item.degree, " at ").concat(item.school, "</h4>\n        <p><strong>Duration:</strong> ").concat(item.duration, "</p>\n        <p><strong>Description:</strong> ").concat(item.description, "</p>\n      </div>\n    ");
    });
}
function displayAchievements() {
    var achievementsContainer = document.getElementById('achievementsList');
    achievementsContainer.innerHTML = '';
    achievementList.forEach(function (item) {
        achievementsContainer.innerHTML += "\n      <div class=\"achievement-item\">\n        <h4>".concat(item.achievement, " (").concat(item.date, ")</h4>\n      </div>\n    ");
    });
}
// Function to display skills with progress bar
function displaySkills() {
    var skillsContainer = document.getElementById('skillsList');
    skillsContainer.innerHTML = '';
    skillList.forEach(function (item) {
        skillsContainer.innerHTML += "\n      <div class=\"skill-item\">\n        <p>".concat(item.skill, "</p>\n        <div class=\"progress-bar-container\">\n          <div class=\"progress-bar\" style=\"width: ").concat(item.proficiency, "%;\"></div>\n        </div>\n      </div>\n    ");
    });
}
// Function to display languages with progress bar
function displayLanguages() {
    var languagesContainer = document.getElementById('languagesList');
    languagesContainer.innerHTML = '';
    languageList.forEach(function (item) {
        languagesContainer.innerHTML += "\n      <div class=\"language-item\">\n        <p>".concat(item.language, "</p>\n        <div class=\"progress-bar-container\">\n          <div class=\"progress-bar\" style=\"width: ").concat(item.proficiency, "%;\"></div>\n        </div>\n      </div>\n    ");
    });
}
