// Initialize arrays for resume data
let experienceList = [];
let educationList = [];
let achievementList = [];
let skillList = [];
let languageList = [];

// Function to add experience
function addExperience() {
  const jobTitle = document.getElementById('jobTitleInput').value;
  const company = document.getElementById('companyInput').value;
  const duration = document.getElementById('durationInput').value;
  const description = document.getElementById('jobDescriptionInput').value;

  const experience = { jobTitle, company, duration, description };
  experienceList.push(experience);
  displayExperience();
}

// Function to add education
function addEducation() {
  const degree = document.getElementById('degreeInput').value;
  const school = document.getElementById('schoolInput').value;
  const duration = document.getElementById('eduDurationInput').value;
  const description = document.getElementById('educationDescriptionInput').value;

  const education = { degree, school, duration, description };
  educationList.push(education);
  displayEducation();
}

// Function to add achievement
function addAchievement() {
  const achievement = document.getElementById('achievementInput').value;
  const date = document.getElementById('achievementDateInput').value;

  const achievementItem = { achievement, date };
  achievementList.push(achievementItem);
  displayAchievements();
}

// Function to add skills
function addSkill() {
  const skill = document.getElementById('skillsInput').value;
  const proficiency = document.getElementById('skillsPercentage').value;

  const skillItem = { skill, proficiency };
  skillList.push(skillItem);
  displaySkills();
}

// Function to add languages
function addLanguage() {
  const language = document.getElementById('languagesInput').value;
  const proficiency = document.getElementById('languagesPercentage').value;

  const languageItem = { language, proficiency };
  languageList.push(languageItem);
  displayLanguages();
}

// Function to generate resume
function generateResume() {
  const name = document.getElementById('name').value;
  const jobTitle = document.getElementById('title').value;
  const summary = document.getElementById('summary').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const location = document.getElementById('location').value;

  // Display data on the resume side
  document.getElementById('nameDisplay').innerText = name;
  document.getElementById('jobTitleDisplay').innerText = jobTitle;
  document.getElementById('summaryDisplay').innerText = summary;
  document.getElementById('emailDisplay').innerText = email;
  document.getElementById('phoneDisplay').innerText = phone;
  document.getElementById('locationDisplay').innerText = location;

  // Handle profile image display
  const profileImage = document.getElementById('profileImage').files[0];
  if (profileImage) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById('profileImageDisplay').src = e.target.result;
      document.getElementById('profileImageDisplay').style.display = 'block';
    };
    reader.readAsDataURL(profileImage);
  }

  // Handle social media links display
  const linkedin = document.getElementById('linkedin').value;
  const github = document.getElementById('github').value;
  const twitter = document.getElementById('twitter').value;
  const facebook = document.getElementById('facebook').value;

  const socialLinksContainer = document.getElementById('socialLinks');
  socialLinksContainer.innerHTML = '';
  if (linkedin) socialLinksContainer.innerHTML += `<a href="${linkedin}" target="_blank">LinkedIn</a><br>`;
  if (github) socialLinksContainer.innerHTML += `<a href="${github}" target="_blank">GitHub</a><br>`;
  if (twitter) socialLinksContainer.innerHTML += `<a href="${twitter}" target="_blank">Twitter</a><br>`;
  if (facebook) socialLinksContainer.innerHTML += `<a href="${facebook}" target="_blank">Facebook</a><br>`;

  // Reset and display all sections
  displayExperience();
  displayEducation();
  displayAchievements();
  displaySkills();
  displayLanguages();
}

// Function to display all sections of the resume
function displayExperience() {
  const experienceContainer = document.getElementById('experienceList');
  experienceContainer.innerHTML = '';
  experienceList.forEach(item => {
    experienceContainer.innerHTML += `
      <div class="experience-item">
        <h4>${item.jobTitle} at ${item.company}</h4>
        <p><strong>Duration:</strong> ${item.duration}</p>
        <p><strong>Description:</strong> ${item.description}</p>
      </div>
    `;
  });
}

function displayEducation() {
  const educationContainer = document.getElementById('educationList');
  educationContainer.innerHTML = '';
  educationList.forEach(item => {
    educationContainer.innerHTML += `
      <div class="education-item">
        <h4>${item.degree} at ${item.school}</h4>
        <p><strong>Duration:</strong> ${item.duration}</p>
        <p><strong>Description:</strong> ${item.description}</p>
      </div>
    `;
  });
}

function displayAchievements() {
  const achievementsContainer = document.getElementById('achievementsList');
  achievementsContainer.innerHTML = '';
  achievementList.forEach(item => {
    achievementsContainer.innerHTML += `
      <div class="achievement-item">
        <h4>${item.achievement} (${item.date})</h4>
      </div>
    `;
  });
}

// Function to display skills with progress bar
function displaySkills() {
  const skillsContainer = document.getElementById('skillsList');
  skillsContainer.innerHTML = '';
  skillList.forEach(item => {
    skillsContainer.innerHTML += `
      <div class="skill-item">
        <p>${item.skill}</p>
        <div class="progress-bar-container">
          <div class="progress-bar" style="width: ${item.proficiency}%;"></div>
        </div>
      </div>
    `;
  });
}

// Function to display languages with progress bar
function displayLanguages() {
  const languagesContainer = document.getElementById('languagesList');
  languagesContainer.innerHTML = '';
  languageList.forEach(item => {
    languagesContainer.innerHTML += `
      <div class="language-item">
        <p>${item.language}</p>
        <div class="progress-bar-container">
          <div class="progress-bar" style="width: ${item.proficiency}%;"></div>
        </div>
      </div>
    `;
  });
}
