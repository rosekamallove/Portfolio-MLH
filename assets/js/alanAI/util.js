/***********************************
 *  @Utility Functions For Alan AI *
 ***********************************/

const openSocial = (social) => {
  /* Add you social Links Here */
  const linkedIn = "https://linkedin.com/";
  const gitHub = "https://github.com/";

  /* Duplicate this if-else Block if you added another socail medial link */
  if (social == "LinkedIn") {
    const LINK = document.createElement("a");
    LINK.href = linkedIn;
    LINK.target = "_blank";
    LINK.click();
    document.body.removeChild(LINK);
  } else if (social == "GitHub") {
    const LINK = document.createElement("a");
    LINK.href = gitHub;
    LINK.target = "_blank";
    LINK.click();
    document.body.removeChild(LINK);
  }
};

const downloadResume = () => {
  let resumeLink;
  if (document.getElementById("resume-link"))
    resumeLink = document.getElementById("resume-link");
  if (resumeLink) {
    resumeLink.click();
  } else {
    return "No Resume";
  }
};

const openCalendly = () => {
  if (document.getElementById("calendly-link")) {
    calendly = document.getElementById("calendly-link");
    calendly.click();
  } else {
    return "no calendly";
  }
};

const alanSystemThemeToggle = () => {
  const systemTheme = document.getElementById("system-theme");
  if (systemTheme.checked) {
    systemTheme.checked = false;
  } else {
    systemTheme.checked = true;
  }
  localStorage.setItem("system-theme", systemTheme.checked);
  console.log(systemTheme.checked);
};

const goToProjectPage = () => {
  const projectData = document.getElementById("p1");
  projectData.click();
  readProjectPage();
};

const htmlToJson = (div, obj) => {
  if (!obj) obj = [];
  var tag = {};
  tag["tagName"] = div.tagName;
  tag["children"] = [];
  for (var i = 0; i < div.children.length; i++) {
    tag["children"].push(htmlToJson(div.children[i]));
  }
  for (var i = 0; i < div.attributes.length; i++) {
    var attr = div.attributes[i];
    tag["@" + attr.name] = attr.value;
  }
  return tag;
};

const getProjectJSON = () => {
  projectPage = document.getElementById("");
};
