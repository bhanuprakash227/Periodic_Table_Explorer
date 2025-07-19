// Full element data in JS format, atomic_number is 1-based.
const elements = [
  {atomic_number:1, symbol:"H",  name:"Hydrogen",     atomic_mass:1.008,    group_block:"nonmetal"},
  {atomic_number:2, symbol:"He", name:"Helium",       atomic_mass:4.0026,   group_block:"noble gas"},
  {atomic_number:3, symbol:"Li", name:"Lithium",      atomic_mass:6.94,     group_block:"alkali metal"},
  {atomic_number:4, symbol:"Be", name:"Beryllium",    atomic_mass:9.0122,   group_block:"alkaline earth metal"},
  {atomic_number:5, symbol:"B",  name:"Boron",        atomic_mass:10.81,    group_block:"metalloid"},
  {atomic_number:6, symbol:"C",  name:"Carbon",       atomic_mass:12.011,   group_block:"nonmetal"},
  {atomic_number:7, symbol:"N",  name:"Nitrogen",     atomic_mass:14.007,   group_block:"nonmetal"},
  {atomic_number:8, symbol:"O",  name:"Oxygen",       atomic_mass:15.999,   group_block:"nonmetal"},
  {atomic_number:9, symbol:"F",  name:"Fluorine",     atomic_mass:18.998,   group_block:"halogen"},
  {atomic_number:10,symbol:"Ne", name:"Neon",         atomic_mass:20.180,   group_block:"noble gas"},
  {atomic_number:11,symbol:"Na", name:"Sodium",       atomic_mass:22.990,   group_block:"alkali metal"},
  {atomic_number:12,symbol:"Mg", name:"Magnesium",    atomic_mass:24.305,   group_block:"alkaline earth metal"},
  {atomic_number:13,symbol:"Al", name:"Aluminum",     atomic_mass:26.982,   group_block:"post-transition metal"},
  {atomic_number:14,symbol:"Si", name:"Silicon",      atomic_mass:28.085,   group_block:"metalloid"},
  {atomic_number:15,symbol:"P",  name:"Phosphorus",   atomic_mass:30.974,   group_block:"nonmetal"},
  {atomic_number:16,symbol:"S",  name:"Sulfur",       atomic_mass:32.06,    group_block:"nonmetal"},
  {atomic_number:17,symbol:"Cl", name:"Chlorine",     atomic_mass:35.45,    group_block:"halogen"},
  {atomic_number:18,symbol:"Ar", name:"Argon",        atomic_mass:39.948,   group_block:"noble gas"},
  {atomic_number:19,symbol:"K",  name:"Potassium",    atomic_mass:39.098,   group_block:"alkali metal"},
  {atomic_number:20,symbol:"Ca", name:"Calcium",      atomic_mass:40.078,   group_block:"alkaline earth metal"},
  {atomic_number:21,symbol:"Sc", name:"Scandium",     atomic_mass:44.956,   group_block:"transition metal"},
  {atomic_number:22,symbol:"Ti", name:"Titanium",     atomic_mass:47.867,   group_block:"transition metal"},
  {atomic_number:23,symbol:"V",  name:"Vanadium",     atomic_mass:50.942,   group_block:"transition metal"},
  {atomic_number:24,symbol:"Cr", name:"Chromium",     atomic_mass:51.996,   group_block:"transition metal"},
  {atomic_number:25,symbol:"Mn", name:"Manganese",    atomic_mass:54.938,   group_block:"transition metal"},
  {atomic_number:26,symbol:"Fe", name:"Iron",         atomic_mass:55.845,   group_block:"transition metal"},
  {atomic_number:27,symbol:"Co", name:"Cobalt",       atomic_mass:58.933,   group_block:"transition metal"},
  {atomic_number:28,symbol:"Ni", name:"Nickel",       atomic_mass:58.693,   group_block:"transition metal"},
  {atomic_number:29,symbol:"Cu", name:"Copper",       atomic_mass:63.546,   group_block:"transition metal"},
  {atomic_number:30,symbol:"Zn", name:"Zinc",         atomic_mass:65.38,    group_block:"transition metal"},
  {atomic_number:31,symbol:"Ga", name:"Gallium",      atomic_mass:69.723,   group_block:"post-transition metal"},
  {atomic_number:32,symbol:"Ge", name:"Germanium",    atomic_mass:72.63,    group_block:"metalloid"},
  {atomic_number:33,symbol:"As", name:"Arsenic",      atomic_mass:74.922,   group_block:"metalloid"},
  {atomic_number:34,symbol:"Se", name:"Selenium",     atomic_mass:78.971,   group_block:"nonmetal"},
  {atomic_number:35,symbol:"Br", name:"Bromine",      atomic_mass:79.904,   group_block:"halogen"},
  {atomic_number:36,symbol:"Kr", name:"Krypton",      atomic_mass:83.798,   group_block:"noble gas"},
  {atomic_number:37,symbol:"Rb", name:"Rubidium",     atomic_mass:85.468,   group_block:"alkali metal"},
  {atomic_number:38,symbol:"Sr", name:"Strontium",    atomic_mass:87.62,    group_block:"alkaline earth metal"},
  {atomic_number:39,symbol:"Y",  name:"Yttrium",      atomic_mass:88.906,   group_block:"transition metal"},
  {atomic_number:40,symbol:"Zr", name:"Zirconium",    atomic_mass:91.224,   group_block:"transition metal"},
  {atomic_number:41,symbol:"Nb", name:"Niobium",      atomic_mass:92.906,   group_block:"transition metal"},
  {atomic_number:42,symbol:"Mo", name:"Molybdenum",   atomic_mass:95.95,    group_block:"transition metal"},
  {atomic_number:43,symbol:"Tc", name:"Technetium",   atomic_mass:98,       group_block:"transition metal"},
  {atomic_number:44,symbol:"Ru", name:"Ruthenium",    atomic_mass:101.07,   group_block:"transition metal"},
  {atomic_number:45,symbol:"Rh", name:"Rhodium",      atomic_mass:102.91,   group_block:"transition metal"},
  {atomic_number:46,symbol:"Pd", name:"Palladium",    atomic_mass:106.42,   group_block:"transition metal"},
  {atomic_number:47,symbol:"Ag", name:"Silver",       atomic_mass:107.87,   group_block:"transition metal"},
  {atomic_number:48,symbol:"Cd", name:"Cadmium",      atomic_mass:112.41,   group_block:"transition metal"},
  {atomic_number:49,symbol:"In", name:"Indium",       atomic_mass:114.82,   group_block:"post-transition metal"},
  {atomic_number:50,symbol:"Sn", name:"Tin",          atomic_mass:118.71,   group_block:"post-transition metal"},
  {atomic_number:51,symbol:"Sb", name:"Antimony",     atomic_mass:121.76,   group_block:"metalloid"},
  {atomic_number:52,symbol:"Te", name:"Tellurium",    atomic_mass:127.60,   group_block:"metalloid"},
  {atomic_number:53,symbol:"I",  name:"Iodine",       atomic_mass:126.90,   group_block:"halogen"},
  {atomic_number:54,symbol:"Xe", name:"Xenon",        atomic_mass:131.29,   group_block:"noble gas"},
  {atomic_number:55,symbol:"Cs", name:"Cesium",       atomic_mass:132.91,   group_block:"alkali metal"},
  {atomic_number:56,symbol:"Ba", name:"Barium",       atomic_mass:137.33,   group_block:"alkaline earth metal"},
  {atomic_number:57,symbol:"La", name:"Lanthanum",    atomic_mass:138.91,   group_block:"lanthanide"},
  {atomic_number:58,symbol:"Ce", name:"Cerium",       atomic_mass:140.12,   group_block:"lanthanide"},
  {atomic_number:59,symbol:"Pr", name:"Praseodymium", atomic_mass:140.91,   group_block:"lanthanide"},
  {atomic_number:60,symbol:"Nd", name:"Neodymium",    atomic_mass:144.24,   group_block:"lanthanide"},
  {atomic_number:61,symbol:"Pm", name:"Promethium",   atomic_mass:145,      group_block:"lanthanide"},
  {atomic_number:62,symbol:"Sm", name:"Samarium",     atomic_mass:150.36,   group_block:"lanthanide"},
  {atomic_number:63,symbol:"Eu", name:"Europium",     atomic_mass:151.96,   group_block:"lanthanide"},
  {atomic_number:64,symbol:"Gd", name:"Gadolinium",   atomic_mass:157.25,   group_block:"lanthanide"},
  {atomic_number:65,symbol:"Tb", name:"Terbium",      atomic_mass:158.93,   group_block:"lanthanide"},
  {atomic_number:66,symbol:"Dy", name:"Dysprosium",   atomic_mass:162.50,   group_block:"lanthanide"},
  {atomic_number:67,symbol:"Ho", name:"Holmium",      atomic_mass:164.93,   group_block:"lanthanide"},
  {atomic_number:68,symbol:"Er", name:"Erbium",       atomic_mass:167.26,   group_block:"lanthanide"},
  {atomic_number:69,symbol:"Tm", name:"Thulium",      atomic_mass:168.93,   group_block:"lanthanide"},
  {atomic_number:70,symbol:"Yb", name:"Ytterbium",    atomic_mass:173.05,   group_block:"lanthanide"},
  {atomic_number:71,symbol:"Lu", name:"Lutetium",     atomic_mass:174.97,   group_block:"lanthanide"},
  {atomic_number:72,symbol:"Hf", name:"Hafnium",      atomic_mass:178.49,   group_block:"transition metal"},
  {atomic_number:73,symbol:"Ta", name:"Tantalum",     atomic_mass:180.95,   group_block:"transition metal"},
  {atomic_number:74,symbol:"W",  name:"Tungsten",     atomic_mass:183.84,   group_block:"transition metal"},
  {atomic_number:75,symbol:"Re", name:"Rhenium",      atomic_mass:186.21,   group_block:"transition metal"},
  {atomic_number:76,symbol:"Os", name:"Osmium",       atomic_mass:190.23,   group_block:"transition metal"},
  {atomic_number:77,symbol:"Ir", name:"Iridium",      atomic_mass:192.22,   group_block:"transition metal"},
  {atomic_number:78,symbol:"Pt", name:"Platinum",     atomic_mass:195.08,   group_block:"transition metal"},
  {atomic_number:79,symbol:"Au", name:"Gold",         atomic_mass:196.97,   group_block:"transition metal"},
  {atomic_number:80,symbol:"Hg", name:"Mercury",      atomic_mass:200.59,   group_block:"transition metal"},
  {atomic_number:81,symbol:"Tl", name:"Thallium",     atomic_mass:204.38,   group_block:"post-transition metal"},
  {atomic_number:82,symbol:"Pb", name:"Lead",         atomic_mass:207.2,    group_block:"post-transition metal"},
  {atomic_number:83,symbol:"Bi", name:"Bismuth",      atomic_mass:208.98,   group_block:"post-transition metal"},
  {atomic_number:84,symbol:"Po", name:"Polonium",     atomic_mass:209,      group_block:"metalloid"},
  {atomic_number:85,symbol:"At", name:"Astatine",     atomic_mass:210,      group_block:"halogen"},
  {atomic_number:86,symbol:"Rn", name:"Radon",        atomic_mass:222,      group_block:"noble gas"},
  {atomic_number:87,symbol:"Fr", name:"Francium",     atomic_mass:223,      group_block:"alkali metal"},
  {atomic_number:88,symbol:"Ra", name:"Radium",       atomic_mass:226,      group_block:"alkaline earth metal"},
  {atomic_number:89,symbol:"Ac", name:"Actinium",     atomic_mass:227,      group_block:"actinide"},
  {atomic_number:90,symbol:"Th", name:"Thorium",      atomic_mass:232.04,   group_block:"actinide"},
  {atomic_number:91,symbol:"Pa", name:"Protactinium", atomic_mass:231.04,   group_block:"actinide"},
  {atomic_number:92,symbol:"U",  name:"Uranium",      atomic_mass:238.03,   group_block:"actinide"},
  {atomic_number:93,symbol:"Np", name:"Neptunium",    atomic_mass:237,      group_block:"actinide"},
  {atomic_number:94,symbol:"Pu", name:"Plutonium",    atomic_mass:244,      group_block:"actinide"},
  {atomic_number:95,symbol:"Am", name:"Americium",    atomic_mass:243,      group_block:"actinide"},
  {atomic_number:96,symbol:"Cm", name:"Curium",       atomic_mass:247,      group_block:"actinide"},
  {atomic_number:97,symbol:"Bk", name:"Berkelium",    atomic_mass:247,      group_block:"actinide"},
  {atomic_number:98,symbol:"Cf", name:"Californium",  atomic_mass:251,      group_block:"actinide"},
  {atomic_number:99,symbol:"Es", name:"Einsteinium",  atomic_mass:252,      group_block:"actinide"},
  {atomic_number:100,symbol:"Fm",name:"Fermium",      atomic_mass:257,      group_block:"actinide"},
  {atomic_number:101,symbol:"Md",name:"Mendelevium",  atomic_mass:258,      group_block:"actinide"},
  {atomic_number:102,symbol:"No",name:"Nobelium",     atomic_mass:259,      group_block:"actinide"},
  {atomic_number:103,symbol:"Lr",name:"Lawrencium",   atomic_mass:266,      group_block:"actinide"},
  {atomic_number:104,symbol:"Rf",name:"Rutherfordium",atomic_mass:267,      group_block:"transition metal"},
  {atomic_number:105,symbol:"Db",name:"Dubnium",      atomic_mass:270,      group_block:"transition metal"},
  {atomic_number:106,symbol:"Sg",name:"Seaborgium",   atomic_mass:271,      group_block:"transition metal"},
  {atomic_number:107,symbol:"Bh",name:"Bohrium",      atomic_mass:270,      group_block:"transition metal"},
  {atomic_number:108,symbol:"Hs",name:"Hassium",      atomic_mass:277,      group_block:"transition metal"},
  {atomic_number:109,symbol:"Mt",name:"Meitnerium",   atomic_mass:278,      group_block:"unknown"},
  {atomic_number:110,symbol:"Ds",name:"Darmstadtium", atomic_mass:281,      group_block:"unknown"},
  {atomic_number:111,symbol:"Rg",name:"Roentgenium",  atomic_mass:282,      group_block:"unknown"},
  {atomic_number:112,symbol:"Cn",name:"Copernicium",  atomic_mass:285,      group_block:"transition metal"},
  {atomic_number:113,symbol:"Nh",name:"Nihonium",     atomic_mass:286,      group_block:"post-transition metal"},
  {atomic_number:114,symbol:"Fl",name:"Flerovium",    atomic_mass:289,      group_block:"post-transition metal"},
  {atomic_number:115,symbol:"Mc",name:"Moscovium",    atomic_mass:290,      group_block:"post-transition metal"},
  {atomic_number:116,symbol:"Lv",name:"Livermorium",  atomic_mass:293,      group_block:"post-transition metal"},
  {atomic_number:117,symbol:"Ts",name:"Tennessine",   atomic_mass:294,      group_block:"halogen"},
  {atomic_number:118,symbol:"Og",name:"Oganesson",    atomic_mass:294,      group_block:"noble gas"}
];

