const alanBtnInstance = alanBtn({
  key: "5c0e10ba1522cb83798eb8e6af73e2ef2e956eca572e1d8b807a3e2338fdd0dc/stage",
  onCommand: function (commandData) {
    if (commandData.command === "go:back") window.history.back();

    if (commandData.command === "systemThemeCommand") alanSystemThemeToggle();

    if (commandData.command === "changeThemeCommand")
      document.getElementById("slider").click();

    if (commandData.command === "resumeCommand") {
      if (downloadResume() == "No Resume") {
        alert("Issue with Resume Link");
      } else {
        downloadResume();
      }
    }

    if (commandData.command === "calendlyCommand") {
      if (openCalendly() == "no calendly") {
        alert("No Calendly Present");
      } else {
        openCalendly();
      }
    }

    if (commandData.command === "socialMediaCommand") {
      console.clear();
      console.log(commandData.social);
      openSocial(commandData.social);
    }

    if (commandData.command === "openProjectCommand") {
      goToProjectPage();
      project = getProjectJSON();
      alanBtnInstance.callProjectApi(
        "sendProject",
        { data: project },
        function (error, result) {
          if (error) {
            console.error(error);
            return;
          }
          console.log(result);
        }
      );
    }
  },
  rootEl: document.getElementById("alan-btn"),
});
