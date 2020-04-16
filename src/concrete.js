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

      conc_areas: [],
      stain_areas: [],
      hide_areas: []
    };
    document.title = "Concrete Calculator";
  }

  componentDidMount() {
    const concAreas = db.concreteArea;
    this.state.conc_areas = concAreas;
    this.setState({
      conc_areas: this.state.conc_areas.filter(area => {
        return area.id <= this.state.areas;
      })
    });
    const stainAreas = db.stain;
    this.state.stain_areas = stainAreas;
    this.setState({
      stain_areas: this.state.stain_areas.filter(stain => {
        return stain.id <= this.state.stains;
      })
    });
    const hideAreas = db.hide;
    this.state.hide_areas = hideAreas;
    this.setState({
      hide_areas: this.state.hide_areas.filter(hide => {
        return hide.id <= 100;
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
    var sqf = parseInt(areaParent.querySelector("#sqft").value, 10);

    // maybe delete this will need multiple totals
    this.setState({ total: 0, totalCont: 0 });

    // get margin from head of document
    // var margin = parseInt(document.querySelector("#margin").value, 10);
    var margin = parseFloat(this.state.margin, 10);
  }

  show(area, obj) {
    console.log("entered show");
    console.log(obj);
    // console.log(obj);
    if (obj === "base") {
      // this.setState({ base: false });
      // this.setState({ baseDisp: "block" });
      db.hide[0].base[area - 1].styles.display = "block";
    } else if (obj === "extra") {
      // this.setState({ extra: false });
      // this.setState({ extraDisp: "block" });

      db.hide[1].additional[area - 1].styles.display = "block";
    } else if (obj === "rebar") {
      // this.setState({ rebar: false });
      // this.setState({ rebarDisp: "block" });
      db.hide[2].rebar[area - 1].styles.display = "block";
    } else if (obj === "edit") {
      // this.setState({ edit: false });
      // this.setState({ editDisp: "block" });
      db.hide[3].edit[area - 1].styles.display = "block";
    } else if (obj === "stamp") {
      // this.setState({ stamp: false });
      // this.setState({ stampDisp: "block" });
      db.hide[4].stamp[area - 1].styles.display = "block";
    } else if (obj === "stain") {
      // this.setState({ stain: false });
      // this.setState({ stainDisp: "block" });
      db.hide[5].stain[area - 1].styles.display = "block";
    }
  }

  hide(e, area, obj) {
    // var head = document.getElementById(area);
    // if (obj === "display") {
    //   this.setState({ display: true });
    //   this.setState({ dispDisp: "none" });
    //   head.querySelector("#pcost").value = 0;
    //   head.querySelector("#icost").value = 0;
    //   head.querySelector("#permittype").value = null;
    //   db.concreteArea[area - 1].ptype = null;
    // }  else
    if (obj === "base") {
      db.hide[0].base[area - 1].styles.display = "none";
      // this.setState({
      //   base: true,
      //   baseDisp: "none"
      // });
      // head.querySelector("#bdepth").value = null;
      // db.concreteArea[area - 1].baseDepth = 0;
      // db.concreteArea[area - 1].btype = null;
      // head.querySelector("#baseee").name = null;
    } else if (obj === "extra") {
      // this.setState({ extra: true });
      // this.setState({ extraDisp: "none" });
      db.hide[1].additional[area - 1].styles.display = "none";
    } else if (obj === "rebar") {
      // this.setState({ rebar: true });
      // this.setState({ rebarDisp: "none" });
      db.hide[2].rebar[area - 1].styles.display = "none";
    } else if (obj === "edit") {
      // this.setState({ edit: true });
      // this.setState({ editDisp: "none" });
      db.hide[3].edit[area - 1].styles.display = "none";
    } else if (obj === "stamp") {
      // this.setState({ stamp: true });
      // this.setState({ stampDisp: "none" });
      db.hide[4].stamp[area - 1].styles.display = "none";
    } else if (obj === "stain") {
      // this.setState({ stain: true });
      // this.setState({ stainDisp: "none" });
      db.hide[5].stain[area - 1].styles.display = "none";
    }
    const hideAreas = db.hide;
    this.state.hide_areas = hideAreas;
    this.setState({
      hide_areas: this.state.hide_areas
    });
  }

  // Handling Input changes
  handleConcTypeChange(event, area) {
    var areaHead = document.getElementById(area);
    var key = event.target.value;
    db.concreteArea[area - 1].concType = key;
  }
  handleSQFChange(event, area) {
    //areaSQF
    db.concreteArea[area - 1].sqf = event.target.value;
    console.log(db.concreteArea[area].sqf);
    // this.setState({ squareFeet: event.target.value });
  }

  handleMarginChange = event => {
    var dec = 1 - event.target.value * 0.01;

    this.setState({ margin: dec });
  };

  // changed on both sides: check
  handleCDepthChange(event, area) {
    db.concreteArea[area - 1].concDepth = event.target.value;
    // this.setState({ concDepth: event.target.value });
  }

  handleFinishType(e, area) {
    db.concreteArea[area - 1].finishType = e.target.value;
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

  // remove values on hide, done but check
  // handleMunicipalPermit(e,area) {
  //   var head = document.getElementById(area)
  //   db.concreteArea[area-1].ptype = head.querySelector("#permittype").value
  //   console.log(db.concreteArea[area-1].ptype)
  // };

  // done but check

  handleBase(e, area) {
    var head = document.getElementById(area);
    if (e.target.id === "bdepth") {
      db.concreteArea[area - 1].baseDepth = e.target.value;
    } else {
      db.concreteArea[area - 1].btype = db.base[e.target.value].type;
      console.log(db.concreteArea[area - 1].btype);
      head.querySelector("#baseee").name = db.base[e.target.value].cost;
      console.log(head.querySelector("#baseee").name);
    }
  }

  handleRebar(e, area) {
    var head = document.getElementById(area);
    db.concreteArea[area - 1].rtype = db.rebar[e.target.value].type;
    head.querySelector("#rebarr").name = e.target.value;
  }
  handleStainChange(e, area, count) {
    console.log(count);
    db.stain[count].sType = e.target.value;

    this.setState({
      stain_areas: this.state.stain_areas.filter(obj => {
        return obj.id <= this.state.stains;
      })
    });
  }

  addArea = event => {
    console.log(this.state.areas);
    if (this.state.areas <= 5) {
      var count = this.state.areas + 1;
      this.setState({ areas: count });
      const concAreas = db.concreteArea;
      this.state.conc_areas = concAreas;
      console.log(count);
      this.setState({
        conc_areas: this.state.conc_areas.filter(area => {
          return area.id <= count;
        })
      });
    }
  };
  deleteArea = event => {
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
    }
  };

  addStain = event => {
    if (this.state.stains < 2) {
      var count = this.state.stains + 1;
      this.setState({ stains: count });
      const stainAreas = db.stain;
      this.state.stain_areas = stainAreas;
      this.setState({
        stain_areas: this.state.stain_areas.filter(stain => {
          return stain.id <= count;
        })
      });
    }
  };
  deleteStain = event => {
    if (this.state.stains > 0) {
      var count = this.state.stains - 1;
      this.setState({ stains: count });
      const stainAreas = db.stain;
      this.state.stain_areas = stainAreas;
      this.setState({
        stain_areas: this.state.stain_areas.filter(stain => {
          return stain.id <= count;
        })
      });
    }
  };

  render() {
    const styles = {
      stylesDisp: {
        display: this.state.dispDisp
      }
    };
    const { stylesDisp } = styles;
    // var basesty = "stylesBase"
    const stylesfive = {
      stylesBase: {
        display: this.state.baseDisp
      }
    };
    const { stylesBase } = stylesfive;
    console.log(stylesBase);
    console.log(db.hide[0].base[0].styles);

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
      stylesEdit: {
        display: this.state.editDisp
      }
    };
    const { stylesEdit } = styleseight;

    const stylesnine = {
      stylesStamp: {
        display: this.state.stampDisp
      }
    };
    const { stylesStamp } = stylesnine;
    const stylesten = {
      stylesStain: {
        display: this.state.stainDisp
      }
    };
    const { stylesStain } = stylesten;

    // var joined = this.state.concretesArray.concat(concretes);
    // this.setState({ concretesArray: joined });

    return (
      <div id="overarching">
        {/* {concretes} */}
        {/* {this.state.concretesArray} */}
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

                  <div id="options">
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
                  </div>
                  <div id="options">
                    <label>Edit Defaults? </label>

                    <input
                      type="radio"
                      id="yes"
                      name={edits}
                      value="yes"
                      onClick={this.show.bind(area.id, "edit")}
                    />
                    <label htmlFor="yes"> Yes </label>

                    <input
                      type="radio"
                      id="no"
                      name={edits}
                      value="no"
                      onClick={e => this.hide(e, area.id, "edit")}
                      defaultChecked
                    />
                    <label htmlFor="no"> No</label>
                  </div>

                  <div id="optionsShown" style={db.hide[3].edit[0]}>
                    <label>Concrete Type: </label>
                    <select
                      id="selectPSI"
                      class="select-css"
                      onChange={e => this.handleConcTypeChange(e, area.id)}
                    >
                      {db.psi.map(type => {
                        if (type.id === 3) {
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
                      placeholder="Default is 5"
                      // value={5}
                      onChange={e => this.handleCDepthChange(e, area.id)}
                    />
                  </div>
                  <div id="optionsShown" style={stylesEdit}>
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
                  <div id="optionsShown" style={stylesEdit}>
                    <label>Base Layer Required? </label>

                    <input
                      type="radio"
                      id="yes"
                      name={basell}
                      value="yes"
                      onClick={this.show.bind(area.id, "base")}
                    />
                    <label htmlFor="yes"> Yes </label>

                    <input
                      type="radio"
                      id="no"
                      name={basell}
                      value="no"
                      onClick={e => this.hide(e, area.id, "base")}
                      defaultChecked
                    />
                    <label htmlFor="no"> No</label>

                    <div id="baseee" style={stylesBase}>
                      <br></br>
                      <label>Base Layer Material: </label>
                      <select id="selectBase" class="select-css">
                        {db.base.map(base => {
                          return (
                            <option id={base.type} name={base.id}>
                              {base.type}
                            </option>
                          );
                        })}
                      </select>

                      <br></br>
                      <br></br>
                      <label>Base Layer Depth in Inches: </label>
                      <input
                        type="text"
                        id="bdepth"
                        placeholder="Default is 4"
                        // value={this.state.baseDepth}
                        onChange={e => this.handleBase(e, area.id)}
                      />
                      <br></br>
                      <br></br>
                      <button>Additional Base Layer</button>
                    </div>
                  </div>

                  <div id="optionsShown" style={stylesEdit}>
                    <label>Rebar Required? </label>

                    <input
                      type="radio"
                      id="yes"
                      name={rebaar}
                      value="yes"
                      onClick={this.show.bind(area.id, "rebar")}
                    />
                    <label htmlFor="yes"> Yes </label>

                    <input
                      type="radio"
                      id="no"
                      name={rebaar}
                      value="no"
                      defaultChecked
                      onClick={e => this.hide(e, area.id, "rebar")}
                    />
                    <label htmlFor="no"> No</label>
                    <br></br>
                    <div id="rebarr" style={stylesRebar}>
                      <br></br>
                      <label>Material: </label>
                      <select id="selectRebar" class="select-css">
                        {db.rebar.map(rebar => {
                          return (
                            <option id={rebar.type} name={rebar.id}>
                              {rebar.type}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  <div id="options">
                    <label>Additional Requests? </label>

                    <input
                      type="radio"
                      id="yes"
                      name={addREqq}
                      value="yes"
                      onClick={this.show.bind(area.id, "extra")}
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
                  {/* v2 */}

                  {/* v2 */}
                  <div id="optionsShown" style={stylesExtra}>
                    <label>Stamped Finish Requested? </label>

                    <input
                      type="radio"
                      id="yes"
                      name={stampss}
                      value="yes"
                      onClick={this.show.bind(area.id, "stamp")}
                    />
                    <label htmlFor="yes"> Yes </label>

                    <input
                      type="radio"
                      id="no"
                      name={stampss}
                      value="no"
                      defaultChecked
                      onClick={e => this.hide(e, area.id, "stamp")}
                    />
                    <label htmlFor="no"> No</label>

                    <div id="stampp" style={stylesStamp}>
                      <br></br>
                      <label>Stamp Choice: </label>
                      <select id="selectStamp" class="select-css">
                        {db.stamps.map(rebar => {
                          return (
                            <option id={rebar.type} name={rebar.id}>
                              {rebar.type}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  <div id="optionsShown" style={stylesExtra}>
                    <label>Stained Finish Requested? </label>

                    <input
                      type="radio"
                      id="yes"
                      name={stainsss}
                      value="yes"
                      // defaultChecked
                      onClick={this.show.bind(area.id, "stain")}
                    />
                    <label htmlFor="yes"> Yes </label>

                    <input
                      type="radio"
                      id="no"
                      name={stainsss}
                      value="no"
                      defaultChecked
                      onClick={e => this.hide(e, area.id, "stain")}
                    />
                    <label htmlFor="no"> No</label>
                    <div id="stainn" name="PM" style={stylesStain}>
                      {this.state.stain_areas.map(count => {
                        var pm = count.id + "pm";
                        var ap = count.id + "ap";
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
                            {/* <select
                              class="select-css"
                              id="selectStainType"
                              value="Pre-Mixed"
                              onChange={e =>
                                this.handleStainChange(e, area.id, count.id)
                              }
                            >
                              <option selected value="Pre-Mixed">
                                Pre-Mixed
                              </option>
                              <option>Surface Applied</option>
                            </select> */}
                            <br></br>
                            <br></br>
                            <label>Color: </label>
                            <select id="selectStain" class="select-css">
                              {db.stains.map(stain => {
                                // var head = document.getElementById(area.id);
                                // var type = head.querySelector("#selectStainType");
                                // console.log(count.id);
                                // console.log(db.stain[count.id].id);
                                // console.log(db.stain[count.id].sType);

                                if (db.stain[count.id].sType === "Pre-Mixed") {
                                  if (stain.id <= 39) {
                                    return (
                                      <option id={stain.type} name={stain.id}>
                                        {stain.type}
                                      </option>
                                    );
                                  }
                                } else {
                                  if (stain.id > 39) {
                                    return (
                                      <option id={stain.type} name={stain.id}>
                                        {stain.type}
                                      </option>
                                    );
                                  }
                                }
                              })}
                            </select>
                            <br></br>
                          </div>
                        );
                      })}
                      <br></br>
                      <button onClick={this.addStain}>
                        Add Extra Stain Color
                      </button>
                      <button onClick={this.deleteStain}>
                        Delete Stain Color
                      </button>
                      <br></br>
                      <br></br>
                    </div>
                  </div>

                  <div id="optionsShown" style={stylesExtra}>
                    <label>Sealant Requested? </label>

                    <input type="radio" id="yes" name={seals} value="yes" />
                    <label htmlFor="yes"> Yes </label>

                    <input
                      type="radio"
                      id="no"
                      name={seals}
                      value="no"
                      defaultChecked
                    />
                    <label htmlFor="no"> No</label>
                  </div>
                  {/* v2 */}
                  <div id="optionsShown" style={stylesExtra}>
                    <label>Exposed Aggregate Finish Requested? </label>

                    <input type="radio" id="yes" name={aggra} value="yes" />
                    <label htmlFor="yes"> Yes </label>

                    <input
                      type="radio"
                      id="no"
                      name={aggra}
                      value="no"
                      defaultChecked
                    />
                    <label htmlFor="no"> No</label>
                  </div>
                  <div id="optionsShown" style={stylesExtra}>
                    <label>Underlayment Required? </label>

                    <input type="radio" id="yes" name={underlayy} value="yes" />
                    <label htmlFor="yes"> Yes </label>

                    <input
                      type="radio"
                      id="no"
                      name={underlayy}
                      value="no"
                      defaultChecked
                    />
                    <label htmlFor="no"> No</label>
                  </div>
                  <div id="optionsShown" style={stylesExtra}>
                    <label>Drainage Required? </label>

                    <input type="radio" id="yes" name={drainn} value="yes" />
                    <label htmlFor="yes"> Yes </label>

                    <input
                      type="radio"
                      id="no"
                      name={drainn}
                      value="no"
                      defaultChecked
                    />
                    <label htmlFor="no"> No</label>
                  </div>
                  {/* v2 */}
                  <div id="optionsShown" style={stylesExtra}>
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
                  <div id="optionsShown" style={stylesExtra}>
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
                  <div id="optionsShown" style={stylesExtra}>
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
                  <div id="optionsShown" style={stylesExtra}>
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
                  <div id="optionsShown" style={stylesExtra}>
                    <label>
                      Driveway Approach with Sidewalk and Gutter Requested?
                    </label>

                    <input type="radio" id="yes" name={approachs} value="yes" />
                    <label htmlFor="yes"> Yes </label>

                    <input
                      type="radio"
                      id="no"
                      name={approachs}
                      value="no"
                      defaultChecked
                    />
                    <label htmlFor="no"> No</label>
                  </div>
                  <div id="optionsShown" style={stylesExtra}>
                    <label>Electrical Conduit Requested? </label>

                    <input type="radio" id="yes" name={elec} value="yes" />
                    <label htmlFor="yes"> Yes </label>

                    <input
                      type="radio"
                      id="no"
                      name={elec}
                      value="no"
                      defaultChecked
                    />
                    <label htmlFor="no"> No</label>
                  </div>
                  <div id="optionsShown" style={stylesExtra}>
                    <label>Additional Labor Required? </label>

                    <input type="radio" id="yes" name={addlaboor} value="yes" />
                    <label htmlFor="yes"> Yes </label>

                    <input
                      type="radio"
                      id="no"
                      name={addlaboor}
                      value="no"
                      defaultChecked
                    />
                    <label htmlFor="no"> No</label>
                  </div>
                  <div id="optionsShown" style={stylesExtra}>
                    <label>Custom Request? </label>

                    <input type="radio" id="yes" name={custReq} value="yes" />
                    <label htmlFor="yes"> Yes </label>

                    <input
                      type="radio"
                      id="no"
                      name={custReq}
                      value="no"
                      defaultChecked
                    />
                    <label htmlFor="no"> No</label>
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
                      PSI: ${area.concVal}
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
                  <div id="totals">
                    <h4>Contractor Cost</h4>
                    <label id="bob">
                      Description of Area 1 -{area.sqf} sq ft:
                    </label>
                    <br></br>
                    <label id="bob">
                      Concrete Type - {area.concDepth} Inches -{area.concType}{" "}
                      PSI: ${area.concValCont}
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
