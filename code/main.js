const url2 = 'https://app.birdweather.com/api/v1/stations/[STATION_TOKEN]/stats'
const url3 = 'https://app.birdweather.com/api/v1/stations/[STATION_TOKEN]/stats/?period=all'
const url4 = 'https://app.birdweather.com/api/v1/stations/[STATION_TOKEN]/detections/?limit=1'

let req = await new Request(url)
let req2 = await new Request(url2)
let req3 = await new Request(url3)
let req4 = await new Request(url4)

var result = await req.loadJSON()
var dailyresult = await req2.loadJSON()
var lifetimeresult = await req3.loadJSON()
var latestspecies = await req4.loadJSON()

// Create widget
let w = new ListWidget()
w.backgroundColor = new Color("#60a97c");

// #Title

t1 = w.addText("🦉 BirdNet-Pi Station stats");
t1a = w.addText("Species acoustically detected in the past 24 hours");
t1.font = Font.boldSystemFont(24);
t1.textColor  = Color.yellow();
t1a.font = Font.boldSystemFont(12);
t1a.textColor  = Color.white();


w.addSpacer()

t0 = w.addText(dailyresult.detections + " ");
t0a = w.addText("total detections");
t0.font = Font.boldSystemFont(48);
t0.textColor  = Color.yellow();
t0a.font = Font.boldSystemFont(18);
t0a.textColor  = Color.white();
t0b = w.addText(lifetimeresult.detections + " total lifetime detections");
t0b.font = Font.regularSystemFont(14);
t0b.textColor = Color.white();
t0c = w.addText("Latest visitor: " + latestspecies.detections[0].species.commonName);
t0c.font = Font.regularSystemFont(14);
t0c.textColor = Color.white();

w.addSpacer()
t2ai = w.addText("Top birds");
t2ai.font = Font.boldSystemFont(18);
t2ai.textColor  = Color.white();
// #1

const bird1 = (result.species[0].commonName);
const detections1 = (result.species[0].detections.total);

  t2 = w.addText("1. " + bird1 + " - " + detections1 + " times");

t2.textColor  = Color.white();
t2.font = Font.regularSystemFont(14);

// #2

const bird2 = (result.species[1].commonName);
const detections2 = (result.species[1].detections.total);

t3 = w.addText("2. " + bird2 + " - " + detections2 + " times");

t3.textColor  = Color.white();
t3.font = Font.regularSystemFont(14);

//3
  
const bird3 = (result.species[2].commonName);
const detections3 = (result.species[2].detections.total);
  
t4 = w.addText("3. " + bird3 + " - " + detections3 + " times");

t4.textColor  = Color.white();
t4.font = Font.regularSystemFont(14);

//4
  
const bird4 = (result.species[3].commonName);
const detections4 = (result.species[3].detections.total);
  
t4 = w.addText("4. " + bird4 + " - " + detections4 + " times");

t4.textColor  = Color.white();
t4.font = Font.regularSystemFont(14);
//5
  
const bird5 = (result.species[4].commonName);
const detections5 = (result.species[4].detections.total);
  
t4 = w.addText("5. " + bird5 + " - " + detections5 + " times");

t4.textColor  = Color.white();
t4.font = Font.regularSystemFont(14);
// wrap up

if (config.runsInWidget) {
  Script.setWidget(w)
} else {
  w.presentLarge()
}
Script.complete()
