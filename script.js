const quotes = {
  "- George Santayana": '“Aqueles que não conseguem lembrar o passado estão condenados a repeti-lo.”',
  "- Nelson Mandela": '"A educação é a arma mais poderosa que você pode usar para mudar o mundo."',
  "- Oscar Wilde": '"A insatisfação é o primeiro passo para o progresso de um homem ou de uma nação."',
  "- Zygmunt Bauman": '"Não são as crises que mudam o mundo, e sim nossa reação a elas."',
  "- Émile Durkheim": '"O indivíduo só poderá agir na medida em que aprender a conhecer o contexto em que está inserido, a saber quais são suas origens e as condições de que depende."',
  "- Jean-Jacques Rousseau": '"A vontade geral deve emanar de todos para ser aplicada a todos."',
  "- Richard Rorty": '"Que tipo de mundo podemos preparar para os nossos bisnetos?"',
  "- Confúcio": '"Não corrigir nossas falhas é o mesmo que cometer novos erros."',
  "- Mahatma Gandhi": '"Temos de nos tornar a mudança que queremos ver."',
  "- George Bernard Shaw": '"O progresso é impossível sem mudança; e aqueles que não conseguem mudar as suas mentes não conseguem mudar nada."',
  "- Confúcio": '"Se queres prever o futuro, estuda o passado."',
  "- Herbert José de Sousa": '"Um país não muda pela sua economia, sua política e nem mesmo sua ciência; muda sim pela sua cultura"',
  "- Pablo Picasso": '"A arte é a mentira que nos permite conhecer a verdade."',

};


document.querySelector("#generate").addEventListener("click", () => {
  generate();
});

function generate() {
  // grab all the keys in the dictionary (authors) and store in an array
  const authors = Object.keys(quotes);
  // grab a random key (author) and store it in author
  const author = authors[Math.floor(Math.random() * authors.length)];
  // grab the value(quote) that belongs to that key
  const quote = quotes[author]

  document.querySelector("#quote").textContent = quote;
  document.querySelector("#author").textContent = author;
}

window.onload = function () {
  generate()
}