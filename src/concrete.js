import React from "react";
import { db } from "./db.js";

// import { createBrowserHistory } from "history";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   NavLink

// } from "react-router-dom";

// import { thisExpression } from "@babel/types";

// var db = fetchDb();

export default class concrete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numShown: 1,
      zipPricing: 0,
      zipPricingContractor: 0,

      concretes: null,
      delta: 0,
      margin: null,
      location: 0,
      locCalc: 0,
      slope: 0,

      garageFloor: 0,
      garageFloorVal: 0,
      garageFloorValCont: 0,
      squareFeet: null,
      finishType: "Broom",
      finishTypeVal: 0,
      finishTypeValCont: 0,

      hscapeStyle: "Concrete",

      zipRegion: 0,
      zip: 0,

      ergpCosts: 0,
      //mun permits
      pCosts: null,
      iCosts: null,
      pType: "",
      permitTotal: 0,
      // demo
      dType: "",
      dSquareFeet: 0,
      demoTypeVal: 0,
      demoContractorTotal: 0,
      demoTotal: 0,
      // haul away
      haulSquareFeet: 0,
      haulAddSQF: 0,
      haulContractorTotal: 0,
      haulTotal: 0,

      //exca
      excaSquareFeet: 0,
      excaAddSQF: 0,
      excaContractorTotal: 0,
      excaTotal: 0,
      // base layer 1
      bType: "",
      baseCost: 0,
      baseDepth: 0,
      bContractorTotal: 0,
      bTotal: 0,

      // concrete
      concType: 3500,
      concDepth: null,
      psiVal: 168,
      concVal: 0,
      concValCont: 0,
      // rebar: false,

      areas: 1,
      total: 0.0,
      totalCont: 0,
      totalperSqf: 0,
      totalContperSqf: 0,
      customDiv: ["div1"],

      // true means hidden
      display: true, // for munpermit
      dispDisp: "none",
      demo: true,
      demoDisp: "none",
      haul: true,
      haulDisp: "none",
      exca: true,
      excaDisp: "none",
      base: true,
      baseDisp: "none",
      extra: true,
      extraDisp: "none",
      conc2: true,
      conc2Disp: "none",
      conc3: true,
      conc3Disp: "none",
      conc4: true,
      conc4Disp: "none",
      conc5: true,
      conc5Disp: "none"
    };
    document.title = "Concrete Calculator";
  }

  reload() {
    window.location.reload();
  }
  calc(e) {
    e.preventDefault();
    // Finish type value
    this.setState({ total: 0, totalCont: 0 });
    console.log(this.state.haulSquareFeet);
    var sqf = parseInt(this.state.squareFeet, 10);
    var margin = parseInt(this.state.margin, 10);
    var laborPrice = db.regions[this.state.zipRegion].finishLaborMPD;
    var laborSQF = db.regions[this.state.zipRegion].finishLaborSQFMPD;
    if (this.state.finishType === "Salt") {
      var typecalclab = (sqf / laborSQF) * laborPrice + sqf;
      var typeContractor = typecalclab.toFixed(2);
      if (isNaN(typeContractor)) {
        this.setState({ finishTypeValCont: 0 });
      } else {
        this.setState({ finishTypeValCont: typeContractor });
      }

      var finishTypeCalc =
        ((sqf / laborSQF) * laborPrice + sqf) / (1 - margin * 0.01);
    } else {
      var typecalclab = (sqf / laborSQF) * laborPrice;
      var typeContractor = typecalclab.toFixed(2);
      if (isNaN(typeContractor)) {
        this.setState({ finishTypeValCont: 0 });
      } else {
        this.setState({ finishTypeValCont: typeContractor });
      }

      var finishTypeCalc =
        ((sqf / laborSQF) * laborPrice) / (1 - margin * 0.01);
    }

    var theF = finishTypeCalc.toFixed(2);
    if (isNaN(theF)) {
      this.setState({ finishTypeVal: 0 });
    } else {
      this.setState({ finishTypeVal: theF });
    }

    var totalCont = typeContractor;
    var totalCust = theF;

    // conc type val/depth value
    // console.log("psival: " + this.state.psiVal);
    var depth = parseInt(this.state.concDepth, 10);
    var cubicFeet = (depth / 12) * sqf;
    var cubicYards = cubicFeet / 27;
    var conccost = cubicYards * this.state.psiVal + 200;
    var concCostCont = conccost.toFixed(2);
    if (isNaN(concCostCont)) {
      this.setState({ concValCont: 0 });
    } else {
      this.setState({ concValCont: concCostCont });
    }

    var concPrice = conccost / (1 - margin * 0.01);
    var concPriceInput = concPrice.toFixed(2);
    if (isNaN(concPriceInput)) {
      this.setState({ concVal: 0 });
    } else {
      this.setState({ concVal: concPriceInput });
    }

    totalCont = +totalCont + +concCostCont;
    totalCust = +totalCust + +concPriceInput;

    // Location Costs
    var loc = parseInt(this.state.location, 10);
    var added = (loc * sqf) / (1 - margin * 0.01);
    var totAdded = added.toFixed(2);
    if (isNaN(totAdded)) {
      this.setState({ locCalc: 0 });
    } else {
      this.setState({ locCalc: totAdded });
    }

    totalCust = +totalCust + +totAdded;
    // totalCust = totalCust.toFixed(2);
    // this.setState({ total: totalCust });

    // garageFloor
    var binFloor = parseInt(this.state.garageFloor, 10);
    var floorContract =
      binFloor * sqf * db.regions[this.state.zipRegion].gFloor;
    var floorContractRound = floorContract.toFixed(2);
    if (isNaN(floorContractRound)) {
      this.setState({ garageFloorValCont: 0 });
    } else {
      this.setState({ garageFloorValCont: floorContractRound });
    }

    var floorCust = floorContract / (1 - margin * 0.01);
    var floorCustF = floorCust.toFixed(2);
    if (isNaN(floorCustF)) {
      this.setState({ garageFloorVal: 0 });
    } else {
      this.setState({ garageFloorVal: floorCustF });
    }

    totalCont = +totalCont + +floorContractRound;
    totalCust = +totalCust + +floorCustF;

    //municipal permit costs
    var permitcosts = parseInt(this.state.pCosts, 10);
    // console.log(permitcosts);
    var icostss = parseInt(this.state.iCosts, 10);
    // console.log(icostss);
    var totalMunicipal = permitcosts + icostss;
    // console.log(totalMunicipal);
    var totalMunicipalCosts = totalMunicipal / (1 - margin * 0.01);
    var totalMunCosts = totalMunicipalCosts.toFixed(2);
    if (isNaN(totalMunCosts)) {
      this.setState({ permitTotal: 0 });
    } else {
      this.setState({ permitTotal: totalMunCosts });
    }

    if (!isNaN(totalMunCosts)) {
      totalCust = +totalCust + +totalMunCosts;
      // console.log(totalCust);
    }

    // demo
    var demosqf = parseInt(this.state.dSquareFeet, 10);
    // console.log(demosqf);
    var demoPricing = parseFloat(this.state.demoTypeVal, 10);
    // console.log(demoPricing);
    var demoThick = demosqf * depth * 144;
    // console.log(demoThick);
    var demoVolCubeFT = (demoThick / 1728) * demoPricing;
    var democontract = demoVolCubeFT.toFixed(2);
    if (isNaN(democontract)) {
      this.setState({ demoContractorTotal: 0 });
    } else {
      this.setState({ demoContractorTotal: democontract });
    }

    var totDemCost = (demoVolCubeFT / (1 - margin * 0.01)).toFixed(2);
    if (isNaN(totDemCost)) {
      this.setState({ demoTotal: 0 });
    } else {
      this.setState({ demoTotal: totDemCost });
    }

    totalCont = +totalCont + +democontract;
    totalCust = +totalCust + +totDemCost;
    // console.log(totalCust);

    //exca
    var excasquareFT = parseInt(this.state.excaSquareFeet, 10);
    var addexcasquareFT = parseInt(this.state.excaAddSQF, 10);
    var excaVolume = (excasquareFT * depth * 144) / 1728;
    var excaVolYards = excaVolume / 27;
    var excaLabCost = 90 * (excaVolYards + addexcasquareFT);
    var excaLabTotal = excaLabCost.toFixed(2);
    if (isNaN(excaLabTotal)) {
      this.setState({ excaContractorTotal: 0 });
    } else {
      this.setState({ excaContractorTotal: excaLabTotal });
    }

    var excaCost = excaLabCost / (1 - margin * 0.01);
    var excaTotals = excaCost.toFixed(2);
    if (isNaN(excaTotals)) {
      this.setState({ excaTotal: 0 });
    } else {
      this.setState({ excaTotal: excaTotals });
    }

    totalCont = +totalCont + +excaLabTotal;
    totalCust = +totalCust + +excaTotals;
    // console.log(totalCust);

    // haul
    var haulsquareFT = parseInt(this.state.haulSquareFeet, 10);
    console.log(this.state.haulSquareFeet);
    var addhaulsquareFT = parseInt(this.state.haulAddSQF, 10);
    var haulVolume = (haulsquareFT * depth * 144) / 1728;
    var haulVolYards = haulVolume / 27;
    if (this.state.hscapeStyle === "Concrete") {
      if (excaLabCost) {
        var haulConCost = 111 * (haulVolYards + addhaulsquareFT) - excaLabCost;
        var haulConCostTotal = haulConCost.toFixed(2);
        if (isNaN(haulConCostTotal)) {
          this.setState({ haulContractorTotal: 0 });
        } else {
          this.setState({ haulContractorTotal: haulConCostTotal });
        }

        var haulCost =
          (111 * (haulVolYards + addhaulsquareFT) - excaLabCost) /
          (1 - margin * 0.01);
        var haulTotals = haulCost.toFixed(2);
        if (isNaN(haulTotals)) {
          this.setState({ haulTotal: 0 });
        } else {
          this.setState({ haulTotal: haulTotals });
        }

        totalCont = +totalCont + +haulConCostTotal;
        totalCust = +totalCust + +haulTotals;
        // console.log(totalCust);
      } else {
        var haulConCost = 111 * (haulVolYards + addhaulsquareFT);
        var haulConCostTotal = haulConCost.toFixed(2);
        if (isNaN(haulConCostTotal)) {
          this.setState({ haulContractorTotal: 0 });
        } else {
          this.setState({ haulContractorTotal: haulConCostTotal });
        }
        var haulCost =
          (111 * (haulVolYards + addhaulsquareFT)) / (1 - margin * 0.01);
        var haulTotals = haulCost.toFixed(2);
        if (isNaN(haulTotals)) {
          this.setState({ haulTotal: 0 });
        } else {
          this.setState({ haulTotal: haulTotals });
        }
        totalCont = +totalCont + +haulConCostTotal;
        totalCust = +totalCust + +haulTotals;
        // console.log(totalCust);
      }
    }

    //base 1
    if (!this.state.base) {
      var baseoneDepth = parseInt(this.state.baseDepth, 10);
      // console.log(baseoneDepth);
      var basestyle = parseInt(this.state.baseCost, 10);
      var baseVolume = (baseoneDepth / 12) * sqf;
      var unroundbaseVolumeYards = baseVolume / 27;
      var baseVolumeYards = Math.round(unroundbaseVolumeYards);
      var baseDelivery = unroundbaseVolumeYards * 10 + 150;
      if (this.state.bType === "#2 Base Rock") {
        var baselabCost = unroundbaseVolumeYards * basestyle + baseDelivery;
      } else {
        var baselabCost = baseVolumeYards * basestyle + 200;
      }
      var baselaborcost = baselabCost.toFixed(2);
      if (isNaN(baselaborcost)) {
        this.setState({ bContractorTotal: baselaborcost });
      } else {
        this.setState({ bContractorTotal: baselaborcost });
      }

      var baseCosts = baselabCost / (1 - margin * 0.01);
      var baseoneTotal = baseCosts.toFixed(2);
      if (isNaN(baseoneTotal)) {
        this.setState({ bTotal: 0 });
      } else {
        this.setState({ bTotal: baseoneTotal });
      }

      totalCont = +totalCont + +baselaborcost;
      totalCust = +totalCust + +baseoneTotal;
      // console.log(totalCust);
    }

    // zipcode additional pricing
    if (db.zipcodes[this.state.zip].addCost > 0) {
      // console.log(db.zipcodes[this.state.zip].addCost);
      var zipAdditional = db.zipcodes[this.state.zip].addCost * sqf;
      var zipAddCont = zipAdditional.toFixed(2);
      if (isNaN(zipAddCont)) {
        this.setState({ zipPricingContractor: 0 });
      } else {
        this.setState({ zipPricingContractor: zipAddCont });
      }

      var zipAdd = (zipAdditional / (1 - margin * 0.01)).toFixed(2);
      if (isNaN(zipAdd)) {
        this.setState({ zipPricing: 0 });
      } else {
        this.setState({ zipPricing: zipAdd });
      }

      totalCont = +totalCont + +zipAddCont;
      totalCust = +totalCust + +zipAdd;
      // console.log(totalCust);
    }

    // base one total
    // if(isNaN(this.state.bTotal))

    // var theTotal =
    // parseInt(this.state.bTotal, 10) +
    // parseInt(this.state.haulTotal, 10) +
    // parseInt(this.state.haulTotal, 10) +
    // parseInt(this.state.haulTotal, 10) +
    // parseInt(this.state.haulTotal, 10) +
    // parseInt(this.state.haulTotal, 10) +
    // parseInt(this.state.haulTotal, 10) +
    // parseInt(this.state.haulTotal, 10) +
    // parseInt(this.state.haulTotal, 10) +
    // parseInt(this.state.haulTotal, 10) +
    // parseInt(this.state.haulTotal, 10);
    //   this.state.bTotal +
    // this.state.haulTotal +
    // this.state.excaTotal +
    //   this.state.demoTotal +
    //   this.state.permitTotal +
    //   this.state.garageFloorVal +
    //   this.state.locCalc +
    //   this.state.concVal +
    //   this.state.finishTypeVal +
    //   this.state.ergpCosts +
    //   this.state.zipPricing;

    // console.log(theTotal);
    // this.setState({ total: theTotal });
    totalCont = totalCont.toFixed(2);
    if (isNaN(totalCont)) {
      this.setState({ totalCont: 0 });
    } else {
      this.setState({ totalCont: totalCont });
    }
    totalCust = totalCust.toFixed(2);
    if (isNaN(totalCust)) {
      this.setState({ total: 0 });
    } else {
      this.setState({ total: totalCust });
    }
  }

  addArea = event => {
    if (this.state.numShown === 1) {
      this.setState({
        conc2: false,
        conc2Disp: "block",
        numShown: 2
      });
    } else if (this.state.numShown === 2) {
      this.setState({
        conc3: false,
        conc3Disp: "block",
        numShown: 3
      });
    } else if (this.state.numShown === 3) {
      this.setState({
        conc4: false,
        conc4Disp: "block",
        numShown: 4
      });
    } else if (this.state.numShown === 4) {
      this.setState({
        conc5: false,
        conc5Disp: "block",
        numShown: 5
      });
    }
  };

  deleteArea = event => {
    console.log(this.state.numShown);
    if (this.state.numShown === 2) {
      this.setState({
        conc2: true,
        conc2Disp: "none",
        numShown: 1
      });
    } else if (this.state.numShown === 3) {
      this.setState({
        conc3: true,
        conc3Disp: "none",
        numShown: 2
      });
    } else if (this.state.numShown === 4) {
      this.setState({
        conc4: true,
        conc4Disp: "none",
        numShown: 3
      });
    } else if (this.state.numShown === 5) {
      this.setState({
        conc5: true,
        conc5Disp: "none",
        numShown: 4
      });
    }
  };

  show(obj) {
    // console.log(obj);
    if (obj === "display") {
      // this.setState({ nums: 0 });
      this.setState({ display: false });
      this.setState({ dispDisp: "block" });
    } else if (obj === "demo") {
      // this.setState({ num: 1 });
      this.setState({ demo: false });
      this.setState({ demoDisp: "block" });
    } else if (obj === "haul") {
      // this.setState({ num: 2 });
      this.setState({ haul: false });
      this.setState({ haulDisp: "block" });
    } else if (obj === "exca") {
      // this.setState({ num: 3 });
      this.setState({ exca: false });
      this.setState({ excaDisp: "block" });
    } else if (obj === "base") {
      // this.setState({ num: 4 });
      this.setState({ base: false });
      this.setState({ baseDisp: "block" });
    } else if (obj === "extra") {
      // this.setState({ num: 4 });
      this.setState({ extra: false });
      this.setState({ extraDisp: "block" });
    }
  }

  hide(obj) {
    if (obj === "display") {
      this.setState({ display: true });
      this.setState({ dispDisp: "none" });
      return;
    } else if (obj === "demo") {
      this.setState({
        demo: true,
        demoDisp: "none",
        dSquareFeet: 0
        // demoContractorTotal: 0,
        // demoTotal: 0
      });
      // this.setState({ demoDisp: "none" });
      // this.setState({ dSquareFeet: 0 });
    } else if (obj === "haul") {
      console.log("hide");
      this.setState({
        haul: true,
        haulDisp: "none",
        haulSquareFeet: 0,
        haulAddSQF: 0
      });
      // document.getElementById("haulreset").reset();
      // event.target.value = 0;
      // this.handleHaul.value = "";
    } else if (obj === "exca") {
      this.setState({
        exca: true,
        excaDisp: "none",
        excaSquareFeet: 0,
        excaAddSQF: 0
        // excaContractorTotal: 0,
        // excaTotal: 0
      });
    } else if (obj === "base") {
      this.setState({
        base: true,
        baseDisp: "none",
        baseDepth: 0,
        bContractorTotal: 0,
        bTotal: 0
      });
    } else if (obj === "extra") {
      this.setState({ extra: true });
      this.setState({ extraDisp: "none" });
    }
  }

  // Handling Input changes
  handleConcTypeChange = event => {
    if (event.target.value === "twofive") {
      this.setState({
        psiVal: db.regions[this.state.zipRegion].twofivepsi,
        concType: 2500
      });
    } else if (event.target.value === "threeoh") {
      this.setState({
        psiVal: db.regions[this.state.zipRegion].threeopsi,
        concType: 3000
      });
    } else if (event.target.value === "threefive") {
      this.setState({
        psiVal: db.regions[this.state.zipRegion].threefivepsi,
        concType: 3500
      });
    } else if (event.target.value === "fouroh") {
      this.setState({
        psiVal: db.regions[this.state.zipRegion].fouropsi,
        concType: 4000
      });
    } else if (event.target.value === "fourfive") {
      this.setState({
        psiVal: db.regions[this.state.zipRegion].fourfivepsi,
        concType: 4500
      });
    }
  };
  handleSQFChange = event => {
    this.setState({ squareFeet: event.target.value });
  };

  handleZipChange = event => {
    console.log(event.target.value);
    var numZip = parseInt(event.target.value, 10);
    var zipId = null;
    var zipC = db.zipcodes.filter(val => {
      // console.log(val.zip);
      if (val.zip === numZip) {
        console.log(val.zip);
        console.log(val);
        console.log(val.region);

        zipId = val.id - 1;
      }
    });

    this.setState({ zip: zipId });
    if (zipId) {
      if (db.zipcodes[zipId].region === "South Bay") {
        this.setState({ zipRegion: 0 });
        console.log(this.state.zipRegion);
      } else if (db.zipcodes[zipId].region === "East Bay") {
        this.setState({ zipRegion: 1 });
      } else if (db.zipcodes[zipId].region === "North Bay") {
        this.setState({ zipRegion: 2 });
      } else if (db.zipcodes[zipId].region === "Sacramento") {
        this.setState({ zipRegion: 3 });
      } else if (db.zipcodes[zipId].region === "Far East Bay") {
        this.setState({ zipRegion: 4 });
      } else if (db.zipcodes[zipId].region === "Far South Bay") {
        this.setState({ zipRegion: 5 });
      }
    }
  };
  handleMarginChange = event => {
    this.setState({ margin: event.target.value });
  };
  handleCDepthChange = event => {
    this.setState({ concDepth: event.target.value });
  };

  handleFinishType = event => {
    this.setState({ finishType: event.target.value });
  };
  handlePermCost = event => {
    if (event.target.value === "yes") {
      this.setState({ ergpCosts: 950 });
    } else if (event.target.value === "no") {
      this.setState({ ergpCosts: 0 });
    }
  };
  handleYard = event => {
    if (event.target.value === "back") {
      this.setState({ location: 2 });
    } else if (event.target.value === "front") {
      this.setState({ location: 0 });
    }
  };
  handleSlope = event => {
    alert("Custom Quote Required for Projects on a Slope");
    this.setState({ slope: 0 });
  };
  handleGarage = event => {
    if (event.target.value === "yes") {
      this.setState({ garageFloor: 1 });
    } else if (event.target.value === "no") {
      this.setState({ garageFloor: 0 });
    }
  };
  handleMunicipalPermit = event => {
    console.log(event.target.id);
    if (event.target.id === "pcost") {
      this.setState({ pCosts: event.target.value });
      console.log(this.state.pCosts);
    } else if (event.target.id === "icost") {
      this.setState({ iCosts: event.target.value });
      console.log(this.state.iCosts);
    } else if (event.target.id === "permittype") {
      this.setState({ pType: event.target.value });
    }
  };
  handleDemoChange = event => {
    if (event.target.value === "conc") {
      this.setState({ dType: "Concrete", demoTypeVal: 1 });
    } else if (event.target.value === "asph") {
      this.setState({ dType: "Asphalt", demoTypeVal: 0.75 });
    } else if (event.target.value === "hsoil") {
      this.setState({ dType: "Hard Soil", demoTypeVal: 0.5 });
    } else if (event.target.id === "dsqf") {
      this.setState({ dSquareFeet: event.target.value });
    }
  };
  handleHaul = event => {
    if (event.target.id === "haulsqff") {
      this.setState({ haulSquareFeet: event.target.value });
    } else if (event.target.id === "hauladdsqff") {
      this.setState({ haulAddSQF: event.target.value });
    }
  };
  handleExca = event => {
    if (event.target.id === "excasqf") {
      this.setState({ excaSquareFeet: event.target.value });
    } else if (event.target.id === "excaaddsqf") {
      this.setState({ excaAddSQF: event.target.value });
    }
  };
  handleBase = event => {
    if (event.target.id === "2br") {
      this.setState({ bType: "#2 Base Rock", baseCost: 40 });
    } else if (event.target.id === "3cgran") {
      this.setState({ bType: "3/4 Minus Crushed Granite", baseCost: 45 });
    } else if (event.target.id === "5cgran") {
      this.setState({ bType: "5/8 Minus Crushed Granite", baseCost: 50 });
    } else if (event.target.id === "csand") {
      this.setState({ bType: "Concrete Sand", baseCost: 35 });
    } else if (event.target.id === "dgray") {
      this.setState({ bType: "DG Grey", baseCost: 55 });
    } else if (event.target.id === "dgrays") {
      this.setState({ bType: "DG Grey Stabilized", baseCost: 155 });
    } else if (event.target.id === "dgold") {
      this.setState({ bType: "DG Gold", baseCost: 90 });
    } else if (event.target.id === "dgolds") {
      this.setState({ bType: "DG Gold Stabilized", baseCost: 190 });
    } else if (event.target.id === "bdepth") {
      this.setState({ baseDepth: event.target.value });
    }
  };

  // addArea = event => {
  //   this.setState({
  //     concretes: this.state.concretes.concat(concretes[0])
  //   });
  // };

  render() {
    const styles = {
      stylesDisp: {
        display: this.state.dispDisp
      }
    };
    const { stylesDisp } = styles;

    const stylestwo = {
      stylesDemo: {
        display: this.state.demoDisp
      }
    };
    const { stylesDemo } = stylestwo;

    const stylesthree = {
      stylesHaul: {
        display: this.state.haulDisp
      }
    };
    const { stylesHaul } = stylesthree;

    const stylesfour = {
      stylesExca: {
        display: this.state.excaDisp
      }
    };
    const { stylesExca } = stylesfour;

    const stylesfive = {
      stylesBase: {
        display: this.state.baseDisp
      }
    };
    const { stylesBase } = stylesfive;

    const stylessix = {
      stylesExtra: {
        display: this.state.extraDisp
      }
    };
    const { stylesExtra } = stylessix;

    // conc 2 display
    const concArea2 = {
      conc2: {
        display: this.state.conc2Disp
      }
    };
    const { conc2 } = concArea2;
    // conc 3 display
    const concArea3 = {
      conc3: {
        display: this.state.conc3Disp
      }
    };
    const { conc3 } = concArea3;

    const concArea4 = {
      conc4: {
        display: this.state.conc4Disp
      }
    };
    const { conc4 } = concArea4;

    const concArea5 = {
      conc5: {
        display: this.state.conc5Disp
      }
    };
    const { conc5 } = concArea5;

    const concretes = [
      <div id="one">
        <h3>Concrete Calculator</h3>
        <br></br>
        <div id="entries">
          <div id="concretes">
            <h4>Concrete Area 1</h4>
            {/* <h4>Concrete Area 1</h4> */}
            <form id="values" onSubmit={this.handleSubmit}>
              <div id="options">
                <label>Zip Code: </label>
                <input
                  type="text"
                  id="zip"
                  placeholder="Ex: 95120"
                  // value={this.state.zip}
                  onChange={this.handleZipChange}
                />
                *
              </div>
              <div id="options">
                <label>Square Feet: </label>

                <input
                  type="text"
                  id="sqft"
                  placeholder="ex: 500"
                  value={this.state.squareFeet}
                  onChange={this.handleSQFChange}
                />
              </div>
              <div id="options">
                <label>Concrete Type: </label>
                <br></br>
                <br></br>
                <input
                  type="radio"
                  id="twofive"
                  name="psi"
                  value="twofive"
                  onChange={this.handleConcTypeChange}
                />
                <label htmlFor="twofive"> 2500 PSI </label>

                <input
                  type="radio"
                  id="threeoh"
                  name="psi"
                  value="threeoh"
                  onChange={this.handleConcTypeChange}
                />
                <label htmlFor="threeoh"> 3000 PSI </label>

                <input
                  type="radio"
                  id="threefive"
                  name="psi"
                  value="threefive"
                  onChange={this.handleConcTypeChange}
                  defaultChecked
                />
                <label htmlFor="threefive"> 3500 PSI </label>

                <input
                  type="radio"
                  id="fouroh"
                  name="psi"
                  value="fouroh"
                  onChange={this.handleConcTypeChange}
                />
                <label htmlFor="fouroh"> 4000 PSI </label>

                <input
                  type="radio"
                  id="fourfive"
                  name="psi"
                  value="fourfive"
                  onChange={this.handleConcTypeChange}
                />
                <label htmlFor="ourfive"> 4500 PSI </label>
                <br></br>
                <br></br>
                <label>Concrete Depth in Inches: </label>
                <input
                  type="text"
                  id="depth"
                  placeholder="Ex: 5"
                  value={this.state.concDepth}
                  onChange={this.handleCDepthChange}
                />
              </div>
              <div id="options">
                <label>Margin: </label>

                <input
                  type="text"
                  id="sqft"
                  placeholder="ex: 18"
                  value={this.state.margin}
                  onChange={this.handleMarginChange}
                />
              </div>
              <div id="options">
                <label>Location: </label>

                <input
                  type="radio"
                  id="front"
                  name="location"
                  value="front"
                  onClick={this.handleYard}
                  defaultChecked
                />
                <label htmlFor="front"> Front Yard </label>
                <input
                  type="radio"
                  id="back"
                  name="location"
                  value="back"
                  onClick={this.handleYard}
                />
                <label htmlFor="back"> Back Yard</label>
              </div>
              <div id="options">
                <label>Is it on a Slope? </label>

                <input
                  type="radio"
                  id="yes"
                  name="slope"
                  value="yes"
                  checked={this.state.slope}
                  onClick={this.handleSlope}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="slope"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options">
                <label>Is it a Garage Floor? </label>

                <input
                  type="radio"
                  id="yes"
                  name="gfloor"
                  value="yes"
                  onClick={this.handleGarage}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="gfloor"
                  value="no"
                  onClick={this.handleGarage}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>

              <div id="options">
                <label>
                  Ergeon Permit Acquisition and Inspections Visits?{" "}
                </label>

                <input
                  type="radio"
                  id="yes"
                  name="permacq"
                  value="yes"
                  onClick={this.handlePermCost}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="permacq"
                  value="no"
                  // onClick={() => this.show()}
                  onClick={this.handlePermCost}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>

              <div id="options">
                <label>
                  Municipal Permit Acquisition and Inspections Visits?{" "}
                </label>

                <input
                  type="radio"
                  id="yes"
                  name="munpermacq"
                  value="yes"
                  onClick={() => this.show("display")}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="munpermacq"
                  value="no"
                  onClick={() => this.hide("display")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
                <br></br>
                <div id="municipal" style={stylesDisp}>
                  <br></br>
                  <label>Permit Costs and Fees to the City: </label>
                  <input
                    type="text"
                    id="pcost"
                    placeholder="Ex: 1000"
                    value={this.state.pCosts}
                    onChange={this.handleMunicipalPermit}
                  />
                  <br></br>
                  <br></br>
                  <label>Inspection Costs and Fees to the City: </label>
                  <input
                    type="text"
                    id="icost"
                    placeholder="Ex: 1000"
                    value={this.state.iCosts}
                    onChange={this.handleMunicipalPermit}
                  />
                  <br></br>
                  <br></br>
                  <label>Description of Permit and Inspections: </label>
                  <input
                    type="text"
                    id="permittype"
                    placeholder="Ex: Building Permit"
                    value={this.state.pType}
                    onChange={this.handleMunicipalPermit}
                  />
                </div>
              </div>

              <div id="options">
                <label>Demolition Required? </label>

                <input
                  type="radio"
                  id="yes"
                  name="demo"
                  value="yes"
                  onClick={() => this.show("demo")}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="demo"
                  value="no"
                  onClick={() => this.hide("demo")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>

                <div id="demoo" style={stylesDemo}>
                  <br></br>
                  <label>Demo Type: </label>
                  <input
                    type="radio"
                    id="conc"
                    name="demoo"
                    value="conc"
                    onClick={this.handleDemoChange}
                  />
                  <label htmlFor="conc"> Concrete </label>
                  <input
                    type="radio"
                    id="asph"
                    name="demoo"
                    value="asph"
                    onClick={this.handleDemoChange}
                  />
                  <label htmlFor="asph"> Asphalt </label>
                  <input
                    type="radio"
                    id="hsoil"
                    name="demoo"
                    value="hsoil"
                    onClick={this.handleDemoChange}
                  />
                  <label htmlFor="hsoil"> Hard Soil </label>
                  <br></br>
                  <br></br>
                  <label>Demo Area Square Footage: </label>
                  <input
                    type="text"
                    id="dsqf"
                    placeholder={this.state.squareFeet}
                    value={this.state.dSquareFeet}
                    onChange={this.handleDemoChange}
                  />
                </div>
              </div>

              <div id="options">
                <label>Haul Away Required? </label>

                <input
                  type="radio"
                  id="yes"
                  name="haul"
                  value="yes"
                  onClick={() => this.show("haul")}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="haul"
                  value="no"
                  onClick={() => this.hide("haul")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>

                <div id="haull" style={stylesHaul}>
                  <br></br>
                  <label>
                    Haul Away Square Footage (default is full demo area):
                  </label>
                  <input
                    type="text"
                    id="haulsqff"
                    placeholder={this.state.squareFeet}
                    value={this.state.haulSquareFeet}
                    onChange={this.handleHaul}
                    // ref={el => (this.handleHaul = el)}
                  />
                  <br></br>
                  <br></br>
                  <label>Additional Haul Away Volume in Cubic Yards: </label>
                  <input
                    type="text"
                    id="hauladdsqff"
                    placeholder="Ex: 50"
                    value={this.state.haulAddSQF}
                    onChange={this.handleHaul}
                  />
                </div>
              </div>

              <div id="options">
                <label>Excavation Required? </label>

                <input
                  type="radio"
                  id="yes"
                  name="exca"
                  value="yes"
                  onClick={() => this.show("exca")}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="exca"
                  value="no"
                  onClick={() => this.hide("exca")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
                <div id="excaa" style={stylesExca}>
                  <br></br>
                  <label>
                    Excavation Area Square Footage (default is full demo area):
                  </label>
                  <input
                    type="text"
                    id="excasqf"
                    placeholder={this.state.squareFeet}
                    value={this.state.excaSquareFeet}
                    onChange={this.handleExca}
                  />
                  <br></br>
                  <br></br>
                  <label>
                    Additional Excavation Area Volume in Cubic Yards:{" "}
                  </label>
                  <input
                    type="text"
                    id="excaaddsqf"
                    placeholder="Ex: 50"
                    value={this.state.excaAddSQF}
                    onChange={this.handleExca}
                  />
                </div>
              </div>
              <div id="options">
                <label>Finish Type: </label>

                <input
                  type="radio"
                  id="broom"
                  name="finish"
                  value="Broom"
                  onClick={this.handleFinishType}
                  defaultChecked
                />
                <label htmlFor="broom"> Broom</label>

                <input
                  type="radio"
                  id="salt"
                  name="finish"
                  value="Salt"
                  onClick={this.handleFinishType}
                />
                <label htmlFor="salt"> Salt</label>
              </div>
              <div id="options">
                <label>Base Layer Required? </label>

                <input
                  type="radio"
                  id="yes"
                  name="base"
                  value="yes"
                  onClick={() => this.show("base")}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="base"
                  value="no"
                  onClick={() => this.hide("base")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>

                <div id="basee" style={stylesBase}>
                  <br></br>
                  <label>Base Layer Material: </label>
                  <input
                    type="radio"
                    id="2br"
                    name="basee"
                    value="2br"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="2br"> #2 Base Rock </label>
                  <input
                    type="radio"
                    id="3cgran"
                    name="basee"
                    value="3cgran"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="3cgran"> 3/4 Minus Crushed Granite </label>
                  <input
                    type="radio"
                    id="5cgran"
                    name="basee"
                    value="5cgran"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="5cgran"> 5/8 Minus Crushed Granite </label>
                  <input
                    type="radio"
                    id="csand"
                    name="basee"
                    value="csand"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="csand"> Concrete Sand </label>
                  <input
                    type="radio"
                    id="dgray"
                    name="basee"
                    value="dgray"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="dgray"> DG Grey </label>
                  <input
                    type="radio"
                    id="dgrays"
                    name="basee"
                    value="dgrays"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="dgrays"> DG Grey Stabilized </label>
                  <input
                    type="radio"
                    id="dgold"
                    name="basee"
                    value="dgold"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="dgold"> DG Gold </label>
                  <input
                    type="radio"
                    id="dgolds"
                    name="basee"
                    value="dgolds"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="dgolds"> DG Gold Stabilized </label>
                  <br></br>
                  <br></br>
                  <label>Base Layer Depth in Inches: </label>
                  <input
                    type="text"
                    id="bdepth"
                    placeholder="Ex: 4"
                    value={this.state.baseDepth}
                    onChange={this.handleBase}
                  />
                  <br></br>
                  <br></br>
                  <button>Additional Base Layer</button>
                </div>
              </div>

              <div id="options">
                <label>Additional Requests? </label>

                <input
                  type="radio"
                  id="yes"
                  name="addReq"
                  value="yes"
                  onClick={() => this.show("extra")}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="addReq"
                  value="no"
                  onClick={() => this.hide("extra")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Rebar Required? </label>

                <input type="radio" id="yes" name="rebar" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="rebar"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Concrete Admixture Required? </label>

                <input type="radio" id="yes" name="admix" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="admix"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Stamped Finish Requested? </label>

                <input type="radio" id="yes" name="stamped" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="stamped"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Stained Finish Requested? </label>

                <input
                  type="radio"
                  id="yes"
                  name="stained"
                  value="yes"
                  defaultChecked
                />
                <label htmlFor="yes"> Yes </label>

                <input type="radio" id="no" name="stained" value="no" />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Sealant Requested? </label>

                <input type="radio" id="yes" name="sealant" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="sealant"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Exposed Aggregate Finish Requested? </label>

                <input type="radio" id="yes" name="aggra" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="aggra"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Underlayment Required? </label>

                <input type="radio" id="yes" name="underla" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="underla"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Drainage Required? </label>

                <input type="radio" id="yes" name="drain" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="drain"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Steps Requested? </label>

                <input type="radio" id="yes" name="steps" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="steps"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Landing Requested?</label>

                <input type="radio" id="yes" name="landing" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="landing"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Curbing: </label>

                <input
                  type="radio"
                  id="straight"
                  name="curbing"
                  value="straight"
                />
                <label htmlFor="straight"> Straight </label>

                <input type="radio" id="curved" name="curbing" value="curved" />
                <label htmlFor="curved"> Curved</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Retaining Wall Required? </label>

                <input type="radio" id="yes" name="retain" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="retain"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>
                  Driveway Approach with Sidewalk and Gutter Requested?
                </label>

                <input type="radio" id="yes" name="approach" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="approach"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Electrical Conduit Requested? </label>

                <input type="radio" id="yes" name="conduit" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="conduit"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Additional Labor Required? </label>

                <input type="radio" id="yes" name="labor" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="labor"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Custom Request? </label>

                <input type="radio" id="yes" name="labor" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="labor"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>

              <br></br>

              <button onClick={e => this.calc(e)}>Calculate</button>

              <br></br>
            </form>
          </div>
        </div>
        <div id="math">
          <div id="concretes">
            <h4>Customer Price</h4>
            {/* <div id="totals">
              <label>Full Customer Price: ${this.state.total}</label>
            </div> */}
            <div id="totals">
              <label id="bob">
                Description of {this.state.hscapeStyle} Area 1 -{" "}
                {this.state.squareFeet} sq ft:
              </label>
              <br></br>
              <br></br>
              <label id="bob">
                Ergeon Permit Acquisition Cost: ${this.state.ergpCosts}
              </label>
              <br></br>
              <label id="bob" style={stylesDisp}>
                Municipal Permit Costs - {this.state.pType}: $
                {this.state.permitTotal}
              </label>
              {/* <br></br> */}
              <label id="bob" style={stylesDemo}>
                Demo - {this.state.dSquareFeet} Square Feet - {this.state.dType}
                : ${this.state.demoTotal}
              </label>
              <label id="bob" style={stylesHaul}>
                Haul - {this.state.haulSquareFeet} Square Feet: $
                {this.state.haulTotal}
              </label>
              <label id="bob" style={stylesExca}>
                Exca - {this.state.excaSquareFeet} Square Feet: $
                {this.state.excaTotal}
              </label>

              {/* <br></br> */}
              <label id="bob">
                Finish Type - {this.state.finishType}: $
                {this.state.finishTypeVal}
              </label>
              <br></br>
              <label id="bob" style={stylesBase}>
                Base Layer 1 - {this.state.baseDepth} Inches -{this.state.bType}
                : ${this.state.bTotal}
              </label>
              <label id="bob">
                Concrete Type - {this.state.concDepth} Inches -
                {this.state.concType} PSI: ${this.state.concVal}
              </label>
              <br></br>
              <label id="bob">Back Yard Costs: ${this.state.locCalc}</label>
              <br></br>
              <label id="bob">
                Garage Labor Costs: ${this.state.garageFloorVal}
              </label>
              <br></br>
              <label id="bob">Regional Pricing: ${this.state.zipPricing}</label>
              <br></br>

              <label id="bob">Project Size Delta: ${this.state.delta}</label>
              <br></br>
              <br></br>
              <label id="bob">
                Total Hardscape Price to Customer: ${this.state.total}
              </label>
              <br></br>
              <label id="bob">
                Total Hardscape Price Per Square Foot : $
                {this.state.totalperSqf}
              </label>
            </div>
          </div>
          <div id="concretes">
            <h4>Contractor Cost</h4>
            {/* <div id="totals">
              <label>Full Contractor Cost: ${this.state.total}</label>
            </div> */}
            <div id="totals">
              <label id="bob">
                Description of {this.state.hscapeStyle} Area 1 -{" "}
                {this.state.squareFeet} sq ft:
              </label>
              <br></br>
              <br></br>
              {/* <label id="bob">
          Ergeon Permit Acquisition Cost: ${this.state.ergpCosts}
        </label>
        <br></br>
        <label id="bob" style={stylesDisp}>
          Municipal Permit Costs - {this.state.pType}: $
          {this.state.permitTotal}
        </label> */}
              {/* <br></br> */}
              <label id="bob" style={stylesDemo}>
                Demo - {this.state.dSquareFeet} Square Feet - {this.state.dType}
                : ${this.state.demoContractorTotal}
              </label>
              <label id="bob" style={stylesHaul}>
                Haul - {this.state.haulSquareFeet} Square Feet: $
                {this.state.haulContractorTotal}
              </label>
              <label id="bob" style={stylesExca}>
                Exca - {this.state.excaSquareFeet} Square Feet: $
                {this.state.excaContractorTotal}
              </label>

              {/* <br></br> */}
              <label id="bob">
                Finish Type - {this.state.finishType}: $
                {this.state.finishTypeValCont}
              </label>
              <br></br>
              <label id="bob" style={stylesBase}>
                Base Layer 1 - {this.state.baseDepth} Inches -{this.state.bType}
                : ${this.state.bContractorTotal}
              </label>
              <label id="bob">
                Concrete Type - {this.state.concDepth} Inches -
                {this.state.concType} PSI: ${this.state.concValCont}
              </label>
              <br></br>
              <label id="bob">Back Yard Costs: ${this.state.locCalc}</label>
              <br></br>
              <label id="bob">
                Garage Labor Costs: ${this.state.garageFloorValCont}
              </label>
              <br></br>
              <label id="bob">
                Regional Pricing: ${this.state.zipPricingContractor}
              </label>

              <br></br>
              <label id="bob">Project Size Delta: ${this.state.delta}</label>
              <br></br>
              <br></br>
              <label id="bob">
                Total Hardscape Costs Paid to Contractor: $
                {this.state.totalCont}
              </label>
              <br></br>
              <label id="bob">
                Total Hardscape Price Per Square Foot : $
                {this.state.totalperSqf}
              </label>
            </div>
          </div>
        </div>
      </div>,
      <div id="two" style={conc2}>
        <div id="entries">
          <div id="concretes">
            <h4>Concrete Area 2</h4>
            {/* <h4>Concrete Area 1</h4> */}
            <form id="values" onSubmit={this.handleSubmit}>
              <div id="options">
                <label>Zip Code: </label>

                <input
                  type="text"
                  id="zip"
                  placeholder="Ex: 95120"
                  value={this.state.zip}
                  onChange={this.handleZipChange}
                />
              </div>
              <div id="options">
                <label>Square Feet: </label>

                <input
                  type="text"
                  id="sqft"
                  placeholder="ex: 500"
                  value={this.state.squareFeet}
                  onChange={this.handleSQFChange}
                />
              </div>
              <div id="options">
                <label>Concrete Type: </label>
                <br></br>
                <br></br>
                <input
                  type="radio"
                  id="twofive"
                  name="psi"
                  value="twofive"
                  onChange={this.handleConcTypeChange}
                />
                <label htmlFor="twofive"> 2500 PSI </label>

                <input
                  type="radio"
                  id="threeoh"
                  name="psi"
                  value="threeoh"
                  onChange={this.handleConcTypeChange}
                />
                <label htmlFor="threeoh"> 3000 PSI </label>

                <input
                  type="radio"
                  id="threefive"
                  name="psi"
                  value="threefive"
                  onChange={this.handleConcTypeChange}
                  defaultChecked
                />
                <label htmlFor="threefive"> 3500 PSI </label>

                <input
                  type="radio"
                  id="fouroh"
                  name="psi"
                  value="fouroh"
                  onChange={this.handleConcTypeChange}
                />
                <label htmlFor="fouroh"> 4000 PSI </label>

                <input
                  type="radio"
                  id="fourfive"
                  name="psi"
                  value="fourfive"
                  onChange={this.handleConcTypeChange}
                />
                <label htmlFor="ourfive"> 4500 PSI </label>
                <br></br>
                <br></br>
                <label>Concrete Depth in Inches: </label>
                <input
                  type="text"
                  id="depth"
                  placeholder="Ex: 5"
                  value={this.state.concDepth}
                  onChange={this.handleCDepthChange}
                />
              </div>
              <div id="options">
                <label>Margin: </label>

                <input
                  type="text"
                  id="sqft"
                  placeholder="ex: 18"
                  value={this.state.margin}
                  onChange={this.handleMarginChange}
                />
              </div>
              <div id="options">
                <label>Location: </label>

                <input
                  type="radio"
                  id="front"
                  name="location"
                  value="front"
                  onClick={this.handleYard}
                  defaultChecked
                />
                <label htmlFor="front"> Front Yard </label>
                <input
                  type="radio"
                  id="back"
                  name="location"
                  value="back"
                  onClick={this.handleYard}
                />
                <label htmlFor="back"> Back Yard</label>
              </div>
              <div id="options">
                <label>Is it on a Slope? </label>

                <input
                  type="radio"
                  id="yes"
                  name="slope"
                  value="yes"
                  checked={this.state.slope}
                  onClick={this.handleSlope}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="slope"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options">
                <label>Is it a Garage Floor? </label>

                <input
                  type="radio"
                  id="yes"
                  name="gfloor"
                  value="yes"
                  onClick={this.handleGarage}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="gfloor"
                  value="no"
                  onClick={this.handleGarage}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>

              <div id="options">
                <label>
                  Ergeon Permit Acquisition and Inspections Visits?{" "}
                </label>

                <input
                  type="radio"
                  id="yes"
                  name="permacq"
                  value="yes"
                  onClick={this.handlePermCost}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="permacq"
                  value="no"
                  // onClick={() => this.show()}
                  onClick={this.handlePermCost}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>

              <div id="options">
                <label>
                  Municipal Permit Acquisition and Inspections Visits?{" "}
                </label>

                <input
                  type="radio"
                  id="yes"
                  name="munpermacq"
                  value="yes"
                  onClick={() => this.show("display")}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="munpermacq"
                  value="no"
                  onClick={() => this.hide("display")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
                <br></br>
                <div id="municipal" style={stylesDisp}>
                  <br></br>
                  <label>Permit Costs and Fees to the City: </label>
                  <input
                    type="text"
                    id="pcost"
                    placeholder="Ex: 1000"
                    value={this.state.pCosts}
                    onChange={this.handleMunicipalPermit}
                  />
                  <br></br>
                  <br></br>
                  <label>Inspection Costs and Fees to the City: </label>
                  <input
                    type="text"
                    id="icost"
                    placeholder="Ex: 1000"
                    value={this.state.iCosts}
                    onChange={this.handleMunicipalPermit}
                  />
                  <br></br>
                  <br></br>
                  <label>Description of Permit and Inspections: </label>
                  <input
                    type="text"
                    id="permittype"
                    placeholder="Ex: Building Permit"
                    value={this.state.pType}
                    onChange={this.handleMunicipalPermit}
                  />
                </div>
              </div>

              <div id="options">
                <label>Demolition Required? </label>

                <input
                  type="radio"
                  id="yes"
                  name="demo"
                  value="yes"
                  onClick={() => this.show("demo")}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="demo"
                  value="no"
                  onClick={() => this.hide("demo")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>

                <div id="demoo" style={stylesDemo}>
                  <br></br>
                  <label>Demo Type: </label>
                  <input
                    type="radio"
                    id="conc"
                    name="demoo"
                    value="conc"
                    onClick={this.handleDemoChange}
                  />
                  <label htmlFor="conc"> Concrete </label>
                  <input
                    type="radio"
                    id="asph"
                    name="demoo"
                    value="asph"
                    onClick={this.handleDemoChange}
                  />
                  <label htmlFor="asph"> Asphalt </label>
                  <input
                    type="radio"
                    id="hsoil"
                    name="demoo"
                    value="hsoil"
                    onClick={this.handleDemoChange}
                  />
                  <label htmlFor="hsoil"> Hard Soil </label>
                  <br></br>
                  <br></br>
                  <label>Demo Area Square Footage: </label>
                  <input
                    type="text"
                    id="dsqf"
                    placeholder={this.state.squareFeet}
                    // value={this.state.dSquareFeet}
                    onChange={this.handleDemoChange}
                  />
                </div>
              </div>

              <div id="options">
                <label>Haul Away Required? </label>

                <input
                  type="radio"
                  id="yes"
                  name="haul"
                  value="yes"
                  onClick={() => this.show("haul")}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="haul"
                  value="haul"
                  onClick={() => this.hide("haul")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>

                <div id="haull" style={stylesHaul}>
                  <br></br>
                  <form id="haulreset">
                    <label>
                      Haul Away Square Footage (default is full demo area):
                    </label>
                    <input
                      type="text"
                      id="haulsqff"
                      placeholder={this.state.squareFeet}
                      value={this.state.haulsquareFT}
                      onChange={this.handleHaul}
                    />
                    <br></br>
                    <br></br>
                    <label>Additional Haul Away Volume in Cubic Yards: </label>
                    <input
                      type="text"
                      id="hauladdsqff"
                      placeholder="Ex: 50"
                      onChange={this.handleHaul}
                    />
                  </form>
                </div>
              </div>

              <div id="options">
                <label>Excavation Required? </label>

                <input
                  type="radio"
                  id="yes"
                  name="exca"
                  value="yes"
                  onClick={() => this.show("exca")}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="exca"
                  value="no"
                  onClick={() => this.hide("exca")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
                <div id="excaa" style={stylesExca}>
                  <br></br>
                  <label>
                    Excavation Area Square Footage (default is full demo area):
                  </label>
                  <input
                    type="text"
                    id="excasqf"
                    placeholder={this.state.squareFeet}
                    onChange={this.handleExca}
                  />
                  <br></br>
                  <br></br>
                  <label>
                    Additional Excavation Area Volume in Cubic Yards:{" "}
                  </label>
                  <input
                    type="text"
                    id="excaaddsqf"
                    placeholder="Ex: 50"
                    onChange={this.handleExca}
                  />
                </div>
              </div>
              <div id="options">
                <label>Finish Type: </label>

                <input
                  type="radio"
                  id="broom"
                  name="finish"
                  value="Broom"
                  onClick={this.handleFinishType}
                  defaultChecked
                />
                <label htmlFor="broom"> Broom</label>

                <input
                  type="radio"
                  id="salt"
                  name="finish"
                  value="Salt"
                  onClick={this.handleFinishType}
                />
                <label htmlFor="salt"> Salt</label>
              </div>
              <div id="options">
                <label>Base Layer Required? </label>

                <input
                  type="radio"
                  id="yes"
                  name="base"
                  value="yes"
                  onClick={() => this.show("base")}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="base"
                  value="no"
                  onClick={() => this.hide("base")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>

                <div id="basee" style={stylesBase}>
                  <br></br>
                  <label>Base Layer Material: </label>
                  <input
                    type="radio"
                    id="2br"
                    name="basee"
                    value="2br"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="2br"> #2 Base Rock </label>
                  <input
                    type="radio"
                    id="3cgran"
                    name="basee"
                    value="3cgran"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="3cgran"> 3/4 Minus Crushed Granite </label>
                  <input
                    type="radio"
                    id="5cgran"
                    name="basee"
                    value="5cgran"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="5cgran"> 5/8 Minus Crushed Granite </label>
                  <input
                    type="radio"
                    id="csand"
                    name="basee"
                    value="csand"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="csand"> Concrete Sand </label>
                  <input
                    type="radio"
                    id="dgray"
                    name="basee"
                    value="dgray"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="dgray"> DG Grey </label>
                  <input
                    type="radio"
                    id="dgrays"
                    name="basee"
                    value="dgrays"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="dgrays"> DG Grey Stabilized </label>
                  <input
                    type="radio"
                    id="dgold"
                    name="basee"
                    value="dgold"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="dgold"> DG Gold </label>
                  <input
                    type="radio"
                    id="dgolds"
                    name="basee"
                    value="dgolds"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="dgolds"> DG Gold Stabilized </label>
                  <br></br>
                  <br></br>
                  <label>Base Layer Depth in Inches: </label>
                  <input
                    type="text"
                    id="bdepth"
                    placeholder="Ex: 4"
                    onChange={this.handleBase}
                  />
                  <br></br>
                  <br></br>
                  <button>Additional Base Layer</button>
                </div>
              </div>

              <div id="options">
                <label>Additional Requests? </label>

                <input
                  type="radio"
                  id="yes"
                  name="addReq"
                  value="yes"
                  onClick={() => this.show("extra")}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="addReq"
                  value="no"
                  onClick={() => this.hide("extra")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Rebar Required? </label>

                <input type="radio" id="yes" name="rebar" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="rebar"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Concrete Admixture Required? </label>

                <input type="radio" id="yes" name="admix" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="admix"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Stamped Finish Requested? </label>

                <input type="radio" id="yes" name="stamped" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="stamped"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Stained Finish Requested? </label>

                <input
                  type="radio"
                  id="yes"
                  name="stained"
                  value="yes"
                  defaultChecked
                />
                <label htmlFor="yes"> Yes </label>

                <input type="radio" id="no" name="stained" value="no" />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Sealant Requested? </label>

                <input type="radio" id="yes" name="sealant" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="sealant"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Exposed Aggregate Finish Requested? </label>

                <input type="radio" id="yes" name="aggra" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="aggra"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Underlayment Required? </label>

                <input type="radio" id="yes" name="underla" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="underla"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Drainage Required? </label>

                <input type="radio" id="yes" name="drain" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="drain"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Steps Requested? </label>

                <input type="radio" id="yes" name="steps" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="steps"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Landing Requested?</label>

                <input type="radio" id="yes" name="landing" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="landing"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Curbing: </label>

                <input
                  type="radio"
                  id="straight"
                  name="curbing"
                  value="straight"
                />
                <label htmlFor="straight"> Straight </label>

                <input type="radio" id="curved" name="curbing" value="curved" />
                <label htmlFor="curved"> Curved</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Retaining Wall Required? </label>

                <input type="radio" id="yes" name="retain" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="retain"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>
                  Driveway Approach with Sidewalk and Gutter Requested?
                </label>

                <input type="radio" id="yes" name="approach" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="approach"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Electrical Conduit Requested? </label>

                <input type="radio" id="yes" name="conduit" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="conduit"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Additional Labor Required? </label>

                <input type="radio" id="yes" name="labor" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="labor"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Custom Request? </label>

                <input type="radio" id="yes" name="labor" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="labor"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* <br></br> */}

              <br></br>
              <button onClick={() => this.reload()}>Reset</button>
              <label> </label>
              <button onClick={() => this.calc()}>Calculate</button>

              <br></br>
            </form>
          </div>
        </div>
        <div id="math">
          <div id="concretes">
            <h4>Customer Price</h4>
            <div id="totals">
              <label>Full Customer Price: ${this.state.total}</label>
            </div>
            <div id="totals">
              <label id="bob">
                Description of {this.state.hscapeStyle} Area 2 -{" "}
                {this.state.squareFeet} sq ft:
              </label>
              <br></br>
              <br></br>
              <label id="bob">
                Ergeon Permit Acquisition Cost: ${this.state.ergpCosts}
              </label>
              <br></br>
              <label id="bob" style={stylesDisp}>
                Municipal Permit Costs - {this.state.pType}: $
                {this.state.permitTotal}
              </label>
              {/* <br></br> */}
              <label id="bob" style={stylesDemo}>
                Demo - {this.state.dSquareFeet} Square Feet - {this.state.dType}
                : ${this.state.demoTotal}
              </label>
              <label id="bob" style={stylesHaul}>
                Haul - {this.state.haulSquareFeet} Square Feet: $
                {this.state.haulTotal}
              </label>
              <label id="bob" style={stylesExca}>
                Exca - {this.state.excaSquareFeet} Square Feet: $
                {this.state.excaTotal}
              </label>

              {/* <br></br> */}
              <label id="bob">
                Finish Type - {this.state.finishType}: $
                {this.state.finishTypeVal}
              </label>
              <br></br>
              <label id="bob" style={stylesBase}>
                Base Layer 1 - {this.state.baseDepth} Inches -{this.state.bType}
                : ${this.state.bTotal}
              </label>
              <label id="bob">
                Concrete Type - {this.state.concDepth} Inches -
                {this.state.concType} PSI: ${this.state.concVal}
              </label>
              <br></br>
              <label id="bob">Back Yard Costs: ${this.state.locCalc}</label>
              <br></br>
              <label id="bob">
                Garage Labor Costs: ${this.state.garageFloorVal}
              </label>

              <br></br>
              <label id="bob">Project Size Delta: ${this.state.delta}</label>
              <br></br>
              <br></br>
              <label id="bob">
                Total Hardscape Price to Customer: ${this.state.total}
              </label>
              <br></br>
              <label id="bob">
                Total Hardscape Price Per Square Foot : $
                {this.state.totalperSqf}
              </label>
            </div>
          </div>
          <div id="concretes">
            <h4>Contractor Cost</h4>
            <div id="totals">
              <label>Full Contractor Cost: ${this.state.total}</label>
            </div>
            <div id="totals">
              <label id="bob">
                Description of {this.state.hscapeStyle} Area 2 -{" "}
                {this.state.squareFeet} sq ft:
              </label>
              <br></br>
              <br></br>
              {/* <label id="bob">
        Ergeon Permit Acquisition Cost: ${this.state.ergpCosts}
      </label>
      <br></br>
      <label id="bob" style={stylesDisp}>
        Municipal Permit Costs - {this.state.pType}: $
        {this.state.permitTotal}
      </label> */}
              {/* <br></br> */}
              <label id="bob" style={stylesDemo}>
                Demo - {this.state.dSquareFeet} Square Feet - {this.state.dType}
                : ${this.state.demoContractorTotal}
              </label>
              <label id="bob" style={stylesHaul}>
                Haul - {this.state.haulSquareFeet} Square Feet: $
                {this.state.haulContractorTotal}
              </label>
              <label id="bob" style={stylesExca}>
                Exca - {this.state.excaSquareFeet} Square Feet: $
                {this.state.excaContractorTotal}
              </label>

              {/* <br></br> */}
              <label id="bob">
                Finish Type - {this.state.finishType}: $
                {this.state.finishTypeValCont}
              </label>
              <br></br>
              <label id="bob" style={stylesBase}>
                Base Layer 1 - {this.state.baseDepth} Inches -{this.state.bType}
                : ${this.state.bContractorTotal}
              </label>
              <label id="bob">
                Concrete Type - {this.state.concDepth} Inches -
                {this.state.concType} PSI: ${this.state.concValCont}
              </label>
              <br></br>
              <label id="bob">Back Yard Costs: ${this.state.locCalc}</label>
              <br></br>
              <label id="bob">
                Garage Labor Costs: ${this.state.garageFloorValCont}
              </label>

              <br></br>
              <label id="bob">Project Size Delta: ${this.state.delta}</label>
              <br></br>
              <br></br>
              <label id="bob">
                Total Hardscape Price to Customer: ${this.state.total}
              </label>
              <br></br>
              <label id="bob">
                Total Hardscape Price Per Square Foot : $
                {this.state.totalperSqf}
              </label>
            </div>
          </div>
        </div>
      </div>,
      <div id="three" style={conc3}>
        <div id="entries">
          <div id="concretes">
            <h4>Concrete Area 3</h4>
            {/* <h4>Concrete Area 1</h4> */}
            <form id="values" onSubmit={this.handleSubmit}>
              <div id="options">
                <label>Zip Code: </label>

                <input
                  type="text"
                  id="zip"
                  placeholder="Ex: 95120"
                  value={this.state.zip}
                  onChange={this.handleZipChange}
                />
              </div>
              <div id="options">
                <label>Square Feet: </label>

                <input
                  type="text"
                  id="sqft"
                  placeholder="ex: 500"
                  value={this.state.squareFeet}
                  onChange={this.handleSQFChange}
                />
              </div>
              <div id="options">
                <label>Concrete Type: </label>
                <br></br>
                <br></br>
                <input
                  type="radio"
                  id="twofive"
                  name="psi"
                  value="twofive"
                  onChange={this.handleConcTypeChange}
                />
                <label htmlFor="twofive"> 2500 PSI </label>

                <input
                  type="radio"
                  id="threeoh"
                  name="psi"
                  value="threeoh"
                  onChange={this.handleConcTypeChange}
                />
                <label htmlFor="threeoh"> 3000 PSI </label>

                <input
                  type="radio"
                  id="threefive"
                  name="psi"
                  value="threefive"
                  onChange={this.handleConcTypeChange}
                  defaultChecked
                />
                <label htmlFor="threefive"> 3500 PSI </label>

                <input
                  type="radio"
                  id="fouroh"
                  name="psi"
                  value="fouroh"
                  onChange={this.handleConcTypeChange}
                />
                <label htmlFor="fouroh"> 4000 PSI </label>

                <input
                  type="radio"
                  id="fourfive"
                  name="psi"
                  value="fourfive"
                  onChange={this.handleConcTypeChange}
                />
                <label htmlFor="ourfive"> 4500 PSI </label>
                <br></br>
                <br></br>
                <label>Concrete Depth in Inches: </label>
                <input
                  type="text"
                  id="depth"
                  placeholder="Ex: 5"
                  value={this.state.concDepth}
                  onChange={this.handleCDepthChange}
                />
              </div>
              <div id="options">
                <label>Margin: </label>

                <input
                  type="text"
                  id="sqft"
                  placeholder="ex: 18"
                  value={this.state.margin}
                  onChange={this.handleMarginChange}
                />
              </div>
              <div id="options">
                <label>Location: </label>

                <input
                  type="radio"
                  id="front"
                  name="location"
                  value="front"
                  onClick={this.handleYard}
                  defaultChecked
                />
                <label htmlFor="front"> Front Yard </label>
                <input
                  type="radio"
                  id="back"
                  name="location"
                  value="back"
                  onClick={this.handleYard}
                />
                <label htmlFor="back"> Back Yard</label>
              </div>
              <div id="options">
                <label>Is it on a Slope? </label>

                <input
                  type="radio"
                  id="yes"
                  name="slope"
                  value="yes"
                  checked={this.state.slope}
                  onClick={this.handleSlope}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="slope"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options">
                <label>Is it a Garage Floor? </label>

                <input
                  type="radio"
                  id="yes"
                  name="gfloor"
                  value="yes"
                  onClick={this.handleGarage}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="gfloor"
                  value="no"
                  onClick={this.handleGarage}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>

              <div id="options">
                <label>
                  Ergeon Permit Acquisition and Inspections Visits?{" "}
                </label>

                <input
                  type="radio"
                  id="yes"
                  name="permacq"
                  value="yes"
                  onClick={this.handlePermCost}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="permacq"
                  value="no"
                  // onClick={() => this.show()}
                  onClick={this.handlePermCost}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>

              <div id="options">
                <label>
                  Municipal Permit Acquisition and Inspections Visits?{" "}
                </label>

                <input
                  type="radio"
                  id="yes"
                  name="munpermacq"
                  value="yes"
                  onClick={() => this.show("display")}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="munpermacq"
                  value="no"
                  onClick={() => this.hide("display")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
                <br></br>
                <div id="municipal" style={stylesDisp}>
                  <br></br>
                  <label>Permit Costs and Fees to the City: </label>
                  <input
                    type="text"
                    id="pcost"
                    placeholder="Ex: 1000"
                    value={this.state.pCosts}
                    onChange={this.handleMunicipalPermit}
                  />
                  <br></br>
                  <br></br>
                  <label>Inspection Costs and Fees to the City: </label>
                  <input
                    type="text"
                    id="icost"
                    placeholder="Ex: 1000"
                    value={this.state.iCosts}
                    onChange={this.handleMunicipalPermit}
                  />
                  <br></br>
                  <br></br>
                  <label>Description of Permit and Inspections: </label>
                  <input
                    type="text"
                    id="permittype"
                    placeholder="Ex: Building Permit"
                    value={this.state.pType}
                    onChange={this.handleMunicipalPermit}
                  />
                </div>
              </div>

              <div id="options">
                <label>Demolition Required? </label>

                <input
                  type="radio"
                  id="yes"
                  name="demo"
                  value="yes"
                  onClick={() => this.show("demo")}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="demo"
                  value="no"
                  onClick={() => this.hide("demo")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>

                <div id="demoo" style={stylesDemo}>
                  <br></br>
                  <label>Demo Type: </label>
                  <input
                    type="radio"
                    id="conc"
                    name="demoo"
                    value="conc"
                    onClick={this.handleDemoChange}
                  />
                  <label htmlFor="conc"> Concrete </label>
                  <input
                    type="radio"
                    id="asph"
                    name="demoo"
                    value="asph"
                    onClick={this.handleDemoChange}
                  />
                  <label htmlFor="asph"> Asphalt </label>
                  <input
                    type="radio"
                    id="hsoil"
                    name="demoo"
                    value="hsoil"
                    onClick={this.handleDemoChange}
                  />
                  <label htmlFor="hsoil"> Hard Soil </label>
                  <br></br>
                  <br></br>
                  <label>Demo Area Square Footage: </label>
                  <input
                    type="text"
                    id="dsqf"
                    placeholder={this.state.squareFeet}
                    // value={this.state.dSquareFeet}
                    onChange={this.handleDemoChange}
                  />
                </div>
              </div>

              <div id="options">
                <label>Haul Away Required? </label>

                <input
                  type="radio"
                  id="yes"
                  name="haul"
                  value="yes"
                  onClick={() => this.show("haul")}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="haul"
                  value="no"
                  onClick={() => this.hide("haul")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>

                <div id="haull" style={stylesHaul}>
                  <br></br>
                  <label>
                    Haul Away Square Footage (default is full demo area):
                  </label>
                  <input
                    type="text"
                    id="haulsqff"
                    placeholder={this.state.squareFeet}
                    onChange={this.handleHaul}
                  />
                  <br></br>
                  <br></br>
                  <label>Additional Haul Away Volume in Cubic Yards: </label>
                  <input
                    type="text"
                    id="hauladdsqff"
                    placeholder="Ex: 50"
                    onChange={this.handleHaul}
                  />
                </div>
              </div>

              <div id="options">
                <label>Excavation Required? </label>

                <input
                  type="radio"
                  id="yes"
                  name="exca"
                  value="yes"
                  onClick={() => this.show("exca")}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="exca"
                  value="no"
                  onClick={() => this.hide("exca")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
                <div id="excaa" style={stylesExca}>
                  <br></br>
                  <label>
                    Excavation Area Square Footage (default is full demo area):
                  </label>
                  <input
                    type="text"
                    id="excasqf"
                    placeholder={this.state.squareFeet}
                    onChange={this.handleExca}
                  />
                  <br></br>
                  <br></br>
                  <label>
                    Additional Excavation Area Volume in Cubic Yards:{" "}
                  </label>
                  <input
                    type="text"
                    id="excaaddsqf"
                    placeholder="Ex: 50"
                    onChange={this.handleExca}
                  />
                </div>
              </div>
              <div id="options">
                <label>Finish Type: </label>

                <input
                  type="radio"
                  id="broom"
                  name="finish"
                  value="Broom"
                  onClick={this.handleFinishType}
                  defaultChecked
                />
                <label htmlFor="broom"> Broom</label>

                <input
                  type="radio"
                  id="salt"
                  name="finish"
                  value="Salt"
                  onClick={this.handleFinishType}
                />
                <label htmlFor="salt"> Salt</label>
              </div>
              <div id="options">
                <label>Base Layer Required? </label>

                <input
                  type="radio"
                  id="yes"
                  name="base"
                  value="yes"
                  onClick={() => this.show("base")}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="base"
                  value="no"
                  onClick={() => this.hide("base")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>

                <div id="basee" style={stylesBase}>
                  <br></br>
                  <label>Base Layer Material: </label>
                  <input
                    type="radio"
                    id="2br"
                    name="basee"
                    value="2br"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="2br"> #2 Base Rock </label>
                  <input
                    type="radio"
                    id="3cgran"
                    name="basee"
                    value="3cgran"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="3cgran"> 3/4 Minus Crushed Granite </label>
                  <input
                    type="radio"
                    id="5cgran"
                    name="basee"
                    value="5cgran"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="5cgran"> 5/8 Minus Crushed Granite </label>
                  <input
                    type="radio"
                    id="csand"
                    name="basee"
                    value="csand"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="csand"> Concrete Sand </label>
                  <input
                    type="radio"
                    id="dgray"
                    name="basee"
                    value="dgray"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="dgray"> DG Grey </label>
                  <input
                    type="radio"
                    id="dgrays"
                    name="basee"
                    value="dgrays"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="dgrays"> DG Grey Stabilized </label>
                  <input
                    type="radio"
                    id="dgold"
                    name="basee"
                    value="dgold"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="dgold"> DG Gold </label>
                  <input
                    type="radio"
                    id="dgolds"
                    name="basee"
                    value="dgolds"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="dgolds"> DG Gold Stabilized </label>
                  <br></br>
                  <br></br>
                  <label>Base Layer Depth in Inches: </label>
                  <input
                    type="text"
                    id="bdepth"
                    placeholder="Ex: 4"
                    onChange={this.handleBase}
                  />
                  <br></br>
                  <br></br>
                  <button>Additional Base Layer</button>
                </div>
              </div>

              <div id="options">
                <label>Additional Requests? </label>

                <input
                  type="radio"
                  id="yes"
                  name="addReq"
                  value="yes"
                  onClick={() => this.show("extra")}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="addReq"
                  value="no"
                  onClick={() => this.hide("extra")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Rebar Required? </label>

                <input type="radio" id="yes" name="rebar" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="rebar"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Concrete Admixture Required? </label>

                <input type="radio" id="yes" name="admix" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="admix"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Stamped Finish Requested? </label>

                <input type="radio" id="yes" name="stamped" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="stamped"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Stained Finish Requested? </label>

                <input
                  type="radio"
                  id="yes"
                  name="stained"
                  value="yes"
                  defaultChecked
                />
                <label htmlFor="yes"> Yes </label>

                <input type="radio" id="no" name="stained" value="no" />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Sealant Requested? </label>

                <input type="radio" id="yes" name="sealant" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="sealant"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Exposed Aggregate Finish Requested? </label>

                <input type="radio" id="yes" name="aggra" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="aggra"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Underlayment Required? </label>

                <input type="radio" id="yes" name="underla" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="underla"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Drainage Required? </label>

                <input type="radio" id="yes" name="drain" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="drain"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Steps Requested? </label>

                <input type="radio" id="yes" name="steps" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="steps"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Landing Requested?</label>

                <input type="radio" id="yes" name="landing" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="landing"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Curbing: </label>

                <input
                  type="radio"
                  id="straight"
                  name="curbing"
                  value="straight"
                />
                <label htmlFor="straight"> Straight </label>

                <input type="radio" id="curved" name="curbing" value="curved" />
                <label htmlFor="curved"> Curved</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Retaining Wall Required? </label>

                <input type="radio" id="yes" name="retain" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="retain"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>
                  Driveway Approach with Sidewalk and Gutter Requested?
                </label>

                <input type="radio" id="yes" name="approach" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="approach"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Electrical Conduit Requested? </label>

                <input type="radio" id="yes" name="conduit" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="conduit"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Additional Labor Required? </label>

                <input type="radio" id="yes" name="labor" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="labor"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Custom Request? </label>

                <input type="radio" id="yes" name="labor" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="labor"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* <br></br> */}

              <br></br>
              <button onClick={() => this.reload()}>Reset</button>
              <label> </label>
              <button onClick={() => this.calc()}>Calculate</button>

              <br></br>
            </form>
          </div>
        </div>
        <div id="math">
          <div id="concretes">
            <h4>Customer Price</h4>
            <div id="totals">
              <label>Full Customer Price: ${this.state.total}</label>
            </div>
            <div id="totals">
              <label id="bob">
                Description of {this.state.hscapeStyle} Area 2 -{" "}
                {this.state.squareFeet} sq ft:
              </label>
              <br></br>
              <br></br>
              <label id="bob">
                Ergeon Permit Acquisition Cost: ${this.state.ergpCosts}
              </label>
              <br></br>
              <label id="bob" style={stylesDisp}>
                Municipal Permit Costs - {this.state.pType}: $
                {this.state.permitTotal}
              </label>
              {/* <br></br> */}
              <label id="bob" style={stylesDemo}>
                Demo - {this.state.dSquareFeet} Square Feet - {this.state.dType}
                : ${this.state.demoTotal}
              </label>
              <label id="bob" style={stylesHaul}>
                Haul - {this.state.haulSquareFeet} Square Feet: $
                {this.state.haulTotal}
              </label>
              <label id="bob" style={stylesExca}>
                Exca - {this.state.excaSquareFeet} Square Feet: $
                {this.state.excaTotal}
              </label>

              {/* <br></br> */}
              <label id="bob">
                Finish Type - {this.state.finishType}: $
                {this.state.finishTypeVal}
              </label>
              <br></br>
              <label id="bob" style={stylesBase}>
                Base Layer 1 - {this.state.baseDepth} Inches -{this.state.bType}
                : ${this.state.bTotal}
              </label>
              <label id="bob">
                Concrete Type - {this.state.concDepth} Inches -
                {this.state.concType} PSI: ${this.state.concVal}
              </label>
              <br></br>
              <label id="bob">Back Yard Costs: ${this.state.locCalc}</label>
              <br></br>
              <label id="bob">
                Garage Labor Costs: ${this.state.garageFloorVal}
              </label>

              <br></br>
              <label id="bob">Project Size Delta: ${this.state.delta}</label>
              <br></br>
              <br></br>
              <label id="bob">
                Total Hardscape Price to Customer: ${this.state.total}
              </label>
              <br></br>
              <label id="bob">
                Total Hardscape Price Per Square Foot : $
                {this.state.totalperSqf}
              </label>
            </div>
          </div>
          <div id="concretes">
            <h4>Contractor Cost</h4>
            <div id="totals">
              <label>Full Contractor Cost: ${this.state.total}</label>
            </div>
            <div id="totals">
              <label id="bob">
                Description of {this.state.hscapeStyle} Area 2 -{" "}
                {this.state.squareFeet} sq ft:
              </label>
              <br></br>
              <br></br>
              {/* <label id="bob">
      Ergeon Permit Acquisition Cost: ${this.state.ergpCosts}
    </label>
    <br></br>
    <label id="bob" style={stylesDisp}>
      Municipal Permit Costs - {this.state.pType}: $
      {this.state.permitTotal}
    </label> */}
              {/* <br></br> */}
              <label id="bob" style={stylesDemo}>
                Demo - {this.state.dSquareFeet} Square Feet - {this.state.dType}
                : ${this.state.demoContractorTotal}
              </label>
              <label id="bob" style={stylesHaul}>
                Haul - {this.state.haulSquareFeet} Square Feet: $
                {this.state.haulContractorTotal}
              </label>
              <label id="bob" style={stylesExca}>
                Exca - {this.state.excaSquareFeet} Square Feet: $
                {this.state.excaContractorTotal}
              </label>

              {/* <br></br> */}
              <label id="bob">
                Finish Type - {this.state.finishType}: $
                {this.state.finishTypeValCont}
              </label>
              <br></br>
              <label id="bob" style={stylesBase}>
                Base Layer 1 - {this.state.baseDepth} Inches -{this.state.bType}
                : ${this.state.bContractorTotal}
              </label>
              <label id="bob">
                Concrete Type - {this.state.concDepth} Inches -
                {this.state.concType} PSI: ${this.state.concValCont}
              </label>
              <br></br>
              <label id="bob">Back Yard Costs: ${this.state.locCalc}</label>
              <br></br>
              <label id="bob">
                Garage Labor Costs: ${this.state.garageFloorValCont}
              </label>

              <br></br>
              <label id="bob">Project Size Delta: ${this.state.delta}</label>
              <br></br>
              <br></br>
              <label id="bob">
                Total Hardscape Price to Customer: ${this.state.total}
              </label>
              <br></br>
              <label id="bob">
                Total Hardscape Price Per Square Foot : $
                {this.state.totalperSqf}
              </label>
            </div>
          </div>
        </div>
      </div>,
      <div id="four" style={conc4}>
        <div id="entries">
          <div id="concretes">
            <h4>Concrete Area 4</h4>
            {/* <h4>Concrete Area 1</h4> */}
            <form id="values" onSubmit={this.handleSubmit}>
              <div id="options">
                <label>Zip Code: </label>

                <input
                  type="text"
                  id="zip"
                  placeholder="Ex: 95120"
                  value={this.state.zip}
                  onChange={this.handleZipChange}
                />
              </div>
              <div id="options">
                <label>Square Feet: </label>

                <input
                  type="text"
                  id="sqft"
                  placeholder="ex: 500"
                  value={this.state.squareFeet}
                  onChange={this.handleSQFChange}
                />
              </div>
              <div id="options">
                <label>Concrete Type: </label>
                <br></br>
                <br></br>
                <input
                  type="radio"
                  id="twofive"
                  name="psi"
                  value="twofive"
                  onChange={this.handleConcTypeChange}
                />
                <label htmlFor="twofive"> 2500 PSI </label>

                <input
                  type="radio"
                  id="threeoh"
                  name="psi"
                  value="threeoh"
                  onChange={this.handleConcTypeChange}
                />
                <label htmlFor="threeoh"> 3000 PSI </label>

                <input
                  type="radio"
                  id="threefive"
                  name="psi"
                  value="threefive"
                  onChange={this.handleConcTypeChange}
                  defaultChecked
                />
                <label htmlFor="threefive"> 3500 PSI </label>

                <input
                  type="radio"
                  id="fouroh"
                  name="psi"
                  value="fouroh"
                  onChange={this.handleConcTypeChange}
                />
                <label htmlFor="fouroh"> 4000 PSI </label>

                <input
                  type="radio"
                  id="fourfive"
                  name="psi"
                  value="fourfive"
                  onChange={this.handleConcTypeChange}
                />
                <label htmlFor="ourfive"> 4500 PSI </label>
                <br></br>
                <br></br>
                <label>Concrete Depth in Inches: </label>
                <input
                  type="text"
                  id="depth"
                  placeholder="Ex: 5"
                  value={this.state.concDepth}
                  onChange={this.handleCDepthChange}
                />
              </div>
              <div id="options">
                <label>Margin: </label>

                <input
                  type="text"
                  id="sqft"
                  placeholder="ex: 18"
                  value={this.state.margin}
                  onChange={this.handleMarginChange}
                />
              </div>
              <div id="options">
                <label>Location: </label>

                <input
                  type="radio"
                  id="front"
                  name="location"
                  value="front"
                  onClick={this.handleYard}
                  defaultChecked
                />
                <label htmlFor="front"> Front Yard </label>
                <input
                  type="radio"
                  id="back"
                  name="location"
                  value="back"
                  onClick={this.handleYard}
                />
                <label htmlFor="back"> Back Yard</label>
              </div>
              <div id="options">
                <label>Is it on a Slope? </label>

                <input
                  type="radio"
                  id="yes"
                  name="slope"
                  value="yes"
                  checked={this.state.slope}
                  onClick={this.handleSlope}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="slope"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options">
                <label>Is it a Garage Floor? </label>

                <input
                  type="radio"
                  id="yes"
                  name="gfloor"
                  value="yes"
                  onClick={this.handleGarage}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="gfloor"
                  value="no"
                  onClick={this.handleGarage}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>

              <div id="options">
                <label>
                  Ergeon Permit Acquisition and Inspections Visits?{" "}
                </label>

                <input
                  type="radio"
                  id="yes"
                  name="permacq"
                  value="yes"
                  onClick={this.handlePermCost}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="permacq"
                  value="no"
                  // onClick={() => this.show()}
                  onClick={this.handlePermCost}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>

              <div id="options">
                <label>
                  Municipal Permit Acquisition and Inspections Visits?{" "}
                </label>

                <input
                  type="radio"
                  id="yes"
                  name="munpermacq"
                  value="yes"
                  onClick={() => this.show("display")}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="munpermacq"
                  value="no"
                  onClick={() => this.hide("display")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
                <br></br>
                <div id="municipal" style={stylesDisp}>
                  <br></br>
                  <label>Permit Costs and Fees to the City: </label>
                  <input
                    type="text"
                    id="pcost"
                    placeholder="Ex: 1000"
                    value={this.state.pCosts}
                    onChange={this.handleMunicipalPermit}
                  />
                  <br></br>
                  <br></br>
                  <label>Inspection Costs and Fees to the City: </label>
                  <input
                    type="text"
                    id="icost"
                    placeholder="Ex: 1000"
                    value={this.state.iCosts}
                    onChange={this.handleMunicipalPermit}
                  />
                  <br></br>
                  <br></br>
                  <label>Description of Permit and Inspections: </label>
                  <input
                    type="text"
                    id="permittype"
                    placeholder="Ex: Building Permit"
                    value={this.state.pType}
                    onChange={this.handleMunicipalPermit}
                  />
                </div>
              </div>

              <div id="options">
                <label>Demolition Required? </label>

                <input
                  type="radio"
                  id="yes"
                  name="demo"
                  value="yes"
                  onClick={() => this.show("demo")}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="demo"
                  value="no"
                  onClick={() => this.hide("demo")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>

                <div id="demoo" style={stylesDemo}>
                  <br></br>
                  <label>Demo Type: </label>
                  <input
                    type="radio"
                    id="conc"
                    name="demoo"
                    value="conc"
                    onClick={this.handleDemoChange}
                  />
                  <label htmlFor="conc"> Concrete </label>
                  <input
                    type="radio"
                    id="asph"
                    name="demoo"
                    value="asph"
                    onClick={this.handleDemoChange}
                  />
                  <label htmlFor="asph"> Asphalt </label>
                  <input
                    type="radio"
                    id="hsoil"
                    name="demoo"
                    value="hsoil"
                    onClick={this.handleDemoChange}
                  />
                  <label htmlFor="hsoil"> Hard Soil </label>
                  <br></br>
                  <br></br>
                  <label>Demo Area Square Footage: </label>
                  <input
                    type="text"
                    id="dsqf"
                    placeholder={this.state.squareFeet}
                    // value={this.state.dSquareFeet}
                    onChange={this.handleDemoChange}
                  />
                </div>
              </div>

              <div id="options">
                <label>Haul Away Required? </label>

                <input
                  type="radio"
                  id="yes"
                  name="haul"
                  value="yes"
                  onClick={() => this.show("haul")}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="haul"
                  value="no"
                  onClick={() => this.hide("haul")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>

                <div id="haull" style={stylesHaul}>
                  <br></br>
                  <label>
                    Haul Away Square Footage (default is full demo area):
                  </label>
                  <input
                    type="text"
                    id="haulsqff"
                    placeholder={this.state.squareFeet}
                    onChange={this.handleHaul}
                  />
                  <br></br>
                  <br></br>
                  <label>Additional Haul Away Volume in Cubic Yards: </label>
                  <input
                    type="text"
                    id="hauladdsqff"
                    placeholder="Ex: 50"
                    onChange={this.handleHaul}
                  />
                </div>
              </div>

              <div id="options">
                <label>Excavation Required? </label>

                <input
                  type="radio"
                  id="yes"
                  name="exca"
                  value="yes"
                  onClick={() => this.show("exca")}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="exca"
                  value="no"
                  onClick={() => this.hide("exca")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
                <div id="excaa" style={stylesExca}>
                  <br></br>
                  <label>
                    Excavation Area Square Footage (default is full demo area):
                  </label>
                  <input
                    type="text"
                    id="excasqf"
                    placeholder={this.state.squareFeet}
                    onChange={this.handleExca}
                  />
                  <br></br>
                  <br></br>
                  <label>
                    Additional Excavation Area Volume in Cubic Yards:{" "}
                  </label>
                  <input
                    type="text"
                    id="excaaddsqf"
                    placeholder="Ex: 50"
                    onChange={this.handleExca}
                  />
                </div>
              </div>
              <div id="options">
                <label>Finish Type: </label>

                <input
                  type="radio"
                  id="broom"
                  name="finish"
                  value="Broom"
                  onClick={this.handleFinishType}
                  defaultChecked
                />
                <label htmlFor="broom"> Broom</label>

                <input
                  type="radio"
                  id="salt"
                  name="finish"
                  value="Salt"
                  onClick={this.handleFinishType}
                />
                <label htmlFor="salt"> Salt</label>
              </div>
              <div id="options">
                <label>Base Layer Required? </label>

                <input
                  type="radio"
                  id="yes"
                  name="base"
                  value="yes"
                  onClick={() => this.show("base")}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="base"
                  value="no"
                  onClick={() => this.hide("base")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>

                <div id="basee" style={stylesBase}>
                  <br></br>
                  <label>Base Layer Material: </label>
                  <input
                    type="radio"
                    id="2br"
                    name="basee"
                    value="2br"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="2br"> #2 Base Rock </label>
                  <input
                    type="radio"
                    id="3cgran"
                    name="basee"
                    value="3cgran"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="3cgran"> 3/4 Minus Crushed Granite </label>
                  <input
                    type="radio"
                    id="5cgran"
                    name="basee"
                    value="5cgran"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="5cgran"> 5/8 Minus Crushed Granite </label>
                  <input
                    type="radio"
                    id="csand"
                    name="basee"
                    value="csand"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="csand"> Concrete Sand </label>
                  <input
                    type="radio"
                    id="dgray"
                    name="basee"
                    value="dgray"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="dgray"> DG Grey </label>
                  <input
                    type="radio"
                    id="dgrays"
                    name="basee"
                    value="dgrays"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="dgrays"> DG Grey Stabilized </label>
                  <input
                    type="radio"
                    id="dgold"
                    name="basee"
                    value="dgold"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="dgold"> DG Gold </label>
                  <input
                    type="radio"
                    id="dgolds"
                    name="basee"
                    value="dgolds"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="dgolds"> DG Gold Stabilized </label>
                  <br></br>
                  <br></br>
                  <label>Base Layer Depth in Inches: </label>
                  <input
                    type="text"
                    id="bdepth"
                    placeholder="Ex: 4"
                    onChange={this.handleBase}
                  />
                  <br></br>
                  <br></br>
                  <button>Additional Base Layer</button>
                </div>
              </div>

              <div id="options">
                <label>Additional Requests? </label>

                <input
                  type="radio"
                  id="yes"
                  name="addReq"
                  value="yes"
                  onClick={() => this.show("extra")}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="addReq"
                  value="no"
                  onClick={() => this.hide("extra")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Rebar Required? </label>

                <input type="radio" id="yes" name="rebar" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="rebar"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Concrete Admixture Required? </label>

                <input type="radio" id="yes" name="admix" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="admix"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Stamped Finish Requested? </label>

                <input type="radio" id="yes" name="stamped" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="stamped"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Stained Finish Requested? </label>

                <input
                  type="radio"
                  id="yes"
                  name="stained"
                  value="yes"
                  defaultChecked
                />
                <label htmlFor="yes"> Yes </label>

                <input type="radio" id="no" name="stained" value="no" />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Sealant Requested? </label>

                <input type="radio" id="yes" name="sealant" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="sealant"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Exposed Aggregate Finish Requested? </label>

                <input type="radio" id="yes" name="aggra" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="aggra"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Underlayment Required? </label>

                <input type="radio" id="yes" name="underla" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="underla"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Drainage Required? </label>

                <input type="radio" id="yes" name="drain" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="drain"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Steps Requested? </label>

                <input type="radio" id="yes" name="steps" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="steps"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Landing Requested?</label>

                <input type="radio" id="yes" name="landing" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="landing"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Curbing: </label>

                <input
                  type="radio"
                  id="straight"
                  name="curbing"
                  value="straight"
                />
                <label htmlFor="straight"> Straight </label>

                <input type="radio" id="curved" name="curbing" value="curved" />
                <label htmlFor="curved"> Curved</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Retaining Wall Required? </label>

                <input type="radio" id="yes" name="retain" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="retain"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>
                  Driveway Approach with Sidewalk and Gutter Requested?
                </label>

                <input type="radio" id="yes" name="approach" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="approach"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Electrical Conduit Requested? </label>

                <input type="radio" id="yes" name="conduit" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="conduit"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Additional Labor Required? </label>

                <input type="radio" id="yes" name="labor" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="labor"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Custom Request? </label>

                <input type="radio" id="yes" name="labor" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="labor"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* <br></br> */}

              <br></br>
              <button onClick={() => this.reload()}>Reset</button>
              <label> </label>
              <button onClick={() => this.calc()}>Calculate</button>

              <br></br>
            </form>
          </div>
        </div>
        <div id="math">
          <div id="concretes">
            <h4>Customer Price</h4>
            <div id="totals">
              <label>Full Customer Price: ${this.state.total}</label>
            </div>
            <div id="totals">
              <label id="bob">
                Description of {this.state.hscapeStyle} Area 2 -{" "}
                {this.state.squareFeet} sq ft:
              </label>
              <br></br>
              <br></br>
              <label id="bob">
                Ergeon Permit Acquisition Cost: ${this.state.ergpCosts}
              </label>
              <br></br>
              <label id="bob" style={stylesDisp}>
                Municipal Permit Costs - {this.state.pType}: $
                {this.state.permitTotal}
              </label>
              {/* <br></br> */}
              <label id="bob" style={stylesDemo}>
                Demo - {this.state.dSquareFeet} Square Feet - {this.state.dType}
                : ${this.state.demoTotal}
              </label>
              <label id="bob" style={stylesHaul}>
                Haul - {this.state.haulSquareFeet} Square Feet: $
                {this.state.haulTotal}
              </label>
              <label id="bob" style={stylesExca}>
                Exca - {this.state.excaSquareFeet} Square Feet: $
                {this.state.excaTotal}
              </label>

              {/* <br></br> */}
              <label id="bob">
                Finish Type - {this.state.finishType}: $
                {this.state.finishTypeVal}
              </label>
              <br></br>
              <label id="bob" style={stylesBase}>
                Base Layer 1 - {this.state.baseDepth} Inches -{this.state.bType}
                : ${this.state.bTotal}
              </label>
              <label id="bob">
                Concrete Type - {this.state.concDepth} Inches -
                {this.state.concType} PSI: ${this.state.concVal}
              </label>
              <br></br>
              <label id="bob">Back Yard Costs: ${this.state.locCalc}</label>
              <br></br>
              <label id="bob">
                Garage Labor Costs: ${this.state.garageFloorVal}
              </label>

              <br></br>
              <label id="bob">Project Size Delta: ${this.state.delta}</label>
              <br></br>
              <br></br>
              <label id="bob">
                Total Hardscape Price to Customer: ${this.state.total}
              </label>
              <br></br>
              <label id="bob">
                Total Hardscape Price Per Square Foot : $
                {this.state.totalperSqf}
              </label>
            </div>
          </div>
          <div id="concretes">
            <h4>Contractor Cost</h4>
            <div id="totals">
              <label>Full Contractor Cost: ${this.state.total}</label>
            </div>
            <div id="totals">
              <label id="bob">
                Description of {this.state.hscapeStyle} Area 2 -{" "}
                {this.state.squareFeet} sq ft:
              </label>
              <br></br>
              <br></br>
              {/* <label id="bob">
      Ergeon Permit Acquisition Cost: ${this.state.ergpCosts}
    </label>
    <br></br>
    <label id="bob" style={stylesDisp}>
      Municipal Permit Costs - {this.state.pType}: $
      {this.state.permitTotal}
    </label> */}
              {/* <br></br> */}
              <label id="bob" style={stylesDemo}>
                Demo - {this.state.dSquareFeet} Square Feet - {this.state.dType}
                : ${this.state.demoContractorTotal}
              </label>
              <label id="bob" style={stylesHaul}>
                Haul - {this.state.haulSquareFeet} Square Feet: $
                {this.state.haulContractorTotal}
              </label>
              <label id="bob" style={stylesExca}>
                Exca - {this.state.excaSquareFeet} Square Feet: $
                {this.state.excaContractorTotal}
              </label>

              {/* <br></br> */}
              <label id="bob">
                Finish Type - {this.state.finishType}: $
                {this.state.finishTypeValCont}
              </label>
              <br></br>
              <label id="bob" style={stylesBase}>
                Base Layer 1 - {this.state.baseDepth} Inches -{this.state.bType}
                : ${this.state.bContractorTotal}
              </label>
              <label id="bob">
                Concrete Type - {this.state.concDepth} Inches -
                {this.state.concType} PSI: ${this.state.concValCont}
              </label>
              <br></br>
              <label id="bob">Back Yard Costs: ${this.state.locCalc}</label>
              <br></br>
              <label id="bob">
                Garage Labor Costs: ${this.state.garageFloorValCont}
              </label>

              <br></br>
              <label id="bob">Project Size Delta: ${this.state.delta}</label>
              <br></br>
              <br></br>
              <label id="bob">
                Total Hardscape Price to Customer: ${this.state.total}
              </label>
              <br></br>
              <label id="bob">
                Total Hardscape Price Per Square Foot : $
                {this.state.totalperSqf}
              </label>
            </div>
          </div>
        </div>
      </div>,
      <div id="five" style={conc5}>
        <div id="entries">
          <div id="concretes">
            <h4>Concrete Area 5</h4>
            {/* <h4>Concrete Area 1</h4> */}
            <form id="values" onSubmit={this.handleSubmit}>
              <div id="options">
                <label>Zip Code: </label>

                <input
                  type="text"
                  id="zip"
                  placeholder="Ex: 95120"
                  value={this.state.zip}
                  onChange={this.handleZipChange}
                />
              </div>
              <div id="options">
                <label>Square Feet: </label>

                <input
                  type="text"
                  id="sqft"
                  placeholder="ex: 500"
                  value={this.state.squareFeet}
                  onChange={this.handleSQFChange}
                />
              </div>
              <div id="options">
                <label>Concrete Type: </label>
                <br></br>
                <br></br>
                <input
                  type="radio"
                  id="twofive"
                  name="psi"
                  value="twofive"
                  onChange={this.handleConcTypeChange}
                />
                <label htmlFor="twofive"> 2500 PSI </label>

                <input
                  type="radio"
                  id="threeoh"
                  name="psi"
                  value="threeoh"
                  onChange={this.handleConcTypeChange}
                />
                <label htmlFor="threeoh"> 3000 PSI </label>

                <input
                  type="radio"
                  id="threefive"
                  name="psi"
                  value="threefive"
                  onChange={this.handleConcTypeChange}
                  defaultChecked
                />
                <label htmlFor="threefive"> 3500 PSI </label>

                <input
                  type="radio"
                  id="fouroh"
                  name="psi"
                  value="fouroh"
                  onChange={this.handleConcTypeChange}
                />
                <label htmlFor="fouroh"> 4000 PSI </label>

                <input
                  type="radio"
                  id="fourfive"
                  name="psi"
                  value="fourfive"
                  onChange={this.handleConcTypeChange}
                />
                <label htmlFor="ourfive"> 4500 PSI </label>
                <br></br>
                <br></br>
                <label>Concrete Depth in Inches: </label>
                <input
                  type="text"
                  id="depth"
                  placeholder="Ex: 5"
                  value={this.state.concDepth}
                  onChange={this.handleCDepthChange}
                />
              </div>
              <div id="options">
                <label>Margin: </label>

                <input
                  type="text"
                  id="sqft"
                  placeholder="ex: 18"
                  value={this.state.margin}
                  onChange={this.handleMarginChange}
                />
              </div>
              <div id="options">
                <label>Location: </label>

                <input
                  type="radio"
                  id="front"
                  name="location"
                  value="front"
                  onClick={this.handleYard}
                  defaultChecked
                />
                <label htmlFor="front"> Front Yard </label>
                <input
                  type="radio"
                  id="back"
                  name="location"
                  value="back"
                  onClick={this.handleYard}
                />
                <label htmlFor="back"> Back Yard</label>
              </div>
              <div id="options">
                <label>Is it on a Slope? </label>

                <input
                  type="radio"
                  id="yes"
                  name="slope"
                  value="yes"
                  checked={this.state.slope}
                  onClick={this.handleSlope}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="slope"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options">
                <label>Is it a Garage Floor? </label>

                <input
                  type="radio"
                  id="yes"
                  name="gfloor"
                  value="yes"
                  onClick={this.handleGarage}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="gfloor"
                  value="no"
                  onClick={this.handleGarage}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>

              <div id="options">
                <label>
                  Ergeon Permit Acquisition and Inspections Visits?{" "}
                </label>

                <input
                  type="radio"
                  id="yes"
                  name="permacq"
                  value="yes"
                  onClick={this.handlePermCost}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="permacq"
                  value="no"
                  // onClick={() => this.show()}
                  onClick={this.handlePermCost}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>

              <div id="options">
                <label>
                  Municipal Permit Acquisition and Inspections Visits?{" "}
                </label>

                <input
                  type="radio"
                  id="yes"
                  name="munpermacq"
                  value="yes"
                  onClick={() => this.show("display")}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="munpermacq"
                  value="no"
                  onClick={() => this.hide("display")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
                <br></br>
                <div id="municipal" style={stylesDisp}>
                  <br></br>
                  <label>Permit Costs and Fees to the City: </label>
                  <input
                    type="text"
                    id="pcost"
                    placeholder="Ex: 1000"
                    value={this.state.pCosts}
                    onChange={this.handleMunicipalPermit}
                  />
                  <br></br>
                  <br></br>
                  <label>Inspection Costs and Fees to the City: </label>
                  <input
                    type="text"
                    id="icost"
                    placeholder="Ex: 1000"
                    value={this.state.iCosts}
                    onChange={this.handleMunicipalPermit}
                  />
                  <br></br>
                  <br></br>
                  <label>Description of Permit and Inspections: </label>
                  <input
                    type="text"
                    id="permittype"
                    placeholder="Ex: Building Permit"
                    value={this.state.pType}
                    onChange={this.handleMunicipalPermit}
                  />
                </div>
              </div>

              <div id="options">
                <label>Demolition Required? </label>

                <input
                  type="radio"
                  id="yes"
                  name="demo"
                  value="yes"
                  onClick={() => this.show("demo")}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="demo"
                  value="no"
                  onClick={() => this.hide("demo")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>

                <div id="demoo" style={stylesDemo}>
                  <br></br>
                  <label>Demo Type: </label>
                  <input
                    type="radio"
                    id="conc"
                    name="demoo"
                    value="conc"
                    onClick={this.handleDemoChange}
                  />
                  <label htmlFor="conc"> Concrete </label>
                  <input
                    type="radio"
                    id="asph"
                    name="demoo"
                    value="asph"
                    onClick={this.handleDemoChange}
                  />
                  <label htmlFor="asph"> Asphalt </label>
                  <input
                    type="radio"
                    id="hsoil"
                    name="demoo"
                    value="hsoil"
                    onClick={this.handleDemoChange}
                  />
                  <label htmlFor="hsoil"> Hard Soil </label>
                  <br></br>
                  <br></br>
                  <label>Demo Area Square Footage: </label>
                  <input
                    type="text"
                    id="dsqf"
                    placeholder={this.state.squareFeet}
                    // value={this.state.dSquareFeet}
                    onChange={this.handleDemoChange}
                  />
                </div>
              </div>

              <div id="options">
                <label>Haul Away Required? </label>

                <input
                  type="radio"
                  id="yes"
                  name="haul"
                  value="yes"
                  onClick={() => this.show("haul")}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="haul"
                  value="no"
                  onClick={() => this.hide("haul")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>

                <div id="haull" style={stylesHaul}>
                  <br></br>
                  <label>
                    Haul Away Square Footage (default is full demo area):
                  </label>
                  <input
                    type="text"
                    id="haulsqff"
                    placeholder={this.state.squareFeet}
                    onChange={this.handleHaul}
                  />
                  <br></br>
                  <br></br>
                  <label>Additional Haul Away Volume in Cubic Yards: </label>
                  <input
                    type="text"
                    id="hauladdsqff"
                    placeholder="Ex: 50"
                    onChange={this.handleHaul}
                  />
                </div>
              </div>

              <div id="options">
                <label>Excavation Required? </label>

                <input
                  type="radio"
                  id="yes"
                  name="exca"
                  value="yes"
                  onClick={() => this.show("exca")}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="exca"
                  value="no"
                  onClick={() => this.hide("exca")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
                <div id="excaa" style={stylesExca}>
                  <br></br>
                  <label>
                    Excavation Area Square Footage (default is full demo area):
                  </label>
                  <input
                    type="text"
                    id="excasqf"
                    placeholder={this.state.squareFeet}
                    onChange={this.handleExca}
                  />
                  <br></br>
                  <br></br>
                  <label>
                    Additional Excavation Area Volume in Cubic Yards:{" "}
                  </label>
                  <input
                    type="text"
                    id="excaaddsqf"
                    placeholder="Ex: 50"
                    onChange={this.handleExca}
                  />
                </div>
              </div>
              <div id="options">
                <label>Finish Type: </label>

                <input
                  type="radio"
                  id="broom"
                  name="finish"
                  value="Broom"
                  onClick={this.handleFinishType}
                  defaultChecked
                />
                <label htmlFor="broom"> Broom</label>

                <input
                  type="radio"
                  id="salt"
                  name="finish"
                  value="Salt"
                  onClick={this.handleFinishType}
                />
                <label htmlFor="salt"> Salt</label>
              </div>
              <div id="options">
                <label>Base Layer Required? </label>

                <input
                  type="radio"
                  id="yes"
                  name="base"
                  value="yes"
                  onClick={() => this.show("base")}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="base"
                  value="no"
                  onClick={() => this.hide("base")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>

                <div id="basee" style={stylesBase}>
                  <br></br>
                  <label>Base Layer Material: </label>
                  <input
                    type="radio"
                    id="2br"
                    name="basee"
                    value="2br"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="2br"> #2 Base Rock </label>
                  <input
                    type="radio"
                    id="3cgran"
                    name="basee"
                    value="3cgran"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="3cgran"> 3/4 Minus Crushed Granite </label>
                  <input
                    type="radio"
                    id="5cgran"
                    name="basee"
                    value="5cgran"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="5cgran"> 5/8 Minus Crushed Granite </label>
                  <input
                    type="radio"
                    id="csand"
                    name="basee"
                    value="csand"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="csand"> Concrete Sand </label>
                  <input
                    type="radio"
                    id="dgray"
                    name="basee"
                    value="dgray"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="dgray"> DG Grey </label>
                  <input
                    type="radio"
                    id="dgrays"
                    name="basee"
                    value="dgrays"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="dgrays"> DG Grey Stabilized </label>
                  <input
                    type="radio"
                    id="dgold"
                    name="basee"
                    value="dgold"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="dgold"> DG Gold </label>
                  <input
                    type="radio"
                    id="dgolds"
                    name="basee"
                    value="dgolds"
                    onClick={this.handleBase}
                  />
                  <label htmlFor="dgolds"> DG Gold Stabilized </label>
                  <br></br>
                  <br></br>
                  <label>Base Layer Depth in Inches: </label>
                  <input
                    type="text"
                    id="bdepth"
                    placeholder="Ex: 4"
                    onChange={this.handleBase}
                  />
                  <br></br>
                  <br></br>
                  <button>Additional Base Layer</button>
                </div>
              </div>

              <div id="options">
                <label>Additional Requests? </label>

                <input
                  type="radio"
                  id="yes"
                  name="addReq"
                  value="yes"
                  onClick={() => this.show("extra")}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="addReq"
                  value="no"
                  onClick={() => this.hide("extra")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Rebar Required? </label>

                <input type="radio" id="yes" name="rebar" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="rebar"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Concrete Admixture Required? </label>

                <input type="radio" id="yes" name="admix" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="admix"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Stamped Finish Requested? </label>

                <input type="radio" id="yes" name="stamped" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="stamped"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Stained Finish Requested? </label>

                <input
                  type="radio"
                  id="yes"
                  name="stained"
                  value="yes"
                  defaultChecked
                />
                <label htmlFor="yes"> Yes </label>

                <input type="radio" id="no" name="stained" value="no" />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Sealant Requested? </label>

                <input type="radio" id="yes" name="sealant" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="sealant"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Exposed Aggregate Finish Requested? </label>

                <input type="radio" id="yes" name="aggra" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="aggra"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Underlayment Required? </label>

                <input type="radio" id="yes" name="underla" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="underla"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Drainage Required? </label>

                <input type="radio" id="yes" name="drain" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="drain"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Steps Requested? </label>

                <input type="radio" id="yes" name="steps" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="steps"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Landing Requested?</label>

                <input type="radio" id="yes" name="landing" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="landing"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Curbing: </label>

                <input
                  type="radio"
                  id="straight"
                  name="curbing"
                  value="straight"
                />
                <label htmlFor="straight"> Straight </label>

                <input type="radio" id="curved" name="curbing" value="curved" />
                <label htmlFor="curved"> Curved</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Retaining Wall Required? </label>

                <input type="radio" id="yes" name="retain" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="retain"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>
                  Driveway Approach with Sidewalk and Gutter Requested?
                </label>

                <input type="radio" id="yes" name="approach" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="approach"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Electrical Conduit Requested? </label>

                <input type="radio" id="yes" name="conduit" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="conduit"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Additional Labor Required? </label>

                <input type="radio" id="yes" name="labor" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="labor"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Custom Request? </label>

                <input type="radio" id="yes" name="labor" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="labor"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* <br></br> */}

              <br></br>

              <button onClick={() => this.calc()}>Calculate</button>

              <br></br>
            </form>
          </div>
        </div>
        <div id="math">
          <div id="concretes">
            <h4>Customer Price</h4>
            <div id="totals">
              <label>Full Customer Price: ${this.state.total}</label>
            </div>
            <div id="totals">
              <label id="bob">
                Description of {this.state.hscapeStyle} Area 2 -{" "}
                {this.state.squareFeet} sq ft:
              </label>
              <br></br>
              <br></br>
              <label id="bob">
                Ergeon Permit Acquisition Cost: ${this.state.ergpCosts}
              </label>
              <br></br>
              <label id="bob" style={stylesDisp}>
                Municipal Permit Costs - {this.state.pType}: $
                {this.state.permitTotal}
              </label>
              {/* <br></br> */}
              <label id="bob" style={stylesDemo}>
                Demo - {this.state.dSquareFeet} Square Feet - {this.state.dType}
                : ${this.state.demoTotal}
              </label>
              <label id="bob" style={stylesHaul}>
                Haul - {this.state.haulSquareFeet} Square Feet: $
                {this.state.haulTotal}
              </label>
              <label id="bob" style={stylesExca}>
                Exca - {this.state.excaSquareFeet} Square Feet: $
                {this.state.excaTotal}
              </label>

              {/* <br></br> */}
              <label id="bob">
                Finish Type - {this.state.finishType}: $
                {this.state.finishTypeVal}
              </label>
              <br></br>
              <label id="bob" style={stylesBase}>
                Base Layer 1 - {this.state.baseDepth} Inches -{this.state.bType}
                : ${this.state.bTotal}
              </label>
              <label id="bob">
                Concrete Type - {this.state.concDepth} Inches -
                {this.state.concType} PSI: ${this.state.concVal}
              </label>
              <br></br>
              <label id="bob">Back Yard Costs: ${this.state.locCalc}</label>
              <br></br>
              <label id="bob">
                Garage Labor Costs: ${this.state.garageFloorVal}
              </label>
              <br></br>
              <label id="bob">Regional Pricing: ${this.state.zipPricing}</label>
              <br></br>
              <br></br>
              <label id="bob">Project Size Delta: ${this.state.delta}</label>
              <br></br>
              <br></br>
              <label id="bob">
                Total Hardscape Price to Customer: ${this.state.total}
              </label>
              <br></br>
              <label id="bob">
                Total Hardscape Price Per Square Foot : $
                {this.state.totalperSqf}
              </label>
            </div>
          </div>
          <div id="concretes">
            <h4>Contractor Cost</h4>
            <div id="totals">
              <label>Full Contractor Cost: ${this.state.total}</label>
            </div>
            <div id="totals">
              <label id="bob">
                Description of {this.state.hscapeStyle} Area 2 -{" "}
                {this.state.squareFeet} sq ft:
              </label>
              <br></br>
              <br></br>
              {/* <label id="bob">
        Ergeon Permit Acquisition Cost: ${this.state.ergpCosts}
      </label>
      <br></br>
      <label id="bob" style={stylesDisp}>
        Municipal Permit Costs - {this.state.pType}: $
        {this.state.permitTotal}
      </label> */}
              {/* <br></br> */}
              <label id="bob" style={stylesDemo}>
                Demo - {this.state.dSquareFeet} Square Feet - {this.state.dType}
                : ${this.state.demoContractorTotal}
              </label>
              <label id="bob" style={stylesHaul}>
                Haul - {this.state.haulSquareFeet} Square Feet: $
                {this.state.haulContractorTotal}
              </label>
              <label id="bob" style={stylesExca}>
                Exca - {this.state.excaSquareFeet} Square Feet: $
                {this.state.excaContractorTotal}
              </label>

              {/* <br></br> */}
              <label id="bob">
                Finish Type - {this.state.finishType}: $
                {this.state.finishTypeValCont}
              </label>
              <br></br>
              <label id="bob" style={stylesBase}>
                Base Layer 1 - {this.state.baseDepth} Inches -{this.state.bType}
                : ${this.state.bContractorTotal}
              </label>
              <label id="bob">
                Concrete Type - {this.state.concDepth} Inches -
                {this.state.concType} PSI: ${this.state.concValCont}
              </label>
              <br></br>
              <label id="bob">Back Yard Costs: ${this.state.locCalc}</label>
              <br></br>
              <label id="bob">
                Garage Labor Costs: ${this.state.garageFloorValCont}
              </label>

              <br></br>
              <label id="bob">
                Regional Pricing: ${this.state.zipPricingContractor}
              </label>
              <br></br>
              <label id="bob">Project Size Delta: ${this.state.delta}</label>
              <br></br>
              <br></br>
              <label id="bob">
                Total Hardscape Price to Customer: ${this.state.total}
              </label>
              <br></br>
              <label id="bob">
                Total Hardscape Price Per Square Foot : $
                {this.state.totalperSqf}
              </label>
            </div>
          </div>
        </div>
      </div>
    ];

    return (
      <div id="overarching">
        {concretes[0]}
        {concretes[1]}
        {concretes[2]}
        {concretes[3]}
        {concretes[4]}
        {concretes[5]}

        <div id="add">
          <button onClick={() => this.addArea()}>
            Additional Concrete Area
          </button>
          <button onClick={() => this.deleteArea()}>
            Delete Concrete Area
          </button>

          <br></br>
          <br></br>
          <button onClick={() => this.reload()}>Reset</button>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
}
