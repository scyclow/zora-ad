

/*
  qr code
  bar code
  phone number
  address
  website
  eth address
  email address



  Find sexy singles in your area
  Is something missing from your life?
  Do you have a gambling problem? 1-800-.....
  Make Fast Cash Now!
  Cleanse your Chakras with these 7 Sound Bath NFTs
  Investment Advisors don't want you to know about this 1 trick




For Sale



*/

function keyPressed() {
  if (keyCode === 83) {
    saveCanvas(__canvas, 'points-' + Date.now(), 'png');
  }
}


let __vectorRanges
function setup() {
  const scale = 150
  __canvas = createCanvas(16.5*scale, 11.75*scale)

  SCALE_ADJ = 800/800


  W = width/SCALE_ADJ
  H = height/SCALE_ADJ
  L = 4
  R = W-4
  T = 4
  B = H-4
  C = width/2
  M = height/2

  colorMode(HSB, 360, 100, 100)

}


function draw() {

  noLoop()
  scale(SCALE_ADJ)
  // scale(2)
  strokeWeight(4)

  line(L, T, R, T)
  line(L, B, R, B)
  line(L, T, L, B)
  line(R, T, R, B)

  line(C, T+4, C, B-4)


  line(L, H/8, C, H/8)
  line(C/3, H/8, C/3, H/8+C/3)
  line(2*C/3, H/8, 2*C/3, H/8+C/3)
  line(L, H/8+C/3, C, H/8+C/3)
  line(C/2, H/8+C/3, C/2, B)
  line(L, M, C, M)
  line(L, M*1.5, C, M*1.5)
  line(C/2, M, C/2, B)



}











function getXYRotation (deg, radius, cx=0, cy=0) {
  return [
    sin(deg) * radius + cx,
    cos(deg) * radius + cy,
  ]
}


function times(t, fn) {
  const out = []
  for (let i = 0; i < t; i++) out.push(fn(i))
  return out
}

function chance(...chances) {
  const total = chances.reduce((t, c) => t + c[0], 0)
  const seed = rnd()
  let sum = 0
  for (let i = 0; i < chances.length; i++) {
    const val =
      chances[i][0] === true ? 1
      : chances[i][0] === false ? 0
      : chances[i][0]
    sum += val / total
    if (seed <= sum && chances[i][0]) return chances[i][1]
  }
}

const lineStats = (x1, y1, x2, y2) => ({
  d: dist(x1, y1, x2, y2),
  angle: atan2(x2 - x1, y2 - y1)
})
const hfix = h => ((h%360) + 360) % 360
const prb = x => rnd() < x
const sample = (a) => a[int(rnd(a.length))]
const sampleCall = (a) => sample(a)()
const nsrnd = (x, y, mn, mx) => mn + noise(x/15, y/15) * (mx-mn) + rnd(-0.25, 0.25)
const posOrNeg = () => prb(0.5) ? 1 : -1


