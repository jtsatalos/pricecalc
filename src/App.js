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
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      // true means hidden
      // num: 0,\
      delta: 0,
      margin: null,
      location: "Front Yard",
      // slope: false,
      // garageFloor: false,
      squareFeet: null,
      finishType: "Broom",
      finishTypeVal: 0,

      hscapeStyle: "Concrete",
      // ePermAcq: false,
      // mPermAcq: false,
      zip: null,
      pCosts: 0,
      iCosts: 0,
      pType: "",
      // dReq: false,
      dType: "",
      dSquareFeet: 0,
      concType: 3500,
      concDepth: 0,
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
    if (this.state.squareFeet !== null && this.state.margin !== null) {
      var sqf = parseInt(this.state.squareFeet, 10);
      var margin = parseInt(this.state.margin, 10);
      var laborPrice = 500;
      var laborSQF = 300;
      var finishTypeCalc =
        ((sqf / laborSQF) * laborPrice) / (1 - margin * 0.01);

      var theF = finishTypeCalc.toFixed(2);
      this.setState({ finishTypeVal: theF });
    }

    // this.setState({ total: theF });
    // var totalAllPSqF = theF / sqf;
    // var thepsqf = totalAllPSqF.toFixed(2);
    // this.setState({ totalperSqf: thepsqf });
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
                <input type="radio" id="twofive" name="psi" value="twofive" />
                <label htmlFor="twofive"> 2500 PSI </label>

                <input type="radio" id="threeoh" name="psi" value="threeoh" />
                <label htmlFor="threeoh"> 3000 PSI </label>

                <input
                  type="radio"
                  id="threefive"
                  name="psi"
                  value="threefive"
                  defaultChecked
                />
                <label htmlFor="threefive"> 3500 PSI </label>

                <input type="radio" id="fouroh" name="psi" value="fouroh" />
                <label htmlFor="fouroh"> 4000 PSI </label>

                <input type="radio" id="fourfive" name="psi" value="ourfive" />
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
                  defaultChecked
                />
                <label htmlFor="front"> Front Yard </label>
                <input type="radio" id="back" name="location" value="back" />
                <label htmlFor="back"> Back Yard</label>
              </div>
              <div id="options">
                <label>Is it on a Slope? </label>

                <input type="radio" id="yes" name="slope" value="yes" />
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

                <input type="radio" id="yes" name="gfloor" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="gfloor"
                  value="no"
                  defaultChecked
                />
                <label htmlFor="no"> No</label>
              </div>

              <div id="options">
                <label>
                  Ergeon Permit Acquisition and Inspections Visits?{" "}
                </label>

                <input type="radio" id="yes" name="permacq" value="yes" />
                <label htmlFor="yes"> Yes </label>

                <input
                  type="radio"
                  id="no"
                  name="permacq"
                  value="no"
                  // onClick={() => this.show()}
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
                  <input type="text" id="pcost" placeholder="Ex: 1000" />
                  <br></br>
                  <br></br>
                  <label>Inspection Costs and Fees to the City: </label>
                  <input type="text" id="icost" placeholder="Ex: 1000" />
                  <br></br>
                  <br></br>
                  <label>Description of Permit and Inspections: </label>
                  <input
                    type="text"
                    id="permittype"
                    placeholder="Ex: Building Permit"
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
                  <input type="radio" id="conc" name="demoo" value="conc" />
                  <label htmlFor="conc"> Concrete </label>
                  <input type="radio" id="asph" name="demoo" value="asph" />
                  <label htmlFor="asph"> Asphalt </label>
                  <input type="radio" id="hsoil" name="demoo" value="hsoil" />
                  <label htmlFor="asph"> Hard Soil </label>
                  <br></br>
                  <br></br>
                  <label>Demo Area Square Footage: </label>
                  <input type="text" id="dsqf" placeholder="Ex: 500" />
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
                  <input type="text" id="haull" placeholder="Ex: 500" />
                  <br></br>
                  <br></br>
                  <label>Additional Haul Away Volume in Cubic Yards: </label>
                  <input type="text" id="haull" placeholder="Ex: 50" />
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
                  <input type="text" id="excaa" placeholder="Ex: 500" />
                  <br></br>
                  <br></br>
                  <label>
                    Additional Excavation Area Volume in Cubic Yards:{" "}
                  </label>
                  <input type="text" id="excaa" placeholder="Ex: 50" />
                </div>
              </div>
              <div id="options">
                <label>Finish Type: </label>

                <input
                  type="radio"
                  id="broom"
                  name="finish"
                  value="broom"
                  defaultChecked
                />
                <label htmlFor="broom"> Broom</label>

                <input type="radio" id="salt" name="finish" value="salt" />
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
                  <input type="radio" id="2br" name="basee" value="2br" />
                  <label htmlFor="2br"> #2 Base Rock </label>
                  <input type="radio" id="3cgran" name="basee" value="3cgran" />
                  <label htmlFor="3cgran"> 3/4 Minus Crushed Granite </label>
                  <input type="radio" id="5cgran" name="basee" value="5cgran" />
                  <label htmlFor="5cgran"> 5/8 Minus Crushed Granite </label>
                  <input type="radio" id="csand" name="basee" value="csand" />
                  <label htmlFor="csand"> Concrete Sand </label>
                  <input type="radio" id="dgray" name="basee" value="dgray" />
                  <label htmlFor="dgray"> DG Grey </label>
                  <input type="radio" id="dgrays" name="basee" value="dgrays" />
                  <label htmlFor="dgrays"> DG Grey Stabilized </label>
                  <input type="radio" id="dgold" name="basee" value="dgold" />
                  <label htmlFor="dgold"> DG Gold </label>
                  <input type="radio" id="dgolds" name="basee" value="dgolds" />
                  <label htmlFor="dgolds"> DG Gold Stabilized </label>
                  <br></br>
                  <br></br>
                  <label>Base Layer Depth in Inches: </label>
                  <input type="text" id="bdepth" placeholder="Ex: 4" />
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
                Finish Type - {this.state.finishType}: $
                {this.state.finishTypeVal}
              </label>
              <br></br>
              <label id="bob">
                Concrete Type - {this.state.concDepth} Inches -{" "}
                {this.state.concType} PSI: ${this.state.concVal}
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
            {/* </div> */}
            {/* <div id="resultValue">
              <div id="options">
                <label>$0.00</label>
              </div>
            </div> */}
            {/* </div> */}
            {/* <div id="sides">
              <h4>Contractor Price</h4>
            </div> */}
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
