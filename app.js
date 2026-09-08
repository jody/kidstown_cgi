const app = document.querySelector('#app');

const places = [
  ['KidsTown', '1000', 'navbtn_town.gif'],
  ['CityHall', '5000', 'navbtn_cityhall.gif'],
  ['School', '4000', 'navbtn_school.gif'],
  ['Library', '6000', 'navbtn_library.gif'],
  ['Zoo', '9000', 'navbtn_zoo.gif'],
  ['ToyStore', '7000', 'navbtn_toystore.gif'],
  ['CityPark', '2000', 'navbtn_citypark.gif'],
  ['TownShip', '3000', 'navbtn_township.gif'],
  ['Museum', '8000', 'navbtn_museum.gif']
];

const schoolLevels = {
  easy: 'data/school/e_data1.txt',
  medium: 'data/school/e_data2.txt',
  difficult: 'data/school/e_data3.txt'
};

function routeTo(key, params = {}, replace = false) {
  const url = new URL(window.location.href);
  url.search = '';
  url.searchParams.set('KEY', key);
  for (const [name, value] of Object.entries(params)) {
    if (value !== '' && value !== null && value !== undefined) {
      url.searchParams.set(name, value);
    }
  }
  history[replace ? 'replaceState' : 'pushState']({}, '', url);
  render();
}

function link(key, text, className = '') {
  return `<a href="?KEY=${key}" data-key="${key}" class="${className}">${text}</a>`;
}

function nav(helpState = '1010') {
  const buttons = places.map(([label, key, img]) => `
    <a href="?KEY=${key}" data-key="${key}" class="nav-item">
      <img src="graphics/home/${img}" alt=""><span>${label}</span>
    </a>`).join('');
  return `<nav class="navbar">${buttons}
    <a href="?KEY=${helpState}" data-key="${helpState}" class="nav-item">
      <img src="graphics/home/navbtn_help.gif" alt=""><span>Help</span>
    </a>
  </nav>`;
}

function home() {
  return `
    <section class="legacy-page home-page">
      <header><div class="welcome">Welcome to</div><div class="title">KidsTown</div></header>
      <div class="town-map">
        <img src="graphics/home/hometown.gif" alt="Map of KidsTown" width="310" height="318" usemap="#home-map">
        <map name="home-map">
          <area shape="poly" coords="10,37,27,37,38,20,53,16,54,6,71,1,74,18,85,20,88,33,106,34,105,49,94,64,33,71,17,45,7,42,10,37" href="?KEY=3000" data-key="3000" alt="Go to the Town Ship!">
          <area shape="poly" coords="91,101,111,106,136,96,143,89,157,89,176,94,191,75,194,65,204,60,211,67,204,71,200,71,192,96,189,108,188,137,127,137,126,115,109,116,91,102" href="?KEY=8000" data-key="8000" alt="Go to the Museum!">
          <area shape="poly" coords="168,2,216,22,236,11,241,2,260,1,260,19,241,24,242,36,284,29,308,15,308,46,292,60,231,70,193,55,166,32,161,19,162,2" href="?KEY=9000" data-key="9000" alt="Go to the Zoo!">
          <area shape="poly" coords="237,287,238,272,239,265,239,246,233,239,257,214,257,196,263,186,267,180,270,169,285,171,282,182,271,179,273,185,279,194,281,206,285,206,305,235,301,240,300,263,279,288,242,287" href="?KEY=4000" data-key="4000" alt="Go to the School!">
          <area shape="poly" coords="226,145,239,132,240,109,234,99,260,95,268,87,270,70,290,72,288,87,273,84,285,93,289,101,309,118,307,124,307,161,251,173,226,144" href="?KEY=5000" data-key="5000" alt="Go to City Hall!">
          <area shape="poly" coords="7,195,8,151,35,143,36,132,86,130,86,143,90,144,91,194,62,201,35,202,7,195" href="?KEY=7000" data-key="7000" alt="Go to the Toy Store!">
          <area shape="poly" coords="7,307,4,222,35,216,61,227,63,287,10,310,7,307" href="?KEY=2000" data-key="2000" alt="Go to the Park!">
          <area shape="poly" coords="97,301,102,241,143,217,169,227,167,280,131,309,113,312,97,301" href="?KEY=6000" data-key="6000" alt="Go to the Library!">
        </map>
      </div>
      <div class="home-copy">
        <div class="lead">Discover Exciting KidsTown!</div>
        ${link('2000', 'Go on a journey,', 'journey')} ${link('5000', 'become a detective,', 'detective')}<br>
        ${link('4000', 'solve puzzles and play games,', 'games')}<br>
        ${link('9000', 'learn about animals of different regions,', 'animals')}<br>
        ${link('6000', 'explore the United States,', 'states')} and MORE ...<br><br>
        <span class="visit">Visit <span>KidsTown</span> Points of Interest!</span><br><br>
        Just click on the picture above or<br>on the buttons or words below.
      </div>
      ${nav('1010')}
      <footer><b>KidsTown</b> is an interactive experience with stories, puzzles, and games, focused on enhancing the literacy of elementary school-aged children. Learn how the <b>University of Colorado at Denver</b> and the <b>Tattered Cover Book Store</b> joined together in ${link('1100', '<b>The Making of KidsTown</b>')}.</footer>
    </section>`;
}

