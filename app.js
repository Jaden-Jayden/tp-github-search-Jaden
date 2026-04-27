	const toggle = document.getElementById("themeToggle");
	const body = document.body;
	const icon = document.getElementById("themeIcon");

     

	toggle.addEventListener("click", () => {
		body.classList.toggle("dark");

		if (body.classList.contains("dark")) {
			toggle.innerHTML = 'DARK <img id="themeIcon" src="/assets/icon-moon.svg">';
		} else {
			toggle.innerHTML = 'LIGHT <img id="themeIcon" src="/assets/icon-sun.svg">';
		}
	});

    