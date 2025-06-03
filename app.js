document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('sayHelloButton');
  const input = document.getElementById('nameInput');
  const responseBox = document.getElementById('responseBox');

  button.addEventListener('click', () => {
    const name = input.value.trim() || 'Guest';
    const toolId = '32a2fb4e-11f6-4c88-9161-3d040e8d64f6';
    const apiUrl =
      'https://8519-2a06-c701-4694-e200-71cd-72a1-327f-3f1d.ngrok-free.app/api/mcp/tools/call/32a2fb4e-11f6-4c88-9161-3d040e8d64f6';

    const data = {
      name: 'Say Hello',
      arguments: { name: name },
    };

    fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        responseBox.textContent = JSON.stringify(json, null, 4);
      })
      .catch((error) => {
        console.error('Ошибка:', error);
        responseBox.textContent = `Ошибка: ${error}`;
      });
  });
});
