import marked from 'marked';

function renderMarkDown(text) {
  return marked(text);
}

export default { renderMarkDown };