function cityParkStart() {
  return `
    <section class="legacy-page park-page">
      <h1>KidsTown City Park - Your Big Journey</h1>
      <hr>
      <div class="park-copy">Hello, and welcome to the KidsTown City Park. You are about to go on a big journey through the park. To get started, click in the box below this paragraph and type in your first name. Then, put your mouse over the "Let's Go" button and click.</div>
      <form id="park-start" class="park-form">
        <input type="text" name="name" size="10" aria-label="First name">
        <button type="submit">Let's Go !!</button>
      </form>
      <hr>
      ${nav()}
    </section>`;
}

async function cityParkPage(params) {
  const page = Math.max(1, Number(params.get('page') || 1));
  const name = params.get('name') || 'My friend';
  const response = await fetch(`data/citypark/page${page}`);
  if (!response.ok) throw new Error(`Unable to load City Park page ${page}.`);
  let text = await response.text();
  const xname = encodeURIComponent(name).replace(/%20/g, '+');
  text = text
    .replaceAll('#name#', escapeHtml(name))
    .replaceAll('#xname#', xname)
    .replaceAll('#page#', String(page))
    .replaceAll('#from#', params.get('from') || '0')
    .replaceAll('#ktini{cityparkgraphics}#', 'graphics/citypark')
    .replaceAll('#ktini{engine}#', '');
  text = rewriteLegacyLinks(text);
  return `
    <section class="legacy-page park-page">
      <h1>${escapeHtml(name)}'s Big Journey</h1>
      <hr>
      <blockquote class="park-copy">${text}</blockquote>
      <hr>
      ${nav()}
    </section>`;
}

function schoolHome() {
  return `
    <section class="legacy-page school-page">
      <h1>KidsTown School</h1>
      <img class="chalkboard" src="graphics/school/chalkboard.gif" alt="Chalkboard">
      <div class="school-intro">
        <p>Welcome to school!</p>
        <p>Current activities are:</p>
        <ul>
          <li>${link('4001', 'Word Fun')}</li>
          <li>${link('4002', 'Scramble')}</li>
          <li>${link('4500', 'Farm Field-Trip')}</li>
        </ul>
      </div>
      <p class="other-locations"><b>Or visit one of these other KidsTown locations</b></p>
      ${nav()}
    </section>`;
}

