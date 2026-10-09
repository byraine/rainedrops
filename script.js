"use strict";
const TOTAL_MS=25000, FIRST_PICKUP_MS=1500, PICKUP_INTERVAL_MS=2200, OUTRO_START_MS=17000;
const OUTRO_TEXT="From tech to education to creativity, my path has always been about connection. Now, through a Master’s in Applied AI for Arts and Design, I’m expanding my skills in AI and technology to help build more thoughtful creative futures.";
const CAREER_MILESTONES=[
{title:"COX AUTOMOTIVE · TECHNOLOGY",icon:"cox"},
{title:"BILINGUAL PARENT LIAISON · EDUCATION",icon:"school"},
{title:"WRITING",icon:"writing"},
{title:"FILM",icon:"film"},
{title:"PHOTOGRAPHY",icon:"camera"},
{title:"CREATIVE DIRECTION",icon:"direction"},
{title:"ELISAVA · APPLIED AI FOR ARTS AND DESIGN",icon:"elisava"}
];
const ICONS={
cox:`<g class="career-symbol"><path d="M-52 20 L-41 2 H32 L49 20 V39 H-52 Z M-41 20 H39 M-29 2 L-18 -14 H14 L29 2"/><circle cx="-30" cy="40" r="8"/><circle cx="29" cy="40" r="8"/><text x="0" y="-22" font-size="22" font-weight="bold" text-anchor="middle">cox</text></g>`,
school:`<g class="career-symbol"><path d="M-49 -24 L0 -44 L49 -24 V41 H-49 Z M-61 -24 L0 -52 L61 -24 M-10 41 V6 H10 V41 M-36 -10 H-20 V4 H-36 Z M20 -10 H36 V4 H20 Z"/><path d="M-58 48 H58"/><text x="-35" y="-33" font-size="10">EN</text><text x="18" y="-33" font-size="10">ES</text></g>`,
writing:`<g class="career-symbol"><path d="M-43 -43 H32 L44 -31 V46 H-43 Z M32 -43 V-31 H44 M-28 -12 H24 M-28 0 H29 M-28 12 H14 M-28 24 H20"/><path d="M20 49 L53 -25 L63 -21 L30 52 L20 58 Z" transform="rotate(-16 37 10)"/></g>`,
film:`<g class="career-symbol"><path d="M-50 -16 H50 V43 H-50 Z M-50 -16 V-39 H50 V-16 Z M-30 -38 L-11 -16 M1 -38 L20 -16 M32 -38 L49 -19 M-27 14 H27 M-27 25 H16"/><path d="M-50 -39 L-55 -50 H42 L49 -39"/></g>`,
camera:`<g class="career-symbol"><path d="M-54 -25 H-31 L-22 -39 H17 L26 -25 H52 V39 H-54 Z"/><circle cx="0" cy="7" r="25"/><circle cx="0" cy="7" r="14"/><path d="M-41 -12 H-25 M34 -12 H42"/></g>`,
direction:`<g class="career-symbol"><path d="M-50 -45 H12 V30 H-50 Z M-37 -31 H0 M-37 -17 H-12 M-37 -3 H0 M-37 11 H-20"/><path d="M2 -10 H52 V44 H2 Z M10 9 L23 -1 L35 12 L45 4 M12 31 H40 M34 -43 L39 -28 L55 -24 L39 -20 L34 -5 L29 -20 L14 -24 L29 -28 Z"/></g>`,
elisava:`<g class="career-symbol"><path d="M-44 -42 H44 V42 H-44 Z M-30 -19 H30 M-30 9 H21 M-30 25 H9"/><text x="0" y="-27" font-size="12" font-weight="bold" text-anchor="middle">ELISAVA</text><path d="M50 -37 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4 z"/></g>`
};
const objectEl=document.getElementById("career-object");
const phase=document.getElementById("phase");
const phaseIndex=document.getElementById("phase-index");
const phaseTitle=document.getElementById("phase-title");
const closing=document.getElementById("closing");
const copy=document.getElementById("closing-copy");
const replay=document.getElementById("replay");
const bar=document.getElementById("progress-fill");
const progress=document.getElementById("progress-track");
let frameId=0,startTime=0,lastMilestone=-1,lastCharacters=-1,finished=false;
const reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)");
function reset(){cancelAnimationFrame(frameId);startTime=0;lastMilestone=-1;lastCharacters=-1;finished=false;closing.classList.remove("visible");copy.textContent="";phase.style.opacity="1";phaseTitle.textContent="A CURIOUS TRAJECTORY";phaseIndex.textContent="00 / 07";objectEl.classList.remove("lift");objectEl.innerHTML="";bar.style.width="0%";progress.setAttribute("aria-valuenow","0");}
function showMilestone(i){const item=CAREER_MILESTONES[i];if(!item)return;objectEl.classList.remove("lift");objectEl.innerHTML=ICONS[item.icon];void objectEl.getBoundingClientRect();objectEl.classList.add("lift");phaseIndex.textContent=String(i+1).padStart(2,"0")+" / 07";phaseTitle.textContent=item.title;}
function showOutro(now){closing.classList.add("visible");phase.style.opacity="0";objectEl.classList.remove("lift");objectEl.innerHTML="";const chars=Math.min(OUTRO_TEXT.length,Math.floor(((now-OUTRO_START_MS)/6100)*OUTRO_TEXT.length));if(chars!==lastCharacters){copy.textContent=OUTRO_TEXT.slice(0,Math.max(0,chars));lastCharacters=chars;}}
function tick(timestamp){if(!startTime)startTime=timestamp;const elapsed=Math.min(TOTAL_MS,timestamp-startTime);const pct=Math.floor((elapsed/TOTAL_MS)*100);bar.style.width=pct+"%";progress.setAttribute("aria-valuenow",String(pct));if(elapsed>=OUTRO_START_MS)showOutro(elapsed);else{const i=Math.floor((elapsed-FIRST_PICKUP_MS)/PICKUP_INTERVAL_MS);if(i>=0 && i<CAREER_MILESTONES.length && i!==lastMilestone){lastMilestone=i;showMilestone(i);}}if(elapsed<TOTAL_MS){frameId=requestAnimationFrame(tick);}else{copy.textContent=OUTRO_TEXT;finished=true;}}
function play(){reset();if(reducedMotion.matches){closing.classList.add("visible");phase.style.opacity="0";copy.textContent=OUTRO_TEXT;bar.style.width="100%";progress.setAttribute("aria-valuenow","100");finished=true;return;}frameId=requestAnimationFrame(tick);}
replay.addEventListener("click",play);play();