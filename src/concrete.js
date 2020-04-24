import React from "react";
import { db } from "./db.js";
import { thisExpression } from "@babel/types";

export default class concrete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areaSQF: [],

      margin: null,

      slope: 0,
      stains: 0,
      areas: 1,
      total: 0.0,
      totalCont: 0,
      totalperSqf: 0,
      totalContperSqf: 0,

      // true means hidden
      display: true, // for munpermit
      dispDisp: "none",
      base: true,
      baseDisp: "none",
      extra: true,
      extraDisp: "none",
      rebar: true,
      rebarDisp: "none",
      edit: true,
      editDisp: "none",
      stamp: true,
      stampDisp: "none",
      stain: true,
      stainDisp: "none",

      conc_areas: []
    };
    document.title = "Concrete Calculator";
  }

  componentDidMount() {
    const concAreas = db.concreteArea;
    this.state.conc_areas = concAreas;
    console.log(this.state.conc_areas);
    this.setState({
      conc_areas: this.state.conc_areas.filter(area => {
        return area.id <= this.state.areas;
      })
    });
  }

  reload() {
    window.location.reload();
  }
  calc(e, area) {
    e.preventDefault();
    // sets which area you are pulling from to calculate
    var areaParent = document.getElementById(area);

    // pulls sqf from input value in desired area
    var sqf = parseFloat(areaParent.querySelector("#sqft").value, 10);
    var margin = parseFloat(this.state.margin, 10);
    if (isNaN(sqf) || isNaN(margin)) {
      alert("Please enter margin and squarefeet before calculatin");
    } else if (
      db.visibility[3].type[area - 1].val === 0 &&
      (db.concreteArea[area - 1].concType !== "3500" ||
        db.concreteArea[area - 1].concDepth !== 5 ||
        db.concreteArea[area - 1].finishType !== "Broom" ||
        db.bases[area - 1].quant > 0 ||
        db.bases[area - 1].options[0].bdepth !== 4 ||
        db.bases[area - 1].options[0].btype !== "#2 Base Rock" ||
        db.concreteArea[area - 1].rtype !== '#4 Rebar 16" OC')
    ) {
      // finish type
      console.log("in da old calc");
      this.oldCalc(area, "calc");
      var difference = (
        db.bottomsUp[area - 1].options[1].total -
        db.bottomsUp[area - 1].options[0].total
      ).toFixed(2);
      console.log(difference);
      // totals
      var big = 12 + +difference;
      console.log(big);
      var small = 11 + +difference;
      if (sqf <= 1000) {
        db.concreteArea[area - 1].totalCont = (sqf * big).toFixed(2);
        db.concreteArea[area - 1].total = (
          db.concreteArea[area - 1].totalCont / margin
        ).toFixed(2);
        db.concreteArea[area - 1].totalperSqf = (
          db.concreteArea[area - 1].total / sqf
        ).toFixed(2);
        db.concreteArea[area - 1].totalContperSqf = (
          db.concreteArea[area - 1].totalCont / sqf
        ).toFixed(2);
      } else {
        db.concreteArea[area - 1].totalCont = (sqf * small).toFixed(2);
        db.concreteArea[area - 1].total = (
          db.concreteArea[area - 1].totalCont / margin
        ).toFixed(2);
        db.concreteArea[area - 1].totalperSqf = (
          db.concreteArea[area - 1].total / sqf
        ).toFixed(2);
        db.concreteArea[area - 1].totalContperSqf = (
          db.concreteArea[area - 1].totalCont / sqf
        ).toFixed(2);
      }
    } else {
      if (sqf <= 1000) {
        db.concreteArea[area - 1].totalCont = (sqf * 12).toFixed(2);
        console.log(db.concreteArea[area - 1].totalCont);
        db.concreteArea[area - 1].total = (
          db.concreteArea[area - 1].totalCont / margin
        ).toFixed(2);
        db.concreteArea[area - 1].totalperSqf = (
          db.concreteArea[area - 1].total / sqf
        ).toFixed(2);
        db.concreteArea[area - 1].totalContperSqf = (
          db.concreteArea[area - 1].totalCont / sqf
        ).toFixed(2);
      } else {
        db.concreteArea[area - 1].totalCont = (sqf * 11).toFixed(2);
        db.concreteArea[area - 1].total = (
          db.concreteArea[area - 1].totalCont / margin
        ).toFixed(2);
        db.concreteArea[area - 1].totalperSqf = (
          db.concreteArea[area - 1].total / sqf
        ).toFixed(2);
        db.concreteArea[area - 1].totalContperSqf = (
          db.concreteArea[area - 1].totalCont / sqf
        ).toFixed(2);
      }
    }
    // stamping
    if (db.visibility[4].type[area - 1].val === 0) {
      db.concreteArea[area - 1].stampTotalCont = (
        db.concreteArea[area - 1].stampCost * sqf
      ).toFixed(2);
      db.concreteArea[area - 1].stampTotal = (
        db.concreteArea[area - 1].stampTotalCont / margin
      ).toFixed(2);
    }
    console.log("stamp");
    console.log(db.concreteArea[area - 1].stampTotalCont);
    var concVolumeYards = (
      ((db.concreteArea[area - 1].concDepth / 12) * sqf) /
      27
    ).toFixed(2);
    // staining

    if (db.visibility[5].type[area - 1].val === 0) {
      var stains = db.stainer[area - 1].quant;
      for (var i = 0; i <= stains; i++) {
        var id = db.stainer[area - 1].stainTypes[i].stainId;
        console.log(id);
        console.log(db.stainer[area - 1].stainTypes[i].sType);
        if (db.stainer[area - 1].stainTypes[i].sType === "Pre-Mixed") {
          var psiPrice;
          if (db.concreteArea[area - 1].concType === "3500") {
            psiPrice = db.theStains[id].threefive;
          } else if (db.concreteArea[area - 1].concType === "2500") {
            psiPrice = db.theStains[id].twofive;
          } else if (db.concreteArea[area - 1].concType === "3000") {
            psiPrice = db.theStains[id].threeoh;
          } else if (db.concreteArea[area - 1].concType === "4000") {
            psiPrice = db.theStains[id].fouroh;
          } else if (db.concreteArea[area - 1].concType === "4500") {
            psiPrice = db.theStains[id].fourfive;
          }
          if (db.theStains[id].category === "Premium") {
            var stainWeight = db.theStains[id].pounds * concVolumeYards;
            var stainMaterialCost = psiPrice * concVolumeYards;
            var stainLaborperSQF = 100 / sqf;
            var stainLaborCost = sqf * stainLaborperSQF;
            var totalStainCont = (stainLaborCost + stainMaterialCost).toFixed(
              2
            );
            db.stainer[area - 1].stainTypes[i].staintotalsCont = totalStainCont;
            db.stainer[area - 1].stainTypes[i].staintotals = (
              totalStainCont / margin
            ).toFixed(2);
            db.concreteArea[area - 1].stainTotalCont =
              +db.concreteArea[area - 1].stainTotalCont + +totalStainCont;
          } else {
            var stainWeight = db.theStains[id].pounds * concVolumeYards;
            var stainMaterialCost = psiPrice * concVolumeYards;
            var stainLaborperSQF = 100 / sqf;
            var stainLaborCost = sqf * stainLaborperSQF;
            var totalStainCont = (stainLaborCost + stainMaterialCost).toFixed(
              2
            );
            db.stainer[area - 1].stainTypes[i].staintotalsCont = totalStainCont;
            db.stainer[area - 1].stainTypes[i].staintotals = (
              totalStainCont / margin
            ).toFixed(2);
            db.concreteArea[area - 1].stainTotalCont =
              +db.concreteArea[area - 1].stainTotalCont + +totalStainCont;
          }
        } else {
          if (db.surfaceStain[id - 40].category === "Premium") {
            var buckets = Math.ceil(sqf / 1000);
            var weight = buckets * 60;
            console.log(id);
            console.log(db.surfaceStain[id - 40]);
            var cost = db.surfaceStain[id - 40].cost;
            var stainMatCost = (cost * buckets) / 0.9;
            var stainlabCost = (sqf - weight * 0 + stainMatCost).toFixed(2);
            db.stainer[area - 1].stainTypes[i].staintotalsCont = stainlabCost;
          } else {
            var buckets = Math.ceil(sqf / 1000);
            var weight = buckets * 60;
            console.log(id);
            console.log(db.surfaceStain[id - 40]);
            var cost = db.surfaceStain[id - 40].cost;
            var stainMatCost = (cost * buckets) / 0.9;
            var stainlabCost = (sqf - weight * 0 + stainMatCost).toFixed(2);
            db.stainer[area - 1].stainTypes[i].staintotalsCont = stainlabCost;
          }
        }
      }
    }

    // sealant
    var seals = db.seals[area - 1].quant;
    if (db.visibility[6].type[area - 1].val === 0) {
      var id;
      for (var i = 0; i <= seals; i++) {
        id = db.seals[area - 1].sealTypes[i].sealId;
        console.log(id);
        db.seals[area - 1].sealTypes[i].totalsCont = (
          db.sealant[id].cost * sqf
        ).toFixed(2);
        db.seals[area - 1].sealTypes[i].totals = (
          db.seals[area - 1].sealTypes[i].totalsCont / margin
        ).toFixed(2);
      }
    }

    // exposed aggregate
    if (db.visibility[7].type[area - 1].val === 0) {
      var id = db.concreteArea[area - 1].aggraID;
      var aggraLabor = sqf * 2;
      var aggCostperTon = db.exposedAggregate[id].perTonWTax;
      var aggVolInTons = Math.ceil(
        sqf / db.exposedAggregate[id].perTonPerLayer
      );
      db.concreteArea[area - 1].aggraTotalsCont = (
        aggVolInTons * aggCostperTon +
        aggraLabor +
        200
      ).toFixed(2);
      db.concreteArea[area - 1].aggraTotals = (
        db.concreteArea[area - 1].aggraTotalsCont / margin
      ).toFixed(2);
    }

    // underlayment
    var under = db.underlay[area - 1].quant;
    if (db.visibility[8].type[area - 1].val === 0) {
      for (var i = 0; i <= under; i++) {
        var id = db.underlay[area - 1].types[i].underId;
        var cost = db.underlayments[id].cost;
        db.underlay[area - 1].types[i].totalsCont = (cost * sqf).toFixed(2);
        db.underlay[area - 1].types[i].totals = (
          db.underlay[area - 1].types[i].totalsCont / margin
        ).toFixed(2);
      }
    }

    //drainage
    var drain = db.drains[area - 1].quant;
    if (db.visibility[9].type[area - 1].val === 0) {
      for (var i = 0; i <= drain; i++) {
        var id = db.drains[area - 1].options[i].drainId;
        var cost = db.drainage[id].cost;
        db.drains[area - 1].options[i].totalsCont = (
          cost * db.drains[area - 1].options[i].drainSize
        ).toFixed(2);
        db.drains[area - 1].options[i].totals = (
          db.drains[area - 1].options[i].totalsCont / margin
        ).toFixed(2);
      }
    }

    // conduit
    if (db.visibility[10].type[area - 1].val === 0) {
      db.concreteArea[area - 1].conduitTotalsCont = (
        db.concreteArea[area - 1].conduitlength * 10
      ).toFixed(2);
      db.concreteArea[area - 1].conduitTotals = (
        db.concreteArea[area - 1].conduitTotalsCont / margin
      ).toFixed(2);
    }

    // custom
    var cust = db.custom[area - 1].quant;
    if (db.visibility[12].type[area - 1].val === 0) {
      for (var i = 0; i <= cust; i++) {
        var cost = db.custom[area - 1].options[i].cost.toFixed(2);
        db.custom[area - 1].options[i].totalsCont = cost;
        db.custom[area - 1].options[i].totals = (cost / margin).toFixed(2);
      }
    }

    // additional labor
    if (db.visibility[11].type[area - 1].val === 0) {
      db.concreteArea[area - 1].addLaborTotalsCont = (
        db.concreteArea[area - 1].addLaborHours * 50
      ).toFixed(2);
      db.concreteArea[area - 1].addLaborTotals = (
        db.concreteArea[area - 1].addLaborTotalsCont / margin
      ).toFixed(2);
    }

    // approach
    if (db.visibility[13].type[area - 1].val === 0) {
      var approachSQF = db.concreteArea[area - 1].approachSQF;
      if (approachSQF > 300) {
        db.concreteArea[area - 1].approachTotalsCont = (
          approachSQF * 20
        ).toFixed(2);
        db.concreteArea[area - 1].approachTotals = (
          db.concreteArea[area - 1].approachTotalsCont / margin
        ).toFixed(2);
      } else if (approachSQF > 135) {
        db.concreteArea[area - 1].approachTotalsCont = (
          approachSQF * 30
        ).toFixed(2);
        db.concreteArea[area - 1].approachTotals = (
          db.concreteArea[area - 1].approachTotalsCont / margin
        ).toFixed(2);
      } else {
        db.concreteArea[area - 1].approachTotalsCont = 4000;
        db.concreteArea[area - 1].approachTotals = (
          db.concreteArea[area - 1].approachTotalsCont / margin
        ).toFixed(2);
      }
    }

    this.setState({ total: 0, totalCont: 0 });
  }

  oldCalc(area, obj) {
    var areaParent = document.getElementById(area);

    // pulls sqf from input value in desired area
    var sqf = parseFloat(areaParent.querySelector("#sqft").value, 10);
    var margin = parseFloat(this.state.margin, 10);
    var laborPrice = db.regions[0].finishLaborMPD;
    var laborSQF = db.regions[0].finishLaborSQFMPD;
    var typeContractor;
    var theF;
    var totalsCont;
    var totals;
    if (db.concreteArea[area - 1].finishType === "Salt") {
      typeContractor = ((sqf / laborSQF) * laborPrice + sqf).toFixed(2);
      theF = (((sqf / laborSQF) * laborPrice + sqf) / margin).toFixed(2);
    } else {
      typeContractor = ((sqf / laborSQF) * laborPrice).toFixed(2);
      theF = (((sqf / laborSQF) * laborPrice) / margin).toFixed(2);
    }
    totalsCont = typeContractor;
    totals = theF;

    // conc pricing

    var depth = parseFloat(db.concreteArea[area - 1].concDepth, 10);
    var psiValue = parseFloat(db.concreteArea[area - 1].concVal, 10);

    var cubicFeet = (depth / 12) * sqf;

    var cubicYards = cubicFeet / 27;
    var concCostCont = (cubicYards * psiValue + 200).toFixed(2);
    var concPriceInput = (concCostCont / margin).toFixed(2);
    totalsCont = +totalsCont + +concCostCont;
    totals = +totals + +concPriceInput;

    // demo
    var demosqf = db.concreteArea[area - 1].sqf;
    var demoPricing = 1;
    if (isNaN(demoPricing)) {
      demoPricing = 1;
    }
    var democontract = (((demosqf * depth * 144) / 1728) * demoPricing).toFixed(
      2
    );
    var totDemCost = (democontract / margin).toFixed(2);
    totalsCont = +totalsCont + +democontract;
    totals = +totals + +totDemCost;

    // exca
    var excasquareFT = db.concreteArea[area - 1].sqf;
    var addexcasquareFT = 0;
    var excaDepth = depth + db.bases[area - 1].options[0].bdepth;
    var excaVolume = (excasquareFT * excaDepth * 144) / 1728;
    var excaVolYards = excaVolume / 27;
    var excaLabTotal = (90 * (excaVolYards + addexcasquareFT)).toFixed(2);
    var excaTotals = (excaLabTotal / margin).toFixed(2);
    totalsCont = +totalsCont + +excaLabTotal;
    totals = +totals + +excaTotals;

    //haul
    var haulsquareFT = db.concreteArea[area - 1].sqf;
    var addhaulsquareFT = 0;
    var haulVolume = (haulsquareFT * excaDepth * 144) / 1728;
    var haulVolYards = haulVolume / 27;

    var haulConCost = 111 * (haulVolYards + addhaulsquareFT) - excaLabTotal;
    var haulConCostTotal = haulConCost.toFixed(2);
    var haulCost =
      (111 * (haulVolYards + addhaulsquareFT) - excaLabTotal) / margin;
    var haulTotals = haulCost.toFixed(2);
    totalsCont = +totalsCont + +haulConCostTotal;
    totals = +totals + +haulTotals;

    // base
    var bases = db.bases[area - 1].quant;
    for (var i = 0; i <= bases; i++) {
      var baseoneDepth = parseInt(db.bases[area - 1].options[i].bdepth, 10);
      var basestyle = parseInt(db.bases[area - 1].options[i].bCost, 10);

      var baseVolume = (baseoneDepth / 12) * sqf;
      var unroundbaseVolumeYards = baseVolume / 27;
      var baseVolumeYards;
      if (Math.round(unroundbaseVolumeYards) < unroundbaseVolumeYards) {
        baseVolumeYards = Math.round(unroundbaseVolumeYards) + 0.5;
      } else {
        baseVolumeYards = Math.round(unroundbaseVolumeYards);
      }
      // var baseVolumeYards = Math.ceil(unroundbaseVolumeYards, 0.5);
      var baseDelivery = unroundbaseVolumeYards * 10 + 150;
      var baselabCost;
      if (db.bases[area - 1].options[i].btype === "#2 Base Rock") {
        baselabCost = unroundbaseVolumeYards * basestyle + baseDelivery;
      } else {
        baselabCost = baseVolumeYards * basestyle + 200;
      }
      var baselaborcost = baselabCost.toFixed(2);
      var baseoneTotal = (baselabCost / margin).toFixed(2);
      totalsCont = +totalsCont + +baselaborcost;
      totals = +totals + +baseoneTotal;
    }

    // rebar

    var rebarCostPSQF = db.concreteArea[area - 1].rCost;

    var rebarMult = db.concreteArea[area - 1].rMult;
    var rebarLabor = sqf * rebarMult;
    var rebarCont = (rebarCostPSQF * sqf + rebarLabor).toFixed(2);

    var rebarTot = (rebarCont / margin).toFixed(2);
    totalsCont = +totalsCont + +rebarCont;
    totals = +totals + +rebarTot;

    // back yard
    // var backyardCont = (sqf * 2).toFixed(2);
    // var backyardCust = (backyardCont / margin).toFixed(2);
    // totalsCont = +totalsCont + +backyardCont;
    // totals = +totals + +backyardCust;

    var totalsContSQF;
    totalsContSQF = (totalsCont / sqf).toFixed(2);
    var totalsSQF = (totals / sqf).toFixed(2);

    if (obj === "show") {
      db.bottomsUp[area - 1].options[0].total = totalsContSQF;
    } else {
      db.bottomsUp[area - 1].options[1].total = totalsContSQF;
    }
    console.log(db.bottomsUp[area - 1].options[0].total);
    console.log(db.bottomsUp[area - 1].options[1].total);
  }

  show(e, area, obj) {
    // console.log("entered show");
    // console.log(obj);
    var areaHead = document.getElementById(area);
    if (obj === "base") {
      db.visibility[0].type[area - 1].val = 0;
    } else if (obj === "extra") {
      db.visibility[1].type[area - 1].val = 0;
    } else if (obj === "rebar") {
      db.visibility[2].type[area - 1].val = 0;
    } else if (obj === "edit") {
      db.visibility[3].type[area - 1].val = 0;
      this.oldCalc(area, "show");
    } else if (obj === "stamp") {
      db.visibility[4].type[area - 1].val = 0;
    } else if (obj === "stain") {
      db.visibility[5].type[area - 1].val = 0;
    } else if (obj === "seal") {
      db.visibility[6].type[area - 1].val = 0;
    } else if (obj === "aggra") {
      db.visibility[7].type[area - 1].val = 0;
    } else if (obj === "under") {
      db.visibility[8].type[area - 1].val = 0;
    } else if (obj === "drain") {
      db.visibility[9].type[area - 1].val = 0;
    } else if (obj === "conduit") {
      db.visibility[10].type[area - 1].val = 0;
    } else if (obj === "addlab") {
      db.visibility[11].type[area - 1].val = 0;
    } else if (obj === "custom") {
      db.visibility[12].type[area - 1].val = 0;
    } else if (obj === "approaches") {
      db.visibility[13].type[area - 1].val = 0;
    } else if (obj === "permit") {
      db.visibility[14].type[area - 1].val = 0;
    }

    this.setState({
      conc_areas: this.state.conc_areas.filter(area => {
        return area.id <= this.state.areas;
      })
    });
  }

  hide(e, area, obj) {
    var areaHead = document.getElementById(area);
    if (obj === "base") {
      db.visibility[0].type[area - 1].val = 1;
    } else if (obj === "extra") {
      db.visibility[1].type[area - 1].val = 1;
      this.hide(e, area, "stamp");
      this.hide(e, area, "stain");
      this.hide(e, area, "seal");
      this.hide(e, area, "aggra");
      this.hide(e, area, "under");
      this.hide(e, area, "drain");
      this.hide(e, area, "conduit");
      this.hide(e, area, "addlab");
      this.hide(e, area, "custom");
      this.hide(e, area, "approaches");
      this.hide(e, area, "permit");
    } else if (obj === "rebar") {
      db.visibility[2].type[area - 1].val = 1;
    } else if (obj === "edit") {
      db.visibility[3].type[area - 1].val = 1;
      areaHead.querySelector("#editForm").reset();
      this.handleFinishType(e, area);
      this.handleCDepthChange(e, area);
      this.handleConcTypeChange(e, area);
      for (var i = 0; i <= db.bases[area - 1].quant; i++) {
        this.handleBase(e, area, i);
        this.handleBaseTypeChange(e, area, i);
      }
      db.bases[area - 1].quant = 0;
      this.handleRebar(e, area);
    } else if (obj === "stamp") {
      db.visibility[4].type[area - 1].val = 1;
      areaHead.querySelector("#stampForm").reset();
      this.handleStamp(e, area);
    } else if (obj === "stain") {
      db.visibility[5].type[area - 1].val = 1;
      areaHead.querySelector("#stainForm").reset();
      for (var i = 0; i <= db.stainer[area - 1].quant; i++) {
        this.handleStainChange(e, area, i);
      }
      db.stainer[area - 1].quant = 0;
    } else if (obj === "seal") {
      db.visibility[6].type[area - 1].val = 1;
      areaHead.querySelector("#sealForm").reset();
      for (var i = 0; i <= db.seals[area - 1].quant; i++) {
        this.handleSealant(e, area, i);
      }
      db.seals[area - 1].quant = 0;
    } else if (obj === "aggra") {
      db.visibility[7].type[area - 1].val = 1;
      areaHead.querySelector("#aggraForm").reset();
      this.handleAggra(e, area);
    } else if (obj === "under") {
      db.visibility[8].type[area - 1].val = 1;
      areaHead.querySelector("#underForm").reset();
      for (var i = 0; i <= db.underlay[area - 1].quant; i++) {
        this.handleUnderChange(e, area, i);
      }
      db.underlay[area - 1].quant = 0;
    } else if (obj === "drain") {
      db.visibility[9].type[area - 1].val = 1;
      areaHead.querySelector("#drainForm").reset();
      for (var i = 0; i <= db.drains[area - 1].quant; i++) {
        this.handleDrain(e, area, i);
        this.handleDrainFootage(e, area, i);
      }
      db.drains[area - 1].quant = 0;
    } else if (obj === "conduit") {
      db.visibility[10].type[area - 1].val = 1;
      areaHead.querySelector("#conduitForm").reset();
      this.handleCustom(e, area);
      this.handleCustomCost(e, area);
    } else if (obj === "addlab") {
      db.visibility[11].type[area - 1].val = 1;
      areaHead.querySelector("#addLaborForm").reset();
      this.handleAddLabor(e, area);
      this.handleAddLaborHours(e, area);
    } else if (obj === "custom") {
      db.visibility[12].type[area - 1].val = 1;
    } else if (obj === "approaches") {
      db.visibility[13].type[area - 1].val = 1;
    } else if (obj === "permit") {
      db.visibility[14].type[area - 1].val = 1;
    }
    this.setState({
      conc_areas: this.state.conc_areas.filter(area => {
        return area.id <= this.state.areas;
      })
    });
    // console.log(db.stain[area - 1].count);
    // var counting = db.stain[area - 1].count;
    // this.setState({
    //   stain_areas: db.stain.filter(fun => {
    //     for (var i = 0; i < fun.type.length - 1; i++) {
    //       return fun.type[i].id <= counting;
    //     }
    //   })
    // });
  }

  // Handling Input changes
  handleConcTypeChange(e, area) {
    console.log(e.target.value);
    var type;
    if (e.target.value === "no") {
      type = "3500 PSI";
    } else {
      type = e.target.value;
    }

    var psiValue = db.psi.filter(val => {
      if (type === val.type) {
        return val.cost;
      }
    });
    var cost = parseFloat(psiValue[0].cost, 10);
    db.concreteArea[area - 1].concVal = cost;
    db.concreteArea[area - 1].concType = type;
  }
  handleSQFChange(event, area) {
    db.concreteArea[area - 1].sqf = event.target.value;
  }

  handleMarginChange = event => {
    var dec = 1 - event.target.value * 0.01;

    this.setState({ margin: dec });
  };

  // changed on both sides: check
  handleCDepthChange(e, area) {
    if (e.target.value === "no") {
      db.concreteArea[area - 1].concDepth = 5;
    } else {
      db.concreteArea[area - 1].concDepth = e.target.value;
    }
  }

  handleFinishType(e, area) {
    if (e.target.value === "no") {
      db.concreteArea[area - 1].finishType = "Broom";
    } else {
      db.concreteArea[area - 1].finishType = e.target.value;
    }
  }
  // changed on both sides: check
  handlePermCost(event, area) {
    if (event.target.value === "yes") {
      // this.setState({ ergpCosts: 950 });
      db.concreteArea[area - 1].ergpCostss = 950;
    } else if (event.target.value === "no") {
      db.concreteArea[area - 1].ergpCostss = 0;
    }
  }

  // changed on both sides: check
  handleYard(event, area) {
    var head = document.getElementById(area);
    if (event.target.value === "back") {
      head.querySelector("#yardLoc").name = 2;
    } else if (event.target.value === "front") {
      head.querySelector("#yardLoc").name = 0;
    }
  }

  // no changes keep in state
  handleSlope = event => {
    alert("Custom Quote Required for Projects on a Slope");
    this.setState({ slope: 0 });
  };

  // changed on both sides: check
  handleGarage(event, area) {
    var head = document.getElementById(area);
    if (event.target.value === "yes") {
      head.querySelector("#garageFloor").name = 1;
    } else if (event.target.value === "no") {
      head.querySelector("#garageFloor").name = 0;
    }
  }

  // done but check

  handleBase(e, area, count) {
    if (e.target.value === "no") {
      db.bases[area - 1].options[count].bdepth = 4;
    } else {
      db.bases[area - 1].options[count].bdepth = e.target.value;
    }
  }
  handleBaseTypeChange(e, area, count) {
    var type;
    if (e.target.value === "no") {
      type = "#2 Base Rock";
    } else {
      type = e.target.value;
    }
    db.bases[area - 1].options[count].btype = type;
    var baseValue = db.base.filter(val => {
      if (type === val.type) {
        return val.cost;
      }
    });

    var cost = parseFloat(baseValue[0].cost, 10);
    db.bases[area - 1].options[count].bCost = cost;
  }

  handleRebar(e, area) {
    var type;
    if (e.target.value === "no") {
      type = '#4 Rebar 16" OC';
    } else {
      type = e.target.value;
    }
    db.concreteArea[area - 1].rtype = type;
    var rebarValue = db.rebar.filter(val => {
      if (type === val.type) {
        return val.cost;
      }
    });

    var cost = parseFloat(rebarValue[0].cost, 10);
    var mult = parseFloat(rebarValue[0].mult, 10);
    db.concreteArea[area - 1].rCost = cost;
    db.concreteArea[area - 1].rMult = mult;
  }
  handleStamp(e, area) {
    var type;
    if (e.target.value === "no") {
      type = "Yorkshire Cobble";
    } else {
      type = e.target.value;
    }
    db.concreteArea[area - 1].stampType = type;
    var stampValue = db.stamps.filter(val => {
      if (type === val.type) {
        return val.cost;
      }
    });

    var cost = parseFloat(stampValue[0].cost, 10);
    var quant = parseFloat(stampValue[0].amount, 10);
    db.concreteArea[area - 1].stampCost = cost;
    db.concreteArea[area - 1].stampQuant = quant;
  }

  handleStainChange(e, area, count) {
    var type;
    if (e.target.value === "no") {
      type = "Pre-Mixed";
    } else {
      type = e.target.value;
    }
    db.stainer[area - 1].stainTypes[count].sType = type;
    if (type === "Pre-Mixed") {
      db.stainer[area - 1].stainTypes[count].color = "Adobe";
      db.stainer[area - 1].stainTypes[count].stainId = 0;
    } else {
      db.stainer[area - 1].stainTypes[count].color = "Surface Applied - Black";
      db.stainer[area - 1].stainTypes[count].stainId = 40;
    }

    db.stainer[area - 1].stainTypes[count].staintotals = 0;
    db.stainer[area - 1].stainTypes[count].staintotalsCont = 0;
    // this.handleStainColor(e, area, count);
    this.setState({ conc_areas: this.state.conc_areas });
  }

  handleStainColor(e, area, count) {
    var type;
    console.log(e.target.value);
    if (e.target.value === "no") {
      type = "Adobe";
    } else {
      type = e.target.value;
    }

    var stainValue;
    if (db.stainer[area - 1].stainTypes[count].sType === "Surface Applied") {
      db.stainer[area - 1].stainTypes[count].colorSA = type;
      stainValue = db.surfaceStain.filter(val => {
        if (type === val.color) {
          console.log(val);
          return val;
        }
      });
    } else {
      db.stainer[area - 1].stainTypes[count].colorPM = type;
      stainValue = db.theStains.filter(val => {
        if (type === val.color) {
          console.log(val);
          return val;
        }
      });
    }

    db.stainer[area - 1].stainTypes[count].color = type;
    var id = parseFloat(stainValue[0].id, 10);
    console.log(id);
    db.stainer[area - 1].stainTypes[count].stainId = id;
    db.stainer[area - 1].stainTypes[count].staintotals = 0;
    db.stainer[area - 1].stainTypes[count].staintotalsCont = 0;
    this.setState({ conc_areas: this.state.conc_areas });
  }

  handleSealant(e, area, count) {
    var type;
    if (e.target.value === "no") {
      type = "Glossy";
    } else {
      type = e.target.value;
    }
    db.seals[area - 1].sealTypes[count].type = type;

    var sealValue = db.sealant.filter(val => {
      if (type === val.type) {
        return val;
      }
    });

    var id = parseFloat(sealValue[0].id, 10);

    db.seals[area - 1].sealTypes[count].sealId = id;
  }
  handleUnderChange(e, area, count) {
    var type;
    if (e.target.value === "no") {
      type = "Geotex - Mirafi 500x";
      db.underlay[area - 1].types[count].underId = 0;
    } else {
      type = e.target.value;
    }
    db.underlay[area - 1].types[count].type = type;
    var underValue = db.underlayments.filter(val => {
      if (type === val.type) {
        return val;
      }
    });
    var id = parseFloat(underValue[0].id, 10);
    db.underlay[area - 1].types[count].underId = id;
  }
  handleAggra(e, area) {
    if (e.target.value === "no") {
      db.concreteArea[area - 1].aggraID = 0;
    } else {
      var head = document.getElementById(area);
      db.concreteArea[area - 1].aggraID = head.querySelector(
        "#selectAggra"
      ).options.selectedIndex;
    }
  }
  handleDrain(e, area, count) {
    var type;
    if (e.target.value === "no") {
      type = "Drain Pipe";
      db.drains[area - 1].options[count].drainId = 0;
    } else {
      type = e.target.value;
    }
    db.drains[area - 1].options[count].type = type;
    var drainValue = db.drainage.filter(val => {
      if (type === val.type) {
        return val;
      }
    });
    var id = parseFloat(drainValue[0].id, 10);
    db.drains[area - 1].options[count].drainId = id;
  }
  handleDrainFootage(e, area, count) {
    var length;
    if (e.target.value === "no") {
      length = 0;
    } else {
      length = e.target.value;
    }
    db.drains[area - 1].options[count].drainSize = length;
  }

  handleConduit(e, area) {
    var length;
    if (e.target.value === "no") {
      length = 0;
    } else {
      length = e.target.value;
    }
    db.concreteArea[area - 1].conduitlength = length;
  }
  handleCustom(e, area, count) {
    var descrip;
    if (e.target.value === "no") {
      descrip = 0;
    } else {
      descrip = e.target.value;
    }
    db.custom[area - 1].options[count].descrip = descrip;
  }
  handleCustomCost(e, area, count) {
    var cost;
    if (e.target.value === "no") {
      cost = 0;
    } else {
      cost = e.target.value;
    }
    db.custom[area - 1].options[count].cost = cost;
  }
  handleAddLabor(e, area) {
    var descrip;
    if (e.target.value === "no") {
      descrip = 0;
    } else {
      descrip = e.target.value;
    }
    db.concreteArea[area - 1].addLabordescrip = descrip;
  }
  handleAddLaborHours(e, area) {
    var hours;
    if (e.target.value === "no") {
      hours = 0;
    } else {
      hours = e.target.value;
    }
    db.concreteArea[area - 1].addLaborHours = hours;
  }
  handleApproach(e, area) {
    var length;
    if (e.target.value === "no") {
      length = 0;
    } else {
      length = e.target.value;
    }
    db.concreteArea[area - 1].approachSQF = length;
  }

  addArea = event => {
    // var area = event.target.id - 1;
    if (this.state.areas <= 5) {
      var count = this.state.areas + 1;
      this.setState({ areas: count });
      const concAreas = db.concreteArea;
      this.state.conc_areas = concAreas;

      this.setState({
        conc_areas: this.state.conc_areas.filter(area => {
          return area.id <= count;
        })
      });
      const stainAreas = db.stainer[count - 1].stainTypes;
      this.state.stain_areas = stainAreas;
      // console.log(db.stainer[]);

      this.setState({
        stain_areas: this.state.stain_areas.filter(fun => {
          return fun.id <= db.stainer[count - 1].quant;
        })
      });
      const sealAreas = db.seals[count - 1].sealTypes;
      this.state.seal_areas = sealAreas;
      // console.log(db.stainer[]);

      this.setState({
        seal_areas: this.state.seal_areas.filter(fun => {
          return fun.id <= db.seals[count - 1].quant;
        })
      });
    }
  };
  deleteArea = event => {
    // var area = event.target.id - 1;
    if (this.state.areas > 1) {
      var count = this.state.areas - 1;
      this.setState({ areas: count });
      const concAreas = db.concreteArea;
      this.state.conc_areas = concAreas;
      console.log(count);
      this.setState({
        conc_areas: this.state.conc_areas.filter(area => {
          return area.id <= count;
        })
      });
      const stainAreas = db.stainer[count - 1].stainTypes;
      this.state.stain_areas = stainAreas;
      // console.log(db.stainer[]);

      this.setState({
        stain_areas: this.state.stain_areas.filter(fun => {
          return fun.id <= db.stainer[count - 1].quant;
        })
      });
      const sealAreas = db.seals[count - 1].sealTypes;
      this.state.seal_areas = sealAreas;
      // console.log(db.stainer[]);

      this.setState({
        seal_areas: this.state.seal_areas.filter(fun => {
          return fun.id <= db.seals[count - 1].quant;
        })
      });
    }
  };

  addStain = event => {
    event.preventDefault();
    var area = event.target.value - 1;
    if (db.stainer[area].quant < 2) {
      db.stainer[area].quant = db.stainer[area].quant + 1;
      this.setState({ conc_areas: this.state.conc_areas });
    }
  };
  deleteStain = event => {
    event.preventDefault();
    var area = event.target.value - 1;
    if (db.stainer[area].quant > 0) {
      db.stainer[area].quant = db.stainer[area].quant - 1;
      this.setState({ conc_areas: this.state.conc_areas });
    }
  };
  addSeal = event => {
    event.preventDefault();
    var area = event.target.value - 1;
    if (db.seals[area].quant < 1) {
      db.seals[area].quant = db.seals[area].quant + 1;
      this.setState({ conc_areas: this.state.conc_areas });
    }
  };
  deleteSeal = event => {
    event.preventDefault();
    var area = event.target.value - 1;
    if (db.seals[area].quant > 0) {
      db.seals[area].quant = db.seals[area].quant - 1;
      this.setState({ conc_areas: this.state.conc_areas });
    }
  };
  addUnder = event => {
    event.preventDefault();
    var area = event.target.value - 1;

    if (db.underlay[area].quant < 1) {
      db.underlay[area].quant = db.underlay[area].quant + 1;
      this.setState({ conc_areas: this.state.conc_areas });
    }
  };
  deleteUnder = event => {
    event.preventDefault();
    var area = event.target.value - 1;
    if (db.underlay[area].quant > 0) {
      db.underlay[area].quant = db.underlay[area].quant - 1;
      this.setState({ conc_areas: this.state.conc_areas });
    }
  };
  addBase = event => {
    event.preventDefault();
    var area = event.target.value - 1;

    if (db.bases[area].quant < 1) {
      db.bases[area].quant = db.bases[area].quant + 1;
      this.setState({ conc_areas: this.state.conc_areas });
    }
  };
  deleteBase = event => {
    event.preventDefault();
    var area = event.target.value - 1;
    if (db.bases[area].quant > 0) {
      db.bases[area].quant = db.bases[area].quant - 1;
      this.setState({ conc_areas: this.state.conc_areas });
    }
  };
  addDrain = event => {
    event.preventDefault();
    var area = event.target.value - 1;

    if (db.drains[area].quant < 4) {
      db.drains[area].quant = db.drains[area].quant + 1;
      this.setState({ conc_areas: this.state.conc_areas });
    }
  };
  deleteDrain = event => {
    event.preventDefault();
    var area = event.target.value - 1;
    if (db.drains[area].quant > 0) {
      db.drains[area].quant = db.drains[area].quant - 1;
      this.setState({ conc_areas: this.state.conc_areas });
    }
  };
  addCustom = event => {
    event.preventDefault();
    var area = event.target.value - 1;
    if (db.custom[area].quant < 2) {
      db.custom[area].quant = db.custom[area].quant + 1;
      this.setState({ conc_areas: this.state.conc_areas });
    }
  };
  deleteCustom = event => {
    event.preventDefault();
    var area = event.target.value - 1;
    if (db.custom[area].quant > 0) {
      db.custom[area].quant = db.custom[area].quant - 1;
      this.setState({ conc_areas: this.state.conc_areas });
    }
  };

  render() {
    return (
      <div id="overarching">
        <h3>Hardscape Calculator</h3>
        <div id="concretes">
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

        {this.state.conc_areas.map(area => {
          //  var head = document.getElementById(area.id)
          var slope = "slope" + area.id;
          var garagee = "garage" + area.id;
          var edits = "edits" + area.id;
          var addREqq = "addish" + area.id;
          var finishtypess = "ftype" + area.id;
          var basell = "base" + area.id;
          var rebaar = "rebar" + area.id;
          var stampss = "stamps" + area.id;
          var stainsss = "stain" + area.id;
          var seals = "seal" + area.id;
          var aggra = "agg" + area.id;
          var underlayy = "under" + area.id;
          var drainn = "drain" + area.id;
          var stepps = "steps" + area.id;
          var landingg = "landing" + area.id;
          var crub = "curb" + area.id;
          var retWall = "retain" + area.id;
          var approachs = "walk" + area.id;
          var elec = "elec" + area.id;
          var addlaboor = "addlaborr" + area.id;
          var custReq = "cust" + area.id;

          return (
            <div id={area.id}>
              <div id="entries">
                <div id="concretes">
                  <h4>Area {area.id}</h4>
                  <div id="options">
                    <label>Square Feet: </label>

                    <input
                      type="text"
                      id="sqft"
                      placeholder="ex: 500"
                      // value={this.state.squareFeet}
                      onChange={e => this.handleSQFChange(e, area.id)}
                    />
                  </div>
                  <div id="options">
                    <label>Hardscape Style: </label>

                    <select class="select-css" required>
                      <option value="conc">Concrete </option>
                      <option value="pav">Pavers </option>
                      <option value="asph">Asphalt </option>
                    </select>
                  </div>

                  {/* <div id="options">
                    <label>Is it on a Slope? </label>

                    <input
                      type="radio"
                      id="yes"
                      name={slope}
                      value="yes"
                      checked={this.state.slope}
                      onClick={this.handleSlope}
                    />
                    <label htmlFor="yes"> Yes </label>

                    <input
                      type="radio"
                      id="no"
                      name={slope}
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
                      name={garagee}
                      value="yes"
                      onClick={e => this.handleGarage(e, area.id)}
                    />
                    <label htmlFor="yes"> Yes </label>

                    <input
                      type="radio"
                      id="no"
                      name={garagee}
                      value="no"
                      onClick={e => this.handleGarage(e, area.id)}
                      defaultChecked
                    />
                    <label htmlFor="no"> No</label>
                  </div> */}
                  <div id="options">
                    <label>Edit Defaults? </label>

                    <input
                      type="radio"
                      // id={3}
                      name={edits}
                      value="yes"
                      onClick={e => this.show(e, area.id, "edit")}
                    />
                    <label htmlFor="yes"> Yes </label>

                    <input
                      type="radio"
                      // id={3}
                      name={edits}
                      value="no"
                      onClick={e => this.hide(e, area.id, "edit")}
                      defaultChecked
                    />
                    <label htmlFor="no"> No</label>
                  </div>
                  <form id="editForm">
                    <div
                      id="optionsShown"
                      style={
                        db.vals[db.visibility[3].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      <label>Concrete Type: </label>

                      <select
                        id="selectPSI"
                        class="select-css"
                        onChange={e => this.handleConcTypeChange(e, area.id)}
                      >
                        {db.psi.map(type => {
                          if (type.id === 0) {
                            return (
                              <option id={type.type} name={type.id} selected>
                                {type.type}
                              </option>
                            );
                          } else {
                            return (
                              <option id={type.type} name={type.id}>
                                {type.type}
                              </option>
                            );
                          }
                        })}
                      </select>

                      <br></br>
                      <br></br>
                      <label>Concrete Depth in Inches: </label>
                      <input
                        type="text"
                        id="cdepth"
                        placeholder={db.concreteArea[area.id - 1].concDepth}
                        onChange={e => this.handleCDepthChange(e, area.id)}
                      />
                    </div>
                    <div
                      id="optionsShown"
                      style={
                        db.vals[db.visibility[3].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      <label>Finish Type: </label>
                      <input
                        type="radio"
                        id="broom"
                        name={finishtypess}
                        value="Broom"
                        onClick={e => this.handleFinishType(e, area.id)}
                        defaultChecked
                      />
                      <label htmlFor="broom"> Broom</label>

                      <input
                        type="radio"
                        id="salt"
                        name={finishtypess}
                        value="Salt"
                        onClick={e => this.handleFinishType(e, area.id)}
                      />
                      <label htmlFor="salt"> Salt</label>
                    </div>
                    <div
                      id="optionsShown"
                      style={
                        db.vals[db.visibility[3].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      {db.bases[area.id - 1].options.map(count => {
                        if (count.id <= db.bases[area.id - 1].quant) {
                          return (
                            <div id="basey" name={count.id}>
                              <br></br>
                              {/* <br></br> */}
                              <label>
                                Base Layer Material {count.id + 1}:{" "}
                              </label>
                              <select
                                id="selectBase"
                                class="select-css"
                                onChange={e =>
                                  this.handleBaseTypeChange(
                                    e,
                                    area.id,
                                    count.id
                                  )
                                }
                              >
                                {db.base.map(base => {
                                  if (base.name === 0) {
                                    return (
                                      <option name={base.id} selected>
                                        {base.type}
                                      </option>
                                    );
                                  } else {
                                    return (
                                      <option
                                        id={base.type}
                                        name={base.id}
                                        // selected={false}
                                      >
                                        {base.type}
                                      </option>
                                    );
                                  }
                                })}
                              </select>

                              <br></br>
                              <br></br>
                              <label>Base Layer Depth in Inches: </label>
                              <input
                                type="text"
                                id="bdepth"
                                placeholder={
                                  db.bases[area.id - 1].options[count.id].bdepth
                                }
                                // value={this.state.baseDepth}
                                onChange={e =>
                                  this.handleBase(e, area.id, count.id)
                                }
                              />
                            </div>
                          );
                        }
                      })}

                      <br></br>
                      <button value={area.id} onClick={this.addBase}>
                        Add Extra Base Layer
                      </button>
                      <button value={area.id} onClick={this.deleteBase}>
                        Delete Base Layer
                      </button>
                      <br></br>
                      {/* <br></br> */}
                      {/* </div> */}
                    </div>

                    <div
                      id="optionsShown"
                      style={
                        db.vals[db.visibility[3].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      <label>Rebar Material: </label>
                      <select
                        id="selectRebar"
                        class="select-css"
                        onChange={e => this.handleRebar(e, area.id)}
                      >
                        {db.rebar.map(rebar => {
                          if (rebar.type === '#4 Rebar 16" OC') {
                            return (
                              <option id={rebar.type} name={rebar.id} selected>
                                {rebar.type}
                              </option>
                            );
                          } else {
                            return (
                              <option id={rebar.type} name={rebar.id}>
                                {rebar.type}
                              </option>
                            );
                          }
                        })}
                      </select>
                      {/* </div> */}
                    </div>
                  </form>

                  <div id="options">
                    <label>Additional Requests? </label>

                    <input
                      type="radio"
                      id="yes"
                      name={addREqq}
                      value="yes"
                      onClick={e => this.show(e, area.id, "extra")}
                    />
                    <label htmlFor="yes"> Yes </label>

                    <input
                      type="radio"
                      id="no"
                      name={addREqq}
                      value="no"
                      onClick={e => this.hide(e, area.id, "extra")}
                      defaultChecked
                    />
                    <label htmlFor="no"> No</label>
                  </div>

                  <div
                    id="optionsShown"
                    style={
                      db.vals[db.visibility[1].type[area.id - 1].val].type[0]
                        .styles
                    }
                  >
                    <form id="stampForm">
                      <label>Stamped Finish Requested? </label>

                      <input
                        type="radio"
                        // id={4}
                        name={stampss}
                        value="yes"
                        onClick={e => this.show(e, area.id, "stamp")}
                      />
                      <label htmlFor="yes"> Yes </label>

                      <input
                        type="radio"
                        // id={4}
                        name={stampss}
                        value="no"
                        defaultChecked
                        onClick={e => this.hide(e, area.id, "stamp")}
                      />
                      <label htmlFor="no"> No</label>

                      <div
                        id="stampp"
                        style={
                          db.vals[db.visibility[4].type[area.id - 1].val]
                            .type[0].styles
                        }
                      >
                        <br></br>
                        <label>Stamp Choice: </label>
                        <select
                          id="selectStamp"
                          class="select-css"
                          onChange={e => this.handleStamp(e, area.id)}
                        >
                          {db.stamps.map(rebar => {
                            return (
                              <option id={rebar.type} name={rebar.id}>
                                {rebar.type}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </form>
                  </div>

                  <div
                    id="optionsShown"
                    style={
                      db.vals[db.visibility[1].type[area.id - 1].val].type[0]
                        .styles
                    }
                  >
                    <form id="stainForm">
                      <label>Stained Finish Requested? </label>

                      <input
                        type="radio"
                        // id={5}
                        name={stainsss}
                        value="yes"
                        // defaultChecked
                        onClick={e => this.show(e, area.id, "stain")}
                      />
                      <label htmlFor="yes"> Yes </label>

                      <input
                        type="radio"
                        // id={5}
                        name={stainsss}
                        value="no"
                        defaultChecked
                        onClick={e => this.hide(e, area.id, "stain")}
                      />
                      <label htmlFor="no"> No</label>
                      <div
                        id="stainn"
                        name="PM"
                        style={
                          db.vals[db.visibility[5].type[area.id - 1].val]
                            .type[0].styles
                        }
                      >
                        {/* {this.state.stain_areas.map(count => { */}
                        {db.stainer[area.id - 1].stainTypes.map(count => {
                          var pm = count.id + "pm" + area.id;
                          // var ap = count.id + "ap";
                          if (count.id <= db.stainer[area.id - 1].quant) {
                            return (
                              <div id="stainVals" name={count}>
                                <br></br>
                                <label>Type: </label>
                                <input
                                  type="radio"
                                  // id={pm}
                                  value="Pre-Mixed"
                                  name={pm}
                                  onClick={e =>
                                    this.handleStainChange(e, area.id, count.id)
                                  }
                                  defaultChecked
                                />
                                <label htmlFor={pm}> Pre-Mixed</label>
                                <input
                                  type="radio"
                                  // id={ap}
                                  value="Surface Applied"
                                  name={pm}
                                  onClick={e =>
                                    this.handleStainChange(e, area.id, count.id)
                                  }
                                />
                                <label htmlFor={pm}> Surface Applied</label>

                                <br></br>
                                <br></br>
                                <label>Color: </label>
                                {/* <select
                                  id="selectStain"
                                  class="select-css"
                                  onChange={e =>
                                    this.handleStainColor(e, area.id, count.id)
                                  }
                                > */}
                                {db.stainHelp.map(val => {
                                  if (
                                    db.stainer[area.id - 1].stainTypes[count.id]
                                      .sType === "Pre-Mixed"
                                  ) {
                                    {
                                      return (
                                        <select
                                          id="selectStain"
                                          class="select-css"
                                          onChange={e =>
                                            this.handleStainColor(
                                              e,
                                              area.id,
                                              count.id
                                            )
                                          }
                                        >
                                          {db.theStains.map(stain => {
                                            var nameColor =
                                              area.id +
                                              "color" +
                                              stain.id +
                                              val.id;

                                            return (
                                              <option
                                                id={stain.color}
                                                name={nameColor}
                                              >
                                                {stain.color}
                                              </option>
                                            );
                                          })}
                                        </select>
                                      );
                                    }
                                  } // end of if
                                  else {
                                    return (
                                      <select
                                        id="selectStain"
                                        class="select-css"
                                        onChange={e =>
                                          this.handleStainColor(
                                            e,
                                            area.id,
                                            count.id
                                          )
                                        }
                                      >
                                        {db.surfaceStain.map(stain => {
                                          var nameColor =
                                            area.id +
                                            "color" +
                                            stain.id +
                                            val.id;

                                          return (
                                            <option
                                              id={stain.color}
                                              name={nameColor}
                                            >
                                              {stain.color}
                                            </option>
                                          );
                                        })}
                                        ;
                                      </select>
                                    );
                                  }
                                })}

                                {/* {db.theStains.map(stain => {
                                    var nameColor =
                                      area.id + "color" + stain.id;

                                    if (
                                      db.stainer[area.id - 1].stainTypes[
                                        count.id
                                      ].sType === "Pre-Mixed"
                                    ) {
                                      if (stain.id <= 39) {
                                        return (
                                          <option
                                            id={stain.color}
                                            name={nameColor}
                                          >
                                            {stain.color}
                                          </option>
                                        );
                                      }
                                    } else {
                                      if (stain.id > 39) {
                                        return (
                                          <option
                                            id={stain.color}
                                            name={nameColor}
                                          >
                                            {stain.color}
                                          </option>
                                        );
                                      }
                                    }
                                  })} */}
                                {/* </select> */}
                                <br></br>
                              </div>
                            );
                          }
                        })}
                        <br></br>
                        <button value={area.id} onClick={this.addStain}>
                          Add Extra Stain Color
                        </button>
                        <button value={area.id} onClick={this.deleteStain}>
                          Delete Stain Color
                        </button>
                        <br></br>
                        <br></br>
                      </div>
                    </form>
                  </div>

                  <div
                    id="optionsShown"
                    style={
                      db.vals[db.visibility[1].type[area.id - 1].val].type[0]
                        .styles
                    }
                  >
                    <form id="sealForm">
                      <label>Sealant Requested? </label>

                      <input
                        type="radio"
                        id="yes"
                        name={seals}
                        value="yes"
                        onClick={e => this.show(e, area.id, "seal")}
                      />
                      <label htmlFor="yes"> Yes </label>

                      <input
                        type="radio"
                        id="no"
                        name={seals}
                        value="no"
                        defaultChecked
                        onClick={e => this.hide(e, area.id, "seal")}
                      />
                      <label htmlFor="no"> No</label>
                      <div
                        id="seall"
                        style={
                          db.vals[db.visibility[6].type[area.id - 1].val]
                            .type[0].styles
                        }
                      >
                        {db.seals[area.id - 1].sealTypes.map(count => {
                          var bpm = count.id + "aspm" + area.id;
                          if (count.id <= db.seals[area.id - 1].quant) {
                            return (
                              <div>
                                <br></br>
                                <lable>Type: </lable>
                                <select
                                  id="selectSeal"
                                  class="select-css"
                                  onChange={e =>
                                    this.handleSealant(e, area.id, count.id)
                                  }
                                >
                                  {db.sealant.map(val => {
                                    return (
                                      <option
                                        id={val.type}
                                        name={val.id}
                                        // selected={false}
                                      >
                                        {val.type}
                                      </option>
                                    );
                                  })}
                                  {/* <br></br>
                              <label>Sealant Type: </label>
                              <input
                                type="radio"
                     
                                value="Glossy"
                                name={bpm}
                                onClick={e =>
                                  this.handleSealChange(e, area.id, count.id)
                                }
                                defaultChecked
                              /> */}
                                  {/* <label htmlFor={bpm}> Glossy</label>
                              <input
                                type="radio"
                                // id={ap}
                                value="Matte"
                                name={bpm}
                                onClick={e =>
                                  this.handleSealChange(e, area.id, count.id)
                                }
                              />
                              <label htmlFor={bpm}> Matte</label>
                              <input
                                type="radio"
                                // id={ap}
                                value="Epoxy"
                                name={bpm}
                                onClick={e =>
                                  this.handleSealChange(e, area.id, count.id)
                                }
                              />
                              <label htmlFor={bpm}>Epoxy</label> */}
                                </select>
                              </div>
                            );
                          }
                        })}

                        <br></br>
                        <button value={area.id} onClick={this.addSeal}>
                          Add Extra Sealant
                        </button>
                        <button value={area.id} onClick={this.deleteSeal}>
                          Delete Sealant
                        </button>
                        <br></br>
                        <br></br>
                      </div>
                    </form>
                  </div>
                  {/* v2 */}
                  <div
                    id="optionsShown"
                    style={
                      db.vals[db.visibility[1].type[area.id - 1].val].type[0]
                        .styles
                    }
                  >
                    <form id="aggraForm">
                      <label>Exposed Aggregate Finish Requested? </label>

                      <input
                        type="radio"
                        id="yes"
                        name={aggra}
                        value="yes"
                        onClick={e => this.show(e, area.id, "aggra")}
                      />
                      <label htmlFor="yes"> Yes </label>

                      <input
                        type="radio"
                        id="no"
                        name={aggra}
                        value="no"
                        defaultChecked
                        onClick={e => this.hide(e, area.id, "aggra")}
                      />
                      <label htmlFor="no"> No</label>

                      <div
                        id="aggraa"
                        style={
                          db.vals[db.visibility[7].type[area.id - 1].val]
                            .type[0].styles
                        }
                      >
                        <br></br>
                        <label>Type: </label>
                        <select
                          id="selectAggra"
                          class="select-css"
                          onChange={e => this.handleAggra(e, area.id)}
                        >
                          {/* {db.stamps} */}
                          {db.exposedAggregate.map(aggra => {
                            return (
                              <option id={aggra.type} name={aggra.id}>
                                {aggra.type}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </form>
                  </div>

                  <div
                    id="optionsShown"
                    style={
                      db.vals[db.visibility[1].type[area.id - 1].val].type[0]
                        .styles
                    }
                  >
                    <form id="underForm">
                      <label>Underlayment Required? </label>

                      <input
                        type="radio"
                        id="yes"
                        name={underlayy}
                        value="yes"
                        onClick={e => this.show(e, area.id, "under")}
                      />
                      <label htmlFor="yes"> Yes </label>

                      <input
                        type="radio"
                        id="no"
                        name={underlayy}
                        value="no"
                        defaultChecked
                        onClick={e => this.hide(e, area.id, "under")}
                      />
                      <label htmlFor="no"> No</label>
                      <div
                        id="underr"
                        style={
                          db.vals[db.visibility[8].type[area.id - 1].val]
                            .type[0].styles
                        }
                      >
                        {db.underlay[area.id - 1].types.map(count => {
                          var apm = area.id + "asdfas" + count.id;
                          if (count.id <= db.underlay[area.id - 1].quant) {
                            return (
                              <div>
                                <br></br>
                                <label>Type: </label>
                                <select
                                  id="selectUnder"
                                  class="select-css"
                                  onChange={e =>
                                    this.handleUnderChange(e, area.id, count.id)
                                  }
                                >
                                  {db.underlayments.map(val => {
                                    var nameUnder =
                                      area.id + "color" + count.id + val.id;
                                    return (
                                      <option id={val.id} name={nameUnder}>
                                        {val.type}
                                      </option>
                                    );
                                  })}
                                </select>
                                <br></br>
                              </div>
                            );
                          }
                        })}

                        <br></br>
                        <button value={area.id} onClick={this.addUnder}>
                          Add Extra Underlayment
                        </button>
                        <button value={area.id} onClick={this.deleteUnder}>
                          Delete Underlayment
                        </button>
                        <br></br>
                        <br></br>
                      </div>
                    </form>
                  </div>
                  <div
                    id="optionsShown"
                    style={
                      db.vals[db.visibility[1].type[area.id - 1].val].type[0]
                        .styles
                    }
                  >
                    <form id="drainForm">
                      <label>Drainage Required? </label>

                      <input
                        type="radio"
                        id="yes"
                        name={drainn}
                        value="yes"
                        onClick={e => this.show(e, area.id, "drain")}
                      />
                      <label htmlFor="yes"> Yes </label>

                      <input
                        type="radio"
                        id="no"
                        name={drainn}
                        value="no"
                        defaultChecked
                        onClick={e => this.hide(e, area.id, "drain")}
                      />
                      <label htmlFor="no"> No</label>
                      <div
                        id="drainnn"
                        style={
                          db.vals[db.visibility[9].type[area.id - 1].val]
                            .type[0].styles
                        }
                      >
                        {db.drains[area.id - 1].options.map(count => {
                          if (count.id <= db.drains[area.id - 1].quant) {
                            return (
                              <div id="drainVals" name={count}>
                                <br></br>
                                <label>Type: </label>
                                <select
                                  id="selectDrain"
                                  class="select-css"
                                  onChange={e =>
                                    this.handleDrain(e, area.id, count.id)
                                  }
                                >
                                  {db.drainage.map(drain => {
                                    return (
                                      <option id={drain.type} name={drain.id}>
                                        {drain.type}
                                      </option>
                                    );
                                  })}
                                </select>
                                <br></br>
                                <br></br>
                                <label>Drainage Linear Feet/Quantity: </label>
                                <input
                                  type="text"
                                  id="drainsie"
                                  placeholder="Ex: 50"
                                  onChange={e =>
                                    this.handleDrainFootage(
                                      e,
                                      area.id,
                                      count.id
                                    )
                                  }
                                />
                              </div>
                            );
                          }
                        })}
                        <br></br>
                        <button value={area.id} onClick={this.addDrain}>
                          Add Extra Drainage
                        </button>
                        <button value={area.id} onClick={this.deleteDrain}>
                          Delete Drainage
                        </button>
                        <br></br>
                        <br></br>
                      </div>
                    </form>
                  </div>

                  <div
                    id="optionsShown"
                    style={
                      db.vals[db.visibility[1].type[area.id - 1].val].type[0]
                        .styles
                    }
                  >
                    <label>Steps Requested? </label>

                    <input type="radio" id="yes" name={stepps} value="yes" />
                    <label htmlFor="yes"> Yes </label>

                    <input
                      type="radio"
                      id="no"
                      name={stepps}
                      value="no"
                      defaultChecked
                    />
                    <label htmlFor="no"> No</label>
                  </div>
                  {/* v2 */}
                  <div
                    id="optionsShown"
                    style={
                      db.vals[db.visibility[1].type[area.id - 1].val].type[0]
                        .styles
                    }
                  >
                    <label>Landing Requested?</label>

                    <input type="radio" id="yes" name={landingg} value="yes" />
                    <label htmlFor="yes"> Yes </label>

                    <input
                      type="radio"
                      id="no"
                      name={landingg}
                      value="no"
                      defaultChecked
                    />
                    <label htmlFor="no"> No</label>
                  </div>
                  {/* v2 */}
                  <div
                    id="optionsShown"
                    style={
                      db.vals[db.visibility[1].type[area.id - 1].val].type[0]
                        .styles
                    }
                  >
                    <label>Curbing: </label>

                    <input
                      type="radio"
                      id="straight"
                      name={crub}
                      value="straight"
                    />
                    <label htmlFor="straight"> Straight </label>

                    <input
                      type="radio"
                      id="curved"
                      name={crub}
                      value="curved"
                    />
                    <label htmlFor="curved"> Curved</label>
                  </div>
                  {/* v2 */}
                  <div
                    id="optionsShown"
                    style={
                      db.vals[db.visibility[1].type[area.id - 1].val].type[0]
                        .styles
                    }
                  >
                    <label>Retaining Wall Required? </label>

                    <input type="radio" id="yes" name={retWall} value="yes" />
                    <label htmlFor="yes"> Yes </label>

                    <input
                      type="radio"
                      id="no"
                      name={retWall}
                      value="no"
                      defaultChecked
                    />
                    <label htmlFor="no"> No</label>
                  </div>
                  <div
                    id="optionsShown"
                    style={
                      db.vals[db.visibility[1].type[area.id - 1].val].type[0]
                        .styles
                    }
                  >
                    <form id="approachForm">
                      <label>
                        Driveway Approach with Sidewalk and Gutter Requested?
                      </label>

                      <input
                        type="radio"
                        id="yes"
                        name={approachs}
                        value="yes"
                        onClick={e => this.show(e, area.id, "approaches")}
                      />
                      <label htmlFor="yes"> Yes </label>

                      <input
                        type="radio"
                        id="no"
                        name={approachs}
                        value="no"
                        defaultChecked
                        onClick={e => this.hide(e, area.id, "approaches")}
                      />
                      <label htmlFor="no"> No</label>
                      <div
                        id="approachShown"
                        style={
                          db.vals[db.visibility[13].type[area.id - 1].val]
                            .type[0].styles
                        }
                      >
                        <br></br>
                        <label>Square Feet: </label>
                        <input
                          type="text"
                          id="sideapproach"
                          placeholder="Ex: 100"
                          // value={5}
                          onChange={e => this.handleApproach(e, area.id)}
                        />
                      </div>
                    </form>
                  </div>
                  <div
                    id="optionsShown"
                    style={
                      db.vals[db.visibility[1].type[area.id - 1].val].type[0]
                        .styles
                    }
                  >
                    <form id="conduitForm">
                      <label>Electrical Conduit Requested? </label>

                      <input
                        type="radio"
                        id="yes"
                        name={elec}
                        value="yes"
                        onClick={e => this.show(e, area.id, "conduit")}
                      />
                      <label htmlFor="yes"> Yes </label>

                      <input
                        type="radio"
                        id="no"
                        name={elec}
                        value="no"
                        defaultChecked
                        onClick={e => this.hide(e, area.id, "conduit")}
                      />
                      <label htmlFor="no"> No</label>
                      <div
                        id="conduitsShown"
                        style={
                          db.vals[db.visibility[10].type[area.id - 1].val]
                            .type[0].styles
                        }
                      >
                        <br></br>
                        <label>Linear Feet: </label>
                        <input
                          type="text"
                          id="elecCond"
                          placeholder="Ex: 50"
                          // value={5}
                          onChange={e => this.handleConduit(e, area.id)}
                        />
                      </div>
                    </form>
                  </div>
                  <div
                    id="optionsShown"
                    style={
                      db.vals[db.visibility[1].type[area.id - 1].val].type[0]
                        .styles
                    }
                  >
                    <form id="addLaborForm">
                      <label>Additional Labor Required? </label>

                      <input
                        type="radio"
                        id="yes"
                        name={addlaboor}
                        value="yes"
                        onClick={e => this.show(e, area.id, "addlab")}
                      />
                      <label htmlFor="yes"> Yes </label>

                      <input
                        type="radio"
                        id="no"
                        name={addlaboor}
                        value="no"
                        defaultChecked
                        onClick={e => this.hide(e, area.id, "addlab")}
                      />
                      <label htmlFor="no"> No</label>
                      <div
                        id="addishShown"
                        style={
                          db.vals[db.visibility[11].type[area.id - 1].val]
                            .type[0].styles
                        }
                      >
                        <br></br>
                        <label>Extra Labor Hours: </label>
                        <input
                          type="text"
                          id="exlab"
                          placeholder="Ex: 10"
                          onChange={e => this.handleAddLaborHours(e, area.id)}
                        />
                        <br></br>
                        <br></br>
                        <label>Description of Labor: </label>
                        <input
                          type="text"
                          id="elecCond"
                          placeholder="Ex: Cleaning"
                          onChange={e => this.handleAddLabor(e, area.id)}
                        />
                      </div>
                    </form>
                  </div>
                  <div
                    id="optionsShown"
                    style={
                      db.vals[db.visibility[1].type[area.id - 1].val].type[0]
                        .styles
                    }
                  >
                    <label>Custom Request? </label>

                    <input
                      type="radio"
                      id="yes"
                      name={custReq}
                      value="yes"
                      onClick={e => this.show(e, area.id, "custom")}
                    />
                    <label htmlFor="yes"> Yes </label>

                    <input
                      type="radio"
                      id="no"
                      name={custReq}
                      value="no"
                      defaultChecked
                      onClick={e => this.hide(e, area.id, "custom")}
                    />
                    <label htmlFor="no"> No</label>
                    <div
                      id="customsShown"
                      style={
                        db.vals[db.visibility[12].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      {db.custom[area.id - 1].options.map(count => {
                        if (count.id <= db.custom[area.id - 1].quant) {
                          return (
                            <div id="custvalss" name={count}>
                              <br></br>
                              <label>Description {count.id + 1}: </label>
                              <input
                                type="text"
                                id="custss"
                                placeholder="Ex: Gate"
                                onChange={e =>
                                  this.handleCustom(e, area.id, count.id)
                                }
                              />
                              <br></br>
                              <br></br>
                              <label>Pay to Contractor: </label>
                              <input
                                type="text"
                                id="custss"
                                placeholder="Ex: 1000"
                                onChange={e =>
                                  this.handleCustomCost(e, area.id, count.id)
                                }
                              />
                            </div>
                          );
                        }
                      })}
                      <br></br>
                      <button value={area.id} onClick={this.addCustom}>
                        Add Extra Custom Items
                      </button>
                      <button value={area.id} onClick={this.deleteCustom}>
                        Delete Custom Item
                      </button>
                      <br></br>
                      <br></br>
                    </div>
                  </div>

                  <br></br>

                  <button onClick={e => this.calc(e, area.id)}>
                    Calculate
                  </button>

                  <br></br>
                </div>
              </div>

              <div id="math">
                <div id="concretes">
                  <h4>Customer Price</h4>
                  <div id="totals">
                    <label id="bob">
                      Description of Area 1 -{area.sqf} sq ft:
                    </label>
                    <br></br>

                    <label id="bob">
                      Concrete Type - {area.concDepth} Inches -{area.concType}{" "}
                      PSI:
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
                    <br></br>
                    <br></br>
                    <label
                      id="bob"
                      style={
                        db.vals[db.visibility[4].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      Stamping - {area.stampType}: ${area.stampTotal}
                    </label>

                    <label
                      id="bob"
                      style={
                        db.vals[db.visibility[5].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      {db.stainer[area.id - 1].stainTypes.map(val => {
                        if (val.id <= db.stainer[area.id - 1].quant) {
                          return (
                            <div>
                              <label>
                                Staining - {val.sType} - {val.color}: $
                                {val.staintotals}
                              </label>
                              <br></br>
                            </div>
                          );
                        }
                      })}
                    </label>
                    <label
                      id="bob"
                      style={
                        db.vals[db.visibility[6].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      {db.seals[area.id - 1].sealTypes.map(val => {
                        if (val.id <= db.seals[area.id - 1].quant) {
                          return (
                            <div>
                              <label>
                                Sealant - {val.type}: ${val.totals}
                              </label>
                              <br></br>
                            </div>
                          );
                        }
                      })}
                    </label>
                    <label
                      id="bob"
                      style={
                        db.vals[db.visibility[7].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      Exposed Aggregate -{" "}
                      {db.exposedAggregate[area.aggraID].type}: $
                      {area.aggraTotals}
                    </label>
                    <label
                      id="bob"
                      style={
                        db.vals[db.visibility[8].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      {db.underlay[area.id - 1].types.map(val => {
                        if (val.id <= db.underlay[area.id - 1].quant) {
                          return (
                            <div>
                              <label>
                                Underlayment - {val.type}: ${val.totals}
                              </label>
                              <br></br>
                            </div>
                          );
                        }
                      })}
                    </label>
                    <label
                      id="bob"
                      style={
                        db.vals[db.visibility[9].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      {db.drains[area.id - 1].options.map(val => {
                        if (val.id <= db.drains[area.id - 1].quant) {
                          return (
                            <div>
                              <label>
                                Drainage - {val.type}- {val.drainSize} ft: $
                                {val.totals}
                              </label>
                              <br></br>
                            </div>
                          );
                        }
                      })}
                    </label>
                    <label
                      id="bob"
                      style={
                        db.vals[db.visibility[10].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      Electrical Conduit -{area.conduitlength} ft: $
                      {area.conduitTotals}
                    </label>
                    <label
                      id="bob"
                      style={
                        db.vals[db.visibility[13].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      Driveway Approach with Sidewalk and Gutter -
                      {area.approachSQF} Square ft: ${area.approachTotals}
                    </label>
                    <label
                      id="bob"
                      style={
                        db.vals[db.visibility[12].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      {db.custom[area.id - 1].options.map(val => {
                        if (val.id <= db.custom[area.id - 1].quant) {
                          return (
                            <div>
                              <label>
                                Custom - {val.descrip} : ${val.totals}
                              </label>
                              <br></br>
                            </div>
                          );
                        }
                      })}
                    </label>
                    <label
                      id="bob"
                      style={
                        db.vals[db.visibility[11].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      Additional Labor -{area.addLabordescrip} -{" "}
                      {area.addLaborHours} hours: ${area.addLaborTotals}
                    </label>
                  </div>
                </div>
                <div id="concretes">
                  <div id="totals">
                    <h4>Contractor Cost</h4>
                    <label id="bob">
                      Description of Area 1 -{area.sqf} sq ft:
                    </label>
                    <br></br>
                    <label id="bob">
                      Concrete Type - {area.concDepth} Inches -{area.concType}{" "}
                      PSI:
                    </label>

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
                    <br></br>
                    <br></br>
                    <label
                      id="bob"
                      style={
                        db.vals[db.visibility[4].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      Stamping - {area.stampType}: ${area.stampTotalCont}
                    </label>
                    <label
                      id="bob"
                      style={
                        db.vals[db.visibility[5].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      {db.stainer[area.id - 1].stainTypes.map(val => {
                        if (val.id <= db.stainer[area.id - 1].quant) {
                          return (
                            <div>
                              <label>
                                Staining - {val.sType} - {val.color}: $
                                {val.staintotalsCont}
                              </label>
                              <br></br>
                            </div>
                          );
                        }
                      })}
                    </label>
                    <label
                      id="bob"
                      style={
                        db.vals[db.visibility[6].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      {db.seals[area.id - 1].sealTypes.map(val => {
                        if (val.id <= db.seals[area.id - 1].quant) {
                          return (
                            <div>
                              <label>
                                Sealant - {val.type}: ${val.totalsCont}
                              </label>
                              <br></br>
                            </div>
                          );
                        }
                      })}
                    </label>
                    <label
                      id="bob"
                      style={
                        db.vals[db.visibility[7].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      Exposed Aggregate -{" "}
                      {db.exposedAggregate[area.aggraID].type}: $
                      {area.aggraTotalsCont}
                    </label>
                    <label
                      id="bob"
                      style={
                        db.vals[db.visibility[8].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      {db.underlay[area.id - 1].types.map(val => {
                        if (val.id <= db.underlay[area.id - 1].quant) {
                          return (
                            <div>
                              <label>
                                Underlayment - {val.type}: ${val.totalsCont}
                              </label>
                              <br></br>
                            </div>
                          );
                        }
                      })}
                    </label>
                    <label
                      id="bob"
                      style={
                        db.vals[db.visibility[9].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      {db.drains[area.id - 1].options.map(val => {
                        if (val.id <= db.drains[area.id - 1].quant) {
                          return (
                            <div>
                              <label>
                                Drainage - {val.type}- {val.drainSize} ft: $
                                {val.totalsCont}
                              </label>
                              <br></br>
                            </div>
                          );
                        }
                      })}
                    </label>
                    <label
                      id="bob"
                      style={
                        db.vals[db.visibility[10].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      Electrical Conduit -{area.conduitlength} ft: $
                      {area.conduitTotalsCont}
                    </label>
                    <label
                      id="bob"
                      style={
                        db.vals[db.visibility[13].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      Driveway Approach with Sidewalk and Gutter -
                      {area.approachSQF} Square ft: ${area.approachTotalsCont}
                    </label>
                    <label
                      id="bob"
                      style={
                        db.vals[db.visibility[12].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      {db.custom[area.id - 1].options.map(val => {
                        if (val.id <= db.custom[area.id - 1].quant) {
                          return (
                            <div>
                              <label>
                                Custom - {val.descrip} : ${val.totalsCont}
                              </label>
                              <br></br>
                            </div>
                          );
                        }
                      })}
                    </label>
                    <label
                      id="bob"
                      style={
                        db.vals[db.visibility[11].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      Additional Labor -{area.addLabordescrip} -{" "}
                      {area.addLaborHours} hours: ${area.addLaborTotalsCont}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div id="add">
          <button onClick={this.addArea}>Additional Concrete Area</button>

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