function wordFunIntro() {
  return `
    <section class="legacy-page wordfun-page">
      <div class="wordfun-wrap">
        <h1>Welcome to the Word Fun Activity</h1>
        <hr>
        <h2>Please choose a level of difficulty by selecting a level below.<br>Click on the "Start Game" button to begin playing.</h2>
        <div class="wordfun-body">
          <img src="graphics/school/blocks-left.gif" alt="" class="blocks">
          <form id="wordfun-start" class="wordfun-levels">
            <table>
              <thead><tr><th>Level</th><th>Example Words</th></tr></thead>
              <tbody>
                <tr><td><label><input type="radio" name="level" value="easy" checked> <b>Easy</b></label></td><td><b>- fish, ball, and bed</b></td></tr>
                <tr><td><label><input type="radio" name="level" value="medium"> <b>Medium</b></label></td><td><b>- basketball, flying, and staple</b></td></tr>
                <tr><td><label><input type="radio" name="level" value="difficult"> <b>Difficult</b></label></td><td><b>- stethoscope and application</b></td></tr>
              </tbody>
            </table>
            <button type="submit">Start Game</button>
          </form>
          <img src="graphics/school/blocks-right.gif" alt="" class="blocks">
        </div>
      </div>
      ${nav('4004')}
    </section>`;
}

async function loadSchoolRecords(level) {
  const filename = schoolLevels[level];
  if (!filename) throw new Error('Unknown School activity difficulty level.');
  const response = await fetch(filename);
  if (!response.ok) throw new Error(`Unable to load School activity data for ${level}.`);
  return parseRecordFile(await response.text());
}

function parseRecordFile(text) {
  const records = [];
  let current = null;
  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trimEnd();
    if (line === '.') {
      if (current && current.WORD) records.push(current);
      current = {};
      continue;
    }
    if (!current || !line || line.startsWith('#')) continue;
    const tab = line.indexOf('\t');
    if (tab < 0) continue;
    current[line.slice(0, tab)] = line.slice(tab + 1);
  }
  if (current && current.WORD) records.push(current);
  return records;
}

async function wordFunGame(params) {
  const level = params.get('level');
  if (!level) return wordFunIntro();

  const records = await loadSchoolRecords(level);
  if (!records.length) throw new Error('The selected Word Fun data file contains no records.');

  let index = Number(params.get('index'));
  if (!Number.isInteger(index) || index < 0 || index >= records.length) {
    index = Math.floor(Math.random() * records.length);
    routeTo('4001', { level, index, guessed: params.get('guessed') || '' }, true);
    return '';
  }

  const record = records[index];
  const word = record.WORD.toUpperCase();
  const guessed = (params.get('guessed') || '').toUpperCase().replace(/[^A-Z]/g, '');
  const guessedSet = new Set(guessed);
  const current = [...word].map(letter => guessedSet.has(letter) ? letter : '_').join(' ');
  const solved = [...word].every(letter => guessedSet.has(letter));

  if (solved) {
    return `
      <section class="legacy-page wordfun-page">
        <div class="wordfun-wrap">
          <h1>Word Fun</h1>
          <div class="wordfun-result">
            <h3>That's correct! The word is <i>${escapeHtml(word)}.</i><br>Good job, you got it in ${guessed.length} tries!</h3>
            <img src="graphics/school/${escapeHtml(record.GRAPHIC || '')}" alt="">
            <h3>${highlightWord(record.SENTENCE || '', record.WORD)}</h3>
            <div class="wordfun-actions">
              <button type="button" data-wordfun-action="again" data-level="${level}">Play Again</button>
              <button type="button" data-wordfun-action="level">Change Level</button>
            </div>
          </div>
        </div>
        ${nav('4004')}
      </section>`;
  }

  const letters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map(letter => {
    const used = guessedSet.has(letter);
    return `<button type="button" data-word-letter="${letter}" ${used ? 'disabled' : ''}>${used ? '-' : letter}</button>`;
  }).join('');

  return `
    <section class="legacy-page wordfun-page">
      <div class="wordfun-wrap">
        <h1>Word Fun</h1>
        <h2>Select a letter from below</h2>
        <div class="wordfun-body game">
          <img src="graphics/school/blocks-left.gif" alt="" class="blocks">
          <div class="wordfun-game">
            <div class="word-state">${current}</div>
            <div class="letter-grid">${letters}</div>
          </div>
          <img src="graphics/school/blocks-right.gif" alt="" class="blocks">
        </div>
      </div>
      ${nav('4004')}
    </section>`;
}

