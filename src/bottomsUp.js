import React from "react";
import { db } from "./db.js";

export default class concrete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // actual state variables
      // areaSQF1:0,
      // areaSQF2:0,
      // areaSQF3:0,
      // areaSQF4:0,
      // areaSQF5:0,
      // ergpCosts1: 0,
      // ergpCosts2: 0,
      // ergpCosts3: 0,
      // ergpCosts4: 0,
      // ergpCosts5: 0,
      areaSQF: [],


      






      // numShown: 1,
      zipPricing: 0,
      zipPricingContractor: 0,

      concretes: null,
      delta: 0,
      deltaCust: 0,
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
      rebar: true,
      rebarDisp: "none",
      admix: true,
      admixDisp: "none",

      conc_areas: []
    };
    document.title = "Concrete Calculator";
  }

  componentDidMount() {
    const concAreas = db.concreteArea
    this.state.conc_areas = concAreas
    this.setState({
      conc_areas: this.state.conc_areas.filter(area => {
        return area.id <= this.state.areas;
      })
    });
    console.log(this.state.conc_areas)
  }

  reload() {
    window.location.reload();
  }
  calc(e,area) {
    e.preventDefault();
    // sets which area you are pulling from to calculate
    var areaParent = document.getElementById(area)

    // pulls sqf from input value in desired area
    var sqf = parseInt(areaParent.querySelector("#sqft").value, 10);
    
    // maybe delete this will need multiple totals
    this.setState({ total: 0, totalCont: 0 });
    
    // get margin from head of document
    // var margin = parseInt(document.querySelector("#margin").value, 10);
    var margin = parseFloat(this.state.margin, 10);

  
    // get zip from head of document
    // var zipId = parseInt(document.querySelector("#zip").name, 10);
    var zipId = parseInt(this.state.zipRegion, 10);
    

    // if this is the same eveyrwhere hardcode
    var laborPrice = db.regions[0].finishLaborMPD;
    var laborSQF = db.regions[0].finishLaborSQFMPD;

    // finish type
    var typeContractor;
    var theF;
    if (db.concreteArea[area-1].finishType === "Salt") {
      typeContractor = ((sqf / laborSQF) * laborPrice + sqf).toFixed(2);
      theF =
        (((sqf / laborSQF) * laborPrice + sqf) / margin).toFixed(2);
    } else {
      typeContractor = ((sqf / laborSQF) * laborPrice).toFixed(2);
      theF =
        (((sqf / laborSQF) * laborPrice) / margin).toFixed(2);
    }
    // console.log(typeContractor)
    // console.log(theF)
    if (isNaN(typeContractor)) {
      db.concreteArea[area-1].finishTypeValCont = 0
    } else {
      db.concreteArea[area-1].finishTypeValCont = typeContractor
    }
    if (isNaN(theF)) {
      db.concreteArea[area-1].finishTypeVal = 0
    } else {
      db.concreteArea[area-1].finishTypeVal = theF
    }
    db.concreteArea[area-1].totalCont = typeContractor
    db.concreteArea[area-1].total = theF
    var totalCont = typeContractor;
    var totalCust = theF;



    // Concrete Pricing
    // gets conc depth for specified area
    var depth = parseFloat(areaParent.querySelector("#cdepth").value, 10);
    if(isNaN(areaParent.querySelector("#concCosttype").name)) {
      areaParent.querySelector("#concCosttype").name = db.regions[this.state.zipRegion].threefivepsi
    }
    var psiValue = parseInt(areaParent.querySelector("#concCosttype").name, 10);
    var cubicFeet = (depth / 12) * sqf;
    var cubicYards = cubicFeet / 27;
    var concCostCont = (cubicYards * psiValue + 200).toFixed(2);
    if (isNaN(concCostCont)) {
      db.concreteArea[area-1].concValCont = 0
    } else {
      db.concreteArea[area-1].concValCont = concCostCont
    }
    var concPriceInput = (concCostCont / margin).toFixed(2);
    if (isNaN(concPriceInput)) {
      db.concreteArea[area-1].concVal = 0
    } else {
      db.concreteArea[area-1].concVal = concPriceInput
    }
    totalCont = +totalCont + +concCostCont;
    totalCust = +totalCust + +concPriceInput;
    db.concreteArea[area-1].totalCont = +db.concreteArea[area-1].totalCont + +concCostCont;
    db.concreteArea[area-1].total = db.concreteArea[area-1].total + +concPriceInput;


    // Location Costs
    // var loc = parseInt(this.state.location, 10);
    var loc = parseInt(areaParent.querySelector("#yardLoc").name, 10);
    var totAdded = ((loc * sqf) / margin).toFixed(2);
    if (isNaN(totAdded)) {
      db.concreteArea[area-1].locCalc = 0
    } else {
      db.concreteArea[area-1].locCalc = totAdded
    }
    totalCust = +totalCust + +totAdded;
    db.concreteArea[area-1].total = db.concreteArea[area-1].total + +totAdded;


    // garageFloor
    var binFloor = parseInt(areaParent.querySelector("#garageFloor").name, 10);
    var floorContractRound =
      (binFloor * sqf * db.regions[zipId].gFloor).toFixed(2);
    if (isNaN(floorContractRound)) {
      db.concreteArea[area-1].garageFloorValCont = 0
    } else {
      db.concreteArea[area-1].garageFloorValCont = floorContractRound
    }
    var floorCustF = (floorContractRound / margin).toFixed(2);
    if (isNaN(floorCustF)) {
      db.concreteArea[area-1].garageFloorVal = 0
    } else {
      db.concreteArea[area-1].garageFloorVal = floorCustF
    }
    totalCont = +totalCont + +floorContractRound;
    totalCust = +totalCust + +floorCustF;
    db.concreteArea[area-1].totalCont = +db.concreteArea[area-1].totalCont + +floorContractRound;
    db.concreteArea[area-1].total = db.concreteArea[area-1].total + +floorCustF;


    //municipal permit costs
    var permitcosts = parseFloat(areaParent.querySelector("#pcost").value, 10);
    var icostss = parseFloat(areaParent.querySelector("#icost").value, 10);
   
    
    
    var totalMunConCosts = (permitcosts + icostss).toFixed(2);
    if (isNaN(totalMunConCosts)) {
      db.concreteArea[area-1].permitTotalCon = 0
    } else {
      db.concreteArea[area-1].permitTotalCon = totalMunConCosts
    }
    var check = totalMunConCosts/margin
    var totalMunCosts = (totalMunConCosts/margin).toFixed(2);
    if (isNaN(totalMunCosts)) {
      db.concreteArea[area-1].permitTotal = 0
      
    } else {
      db.concreteArea[area-1].permitTotal = totalMunCosts
    }

    if (!isNaN(totalMunCosts)) {
      totalCont = +totalCont + +totalMunConCosts;
      totalCust = +totalCust + +totalMunCosts;
      db.concreteArea[area-1].totalCont = +db.concreteArea[area-1].totalCont + +totalMunConCosts;
      db.concreteArea[area-1].total = +db.concreteArea[area-1].total + +totalMunCosts;
    }

    // demo
    var demosqf = parseInt(db.concreteArea[area-1].dsquarefeet, 10);
    var demoPricing = parseFloat(areaParent.querySelector("#demoval").name, 10);
    if(isNaN(demoPricing)){
      demoPricing = 1;
    }
    var democontract = (((demosqf * depth * 144)/1728)*demoPricing).toFixed(2);
   
    if (isNaN(democontract)) {
      db.concreteArea[area-1].demoContractorTotal = 0
    } else {
      db.concreteArea[area-1].demoContractorTotal = democontract
    }
    var totDemCost = (democontract / margin).toFixed(2);
    if (isNaN(totDemCost)) {
      db.concreteArea[area-1].demoTotal = 0
    } else {
      db.concreteArea[area-1].demoTotal = totDemCost
    }
    totalCont = +totalCont + +democontract;
    totalCust = +totalCust + +totDemCost;
    db.concreteArea[area-1].totalCont = +db.concreteArea[area-1].totalCont + +democontract;
    db.concreteArea[area-1].total = db.concreteArea[area-1].total + +totDemCost;


    

    //exca
    if (!this.state.exca) {
    var excasquareFT = parseInt(db.concreteArea[area-1].excaSquareFeet, 10);
    var addexcasquareFT = parseInt(areaParent.querySelector("#exexca").name, 10);
    if(isNaN(addexcasquareFT)){
      addexcasquareFT = 0
    }
    var excaVolume = (excasquareFT * depth * 144) / 1728;
    var excaVolYards = excaVolume / 27;
    var excaLabTotal = (90 * (excaVolYards + addexcasquareFT)).toFixed(2);
    if (isNaN(excaLabTotal)) {
      db.concreteArea[area-1].excaContractorTotal = 0
    } else {
      db.concreteArea[area-1].excaContractorTotal = excaLabTotal 
    }
    var excaTotals = (excaLabTotal /margin).toFixed(2);
    if (isNaN(excaTotals)) {
      db.concreteArea[area-1].excaTotal = 0
    } else {
      db.concreteArea[area-1].excaTotal = excaTotals
    }

    totalCont = +totalCont + +excaLabTotal;
    totalCust = +totalCust + +excaTotals;
    db.concreteArea[area-1].totalCont = +db.concreteArea[area-1].totalCont + +excaLabTotal;
    db.concreteArea[area-1].total = db.concreteArea[area-1].total + +excaTotals;
  }
    // console.log(totalCust);

    // haul

    var haulsquareFT = parseInt(db.concreteArea[area-1].haulSquareFeet, 10);
    var addhaulsquareFT = parseInt(areaParent.querySelector("#exhaul").name, 10);
    if(isNaN(addhaulsquareFT)){
      addhaulsquareFT =0
    }
    var haulVolume = (haulsquareFT * depth * 144) / 1728;
    var haulVolYards = haulVolume / 27;
    //check where hscapestyle is coming from
    var haulConCost;
    var haulConCostTotal;
    var haulCost;
    var haulTotals
    if (this.state.hscapeStyle === "Concrete") {
      if (excaLabTotal) {
        haulConCost = 111 * (haulVolYards + addhaulsquareFT) - excaLabTotal;
        haulConCostTotal = haulConCost.toFixed(2);
        if (isNaN(haulConCostTotal)) {
          db.concreteArea[area-1].haulContractorTotal = 0
        } else {
          db.concreteArea[area-1].haulContractorTotal = haulConCostTotal
        }
        haulCost =
          (111 * (haulVolYards + addhaulsquareFT) - excaLabTotal) /
          margin;
        haulTotals = haulCost.toFixed(2);
        if (isNaN(haulTotals)) {
          db.concreteArea[area-1].haulTotal = 0
        } else {
          db.concreteArea[area-1].haulTotal = haulTotals
        }

        totalCont = +totalCont + +haulConCostTotal;
        totalCust = +totalCust + +haulTotals;
        db.concreteArea[area-1].totalCont = +db.concreteArea[area-1].totalCont + +haulConCostTotal;
    db.concreteArea[area-1].total = db.concreteArea[area-1].total + +haulTotals;

        // console.log(totalCust);
      } else {
        haulConCost = 111 * (haulVolYards + addhaulsquareFT);
        haulConCostTotal = haulConCost.toFixed(2);
        if (isNaN(haulConCostTotal)) {
          db.concreteArea[area-1].haulContractorTotal = 0
        } else {
          db.concreteArea[area-1].haulContractorTotal = haulConCostTotal
        }
        haulCost =
          (111 * (haulVolYards + addhaulsquareFT)) / (1 - margin * 0.01);
        haulTotals = haulCost.toFixed(2);
        if (isNaN(haulTotals)) {
          db.concreteArea[area-1].haulTotal = 0
        } else {
          db.concreteArea[area-1].haulTotal = haulTotals
        }
        totalCont = +totalCont + +haulConCostTotal;
        totalCust = +totalCust + +haulTotals;
        db.concreteArea[area-1].totalCont = +db.concreteArea[area-1].totalCont + +haulConCostTotal;
        db.concreteArea[area-1].total = db.concreteArea[area-1].total + +haulTotals;
      }
    }

    //base 1
    if (!this.state.base) {
      
      var baseoneDepth = parseInt(db.concreteArea[area-1].baseDepth, 10);
      var basestyle = parseInt(areaParent.querySelector("#baseee").name, 10);
      if(isNaN(basestyle)){
        basestyle = 40
      }
      var baseVolume = (baseoneDepth / 12) * sqf;
      var unroundbaseVolumeYards = baseVolume / 27;
      var baseVolumeYards = Math.round(unroundbaseVolumeYards);
      var baseDelivery = unroundbaseVolumeYards * 10 + 150;
      var baselabCost;
      if (db.concreteArea[area-1].btype === "#2 Base Rock") {
        baselabCost = unroundbaseVolumeYards * basestyle + baseDelivery;
      } else {
        baselabCost = baseVolumeYards * basestyle + 200;
      }
      var baselaborcost = baselabCost.toFixed(2);
      if (isNaN(baselaborcost)) {
        db.concreteArea[area-1].bContractorTotal = 0
      } else {
        db.concreteArea[area-1].bContractorTotal = baselaborcost
      }

      var baseoneTotal = (baselabCost / margin).toFixed(2);
      if (isNaN(baseoneTotal)) {
        db.concreteArea[area-1].bTotal = 0
      } else {
        db.concreteArea[area-1].bTotal = baseoneTotal
      }

      totalCont = +totalCont + +baselaborcost;
      totalCust = +totalCust + +baseoneTotal;
      db.concreteArea[area-1].totalCont = +db.concreteArea[area-1].totalCont + +baselaborcost;
      db.concreteArea[area-1].total = +db.concreteArea[area-1].total + +baseoneTotal;
      // console.log(totalCust);
    }

    // zipcode additional pricing
    if(!isNaN(this.state.zip)){
      if (db.zipcodes[this.state.zip].addCost > 0) {
        // console.log(db.zipcodes[this.state.zip].addCost);
        var zipAdditional = db.zipcodes[this.state.zip].addCost * sqf;
        var zipAddCont = zipAdditional.toFixed(2);
        if (isNaN(zipAddCont)) {
          db.concreteArea[area-1].zipPricingContractor = 0
        } else {
          db.concreteArea[area-1].zipPricingContractor = zipAddCont
        }
  
        var zipAdd = (zipAdditional / margin).toFixed(2);
        if (isNaN(zipAdd)) {
          db.concreteArea[area-1].zipPricing = 0
        } else {
          db.concreteArea[area-1].zipPricing = zipAdd
        }
  
        totalCont = +totalCont + +zipAddCont;
        totalCust = +totalCust + +zipAdd;
        db.concreteArea[area-1].totalCont = +db.concreteArea[area-1].totalCont + +zipAddCont;
        db.concreteArea[area-1].total = +db.concreteArea[area-1].total + +zipAdd;
      // console.log(totalCust);
        // console.log(totalCust);
      }
    }

    // project size delta
    var deltSQF = 0;
    if (sqf < 1000) {
      db.concreteArea[area-1].delta = 0
    } else if (sqf < 1100) {
      deltSQF = (sqf * -0.73).toFixed(2);
      db.concreteArea[area-1].delta = deltSQF
    } else if (sqf < 1200) {
      deltSQF = (sqf * -0.69).toFixed(2);
      db.concreteArea[area-1].delta = deltSQF
    } else {
      deltSQF = (sqf * -0.67).toFixed(2);
      db.concreteArea[area-1].delta = deltSQF
    }
    var custDelta = (deltSQF / margin).toFixed(2);
    db.concreteArea[area-1].deltaCust = custDelta
    totalCont = +totalCont + +deltSQF;
    totalCust = +totalCust + +custDelta;
    db.concreteArea[area-1].totalCont = +db.concreteArea[area-1].totalCont + +deltSQF;
        db.concreteArea[area-1].total = +db.concreteArea[area-1].total + +custDelta;


    // rebar
    if(!this.state.rebar){
      var rebarId = parseInt(areaParent.querySelector("#rebarr").name, 10);
      var rebarCostPSQF = db.rebar[rebarId].cost
      var rebarMult = db.rebar[rebarId].mult
      var rebarLabor = sqf*rebarMult
      var rebarCont = (rebarCostPSQF*sqf+rebarLabor).toFixed(2)
      if (isNaN(rebarCont)) {
        db.concreteArea[area-1].rebarTotalCont = 0
      } else {
        db.concreteArea[area-1].rebarTotalCont = rebarCont
      }
      var rebarTot = (rebarCont/margin).toFixed(2)
      if (isNaN(rebarTot)) {
        db.concreteArea[area-1].rebarTotal = 0
      } else {
        db.concreteArea[area-1].rebarTotal = rebarTot
      }
      db.concreteArea[area-1].rebarTotalCont = +db.concreteArea[area-1].totalCont + +rebarCont;
      db.concreteArea[area-1].rebarTotal = +db.concreteArea[area-1].total + +rebarTot;
    }

    // admix
    if(!this.state.admix) {
      var admixId = parseInt(areaParent.querySelector("#admixx").name, 10);
      var admixCost = db.admix[admixId].cost
      var admixLabor = (cubicYards *admixCost).toFixed(2)
      if (isNaN(admixLabor)) {
        db.concreteArea[area-1].admixTotalCont = 0
      } else {
        db.concreteArea[area-1].admixTotalCont = admixLabor
      }
      var admixTotal = (admixLabor/margin).toFixed(2)
      if (isNaN(admixTotal)) {
        db.concreteArea[area-1].admixTotal = 0
      } else {
        db.concreteArea[area-1].admixTotal = admixTotal
      }
      db.concreteArea[area-1].admixTotalCont = +db.concreteArea[area-1].totalCont + +admixLabor;
      db.concreteArea[area-1].admixTotal = +db.concreteArea[area-1].total + +admixTotal;
    }

    // totals
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
    var totalContSQF = (totalCont / sqf).toFixed(2);
    if (isNaN(totalContSQF)) {
      this.setState({ totalContperSqf: 0 });
    } else {
      this.setState({ totalContperSqf: totalContSQF });
    }
    var totalCustSQF = (totalCust / sqf).toFixed(2);
    if (isNaN(totalCustSQF)) {
      this.setState({ totalperSqf: 0 });
    } else {
      this.setState({ totalperSqf: totalCustSQF });
    }
    // db.concreteArea
    const concAreas = db.concreteArea
    console.log(concAreas[area-1].ptype)
    this.state.conc_areas = concAreas
    console.log(this.state.conc_areas[area-1].ptype)
    this.setState({
      conc_areas: this.state.conc_areas.filter(area => {
        return area.id <= this.state.areas;
      })
    });
    console.log(this.state.conc_areas[area-1].ptype)
    
  }

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
    else if (obj === "rebar") {
      this.setState({ rebar: false });
      this.setState({ rebarDisp: "block" });
    }
    else if (obj === "admix") {
      this.setState({ admix: false });
      this.setState({ admixDisp: "block" });
    }
  }

  hide(e,area,obj) {
    var head = document.getElementById(area)
    if (obj === "display") {
      this.setState({ display: true });
      this.setState({ dispDisp: "none" });
      head.querySelector("#pcost").value = 0;
    head.querySelector("#icost").value = 0;
    head.querySelector("#permittype").value = null;
    db.concreteArea[area-1].ptype = null;
    } 
    else if (obj === "demo") {
      this.setState({
        demo: true,
        demoDisp: "none",
      });
      head.querySelector("#dsqf").value = null;
      db.concreteArea[area-1].dsquarefeet = 0
      db.concreteArea[area-1].dtype = null
      head.querySelector("#demoval").name = null
    } else if (obj === "haul") {
      console.log("hide");
      this.setState({
        haul: true,
        haulDisp: "none"
      });
      head.querySelector("#haulsqff").value = null;
      head.querySelector("#hauladdsqff").value = null;
      db.concreteArea[area-1].haulSquareFeet = 0
      head.querySelector("#exhaul").name = null

    } else if (obj === "exca") {
      this.setState({
        exca: true,
        excaDisp: "none"
      });
      head.querySelector("#excaaddsqf").value = null;
      head.querySelector("#excasqf").value = null;
      db.concreteArea[area-1].excaSquareFeet = 0
      head.querySelector("#exexca").name = null
    } else if (obj === "base") {
      this.setState({
        base: true,
        baseDisp: "none",
      });
      head.querySelector("#bdepth").value = null;
      db.concreteArea[area-1].baseDepth = 0
      db.concreteArea[area-1].btype = null
      head.querySelector("#baseee").name = null
    } else if (obj === "extra") {
      this.setState({ extra: true });
      this.setState({ extraDisp: "none" });
    }
    else if (obj === "rebar") {
      this.setState({ rebar: true });
      this.setState({ rebarDisp: "none" });
    }
    else if (obj === "admix") {
      this.setState({ admix: true });
      this.setState({ admixDisp: "none" });
    }
  }

  // Handling Input changes
  handleConcTypeChange(event,area) {
    var areaHead = document.getElementById(area)

    if (event.target.value === "twofive") {
      db.concreteArea[area-1].concType = 2500
      areaHead.querySelector("#concCosttype").name = db.regions[this.state.zipRegion].twofivepsi
    } else if (event.target.value === "threeoh") {
      db.concreteArea[area-1].concType = 3000
      areaHead.querySelector("#concCosttype").name = db.regions[this.state.zipRegion].threeopsi
    } else if (event.target.value === "threefive") {
      db.concreteArea[area-1].concType = 3500
      areaHead.querySelector("#concCosttype").name = db.regions[this.state.zipRegion].threefivepsi
    } else if (event.target.value === "fouroh") {
      db.concreteArea[area-1].concType = 4000
      areaHead.querySelector("#concCosttype").name = db.regions[this.state.zipRegion].fouropsi
    } else if (event.target.value === "fourfive") {
      db.concreteArea[area-1].concType = 4500
      areaHead.querySelector("#concCosttype").name = db.regions[this.state.zipRegion].fourfivepsi
    }
  };
  handleSQFChange(event,area) {
    //areaSQF
    db.concreteArea[area-1].sqf = event.target.value 
    console.log(db.concreteArea[area].sqf)
    // this.setState({ squareFeet: event.target.value });
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
    console.log(zipId)
    this.setState({ zip: zipId });
    if (zipId) {
      if (db.zipcodes[zipId].region === "South Bay") {
        this.setState({ zipRegion: 0 });
        document.querySelector("#zip").name = 0;
      } else if (db.zipcodes[zipId].region === "East Bay") {
        this.setState({ zipRegion: 1 });
        document.querySelector("#zip").name = 1;
      } else if (db.zipcodes[zipId].region === "North Bay") {
        this.setState({ zipRegion: 2 });
        document.querySelector("#zip").name = 2;
      } else if (db.zipcodes[zipId].region === "Sacramento") {
        this.setState({ zipRegion: 3 });
        document.querySelector("#zip").name = 3;
      } else if (db.zipcodes[zipId].region === "Far East Bay") {
        this.setState({ zipRegion: 4 });
        document.querySelector("#zip").name = 4;
      } else if (db.zipcodes[zipId].region === "Far South Bay") {
        this.setState({ zipRegion: 5 });
        document.querySelector("#zip").name = 5;
      }
    }
  };
  handleMarginChange = event => {
    var dec = 1-event.target.value*.01
  
    this.setState({ margin: dec });
  };

  // changed on both sides: check
  handleCDepthChange(event,area) {
    db.concreteArea[area-1].concDepth = event.target.value;
    // this.setState({ concDepth: event.target.value });
  };

  handleFinishType(e,area) {
    db.concreteArea[area-1].finishType = e.target.value
  };
    // changed on both sides: check
  handlePermCost(event,area) {
    if (event.target.value === "yes") {
      // this.setState({ ergpCosts: 950 });
      db.concreteArea[area-1].ergpCostss = 950
    } else if (event.target.value === "no") {
      db.concreteArea[area-1].ergpCostss = 0
    }
  };

  // changed on both sides: check
  handleYard(event,area){
    var head = document.getElementById(area);
    if (event.target.value === "back") {
      head.querySelector("#yardLoc").name = 2
    } 
    else if (event.target.value === "front") {
      head.querySelector("#yardLoc").name = 0
    }
  };

  // no changes keep in state
  handleSlope = event => {
    alert("Custom Quote Required for Projects on a Slope");
    this.setState({ slope: 0 });
  };

  // changed on both sides: check
  handleGarage(event,area) {
    var head = document.getElementById(area);
    if (event.target.value === "yes") {
      head.querySelector("#garageFloor").name = 1
    } else if (event.target.value === "no") {
      head.querySelector("#garageFloor").name = 0
    }
  };

  // remove values on hide, done but check
  handleMunicipalPermit(e,area) {
    var head = document.getElementById(area)
    db.concreteArea[area-1].ptype = head.querySelector("#permittype").value
    console.log(db.concreteArea[area-1].ptype)
  };

  // done but check
  handleDemoChange(e,area) {
    var head = document.getElementById(area);
    
    if (e.target.id === "dsqf") {
      db.concreteArea[area-1].dsquarefeet = e.target.value
    }
    else{
      db.concreteArea[area-1].dtype = e.target.id
      console.log(db.concreteArea[area-1].type)
      head.querySelector("#demoval").name = e.target.value
      console.log(e.target.value)
    }
  };

  // done but check
  handleHaul(e,area) {
    var head = document.getElementById(area);
    if (e.target.id === "hauladdsqff") {
      head.querySelector("#exhaul").name = e.target.value
    }
    else {
      db.concreteArea[area-1].haulSquareFeet = e.target.value
    }
  };

  handleExca(e,area) {
    var head = document.getElementById(area);
    if (e.target.id === "excaaddsq") {
      head.querySelector("#exexca").name = e.target.value
    }
    else {
      db.concreteArea[area-1].excaSquareFeet = e.target.value
    }
  };
  handleBase(e,area) {
    var head = document.getElementById(area);
    if(e.target.id === "bdepth") {
      db.concreteArea[area-1].baseDepth = e.target.value
    }
    else {
      db.concreteArea[area-1].btype = db.base[e.target.value].type
      console.log(db.concreteArea[area-1].btype)
      head.querySelector("#baseee").name = db.base[e.target.value].cost
      console.log(head.querySelector("#baseee").name)
    }
  };

  handleRebar(e,area) {
    var head = document.getElementById(area);
    db.concreteArea[area-1].rtype = db.rebar[e.target.value].type
    head.querySelector("#rebarr").name = e.target.value
  };
  handleAdmix(e,area) {
    var head = document.getElementById(area);
    db.concreteArea[area-1].admixtype = db.admix[e.target.value].type
    head.querySelector("#admixx").name = e.target.value
  };
  

  addArea = event => {
    console.log(this.state.areas)
    if(this.state.areas <= 5) {
      var count = this.state.areas+1
    this.setState({areas: count})
    const concAreas = db.concreteArea
    this.state.conc_areas = concAreas
    console.log(count) 
    this.setState({
      conc_areas: this.state.conc_areas.filter(area => {
        return area.id <= count;
      })
    });
    }
    

  };
  deleteArea = event => {
    if(this.state.areas >1){
      var count = this.state.areas-1
      this.setState({areas: count})
      const concAreas = db.concreteArea
      this.state.conc_areas = concAreas
      console.log(count) 
      this.setState({
        conc_areas: this.state.conc_areas.filter(area => {
          return area.id <= count;
        })
      });
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

    const stylesseven = {
      stylesRebar: {
        display: this.state.rebarDisp
      }
    };
    const { stylesRebar } = stylesseven;

    const styleseight = {
      stylesAdmix: {
        display: this.state.admixDisp
      }
    };
    const { stylesAdmix } = styleseight;

  

    // var joined = this.state.concretesArray.concat(concretes);
    // this.setState({ concretesArray: joined });

    return (
      <div id="overarching">
        {/* {concretes} */}
        {/* {this.state.concretesArray} */}
        <h3>Concrete Calculator</h3>
        <div id="concretes">
                <label>Zip Code</label>
                <br></br>
                {/* <br></br> */}
                <input
                  type="text"
                  id="zip"
                  placeholder="Ex: 95120"
                  // value={this.state.zip}
                  onChange={this.handleZipChange}
                />
                
                <br></br>
                <br></br>
                <label>Margin</label>
                <br></br>
                <input
                  type="text"
                  id="margin"
                  placeholder="ex: 18"
                  // value={this.state.margin}
                  onChange={this.handleMarginChange}
                />
                <br></br>
               
              </div>
              
        {this.state.conc_areas.map(area=> {
        //  var head = document.getElementById(area.id)
          
        
        return(
          
        <div id = {area.id} >
        <div id="entries">
          <div id="concretes">
            <h4>Concrete Area {area.id}</h4>
            
       
            <form id='values' onSubmit={this.handleSubmit}>
              <div id="options">
                <label>Square Feet: </label>

                <input
                  type="text"
                  id="sqft"
                  placeholder="ex: 500"
                  // value={this.state.squareFeet}
                  onChange={e=>this.handleSQFChange(e,area.id)}
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
                  onChange={e=>this.handleConcTypeChange(e,area.id)}
                />
                <label id="concCosttype" htmlFor="twofive"> 2500 PSI </label>

                <input
                  type="radio"
                  id="threeoh"
                  name="psi"
                  value="threeoh"
                  onChange={e=>this.handleConcTypeChange(e,area.id)}
                />
                <label htmlFor="threeoh"> 3000 PSI </label>

                <input
                  type="radio"
                  id="threefive"
                  name="psi"
                  value="threefive"
                  onChange={e=>this.handleConcTypeChange(e,area.id)}
                  defaultChecked
                />
                <label htmlFor="threefive"> 3500 PSI </label>

                <input
                  type="radio"
                  id="fouroh"
                  name="psi"
                  value="fouroh"
                  onChange={e=>this.handleConcTypeChange(e,area.id)}
                />
                <label htmlFor="fouroh"> 4000 PSI </label>

                <input
                  type="radio"
                  id="fourfive"
                  name="psi"
                  value="fourfive"
                  onChange={e=>this.handleConcTypeChange(e,area.id)}
                />
                <label htmlFor="ourfive"> 4500 PSI </label>
                <br></br>
                <br></br>
                <label>Concrete Depth in Inches: </label>
                <input
                  type="text"
                  id="cdepth"
                  placeholder="Ex: 5"
                  // value={this.state.concDepth}
                  onChange={e=>this.handleCDepthChange(e,area.id)}
                />
              </div>
              
              <div id="options">
                <label id="yardLoc" name={0}>Location: </label>

                <input
                  type="radio"
                  id="front"
                  name="location"
                  value="front"
                  onClick={e=>this.handleYard(e,area.id)}
                  defaultChecked
                />
                <label htmlFor="front"> Front Yard </label>
                <input
                  type="radio"
                  id="back"
                  name="location"
                  value="back"
                  onClick={e=>this.handleYard(e,area.id)}
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
                <label id="garageFloor">Is it a Garage Floor? </label>

                <input
                  type="radio"
                  id="yes"
                  name="gfloor"
                  value="yes"
                  onClick={e=>this.handleGarage(e,area.id)}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="gfloor"
                  value="no"
                  onClick={e=>this.handleGarage(e,area.id)}
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
                  onClick={e=>this.handlePermCost(e,area.id)}
                />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="permacq"
                  value="no"
                  // onClick={() => this.show()}
                  onClick={e=>this.handlePermCost(e,area.id)}
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
                  onClick={e=> this.hide(e,area.id,"display")}
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
                    // value={this.state.pCosts}
                    // onChange={e=>this.handleMunicipalPermit(e,area.id)}
                  />
                  <br></br>
                  <br></br>
                  <label>Inspection Costs and Fees to the City: </label>
                  <input
                    type="text"
                    id="icost"
                    placeholder="Ex: 1000"
                    // value={this.state.iCosts}
                    // onChange={e=>this.handleMunicipalPermit(e,area.id)}
                  />
                  <br></br>
                  <br></br>
                  <label>Description of Permit and Inspections: </label>
                  <input
                    type="text"
                    id="permittype"
                    placeholder="Ex: Building Permit"
                    // value={this.state.pType}
                    onChange={e=>this.handleMunicipalPermit(e,area.id)}
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
                  onClick={e=> this.hide(e,area.id,"demo")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>

                <div id="demoo" style={stylesDemo}>
                  <br></br>
                  <label id="demoval" >Demo Type: </label>
                  <input
                    type="radio"
                    id="Concrete"
                    name="demoo"
                    value={1}
                    defaultChecked
                    onClick={e=>this.handleDemoChange(e,area.id)}
                  />
                  <label htmlFor="conc"> Concrete </label>
                  <input
                    type="radio"
                    id="Asphalt"
                    name="demoo"
                    value={.75}
                    onClick={e=>this.handleDemoChange(e,area.id)}
                  />
                  <label htmlFor="asph"> Asphalt </label>
                  <input
                    type="radio"
                    id="Hard Soil"
                    name="demoo"
                    value={.5}
                    onClick={e=>this.handleDemoChange(e,area.id)}
                  />
                  <label htmlFor="hsoil"> Hard Soil </label>
                  <br></br>
                  <br></br>
                  <label>Demo Area Square Footage: </label>
                  <input
                    type="text"
                    id="dsqf"
                    placeholder="Ex: 500"
                    // value={this.state.dSquareFeet}
                    onChange={e=>this.handleDemoChange(e,area.id)}
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
                  onClick={e=> this.hide(e,area.id,"haul")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>

                <div id="haull" style={stylesHaul}>
                  <br></br>
                  <label id="exhaul">
                    Haul Away Square Footage (default is full demo area):
                  </label>
                  <input
                    type="text"
                    id="haulsqff"
                    placeholder="Ex: 500"
                    // value={this.state.haulSquareFeet}
                    onChange={e=>this.handleHaul(e,area.id)}
                    // ref={el => (this.handleHaul = el)}
                  />
                  <br></br>
                  <br></br>
                  <label>Additional Haul Away Volume in Cubic Yards: </label>
                  <input
                    type="text"
                    id="hauladdsqff"
                    placeholder="Ex: 50"
                    // value={this.state.haulAddSQF}
                    onChange={e=>this.handleHaul(e,area.id)}
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
                  onClick={e=> this.hide(e,area.id,"exca")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
                <div id="excaa" style={stylesExca}>
                  <br></br>
                  <label id="exexca">
                    Excavation Area Square Footage (default is full demo area):
                  </label>
                  <input
                    type="text"
                    id="excasqf"
                    placeholder="Ex: 500"
                    // value={this.state.excaSquareFeet}
                    onChange={e=>this.handleExca(e,area.id)}
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
                    // value={this.state.excaAddSQF}
                    onChange={e=>this.handleExca(e,area.id)}
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
                  onClick={e=>this.handleFinishType(e,area.id)}
                  defaultChecked
                />
                <label htmlFor="broom"> Broom</label>

                <input
                  type="radio"
                  id="salt"
                  name="finish"
                  value="Salt"
                  onClick={e=>this.handleFinishType(e,area.id)}
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
                  onClick={e=> this.hide(e,area.id,"base")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>

                <div id="baseee" style={stylesBase}>
                  <br></br>
                  <label>Base Layer Material: </label>
                  <input
                    type="radio"
                    id="2br"
                    name="basee"
                    value={0}
                    defaultChecked
                    onClick={e=>this.handleBase(e,area.id)}
                  />
                  <label htmlFor="2br"> #2 Base Rock </label>
                  <input
                    type="radio"
                    id="3cgran"
                    name="basee"
                    value={1}
                    onClick={e=>this.handleBase(e,area.id)}
                  />
                  <label htmlFor="3cgran"> 3/4 Minus Crushed Granite </label>
                  <input
                    type="radio"
                    id="5cgran"
                    name="basee"
                    value={2}
                    onClick={e=>this.handleBase(e,area.id)}
                  />
                  <label htmlFor="5cgran"> 5/8 Minus Crushed Granite </label>
                  <input
                    type="radio"
                    id="csand"
                    name="basee"
                    value={3}
                    onClick={e=>this.handleBase(e,area.id)}
                  />
                  <label htmlFor="csand"> Concrete Sand </label>
                  <input
                    type="radio"
                    id="dgray"
                    name="basee"
                    value={4}
                    onClick={e=>this.handleBase(e,area.id)}
                  />
                  <label htmlFor="dgray"> DG Grey </label>
                  <input
                    type="radio"
                    id="dgrays"
                    name="basee"
                    value={5}
                    onClick={e=>this.handleBase(e,area.id)}
                  />
                  <label htmlFor="dgrays"> DG Grey Stabilized </label>
                  <input
                    type="radio"
                    id="dgold"
                    name="basee"
                    value={6}
                    onClick={e=>this.handleBase(e,area.id)}
                  />
                  <label htmlFor="dgold"> DG Gold </label>
                  <input
                    type="radio"
                    id="dgolds"
                    name="basee"
                    value={7}
                    onClick={e=>this.handleBase(e,area.id)}
                  />
                  <label htmlFor="dgolds"> DG Gold Stabilized </label>
                  <br></br>
                  <br></br>
                  <label>Base Layer Depth in Inches: </label>
                  <input
                    type="text"
                    id="bdepth"
                    placeholder="Ex: 4"
                    // value={this.state.baseDepth}
                    onChange={e=>this.handleBase(e,area.id)}
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
                  onClick={e=> this.hide(e,area.id,"extra")}
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>
              {/* v2 */}
              <div id="options" style={stylesExtra}>
                <label>Rebar Required? </label>

                <input type="radio" id="yes" name="rebar" value="yes" onClick={() => this.show("rebar")}/>
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="rebar"
                  value="no"
                  defaultChecked
                  onClick={e=> this.hide(e,area.id,"rebar")}

                />
                <label htmlFor="no"> No</label>
                <br></br>
                <div id="rebarr" style={stylesRebar}>
                <br></br>
                <label>Rebar Material: </label>
                  <input
                    type="radio"
                    id="3r12"
                    name="rebarr"
                    value={0}
                    defaultChecked
                    onClick={e=>this.handleRebar(e,area.id)}
                  />
                  <label htmlFor="3r12"> #3 Rebar 12\"OC </label>
                  <input
                    type="radio"
                    id="3r16"
                    name="rebarr"
                    value={1}
                    onClick={e=>this.handleRebar(e,area.id)}
                  />
                  <label htmlFor="3r16"> #3 Rebar 16\"OC </label>
                  <input
                    type="radio"
                    id="3r18"
                    name="rebarr"
                    value={2}
                    onClick={e=>this.handleRebar(e,area.id)}
                  />
                  <label htmlFor="3r18"> #3 Rebar 18" OC </label>
                  <input
                    type="radio"
                    id="3r24"
                    name="rebarr"
                    value={3}
                    onClick={e=>this.handleRebar(e,area.id)}
                  />
                  <label htmlFor="3r24"> #3 Rebar 24" OC </label>
                  <input
                    type="radio"
                    id="4r12"
                    name="rebarr"
                    value={4}
                    onClick={e=>this.handleRebar(e,area.id)}
                  />
                  <label htmlFor="4r12"> #4 Rebar 12\"OC </label>
                  <input
                    type="radio"
                    id="4r16"
                    name="rebarr"
                    value={5}
                    onClick={e=>this.handleRebar(e,area.id)}
                  />
                  <label htmlFor="4r16"> #4 Rebar 16\"OC </label>
                  <input
                    type="radio"
                    id="4r18"
                    name="rebarr"
                    value={6}
                    onClick={e=>this.handleRebar(e,area.id)}
                  />
                  <label htmlFor="4r18"> #4 Rebar 18" OC </label>
                  <input
                    type="radio"
                    id="4r24"
                    name="rebarr"
                    value={7}
                    onClick={e=>this.handleRebar(e,area.id)}
                  />
                  <label htmlFor="4r24"> #4 Rebar 24" OC </label>
                  <input
                    type="radio"
                    id="2x2W"
                    name="rebarr"
                    value={8}
                    onClick={e=>this.handleRebar(e,area.id)}
                  />
                  <label htmlFor="2x2W"> 2"x2" Wire Mesh </label>
                  <input
                    type="radio"
                    id="4x4W"
                    name="rebarr"
                    value={9}
                    onClick={e=>this.handleRebar(e,area.id)}
                  />
                  <label htmlFor="4x4W"> 4"x4" Wire Mesh </label>
                  <input
                    type="radio"
                    id="6x6W"
                    name="rebarr"
                    value={10}
                    onClick={e=>this.handleRebar(e,area.id)}
                  />
                  <label htmlFor="6x6W"> 6"x6\"Wire Mesh </label>
                  <br></br>
                  </div>
              </div>
              <div id="options" style={stylesExtra}>
                <label>Concrete Admixture Required? </label>

                <input type="radio" id="yes" name="admix" value="yes" onClick={() => this.show("admix")}/>
                <label htmlFor="yes"> Yes </label>
                
                <input
                  type="radio"
                  id="no"
                  name="admix"
                  value="no"
                  defaultChecked
                  onClick={e=> this.hide(e,area.id,"admix")}
                />
                <label htmlFor="no"> No</label>
                <div id="admixx" style={stylesAdmix}>
                <br></br>
                <label>Admixture Material: </label>
                  <input
                    type="radio"
                    id="concR"
                    name="admixx"
                    value={0}
                    defaultChecked
                    onClick={e=>this.handleAdmix(e,area.id)}
                  />
                  <label htmlFor="concR"> Concrete Retarder </label>
                  <input
                    type="radio"
                    id="concA"
                    name="admixx"
                    value={1}
                    onClick={e=>this.handleAdmix(e,area.id)}
                  />
                  <label htmlFor="concA"> Concrete Accelerator </label>
                  <input
                    type="radio"
                    id="polyS"
                    name="admixx"
                    value={2}
                    onClick={e=>this.handleAdmix(e,area.id)}
                  />
                  <label htmlFor="polyS"> Polycarboxylate Superplasticizer </label>
                  <input
                    type="radio"
                    id="synthF"
                    name="admixx"
                    value={3}
                    onClick={e=>this.handleAdmix(e,area.id)}
                  />
                  <label htmlFor="sythF"> Synthetic Fiber Reinforcement </label>
                  <input
                    type="radio"
                    id="helixS"
                    name="admixx"
                    value={4}
                    onClick={e=>this.handleAdmix(e,area.id)}
                  />
                  <label htmlFor="helixS"> Helix Steel Fiber Reinforcement </label>
                </div>
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

              <button onClick={e => this.calc(e,area.id)}>Calculate</button>

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
                Description of Concrete Area 1 -
                {area.sqf} sq ft:
              </label>
              <br></br>
              <br></br>
              <label id="bob">
                Ergeon Permit Acquisition Cost: ${area.ergpCostss}
              </label>
              <br></br>
              <label id="bob" style={stylesDisp}>
                Municipal Permit Costs - {area.ptype}: $
                {area.permitTotal}
              </label>
              {/* <br></br> */}
              <label id="bob" style={stylesDemo}>
                Demo - {area.dsquarefeet} Square Feet - {this.state.dtype}
                : ${area.demoTotal}
              </label>
              <label id="bob" style={stylesHaul}>
                Haul - {area.haulSquareFeet} Square Feet: $
                {area.haulTotal}
              </label>
              <label id="bob" style={stylesExca}>
                Exca - {area.excaSquareFeet} Square Feet: $
                {area.excaTotal}
              </label>

              {/* <br></br> */}
              <label id="bob">
                Finish Type - {area.finishType}: $
                {area.finishTypeVal}
              </label>
              <br></br>
              <label id="bob" style={stylesBase}>
                Base Layer 1 - {area.baseDepth} Inches -{this.state.btype}
                : ${area.bTotal}
              </label>
              <label id="bob">
                Concrete Type - {area.concDepth} Inches -
                {area.concType} PSI: ${area.concVal}
              </label>
              <br></br>
              <label id="bob">Back Yard Costs: ${area.locCalc}</label>
              <br></br>
              <label id="bob">
                Garage Labor Costs: ${area.garageFloorVal}
              </label>
              <br></br>
              <label id="bob">Regional Pricing: ${area.zipPricing}</label>
              <br></br>
              <label id="bob">Regional Pricing: ${area.zipPricing}</label>
              <br></br>

              <label id="bob">
                Project Size Delta: ${area.deltaCust}
              </label>
              <br></br>
              <br></br>
              <label id="bob">
                Total Hardscape Price to Customer: ${area.total}
              </label>
              <br></br>
              <label id="bob">
                Total Hardscape Price Per Square Foot : $
                {area.totalperSqf}
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
                Description of Concrete Area 1 -
                {area.sqf} sq ft:
              </label>
              <br></br>
              <br></br>
              {/* <label id="bob">
          Ergeon Permit Acquisition Cost: ${this.state.ergpCosts}
        </label>
          <br></br>*/}
        <label id="bob" style={stylesDisp}>
          Municipal Permit Costs - {area.ptype}: $
          {area.permitTotalCon}
        </label> 
             
              <label id="bob" style={stylesDemo}>
                Demo - {area.dsquarefeet} Square Feet - {this.state.dtype}
                : ${area.demoContractorTotal}
              </label>
              <label id="bob" style={stylesHaul}>
                Haul - {area.haulSquareFeet} Square Feet: $
                {area.haulContractorTotal}
              </label>
              <label id="bob" style={stylesExca}>
                Exca - {area.excaSquareFeet} Square Feet: $
                {area.excaContractorTotal}
              </label>

              {/* <br></br> */}
              <label id="bob">
                Finish Type - {area.finishType}: $
                {area.finishTypeValCont}
              </label>
              <br></br>
              <label id="bob" style={stylesBase}>
                Base Layer 1 - {area.baseDepth} Inches -{this.state.btype}
                : ${area.bContractorTotal}
              </label>
              <label id="bob">
                Concrete Type - {area.concDepth} Inches -
                {area.concType} PSI: ${area.concValCont}
              </label>
              <br></br>
              <label id="bob">Back Yard Costs: ${area.locCalc}</label>
              <br></br>
              <label id="bob">
                Garage Labor Costs: ${area.garageFloorValCont}
              </label>
              <br></br>
              <label id="bob">
                Regional Pricing: ${area.zipPricingContractor}
              </label>

              <br></br>
              <label id="bob">Project Size Delta: ${area.delta}</label>
              <br></br>
              <br></br>
              <label id="bob">
                Total Hardscape Costs Paid to Contractor: $
                {area.totalCont}
              </label>
              <br></br>
              <label id="bob">
                Total Hardscape Price Per Square Foot : $
                {area.totalContperSqf}
              </label>
            </div>
          </div>
        </div>
      </div>

        );
      })}
      {/* <form id="stainForm">
                        <input
                          type="radio"
                          id="premix"
                          name="stain"
                          value="Pre-Mixed"
                          onClick={e => this.handleFinishType(e, area.id)}
                          defaultChecked
                        />
                        <label htmlFor="prmix"> Pre-Mixed</label>

                        <input
                          type="radio"
                          id="surfApp"
                          name="stain"
                          value="Surface Applied"
                          onClick={e => this.handleFinishType(e, area.id)}
                        />
                        <label htmlFor="surfApp"> Surface Applied</label>
                      </form> */}
        <div id="add">
          <button onClick={this.addArea}>Additional Concrete Area</button>
          {/* <button>Additional Concrete Area</button> */}
          <button onClick={() => this.deleteArea()}>Delete Concrete Area</button>

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
