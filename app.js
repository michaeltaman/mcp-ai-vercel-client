async function sendRequest() {
  const name = document.getElementById('nameInput').value;
  const toolId = '32a2fb4e-11f6-4c88-9161-3d040e8d64f6'; // Замени на свой ID!
  const url =
    'https://8519-2a06-c701-4694-e200-71cd-72a1-327f-3f1d.ngrok-free.app/api/mcp/tools/call/' +
    toolId;

  const responseBox = document.getElementById('response');
  responseBox.textContent = 'Loading...';

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Say Hello',
        arguments: { name: name },
      }),
    });
    const data = await res.json();
    responseBox.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    responseBox.textContent = 'Error: ' + err.message;
  }
}