function scrambleIntro() {
  return `
    <section class="legacy-page scramble-page">
      <div class="scramble-wrap">
        <h1>Welcome to the Word Scramble Game</h1>
        <h2>Please choose a level of difficulty by selecting a level below.<br>Click on the "Start Game" button to begin playing.</h2>
        <form id="scramble-start" class="scramble-levels">
          <label><input type="radio" name="level" value="easy" checked> <b>short words</b></label>
          <label><input type="radio" name="level" value="medium"> <b>longer words</b></label>
          <label><input type="radio" name="level" value="difficult"> <b>longest words</b></label>
          <button type="submit">Start Game</button>
        </form>
      </div>
      ${nav('4003')}
    </section>`;
}

function scrambleWord(word) {
  const letters = [...word];
  let scrambled = word;
  while (scrambled === word && letters.length > 1) {
    const copy = [...letters];
    // Fisher-Yates shuffle
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    scrambled = copy.join('');
  }
  return scrambled;
}

async function scrambleGame(params) {
  const level = params.get('level');
  if (!level) return scrambleIntro();

  const records = await loadSchoolRecords(level);
  if (!records.length) throw new Error('The selected Scramble data file contains no records.');

  let index = Number(params.get('index'));
  let scrambled = params.get('scrambled');
  if (!Number.isInteger(index) || index < 0 || index >= records.length || !scrambled) {
    index = Math.floor(Math.random() * records.length);
    scrambled = scrambleWord(records[index].WORD.toUpperCase());
    routeTo('4002', { level, index, scrambled, count: '0' }, true);
    return '';
  }

  const record = records[index];
  const word = record.WORD.toUpperCase();
  const count = Math.max(0, Number(params.get('count') || 0));
  const lastGuess = (params.get('last') || '').toUpperCase();
  const error = params.get('error') || '';
  const solved = lastGuess === word;

  if (solved) {
    const tryWord = count === 1 ? 'try' : 'tries';
    return `
      <section class="legacy-page scramble-page">
        <div class="scramble-wrap scramble-result">
          <h3>That's correct! The word is <i>${escapeHtml(word)}</i>.<br>Good job, you got it in ${count} ${tryWord}!</h3>
          <img src="graphics/school/${escapeHtml(record.GRAPHIC || '')}" alt="">
          <h2>${highlightWord(record.SENTENCE || '', record.WORD)}</h2>
          <div class="scramble-actions">
            <button type="button" data-scramble-action="again" data-level="${level}">Play Again</button>
            <button type="button" data-scramble-action="level">Change Level</button>
          </div>
        </div>
        ${nav('4003')}
      </section>`;
  }

  return `
    <section class="legacy-page scramble-page">
      <div class="scramble-wrap">
        <h2>What is this picture?</h2>
        <img class="scramble-picture" src="graphics/school/${escapeHtml(record.GRAPHIC || '')}" alt="">
        ${error ? `<h3 class="scramble-error">${escapeHtml(error)}</h3>` : ''}
        <div class="scrambled-word">Scrambled Word: ${escapeHtml(scrambled)}</div>
        <form id="scramble-guess" class="scramble-guess">
          <label>Enter Guess: <input type="text" name="guess" size="${word.length}" maxlength="${word.length}" autocomplete="off"></label>
          <button type="submit">continue</button>
        </form>
        <div class="last-guess">Your Last Guess: ${escapeHtml(lastGuess || '-'.repeat(word.length))}</div>
      </div>
      ${nav('4003')}
    </section>`;
}

function highlightWord(sentence, word) {
  const safeSentence = escapeHtml(sentence);
  const safeWord = escapeRegex(escapeHtml(word));
  return safeSentence.replace(new RegExp(safeWord, 'gi'), match => `<span class="highlight-word">${match}</span>`);
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function rewriteLegacyLinks(html) {
  return html.replace(/href="\?KEY=(\d+)([^\"]*)"/gi, (_m, key, rest) => {
    return `href="?KEY=${key}${rest}" data-key="${key}"`;
  });
}
function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}

