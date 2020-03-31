import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
  // Redirect
} from "react-router-dom";
import "./App.css";

const db = {
  regions: [
    {
      id: 0,
      name: "South Bay",
      rWallpfHeightBack: 50, //same
      discountOnPay: 1, //same
      stamping: 350, //same
      gFloor: 2.86, // three is diff 7
      lCostDelta: 0, //three is two
      curvedCurbing: 85, // 1 is 85, rest are 80 three is 90
      drainage: 20, // three is 35
      permitAcq: 550,
      stepsPF: 30,
      straightCurbing: 38,
      rWallpfHeightFront: 50,
      concBlockWallpfHeight: 45,
      twofivepsi: 130,
      threeopsi: 150,
      threefivepsi: 168,
      fouropsi: 190,
      fourfivepsi: 210,
      exposedAgra: 2,
      agraDelivery: 200,
      addiLaborCPH: 50,
      finishLaborMPD: 500,
      finishLaborSQFMPD: 300,
      designerConcBlockWallpfHeight: 20
    },
    {
      id: 1,
      name: "East Bay",
      rWallpfHeightBack: 50,
      discountOnPay: 1,
      stamping: 350,
      gFloor: 2.86,
      lCostDelta: 0,
      curvedCurbing: 80,
      drainage: 20,
      permitAcq: 500,
      stepsPF: 30,
      straightCurbing: 38,
      rWallpfHeightFront: 50,
      concBlockWallpfHeight: 45,
      twofivepsi: 150,
      threeopsi: 150,
      threefivepsi: 168,
      fouropsi: 190,
      fourfivepsi: 210,
      exposedAgra: 2,
      agraDelivery: 250,
      addiLaborCPH: 50,
      finishLaborMPD: 500,
      finishLaborSQFMPD: 300,
      designerConcBlockWallpfHeight: 18
    },
    {
      id: 2,
      name: "North Bay",
      rWallpfHeightBack: 50,
      discountOnPay: 1,
      stamping: 350,
      gFloor: 7,
      lCostDelta: 2,
      curvedCurbing: 90,
      drainage: 35,
      permitAcq: 500,
      stepsPF: 30,
      straightCurbing: 38,
      rWallpfHeightFront: 50,
      concBlockWallpfHeight: 45,
      twofivepsi: 150,
      threeopsi: 150,
      threefivepsi: 168,
      fouropsi: 190,
      fourfivepsi: 210,
      exposedAgra: 4,
      agraDelivery: 400,
      addiLaborCPH: 50,
      finishLaborMPD: 500,
      finishLaborSQFMPD: 300,
      designerConcBlockWallpfHeight: 25
    },
    {
      id: 3,
      name: "Sacramento",
      rWallpfHeightBack: 50,
      discountOnPay: 1,
      stamping: 350,
      gFloor: 2.86,
      lCostDelta: 0,
      curvedCurbing: 80,
      drainage: 20,
      permitAcq: 500,
      stepsPF: 30,
      straightCurbing: 38,
      rWallpfHeightFront: 50,
      concBlockWallpfHeight: 45,
      twofivepsi: 150,
      threeopsi: 150,
      threefivepsi: 168,
      fouropsi: 190,
      fourfivepsi: 210,
      exposedAgra: 2,
      agraDelivery: 300,
      addiLaborCPH: 50,
      finishLaborMPD: 500,
      finishLaborSQFMPD: 300,
      designerConcBlockWallpfHeight: 18
    },
    {
      id: 4,
      name: "Far East Bay",
      rWallpfHeightBack: 50,
      discountOnPay: 1,
      stamping: 350,
      gFloor: 2.86,
      lCostDelta: 0,
      curvedCurbing: 80,
      drainage: 20,
      permitAcq: 500,
      stepsPF: 30,
      straightCurbing: 38,
      rWallpfHeightFront: 50,
      concBlockWallpfHeight: 45,
      twofivepsi: 150,
      threeopsi: 150,
      threefivepsi: 168,
      fouropsi: 190,
      fourfivepsi: 210,
      exposedAgra: 2,
      agraDelivery: 300,
      addiLaborCPH: 50,
      finishLaborMPD: 500,
      finishLaborSQFMPD: 300,
      designerConcBlockWallpfHeight: 18
    },
    {
      id: 5,
      name: "Far South Bay",
      rWallpfHeightBack: 50,
      discountOnPay: 1,
      stamping: 350,
      gFloor: 2.86,
      lCostDelta: 0,
      curvedCurbing: 80,
      drainage: 20,
      permitAcq: 500,
      stepsPF: 30,
      straightCurbing: 38,
      rWallpfHeightFront: 50,
      concBlockWallpfHeight: 45,
      twofivepsi: 150,
      threeopsi: 150,
      threefivepsi: 168,
      fouropsi: 190,
      fourfivepsi: 210,
      exposedAgra: 2,
      agraDelivery: 400,
      addiLaborCPH: 50,
      finishLaborMPD: 500,
      finishLaborSQFMPD: 300,
      designerConcBlockWallpfHeight: 18
    }
  ]
};

