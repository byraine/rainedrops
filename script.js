"use strict";

const TOTAL_MS = 25000;
const FIRST_PICKUP_MS = 1300;
const PICKUP_INTERVAL_MS = 2100;
const PICKUP_SHOW_MS = 1650;
const OUTRO_START_MS = 17000;
const OUTRO_DURATION_MS = 6500;
const OUTRO_TEXT = "From tech to education to creativity, my path has always been about connection. Now, through a Master’s in Applied AI for Arts and Design, I’m expanding my skills in AI and technology to help build more thoughtful creative futures.";

const CAREER_MILESTONES = [
  { title: "COX AUTOMOTIVE · TECHNOLOGY", icon: "cox" },
  { title: "BILINGUAL PARENT LIAISON · EDUCATION", icon: "school" },
  { title: "WRITING", icon: "writing" },
  { title: "FILM", icon: "film" },
  { title: "PHOTOGRAPHY", icon: "camera" },
  { title: "CREATIVE DIRECTION", icon: "direction" },
  { title: "ELISAVA · APPLIED AI FOR ARTS AND DESIGN", icon: "elisava" }
];

const ICONS = {
  cox: `<g class="career-symbol"><path d="M-52 20 L-41 2 H32 L49 20 V39 H-52 Z M-41 20 H39 M-29 2 L-18 -14 H14 L29 2"/><circle cx="-30" cy="40" r="8"/><circle cx="29" cy="40" r="8"/><text x="0" y="-22" font-size="22" font-weight="bold" text-anchor="middle">cox</text></g>`,
  school: `<g class="career-symbol"><path d="M-49 -24 L0 -44 L49 -24 V41 H-49 Z M-61 -24 L0 -52 L61 -24 M-10 41 V6 H10 V41 M-36 -10 H-20 V4 H-36 Z M20 -10 H36 V4 H20 Z"/><path d="M-58 48 H58"/><text x="-35" y="-33" font-size="10">EN</text><text x="18" y="-33" font-size="10">ES</text></g>`,
  writing: `<g class="career-symbol"><path d="M-43 -43 H32 L44 -31 V46 H-43 Z M32 -43 V-31 H44 M-28 -12 H24 M-28 0 H29 M-28 12 H14 M-28 24 H20"/><path d="M20 49 L53 -25 L63 -21 L30 52 L20 58 Z" transform="rotate(-16 37 10)"/></g>`,
  film: `<g class="career-symbol"><path d="M-50 -16 H50 V43 H-50 Z M-50 -16 V-39 H50 V-16 Z M-30 -38 L-11 -16 M1 -38 L20 -16 M32 -38 L49 -19 M-27 14 H27 M-27 25 H16"/><path d="M-50 -39 L-55 -50 H42 L49 -39"/></g>`,
  camera: `<g class="career-symbol"><path d="M-54 -25 H-31 L-22 -39 H17 L26 -25 H52 V39 H-54 Z"/><circle cx="0" cy="7" r="25"/><circle cx="0" cy="7" r="14"/><path d="M-41 -12 H-25 M34 -12 H42"/></g>`,
  direction: `<g class="career-symbol"><path d="M-50 -45 H12 V30 H-50 Z M-37 -31 H0 M-37 -17 H-12 M-37 -3 H0 M-37 11 H-20"/><path d="M2 -10 H52 V44 H2 Z M10 9 L23 -1 L35 12 L45 4 M12 31 H40 M34 -43 L39 -28 L55 -24 L39 -20 L34 -5 L29 -20 L14 -24 L29 -28 Z"/></g>`,
  elisava: `<g class="career-symbol"><path d="M-44 -42 H44 V42 H-44 Z M-30 -19 H30 M-30 9 H21 M-30 25 H9"/><text x="0" y="-27" font-size="12" font-weight="bold" text-anchor="middle">ELISAVA</text><path d="M50 -37 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4 z"/></g>`
};

const shipGroup = document.getElementById("ship-group");
const floating = document.getElementById("career-floating");
const objectEl = document.getElementById("career-object");
const phase = document.getElementById("phase");
const phaseIndex = document.getElementById("phase-index");
const phaseTitle = document.getElementById("phase-title");
const closing = document.getElementById("closing");
const copy = document.getElementById("closing-copy");
const replay = document.getElementById("replay");
const bar = document.getElementById("progress-fill");
const progress = document.getElementById("progress-track");
const paper = document.getElementById("paper");
const flightRig=document.getElementById("flight-rig");
const portals=[...document.querySelectorAll(".portal")];
const warpMessage=document.getElementById("warp-message");
const sectorIndicator=document.getElementById("sector-indicator");
const sectorNames=["THE ORIGIN","VIOLET DRIFT","BLUE EXPANSE","EMBER FIELD","THE GREEN BEYOND"];
let sectorNumber=0,warpState=null,warpCooldown=0,pausedStory=0;
let shipPosition={x:0,y:0};

