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
    var sqf = parseInt(areaParent.querySelector("#sqft").value, 10);

    // maybe delete this will need multiple totals
    this.setState({ total: 0, totalCont: 0 });

    // get margin from head of document
    // var margin = parseInt(document.querySelector("#margin").value, 10);
    var margin = parseFloat(this.state.margin, 10);
  }

  show(e, area, obj) {
    // console.log("entered show");
    // console.log(obj);
    if (obj === "base") {
      db.visibility[0].type[area - 1].val = 0;
    } else if (obj === "extra") {
      db.visibility[1].type[area - 1].val = 0;
    } else if (obj === "rebar") {
      db.visibility[2].type[area - 1].val = 0;
    } else if (obj === "edit") {
      db.visibility[3].type[area - 1].val = 0;
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
    }
    this.setState({
      conc_areas: this.state.conc_areas.filter(area => {
        return area.id <= this.state.areas;
      })
    });
  }

  hide(e, area, obj) {
    if (obj === "base") {
      db.visibility[0].type[area - 1].val = 1;
    } else if (obj === "extra") {
      db.visibility[1].type[area - 1].val = 1;
    } else if (obj === "rebar") {
      db.visibility[2].type[area - 1].val = 1;
    } else if (obj === "edit") {
      db.visibility[3].type[area - 1].val = 1;
    } else if (obj === "stamp") {
      db.visibility[4].type[area - 1].val = 1;
    } else if (obj === "stain") {
      db.visibility[5].type[area - 1].val = 1;
      // db.stain[area - 1].count = 0;
    } else if (obj === "seal") {
      db.visibility[6].type[area - 1].val = 1;
    } else if (obj === "aggra") {
      db.visibility[7].type[area - 1].val = 1;
    } else if (obj === "under") {
      db.visibility[8].type[area - 1].val = 1;
    } else if (obj === "drain") {
      db.visibility[9].type[area - 1].val = 1;
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

  // done but check

  handleBase(e, area) {
    // var head = document.getElementById(area);
    // if (e.target.id === "bdepth") {
    //   db.concreteArea[area - 1].baseDepth = e.target.value;
    // } else {
    //   db.concreteArea[area - 1].btype = db.base[e.target.value].type;
    //   console.log(db.concreteArea[area - 1].btype);
    //   head.querySelector("#baseee").name = db.base[e.target.value].cost;
    //   console.log(head.querySelector("#baseee").name);
    // }
  }

  handleRebar(e, area) {
    var head = document.getElementById(area);
    db.concreteArea[area - 1].rtype = db.rebar[e.target.value].type;
    head.querySelector("#rebarr").name = e.target.value;
  }
  handleStainChange(e, area, count) {
    db.stainer[area - 1].stainTypes[count].sType = e.target.value;
    this.setState({ conc_areas: this.state.conc_areas });
  }
  handleSealChange(e, area, count) {
    db.seals[area - 1].sealTypes[count].type = e.target.value;
  }
  handleUnderChange(e, area, count) {
    db.underlay[area - 1].types[count].type = e.target.value;
  }

  addArea = event => {
    // var area = event.target.id - 1;
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
    var area = event.target.value - 1;
    if (db.stainer[area].quant < 2) {
      db.stainer[area].quant = db.stainer[area].quant + 1;
      this.setState({ conc_areas: this.state.conc_areas });
    }
  };
  deleteStain = event => {
    var area = event.target.value - 1;
    if (db.stainer[area].quant > 0) {
      db.stainer[area].quant = db.stainer[area].quant - 1;
    }
  };
  addSeal = event => {
    var area = event.target.value - 1;
    if (db.seals[area].quant < 1) {
      db.seals[area].quant = db.seals[area].quant + 1;
      this.setState({ conc_areas: this.state.conc_areas });
    }
  };
  deleteSeal = event => {
    var area = event.target.value - 1;
    if (db.seals[area].quant > 0) {
      db.seals[area].quant = db.seals[area].quant - 1;
      this.setState({ conc_areas: this.state.conc_areas });
    }
  };
  addUnder = event => {
    var area = event.target.value - 1;

    if (db.underlay[area].quant < 1) {
      db.underlay[area].quant = db.underlay[area].quant + 1;
      this.setState({ conc_areas: this.state.conc_areas });
    }
  };
  deleteUnder = event => {
    var area = event.target.value - 1;
    if (db.underlay[area].quant > 0) {
      db.underlay[area].quant = db.underlay[area].quant - 1;
      this.setState({ conc_areas: this.state.conc_areas });
    }
  };
  addBase = event => {
    var area = event.target.value - 1;

    if (db.underlay[area].quant < 1) {
      db.bases[area].quant = db.bases[area].quant + 1;
      this.setState({ conc_areas: this.state.conc_areas });
    }
  };
  deleteBase = event => {
    var area = event.target.value - 1;
    if (db.bases[area].quant > 0) {
      db.bases[area].quant = db.bases[area].quant - 1;
      this.setState({ conc_areas: this.state.conc_areas });
    }
  };
  addDrain = event => {
    var area = event.target.value - 1;

    if (db.drains[area].quant < 4) {
      db.drains[area].quant = db.drains[area].quant + 1;
      this.setState({ conc_areas: this.state.conc_areas });
    }
  };
  deleteDrain = event => {
    var area = event.target.value - 1;
    if (db.drains[area].quant > 0) {
      db.drains[area].quant = db.drains[area].quant - 1;
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

          // console.log("conc areaa");
          // db.vals[db.visibility[3].edit[area.id - 1].val].styles
          // console.log(db.vals[0].type[0].styles);
          // console.log(db.visibility[3].type[area.id - 1].val);
          // console.log(
          //   db.vals[db.visibility[3].type[area.id - 1].val].type[0].styles
          // );

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
                      id={3}
                      name={edits}
                      value="yes"
                      onClick={e => this.show(e, area.id, "edit")}
                    />
                    <label htmlFor="yes"> Yes </label>

                    <input
                      type="radio"
                      id={3}
                      name={edits}
                      value="no"
                      onClick={e => this.hide(e, area.id, "edit")}
                      defaultChecked
                    />
                    <label htmlFor="no"> No</label>
                  </div>

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
                    <label>Base Layer Required? </label>

                    <input
                      type="radio"
                      id={1}
                      name={basell}
                      value="yes"
                      onClick={e => this.show(e, area.id, "base")}
                    />
                    <label htmlFor="yes"> Yes </label>

                    <input
                      type="radio"
                      id={1}
                      name={basell}
                      value="no"
                      onClick={e => this.hide(e, area.id, "base")}
                      defaultChecked
                    />
                    <label htmlFor="no"> No</label>

                    <div
                      id="baseee"
                      style={
                        db.vals[db.visibility[0].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      {/* {db.bases[area.id - 1].options[0]} */}
                      {db.bases[area.id - 1].options.map(count => {
                        if (count.id <= db.bases[area.id - 1].quant) {
                          return (
                            <div id="basey" name={count.id}>
                              <br></br>
                              <label>
                                Base Layer Material {count.id + 1}:{" "}
                              </label>
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
                      <br></br>
                    </div>
                  </div>

                  <div
                    id="optionsShown"
                    style={
                      db.vals[db.visibility[3].type[area.id - 1].val].type[0]
                        .styles
                    }
                  >
                    <label>Rebar Required? </label>

                    <input
                      type="radio"
                      id={2}
                      name={rebaar}
                      value="yes"
                      onClick={e => this.show(e, area.id, "rebar")}
                    />
                    <label htmlFor="yes"> Yes </label>

                    <input
                      type="radio"
                      id={2}
                      name={rebaar}
                      value="no"
                      defaultChecked
                      onClick={e => this.hide(e, area.id, "rebar")}
                    />
                    <label htmlFor="no"> No</label>
                    <br></br>
                    <div
                      id="rebarr"
                      style={
                        db.vals[db.visibility[2].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
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
                    <label>Stamped Finish Requested? </label>

                    <input
                      type="radio"
                      id={4}
                      name={stampss}
                      value="yes"
                      onClick={e => this.show(e, area.id, "stamp")}
                    />
                    <label htmlFor="yes"> Yes </label>

                    <input
                      type="radio"
                      id={4}
                      name={stampss}
                      value="no"
                      defaultChecked
                      onClick={e => this.hide(e, area.id, "stamp")}
                    />
                    <label htmlFor="no"> No</label>

                    <div
                      id="stampp"
                      style={
                        db.vals[db.visibility[4].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      <br></br>
                      <label>Stamp Choice: </label>
                      <select id="selectStamp" class="select-css">
                        {/* {db.stamps} */}
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

                  <div
                    id="optionsShown"
                    style={
                      db.vals[db.visibility[1].type[area.id - 1].val].type[0]
                        .styles
                    }
                  >
                    <label>Stained Finish Requested? </label>

                    <input
                      type="radio"
                      id={5}
                      name={stainsss}
                      value="yes"
                      // defaultChecked
                      onClick={e => this.show(e, area.id, "stain")}
                    />
                    <label htmlFor="yes"> Yes </label>

                    <input
                      type="radio"
                      id={5}
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
                        db.vals[db.visibility[5].type[area.id - 1].val].type[0]
                          .styles
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
                              <select id="selectStain" class="select-css">
                                {db.stains.map(stain => {
                                  var nameColor = area.id + "color" + stain.id;

                                  if (
                                    db.stainer[area.id - 1].stainTypes[count.id]
                                      .sType === "Pre-Mixed"
                                  ) {
                                    if (stain.id <= 39) {
                                      return (
                                        <option
                                          id={stain.type}
                                          name={nameColor}
                                        >
                                          {stain.type}
                                        </option>
                                      );
                                    }
                                  } else {
                                    if (stain.id > 39) {
                                      return (
                                        <option
                                          id={stain.type}
                                          name={nameColor}
                                        >
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
                  </div>

                  <div
                    id="optionsShown"
                    style={
                      db.vals[db.visibility[1].type[area.id - 1].val].type[0]
                        .styles
                    }
                  >
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
                        db.vals[db.visibility[6].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      {db.seals[area.id - 1].sealTypes.map(count => {
                        var bpm = count.id + "aspm" + area.id;
                        if (count.id <= db.seals[area.id - 1].quant) {
                          return (
                            <div id="sealVals" name={count}>
                              <br></br>
                              <label>Sealant Type: </label>
                              <input
                                type="radio"
                                // id={pm}
                                value="Glossy"
                                name={bpm}
                                onClick={e =>
                                  this.handleSealChange(e, area.id, count.id)
                                }
                                defaultChecked
                              />
                              <label htmlFor={bpm}> Glossy</label>
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
                              <label htmlFor={bpm}>Epoxy</label>
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
                  </div>
                  {/* v2 */}
                  <div
                    id="optionsShown"
                    style={
                      db.vals[db.visibility[1].type[area.id - 1].val].type[0]
                        .styles
                    }
                  >
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
                        db.vals[db.visibility[7].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      <br></br>
                      <label>Type: </label>
                      <select id="selectAggra" class="select-css">
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
                  </div>

                  <div
                    id="optionsShown"
                    style={
                      db.vals[db.visibility[1].type[area.id - 1].val].type[0]
                        .styles
                    }
                  >
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
                        db.vals[db.visibility[8].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      {db.underlay[area.id - 1].types.map(count => {
                        var apm = area.id + "asdfas" + count.id;
                        if (count.id <= db.underlay[area.id - 1].quant) {
                          return (
                            <div id="underVals" name={count}>
                              <br></br>
                              <label>Type: </label>
                              <input
                                type="radio"
                                // id={pm}
                                value="10 mil Stego Vapor Barrier"
                                name={apm}
                                onClick={e =>
                                  this.handleUnderChange(e, area.id, count.id)
                                }
                                defaultChecked
                              />
                              <label htmlFor={apm}>
                                {" "}
                                10 mil Stego Vapor Barrier{" "}
                              </label>
                              <input
                                type="radio"
                                // id={ap}
                                value="Geotex - Mirafi 500x"
                                name={apm}
                                onClick={e =>
                                  this.handleUnderChange(e, area.id, count.id)
                                }
                              />
                              <label htmlFor={apm}>
                                {" "}
                                Geotex - Mirafi 500x{" "}
                              </label>
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
                  </div>
                  <div
                    id="optionsShown"
                    style={
                      db.vals[db.visibility[1].type[area.id - 1].val].type[0]
                        .styles
                    }
                  >
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
                        db.vals[db.visibility[9].type[area.id - 1].val].type[0]
                          .styles
                      }
                    >
                      {db.drains[area.id - 1].options.map(count => {
                        if (count.id <= db.drains[area.id - 1].quant) {
                          return (
                            <div id="drainVals" name={count}>
                              <br></br>
                              <label>Type: </label>
                              <select id="selectDrain" class="select-css">
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
                  <div
                    id="optionsShown"
                    style={
                      db.vals[db.visibility[1].type[area.id - 1].val].type[0]
                        .styles
                    }
                  >
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
                  <div
                    id="optionsShown"
                    style={
                      db.vals[db.visibility[1].type[area.id - 1].val].type[0]
                        .styles
                    }
                  >
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
                  <div
                    id="optionsShown"
                    style={
                      db.vals[db.visibility[1].type[area.id - 1].val].type[0]
                        .styles
                    }
                  >
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
