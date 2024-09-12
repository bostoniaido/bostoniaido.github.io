async function sendContact(ev) {
    ev.preventDefault();

    const senderName = document
      .getElementById('nameInput').value;
    const senderEmail = document
      .getElementById('emailInput').value;
    const senderMessage = document
      .getElementById('messageInput').value;
    const subject = document
      .getElementById('subject').value;

    const webhookBody = {
      embeds: [{
        title: subject,
        fields: [
          { name: 'Name', value: senderName },  
          { name: 'Sender', value: senderEmail },
          { name: 'Message', value: senderMessage }
        ]
      }],
    };

    const webhookUrl = 'https://discord.com/api/webhooks/1283242304747995208/dUBGVXN3QhhXLJlIZ2vJ2YudeJF64PmcvYZzjBkO5ZxJQssbK2ZXnwUkC6Io0iLf94Ro';

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookBody),
    });

    if (response.ok) {
      alert('I have received your message!');
    } else {
      alert('There was an error! Try again later!');
    }
  }