function notYet(key) {
  const place = places.find(([, k]) => k === key)?.[0] || `KEY ${key}`;
  return `<section class="legacy-page placeholder"><h1>${place}</h1><p>This route has not yet been converted in the proof of concept.</p><p>${link('1000', 'Return to KidsTown')}</p>${nav()}</section>`;
}

async function render() {
  const params = new URLSearchParams(location.search);
  const key = params.get('KEY') || '1000';
  try {
    if (key === '1000') app.innerHTML = home();
    else if (key === '2000') app.innerHTML = cityParkStart();
    else if (key === '2010') app.innerHTML = await cityParkPage(params);
    else if (key === '4000') app.innerHTML = schoolHome();
    else if (key === '4001') app.innerHTML = await wordFunGame(params);
    else if (key === '4002') app.innerHTML = await scrambleGame(params);
    else app.innerHTML = notYet(key);
  } catch (error) {
    app.innerHTML = `<section class="legacy-page"><h1>KidsTown</h1><p>${escapeHtml(error.message)}</p>${nav()}</section>`;
  }
}

document.addEventListener('click', event => {
  const letterButton = event.target.closest('[data-word-letter]');
  if (letterButton) {
    const params = new URLSearchParams(location.search);
    const guessed = (params.get('guessed') || '') + letterButton.dataset.wordLetter;
    routeTo('4001', {
      level: params.get('level'),
      index: params.get('index'),
      guessed
    });
    return;
  }

  const wordFunAction = event.target.closest('[data-wordfun-action]');
  if (wordFunAction) {
    if (wordFunAction.dataset.wordfunAction === 'again') {
      routeTo('4001', { level: wordFunAction.dataset.level });
    } else {
      routeTo('4001');
    }
    return;
  }

  const scrambleAction = event.target.closest('[data-scramble-action]');
  if (scrambleAction) {
    if (scrambleAction.dataset.scrambleAction === 'again') {
      routeTo('4002', { level: scrambleAction.dataset.level });
    } else {
      routeTo('4002');
    }
    return;
  }

  const target = event.target.closest('a[data-key], area[data-key]');
  if (!target) return;
  event.preventDefault();
  const url = new URL(target.href, location.href);
  history.pushState({}, '', url);
  render();
});

document.addEventListener('submit', event => {
  if (event.target.id === 'park-start') {
    event.preventDefault();
    const form = new FormData(event.target);
    routeTo('2010', { name: form.get('name') || '', page: '1', from: '0' });
    return;
  }

  if (event.target.id === 'wordfun-start') {
    event.preventDefault();
    const form = new FormData(event.target);
    routeTo('4001', { level: form.get('level') || 'easy' });
    return;
  }

  if (event.target.id === 'scramble-start') {
    event.preventDefault();
    const form = new FormData(event.target);
    routeTo('4002', { level: form.get('level') || 'easy' });
    return;
  }

  if (event.target.id === 'scramble-guess') {
    event.preventDefault();
    const form = new FormData(event.target);
    const params = new URLSearchParams(location.search);
    const level = params.get('level');
    const index = params.get('index');
    const scrambled = params.get('scrambled');
    const previousCount = Math.max(0, Number(params.get('count') || 0));
    const guess = String(form.get('guess') || '').trim().toUpperCase();
    const expectedLength = scrambled ? scrambled.length : 0;

    if (guess.length !== expectedLength) {
      routeTo('4002', {
        level, index, scrambled, count: previousCount,
        last: '-'.repeat(expectedLength),
        error: `The input should be of length ${expectedLength}.`
      });
      return;
    }

    if (!/^[A-Z]+$/.test(guess)) {
      routeTo('4002', {
        level, index, scrambled, count: previousCount,
        last: '-'.repeat(expectedLength),
        error: 'Only use letters for input.'
      });
      return;
    }

    routeTo('4002', {
      level, index, scrambled,
      count: previousCount + 1,
      last: guess
    });
  }
});

window.addEventListener('popstate', render);
render();