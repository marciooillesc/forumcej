
function typeEffect(text, chat) {
  const div = document.createElement('div');
  div.className = 'msg bot';
  chat.appendChild(div);

  let i = 0;

  function typing() {
    if (i < text.length) {
      div.innerText += text.charAt(i);
      i++;
      chat.scrollTop = chat.scrollHeight;
      setTimeout(typing, 10);
    }
  }

  typing();
}

let messages = [];

export function renderSearch(container) {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) sidebar.style.display = 'none';

  document.body.innerHTML = `
    <div class="rpr-search">

      <button class="back-btn" onclick="location.reload()">← Voltar</button>

      <div class="search-center">

        <div class="search-box">
          <input id="input" placeholder="Digite sua busca..." />
          <button id="btn">Buscar</button>
        </div>

        <div id="suggestions" class="suggestions"></div>

        <div id="chat" class="chat"></div>
      </div>

      <footer class="footer">
        RPR Search • Educação Digital
      </footer>

    </div>
  `;

  const input = document.getElementById('input');
  const btn = document.getElementById('btn');
  const chat = document.getElementById('chat');
  const suggestions = document.getElementById('suggestions');

  function addMessage(text, type) {
    const div = document.createElement('div');
    div.className = 'msg ' + type;
    div.innerText = text;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
  }

  function showSuggestions(value) {
    if (!value) {
      suggestions.innerHTML = '';
      return;
    }

    const sug = [
      value,
      value + " resumo",
      "Explique " + value,
      value + " exemplos"
    ];

    suggestions.innerHTML = sug.map(s => `<div class="sug-item">${s}</div>`).join('');

    document.querySelectorAll('.sug-item').forEach(el => {
      el.onclick = () => {
        input.value = el.innerText;
        send();
        suggestions.innerHTML = '';
      };
    });
  }

  async function send() {
    const q = input.value.trim();
    if (!q) return;

    addMessage(q, 'user');
    input.value = '';

    addMessage('Pensando...', 'bot');

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'openrouter/free',
        messages: [...messages, { role: 'user', content: q }]
      })
    });

    const data = await res.json();
    const reply = data?.choices?.[0]?.message?.content || 'Erro';

    chat.lastChild.remove();
    typeEffect(reply, chat);

    messages.push({ role: 'user', content: q });
    messages.push({ role: 'assistant', content: reply });
  }

  btn.onclick = send;

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      send();
      suggestions.innerHTML = '';
    }
  });

  input.addEventListener('input', () => {
    showSuggestions(input.value);
  });
}