export default class App extends React.Component {
  render() {
    // console.log(munhide);
    return (
      <Router>
        <div className="headings">
          <h2>Ergeon Pricing</h2>
          {/* <img></img> */}
          <table className="ploop">
            <thead>
              <tr>
                <th className="fun">
                  <NavLink to="/" exact={true} id="thebutts">
                    Concrete
                  </NavLink>
                </th>
                <th className="fun">
                  <NavLink to="/asphalt">Asphalt</NavLink>
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <br></br>
        <Switch>
          <Route path="/" exact={true} component={concrete} />
          <Route path="/asphalt" component={asphalt} />
          <Route path="*" exact={true} component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

class NotFound extends React.Component {
  render() {
    return (
      <span style={{ color: "red" }}>
        This pathway has no results. Please correct.
      </span>
    );
  }
}

class concrete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      delta: 0,
      margin: null,
      location: 0,
      locCalc: 0,
      slope: 0,

      garageFloor: 0,
      garageFloorVal: 0,
      squareFeet: null,
      finishType: "Broom",
      finishTypeVal: 0,

      hscapeStyle: "Concrete",

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
      demoTotal: 0,
      // haul away
      haulSquareFeet: 0,
      haulAddSQF: 0,
      haulTotal: 0,

      //exca
      excaSquareFeet: 0,
      excaAddSQF: 0,
      excaTotal: 0,
      // base layer 1
      bType: "",
      baseCost: 0,
      baseDepth: 0,
      bTotal: 0,

      // concrete
      concType: 3500,
      concDepth: null,
      psiVal: 168,
      concVal: 0,
      // rebar: false,

      areas: 0,
      total: 0.0,
      totalperSqf: 0,
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
      extraDisp: "none"
    };
  }
  // componentDidMount() {

  // }
  reload() {
    window.location.reload();
  }
  calc() {
    // Finish type value
    var sqf = parseInt(this.state.squareFeet, 10);
    var margin = parseInt(this.state.margin, 10);
    var laborPrice = db.regions[this.state.zip].finishLaborMPD;
    var laborSQF = db.regions[this.state.zip].finishLaborSQFMPD;
    if (this.state.finishType === "Salt") {
      var finishTypeCalc =
        ((sqf / laborSQF) * laborPrice + sqf) / (1 - margin * 0.01);
    } else {
      var finishTypeCalc =
        ((sqf / laborSQF) * laborPrice) / (1 - margin * 0.01);
    }

    var theF = finishTypeCalc.toFixed(2);
    this.setState({ finishTypeVal: theF });

    // conc type val/depth value
    console.log("psival: " + this.state.psiVal);
    var depth = parseInt(this.state.concDepth, 10);
    var cubicFeet = (depth / 12) * sqf;
    // console.log("208.33: " + cubicFeet);
    var cubicYards = cubicFeet / 27;
    // console.log("7.72: " + cubicYards);
    var conccost = cubicYards * this.state.psiVal + 200;
    // console.log("$1,496.30: " + conccost);
    var concPrice = conccost / (1 - margin * 0.01);
    var concPriceInput = concPrice.toFixed(2);
    // console.log("$1,824.75: " + concPriceInput);
    this.setState({ concVal: concPriceInput });
    // var costpercubfoot = conccost / cubicFeet;

    // Location Costs
    var loc = parseInt(this.state.location, 10);
    var added = (loc * sqf) / (1 - margin * 0.01);
    var totAdded = added.toFixed(2);
    this.setState({ locCalc: totAdded });

    // garageFloor
    var binFloor = parseInt(this.state.garageFloor, 10);
    var floorContract = binFloor * sqf * db.regions[this.state.zip].gFloor;
    var floorCust = floorContract / (1 - margin * 0.01);
    var floorCustF = floorCust.toFixed(2);
    this.setState({ garageFloorVal: floorCustF });

    //municipal permit costs
    var permitcosts = parseInt(this.state.pCosts, 10);
    // console.log(permitcosts);
    var icostss = parseInt(this.state.iCosts, 10);
    // console.log(icostss);
    var totalMunicipal = permitcosts + icostss;
    // console.log(totalMunicipal);
    var totalMunicipalCosts = totalMunicipal / (1 - margin * 0.01);
    var totalMunCosts = totalMunicipalCosts.toFixed(2);
    this.setState({ permitTotal: totalMunCosts });

    // demo
    var demosqf = parseInt(this.state.dSquareFeet, 10);
    console.log(demosqf);
    var demoPricing = parseFloat(this.state.demoTypeVal, 10);
    console.log(demoPricing);
    var demoThick = demosqf * depth * 144;
    console.log(demoThick);
    var demoVolCubeFT =
      ((demoThick / 1728) * demoPricing) / (1 - margin * 0.01);
    var totDemCost = demoVolCubeFT.toFixed(2);
    this.setState({ demoTotal: totDemCost });

    //exca
    var excasquareFT = parseInt(this.state.excaSquareFeet, 10);
    var addexcasquareFT = parseInt(this.state.excaAddSQF, 10);
    var excaVolume = (excasquareFT * depth * 144) / 1728;
    var excaVolYards = excaVolume / 27;
    var excaLabCost = 90 * (excaVolYards + addexcasquareFT);
    var excaCost = excaLabCost / (1 - margin * 0.01);
    var excaTotals = excaCost.toFixed(2);
    this.setState({ excaTotal: excaTotals });

    // haul
    var haulsquareFT = parseInt(this.state.haulSquareFeet, 10);
    var addhaulsquareFT = parseInt(this.state.haulAddSQF, 10);
    var haulVolume = (haulsquareFT * depth * 144) / 1728;
    var haulVolYards = haulVolume / 27;
    if (this.state.hscapeStyle === "Concrete") {
      if (excaLabCost) {
        var haulCost =
          (111 * (haulVolYards + addhaulsquareFT) - excaLabCost) /
          (1 - margin * 0.01);
        var haulTotals = haulCost.toFixed(2);
        this.setState({ haulTotal: haulTotals });
      } else {
        var haulCost =
          (111 * (haulVolYards + addhaulsquareFT)) / (1 - margin * 0.01);
        var haulTotals = haulCost.toFixed(2);
        this.setState({ haulTotal: haulTotals });
      }
    }

    //base 1
  }