// UI tab logic
function showTab(tabId) {
  document.querySelectorAll('.section').forEach(sec => sec.style.display='none');
  document.getElementById(tabId).style.display = 'block';
  document.getElementById('elementDisplay').innerHTML = '';
  document.getElementById('compareDisplay').innerHTML = '';
  document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('selected'));
  if (tabId === 'lookup-number') document.getElementById('btn-number').classList.add('selected');
  if (tabId === 'lookup-name') document.getElementById('btn-name').classList.add('selected');
  if (tabId === 'compare') document.getElementById('btn-compare').classList.add('selected');
  if (tabId === 'quiz') document.getElementById('btn-quiz').classList.add('selected');
}
window.onload = () => showTab('lookup-number');

// --- Lookup by number
function lookupByNumber() {
  const num = Number(document.getElementById('atomicNumberInput').value.trim());
  const el = elements.find(e => e.atomic_number === num);
  renderElement(el);
}

// --- Lookup by name
function lookupByName() {
  const name = document.getElementById('elementNameInput').value.trim().toLowerCase();
  const el = elements.find(e => e.name.toLowerCase() === name);
  renderElement(el);
}

// --- Compare two
function compareElements() {
  const n1 = document.getElementById('compare1').value.trim().toLowerCase();
  const n2 = document.getElementById('compare2').value.trim().toLowerCase();
  const e1 = elements.find(e => e.name.toLowerCase() === n1);
  const e2 = elements.find(e => e.name.toLowerCase() === n2);
  if (e1 && e2) {
    document.getElementById('compareDisplay').innerHTML =
      elementCardHTML(e1, 1) + elementCardHTML(e2, 2);
  } else {
    document.getElementById('compareDisplay').innerHTML =
      `<div class="card" style="width:94%; margin:auto;text-align:center;">One or both elements not found.</div>`;
  }
}

