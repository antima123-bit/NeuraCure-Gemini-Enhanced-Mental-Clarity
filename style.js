function generateAutoReply(message) {
    // Make an API request to the AI chatting net API
    const apiEndpoint = "https://www.aichatting.net/";
    const requestBody = {
      message: message
    };
  
    fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(data => {
      // Return the auto-reply message from the API response
      return data.auto_reply_message;
    })
    .catch(error => {
      // Handle errors and return a default response
      console.error(error);
      return "I'm not sure I understand. Can you please rephrase your question?";
    });
  }