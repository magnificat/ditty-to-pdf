const fs = require('fs');
const tinyError = require('tiny-error');
const ditty = require('parse-ditty');
const entities = require('stringify-entities');
const pdf = require('html-pdf');

const renderSong = (song) => (
`<div>
  <h2>${song.number}. ${song.title}</h2>
${
    song.parts.map((part) => (
`  <p class="${part.type}">${
      entities(part.lyrics
        .replace(/\n$/, '')
        .replace(/(?:– *)?\n/g, ' — ')
      )
}</p>
`
)).join('')
}</div>
`
);

const style = (
`html {
  font-size: 9pt;
  line-height: 1.3rem;
  font-family: Andada, serif;
}

body {
  margin: 8mm 12mm;
}

* {
  font-size: inherit;
  margin: 0;
  padding: 0;
}

h2 {
  margin-top: 1.5em;
}

p:nth-child(2n + 1) {
  padding-left: 2em;
}

p.refrain {
  font-style: italic;
}
`
);

module.exports = (args) => {
  if (args.length < 2) throw tinyError(
    'Usage: ditty-to-pdf ...<file> <destination>'
  );

  const destination = args[args.length - 1];
  const inputFiles = args.slice(0, args.length - 1);

  const rawSongs = inputFiles.map((filePath) => (
    fs.readFileSync(filePath, 'utf8')
  ));
  const renderedSongs = rawSongs.map(ditty).map(renderSong);
  const html = (
`<!doctype html>
<style>${style}</style>
${renderedSongs.join('')}
`
  );

  pdf.create(html, { format: 'A5' })
    .toFile(destination, (error, result) => {
      if (error) throw error;
      process.stdout.write(`${result.filename}\n`);
    });
};