// --- Quiz mode
let quizIndex=0, score=0, totalQ=5, quizQuestion=null;
function startQuiz() {
  score=0; quizIndex=0;
  nextQuizQuestion();
}
function nextQuizQuestion() {
  if (quizIndex >= totalQ) {
    document.getElementById('quizBlock').innerHTML =
      `<div class="card"><b>Final Score: ${score}/${totalQ}</b></div>
      <button onclick="startQuiz()" style="margin-top:13px;">Retry Quiz</button>`;
    return;
  }
  quizQuestion = elements[Math.floor(Math.random()*elements.length)];
  document.getElementById('quizBlock').innerHTML = `
    <div class="card">
      <div><span class="label">Q${quizIndex+1}:</span> What is the <b>atomic number</b> of <span style="color:#01f1ff"><b>${quizQuestion.name}</b></span>?</div>
      <input type="number" id="quizAnswer" style="margin:8px 0 2px 0; width:110px;" />
      <button onclick="submitQuizAnswer()">Submit</button>
    </div>
  `;
}
function submitQuizAnswer() {
  const ans = Number(document.getElementById('quizAnswer').value);
  if (ans === quizQuestion.atomic_number) {
    score++;
    nextQuizBox('Correct!', true);
  } else {
    nextQuizBox(
      `Wrong. The correct atomic number for <b>${quizQuestion.name}</b> is <b>${quizQuestion.atomic_number}</b>.`,
      false
    );
  }
}
function nextQuizBox(msg, isCorrect) {
  document.getElementById('quizBlock').innerHTML = `
    <div class="card" style="color: ${isCorrect?'#04f7a4':'#fff'};">
      ${msg}
      <br /><button onclick="nextQuizQuestion()" style="margin-top:9px;">Next</button>
    </div>
  `;
  quizIndex++;
}

// --- Render outputs
function renderElement(e) {
  if (!e) {
    document.getElementById('elementDisplay').innerHTML = `<div>Element not found.</div>`;
    return;
  }
  document.getElementById('elementDisplay').innerHTML = elementCardHTML(e);
}

function elementCardHTML(e, compareIndex) {
  let style=`style="margin:4px;width:48%;min-width:190px;display:inline-block;vertical-align:top;"`;
  return `<div class="card" ${compareIndex?style:""}>
      <span class="symbol">${e.symbol}</span>
      <span class="name">${e.name}</span>
      <div class="block">${e.group_block}</div>
      <table>
        <tr><td>Atomic Number</td><td><b>${e.atomic_number}</b></td></tr>
        <tr><td>Atomic Mass</td><td><b>${e.atomic_mass}</b></td></tr>
        <tr><td>Block</td><td>${e.group_block}</td></tr>
      </table>
    </div>`;
}
