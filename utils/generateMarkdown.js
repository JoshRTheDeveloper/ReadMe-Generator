// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    const encodedLicense = (license);
    return `![License](https://img.shields.io/badge/license-${encodedLicense}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `https://opensource.org/licenses/${license}`;
  }

  return "[No License](https://opensource.org/licenses/none)";
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License

This project is licensed under the [${license} license](${renderLicenseLink(license)}).`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title} 
${licenseBadge}

## Description
${data.description}

## Installation Instructions
${data.installation}

## Table of Contents
* [Usage Information](#usage-information)
* [Contributors](#contributors)
* [Test](#test)
* [Email](#email)

## Usage Information
${data.usage}

## Contributors
${data.contributors}

## Test
${data.test}

## Contact
${data.contact}

## Email
${data.email}

${licenseSection}`;
}

// Export the generateMarkdown function
module.exports = generateMarkdown;