const scene = document.querySelector(".animation");
const starCanvas = document.getElementById("warp-stars");
const starContext = starCanvas.getContext("2d");

let frameId = 0;
let startTime = 0;
let lastMilestone = -1;
let lastCharacters = -1;
let currentMilestoneIndex = -1;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const pointer = { currentX: 0, currentY: 0, targetX: 0, targetY: 0 };
const stars = [];
let lastFrameTime = 0;
let fieldWidth = 0;
let fieldHeight = 0;
let seed = 912734;
function random() { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; }
function newStar(fromTop=false) {
  const depth = .2 + random() * .8;
  return {x: random() * fieldWidth, y: fromTop ? -(20 + random() * fieldHeight) : random() * fieldHeight,
    depth, alpha: .18 + random() * .7, speed: 220 + depth * 1030, size: .55 + depth * 1.5};
}
function resizeField() {
  const rect = scene.getBoundingClientRect();
  fieldWidth = Math.max(1,rect.width); fieldHeight = Math.max(1,rect.height);
  const ratio = Math.min(2, window.devicePixelRatio || 1);
  starCanvas.width = Math.round(fieldWidth * ratio);
  starCanvas.height = Math.round(fieldHeight * ratio);
  starContext.setTransform(ratio,0,0,ratio,0,0);
  stars.length = 0;
  for (let i=0;i<165;i++) stars.push(newStar());
}
function drawStarfield(delta,elapsed) {
  if (!starContext) return;
  starContext.clearRect(0,0,fieldWidth,fieldHeight);
  const boost=(reducedMotion.matches?.08:1.4) + (warpState?1.9:0) + .25*Math.sin(elapsed/1100);
  stars.forEach((star,i) => {
    star.y += star.speed*boost*delta/1000;
    if (star.y > fieldHeight + 65) stars[i] = star = newStar(true);
    const length=7+star.depth*52;
    starContext.beginPath();
    starContext.moveTo(star.x, star.y);
    starContext.lineTo(star.x - pointer.currentX * star.depth*5, star.y - length);
    starContext.strokeStyle = i%6===0 ? `rgba(${["184,162,255","245,145,217","95,211,255","252,170,113","131,244,188"][sectorNumber]},${star.alpha})` : `rgba(250,248,255,${star.alpha})`;
    starContext.lineWidth=star.size;
    starContext.stroke();
  });
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function easeOutQuad(t) {
  return 1 - (1 - t) * (1 - t);
}

function resetObject() {
  objectEl.innerHTML = "";
  floating.setAttribute("transform", "translate(456 521)");
}

function resetAnimation() {
  cancelAnimationFrame(frameId);
  startTime = 0;
  lastFrameTime = 0;
  lastMilestone = -1;
  lastCharacters = -1;
  currentMilestoneIndex = -1;
  phase.style.opacity = "1";
  phaseIndex.textContent = "00 / 07";
  phaseTitle.textContent = "A CURIOUS TRAJECTORY";
  closing.classList.remove("visible");
  copy.textContent = "";
  bar.style.width = "0%";
  progress.setAttribute("aria-valuenow", "0");
  pointer.currentX = 0;
  pointer.currentY = 0;
  pointer.targetX = 0;
  pointer.targetY = 0;
  resetObject();
  applyShipTransform(0, 0, 0);
}

function setMilestone(index) {
  if (index < 0 || index >= CAREER_MILESTONES.length) {
    return;
  }

  if (currentMilestoneIndex !== index) {
    currentMilestoneIndex = index;
    objectEl.innerHTML = ICONS[CAREER_MILESTONES[index].icon];
    phaseIndex.textContent = `${String(index + 1).padStart(2, "0")} / 07`;
    phaseTitle.textContent = CAREER_MILESTONES[index].title;
  }
}

function updateFloatingObject(elapsed) {
  const localIndex = Math.floor((elapsed - FIRST_PICKUP_MS) / PICKUP_INTERVAL_MS);

  if (localIndex < 0 || localIndex >= CAREER_MILESTONES.length) {
    if (elapsed < FIRST_PICKUP_MS || elapsed >= OUTRO_START_MS) {
      resetObject();
    }
    return;
  }

  if (localIndex !== lastMilestone) {
    lastMilestone = localIndex;
    setMilestone(localIndex);
  }

  const segmentStart = FIRST_PICKUP_MS + localIndex * PICKUP_INTERVAL_MS;
  const t = clamp((elapsed - segmentStart) / PICKUP_SHOW_MS, 0, 1);
  const eased = easeInOutCubic(t);

  const startY = 0;
  const endY = -258;
  const y = startY + (endY - startY) * eased;
  const sideWobble = Math.sin(t * Math.PI * 2) * 4;
  const x = sideWobble;
  const scale = 1 - eased * 0.38;
  let opacity = 1;

  if (t < 0.12) {
    opacity = t / 0.12;
  } else if (t > 0.84) {
    opacity = (1 - t) / 0.16;
  }

  // Translate the object along the beam; scale only its own centered shape.
  // Scaling the outer translated group was what pushed stickers sideways.
  floating.setAttribute("transform", `translate(${456 + x} ${521 + y})`);

  const symbol = objectEl.querySelector(".career-symbol");
  if (symbol) {
    symbol.style.opacity = String(clamp(opacity, 0, 1));
    symbol.setAttribute("transform", `scale(${scale})`);
  }
}

function updateOutro(elapsed) {
  if (elapsed < OUTRO_START_MS) {
    return;
  }

  closing.classList.add("visible");
  phase.style.opacity = "0";
  resetObject();

  const chars = Math.min(
    OUTRO_TEXT.length,
    Math.floor(((elapsed - OUTRO_START_MS) / OUTRO_DURATION_MS) * OUTRO_TEXT.length)
  );

  if (chars !== lastCharacters) {
    copy.textContent = OUTRO_TEXT.slice(0, Math.max(0, chars));
    lastCharacters = chars;
  }
}

function applyShipTransform(xShift, yShift, elapsed) {
  // Fast takeoff, then a lively engine pulse to suggest continued upward flight.
  const ascent = -130 * easeOutQuad(clamp(elapsed / 3000,0,1));
  const enginePulse = Math.sin(elapsed / 430) * 10;
  const tilt = xShift * 0.06;
  const transform = `translate(${xShift.toFixed(2)} ${(yShift + ascent + enginePulse).toFixed(2)}) rotate(${tilt.toFixed(2)} 450 270)`;
  shipGroup.setAttribute("transform", transform);
}

function updatePointerFollow(elapsed) {
  pointer.currentX += (pointer.targetX - pointer.currentX) * 0.23;
  pointer.currentY += (pointer.targetY - pointer.currentY) * 0.19;

  const xShift = pointer.currentX * 118;
  const yShift = pointer.currentY * 56;
  applyShipTransform(xShift, yShift, elapsed);
}

scene.addEventListener("pointermove", handlePointerMove);
scene.addEventListener("pointerleave", handlePointerLeave);
scene.addEventListener("touchmove", (event) => {
  if (!event.touches || !event.touches[0]) return;
  handlePointerMove(event.touches[0]);
}, { passive: true });
scene.addEventListener("touchend", handlePointerLeave, { passive: true });
window.addEventListener("keydown", (event) => {
  if (["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(event.key)) {
    if (event.key === "ArrowLeft") pointer.targetX = clamp(pointer.targetX-.28,-1,1);
    if (event.key === "ArrowRight") pointer.targetX = clamp(pointer.targetX+.28,-1,1);
    if (event.key === "ArrowUp") pointer.targetY = clamp(pointer.targetY-.28,-1,1);
    if (event.key === "ArrowDown") pointer.targetY = clamp(pointer.targetY+.28,-1,1);
  }
});
window.addEventListener("resize", resizeField);
resizeField();
replay.addEventListener("click", play);


/* Fullscreen flight — overrides the original contained demo's motion functions. */
function flightRange(){return{x:Math.max(80,fieldWidth/2-Math.min(135,fieldWidth*.22)),y:Math.max(80,fieldHeight*.33)};}
function moveShip(x,y,rotation=0,scale=1,opacity=1){
 const svgHeight=flightRig.getBoundingClientRect().width*870/760;
 const dx=x-fieldWidth/2,dy=y-fieldHeight/2+svgHeight*.05;
 flightRig.style.transform="translate3d(calc(-50% + "+dx.toFixed(1)+"px),calc(-50% + "+dy.toFixed(1)+"px),0) rotate("+rotation.toFixed(1)+"deg) scale("+scale.toFixed(3)+")";
 flightRig.style.opacity=String(opacity);
}
function steerShip(ms){
 pointer.currentX+=(pointer.targetX-pointer.currentX)*.22;
 pointer.currentY+=(pointer.targetY-pointer.currentY)*.22;
 const r=flightRange();
 shipPosition={x:fieldWidth/2+pointer.currentX*r.x,y:fieldHeight/2+pointer.currentY*r.y};
 moveShip(shipPosition.x,shipPosition.y);
 const wobble=Math.sin(ms/370)*7;
 shipGroup.setAttribute("transform","translate(0 "+wobble.toFixed(2)+") rotate("+(pointer.currentX*3).toFixed(2)+" 450 270)");
}
function setSector(n){
 sectorNumber=n;scene.dataset.sector=String(n);
 sectorIndicator.innerHTML="SECTOR "+String(n+1).padStart(2,"0")+" <span>/</span> "+sectorNames[n];
 stars.length=0;for(let i=0;i<190;i++)stars.push(newStar());
}
function enterHole(hole,now){
 if(warpState||now<warpCooldown)return;
 const h=hole.getBoundingClientRect(),b=scene.getBoundingClientRect();
 const x=h.left-b.left+h.width/2,y=h.top-b.top+h.height/2;
 const next=(sectorNumber+(Number(hole.dataset.jump)||1))%sectorNames.length;
 warpState={start:now,x,y,fromX:shipPosition.x,fromY:shipPosition.y,next,changed:false,
  exitX:fieldWidth*(next%2?.38:.62),exitY:fieldHeight*(next%2?.41:.46)};
 scene.style.setProperty("--warp-x",x+"px");scene.style.setProperty("--warp-y",y+"px");
 scene.classList.remove("is-warping");void scene.offsetWidth;
 scene.classList.add("is-warping");
 warpMessage.textContent="SPIRALING THROUGH THE WORMHOLE ...";
 warpMessage.classList.add("visible");
}
function updateWarp(now){
 if(!warpState)return;
 const t=clamp((now-warpState.start)/1750,0,1);
 if(t<.5){
  const e=easeInOutCubic(t*2),r=38*(1-e),angle=e*9.42;
  const x=warpState.fromX+(warpState.x-warpState.fromX)*e+r*(Math.cos(angle)-1);
  const y=warpState.fromY+(warpState.y-warpState.fromY)*e+r*Math.sin(angle);
  moveShip(x,y,reducedMotion.matches?0:e*720,reducedMotion.matches?1:1-e*.94,1-e*.63);
 }else{
  if(!warpState.changed){
   warpState.changed=true;setSector(warpState.next);
   warpMessage.textContent="ARRIVING / "+sectorNames[sectorNumber];
  }
  const e=easeOutQuad((t-.5)*2);
  moveShip(warpState.exitX,warpState.exitY,reducedMotion.matches?0:(e-1)*720,
    reducedMotion.matches?1:.06+e*.94,.35+e*.65);
 }
 if(t>=1){
  const r=flightRange();
  pointer.targetX=pointer.currentX=clamp((warpState.exitX-fieldWidth/2)/r.x,-1,1);
  pointer.targetY=pointer.currentY=clamp((warpState.exitY-fieldHeight/2)/r.y,-1,1);
  warpState=null;warpCooldown=now+2200;
  scene.classList.remove("is-warping");
  warpMessage.classList.remove("visible");
 }
}
function checkHoles(now){
 if(warpState||now<warpCooldown)return;
 const b=scene.getBoundingClientRect();
 for(const hole of portals){
  const h=hole.getBoundingClientRect(),x=h.left-b.left+h.width/2,y=h.top-b.top+h.height/2;
  if(Math.hypot(shipPosition.x-x,shipPosition.y-y)<h.width*.47+16){
    enterHole(hole,now);break;
  }
 }
}
function tick(timestamp){
 if(!startTime)startTime=timestamp;
 const delta=lastFrameTime?Math.min(60,timestamp-lastFrameTime):16;lastFrameTime=timestamp;
 if(warpState)pausedStory+=delta;
 const elapsed=Math.min(TOTAL_MS,Math.max(0,timestamp-startTime-pausedStory));
 const pct=Math.floor(elapsed/TOTAL_MS*100);
 bar.style.width=pct+"%";progress.setAttribute("aria-valuenow",String(pct));
 drawStarfield(delta,timestamp-startTime);
 steerShip(timestamp-startTime);
 if(warpState)updateWarp(timestamp);else checkHoles(timestamp);
 if(elapsed<OUTRO_START_MS)updateFloatingObject(elapsed);
 updateOutro(elapsed);
 if(elapsed>=TOTAL_MS)copy.textContent=OUTRO_TEXT;
 frameId=requestAnimationFrame(tick);
}
function play(){
 resetAnimation();pausedStory=0;warpState=null;warpCooldown=0;
 scene.classList.remove("is-warping");
 flightRig.style.opacity="1";flightRig.style.transform="translate3d(-50%,-50%,0)";
 warpMessage.classList.remove("visible");
 frameId=requestAnimationFrame(tick);
}
function handlePointerMove(event){
 if(warpState)return;
 const b=scene.getBoundingClientRect(),r=flightRange();
 pointer.targetX=clamp((event.clientX-b.left-b.width/2)/r.x,-1,1);
 pointer.targetY=clamp((event.clientY-b.top-b.height/2)/r.y,-1,1);
}
function handlePointerLeave(){}
portals.forEach(portal=>portal.addEventListener("click",()=>{
 const now=performance.now();if(!startTime)startTime=now;enterHole(portal,now);
}));

play();