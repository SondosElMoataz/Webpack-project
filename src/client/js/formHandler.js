function handleSubmit(event) {
    event.preventDefault()

    
    let formText = document.getElementById('name').value
    
    if (Client.checkForURL(formText)) {
    
        
        fetch("http://localhost:8081/analyze", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            url: formText,
          }),
        })
          .then((response) => response.json())
          

          .then(function (data) {
            document.getElementById("subjectivity").innerHTML = data.subjectivity;
            document.getElementById("agreement").innerHTML = data.agreement;
            document.getElementById("irony").innerHTML = data.irony;
            document.getElementById("confidence").innerHTML = data.confidence;
          });
      } else {
         alert("URL entered is incorrect please enter a valid URL ")

      }
    }
    // document.getElementById('results').innerHTML = res.message


export { handleSubmit }