  show(obj) {
    console.log(obj);
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
      this.setState({ demo: true });
      this.setState({ demoDisp: "none" });
    } else if (obj === "haul") {
      this.setState({ haul: true });
      this.setState({ haulDisp: "none" });
    } else if (obj === "exca") {
      this.setState({ exca: true });
      this.setState({ excaDisp: "none" });
    } else if (obj === "base") {
      this.setState({ base: true });
      this.setState({ baseDisp: "none" });
    } else if (obj === "extra") {
      this.setState({ extra: true });
      this.setState({ extraDisp: "none" });
    }
  }

  // Handling Input changes
  handleConcTypeChange = event => {
    if (event.target.value === "twofive") {
      this.setState({
        psiVal: db.regions[this.state.zip].twofivepsi,
        concType: 2500
      });
    } else if (event.target.value === "threeoh") {
      this.setState({
        psiVal: db.regions[this.state.zip].threeopsi,
        concType: 3000
      });
    } else if (event.target.value === "threefive") {
      this.setState({
        psiVal: db.regions[this.state.zip].threefivepsi,
        concType: 3500
      });
    } else if (event.target.value === "fouroh") {
      this.setState({
        psiVal: db.regions[this.state.zip].fouropsi,
        concType: 4000
      });
    } else if (event.target.value === "fourfive") {
      this.setState({
        psiVal: db.regions[this.state.zip].fourfivepsi,
        concType: 4500
      });
    }
  };
  handleSQFChange = event => {
    this.setState({ squareFeet: event.target.value });
  };
  handleZipChange = event => {
    this.setState({ zip: event.target.value });
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
      this.setState({ bType: "#2 Base Rock", baseCost: 1 });
    } else if (event.target.id === "3cgran") {
      this.setState({ bType: "3/4 Minus Crushed Granite", baseCost: 1 });
    } else if (event.target.id === "5cgran") {
      this.setState({ bType: "5/8 Minus Crushed Granite", baseCost: 1 });
    } else if (event.target.id === "csand") {
      this.setState({ bType: "Concrete Sand", baseCost: 1 });
    } else if (event.target.id === "dgray") {
      this.setState({ bType: "DG Grey", baseCost: 1 });
    } else if (event.target.id === "dgrays") {
      this.setState({ bType: "DG Grey Stabilized", baseCost: 1 });
    } else if (event.target.id === "dgold") {
      this.setState({ bType: "DG Gold", baseCost: 1 });
    } else if (event.target.id === "dgolds") {
      this.setState({ bType: "DG Gold Stabilized", baseCost: 1 });
    } else if (event.target.id === "bdepth") {
      this.setState({ baseDepth: event.target.value });
    }
  };

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

    // console.log(styles);

    return (
      <div>
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
              <button>Additional Concrete Area</button>
              <br></br>
            </form>
          </div>
          <button onClick={() => this.reload()}>Reset</button>
          <label> </label>
          <button onClick={() => this.calc()}>Calculate</button>
          <br></br>
          <br></br>
        </div>
        <div id="math">
          <div id="concretes">
            <h4>Customer Price</h4>
            {/* <div id="sides"> */}
            {/* <div id="resultTitle"> */}
            <div id="totals">
              <label>Full Customer Price: </label>${this.state.total}
            </div>
            <div id="totals">
              <label id="bob">
                Description of {this.state.hscapeStyle} Area 1 -{" "}
                {this.state.squareFeet} sq ft:
              </label>
              <br></br>
              <br></br>

              {/* <label id="bob">Hardscape Style - {this.state.hscapeStyle}</label> */}
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
        </div>
      </div>
    );
  }
}

class asphalt extends React.Component {
  render() {
    return (
      <form data-testid="edit-submission" onSubmit={this.handleSubmit}>
        <h3>Asphalt Calculator</h3>
      </form>
    );
  }
}
