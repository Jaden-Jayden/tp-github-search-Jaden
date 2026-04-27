   const request1 = new Request("https://github.com/username", {
    method: "POST",
    body: JSON.stringify({ username: "Jaden-Jayden" }),
    });



    const response1 = await fetch(request1);
    console.log(response1);