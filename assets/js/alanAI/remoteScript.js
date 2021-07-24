/*
 * This is the script that you'll add after
 * creating a project on https://alan.app/platform#alan-studio
 */

intent("What can yo do", "What can I do here", (p) => {
  p.play(
    "You can ask me to download the resume, go to Github or LinkedIn, book a meeting on calendly, show you one of the projects etc"
  );
});

intent("Book a meeting", "open Calendly", "book meeting in calendly", (p) => {
  p.play({ command: "calendlyCommand" });
});

intent("(Download|Show me) the Resume", (p) => {
  p.play({ command: "resumeCommand" });
});
intent("Go Back", (p) => {
  p.play({ command: "go:back" });
});

intent("(Open|Show me the) $(SOCIAL linkedIn|github|twitter|facebook)", (p) => {
  let social = p.SOCIAL.value;
  p.play(`On it, boss`);
  p.play({ command: "socialMediaCommand", social });
});

intent("Tell me about one of the projects", (p) => {
  p.play({ command: "openProjectCommand" });
  projectAPI.readProject = function (p, param, callback) {
    p.userData.project = param.data;
    p.play(p.userData.project);
    callback(null);
  };
});

intent("(Tell me about|What is) (his|her) work experience", (p) => {
  p.play({ command: "readExperienceCommand" });
});

intent(
  "How do I contact (him|her)",
  "How do I contact $(USERNAME)",
  "What are (his|her) contact details",
  (p) => {
    p.play({ command: "contactCommand" });
  }
);

intent("(Tell me about|What is) (his|her) education", (p) => {
  p.play({ command: "readEducationCommand" });
});

intent("(Switch|Change|Toggle) the Theme", (p) => {
  p.play("On it boss");
  p.play({ command: "changeThemeCommand" });
});
intent("(Turn|Toggle) System theme", (p) => {
  p.play("On it boss");
  p.play({ command: "systemThemeCommand" });
});

//experience/eduction or uska naam //read experince or bio or educatio
intent(
  "(Tell me about|What is) (his|her) $(READOUT experince|educaton|bio)",
  (p) => {
    p.play({ command: "readCommand" });
  }
);
