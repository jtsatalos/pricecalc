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

(
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
            <label>Ergeon Permit Acquisition and Inspections Visits? </label>

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
            <label>Municipal Permit Acquisition and Inspections Visits? </label>

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
              <label>Additional Excavation Area Volume in Cubic Yards: </label>
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

            <input
              type="radio"
              id="yes"
              name="rebar"
              value="yes"
              onClick={() => this.show("rebar")}
            />
            <label htmlFor="yes"> Yes </label>

            <input
              type="radio"
              id="no"
              name="rebar"
              value="no"
              onClick={() => this.hide("rebar")}
              defaultChecked
            />
            <label htmlFor="no"> No</label>
            <div id="rebarr" style={stylesRebar}>
              <br></br>
              <label>Base Material: </label>
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
            </div>
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

            <input type="radio" id="straight" name="curbing" value="straight" />
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
            <label>Driveway Approach with Sidewalk and Gutter Requested?</label>

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
            Demo - {this.state.dSquareFeet} Square Feet - {this.state.dType}: $
            {this.state.demoTotal}
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
            Finish Type - {this.state.finishType}: ${this.state.finishTypeVal}
          </label>
          <br></br>
          <label id="bob" style={stylesBase}>
            Base Layer 1 - {this.state.baseDepth} Inches -{this.state.bType}: $
            {this.state.bTotal}
          </label>
          <label id="bob">
            Concrete Type - {this.state.concDepth} Inches -{this.state.concType}{" "}
            PSI: ${this.state.concVal}
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
            Total Hardscape Price Per Square Foot : ${this.state.totalperSqf}
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
            Demo - {this.state.dSquareFeet} Square Feet - {this.state.dType}: $
            {this.state.demoContractorTotal}
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
            Base Layer 1 - {this.state.baseDepth} Inches -{this.state.bType}: $
            {this.state.bContractorTotal}
          </label>
          <label id="bob">
            Concrete Type - {this.state.concDepth} Inches -{this.state.concType}{" "}
            PSI: ${this.state.concValCont}
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
            Total Hardscape Price Per Square Foot : ${this.state.totalperSqf}
          </label>
        </div>
      </div>
    </div>
  </div>
),
  (
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
              <label>Ergeon Permit Acquisition and Inspections Visits? </label>

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
              Demo - {this.state.dSquareFeet} Square Feet - {this.state.dType}:
              ${this.state.demoTotal}
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
              Finish Type - {this.state.finishType}: ${this.state.finishTypeVal}
            </label>
            <br></br>
            <label id="bob" style={stylesBase}>
              Base Layer 1 - {this.state.baseDepth} Inches -{this.state.bType}:
              ${this.state.bTotal}
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
              Total Hardscape Price Per Square Foot : ${this.state.totalperSqf}
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
              Demo - {this.state.dSquareFeet} Square Feet - {this.state.dType}:
              ${this.state.demoContractorTotal}
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
              Base Layer 1 - {this.state.baseDepth} Inches -{this.state.bType}:
              ${this.state.bContractorTotal}
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
              Total Hardscape Price Per Square Foot : ${this.state.totalperSqf}
            </label>
          </div>
        </div>
      </div>
    </div>
  ),
  (
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
              <label>Ergeon Permit Acquisition and Inspections Visits? </label>

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
              Demo - {this.state.dSquareFeet} Square Feet - {this.state.dType}:
              ${this.state.demoTotal}
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
              Finish Type - {this.state.finishType}: ${this.state.finishTypeVal}
            </label>
            <br></br>
            <label id="bob" style={stylesBase}>
              Base Layer 1 - {this.state.baseDepth} Inches -{this.state.bType}:
              ${this.state.bTotal}
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
              Total Hardscape Price Per Square Foot : ${this.state.totalperSqf}
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
              Demo - {this.state.dSquareFeet} Square Feet - {this.state.dType}:
              ${this.state.demoContractorTotal}
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
              Base Layer 1 - {this.state.baseDepth} Inches -{this.state.bType}:
              ${this.state.bContractorTotal}
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
              Total Hardscape Price Per Square Foot : ${this.state.totalperSqf}
            </label>
          </div>
        </div>
      </div>
    </div>
  ),
  (
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
              <label>Ergeon Permit Acquisition and Inspections Visits? </label>

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
              Demo - {this.state.dSquareFeet} Square Feet - {this.state.dType}:
              ${this.state.demoTotal}
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
              Finish Type - {this.state.finishType}: ${this.state.finishTypeVal}
            </label>
            <br></br>
            <label id="bob" style={stylesBase}>
              Base Layer 1 - {this.state.baseDepth} Inches -{this.state.bType}:
              ${this.state.bTotal}
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
              Total Hardscape Price Per Square Foot : ${this.state.totalperSqf}
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
              Demo - {this.state.dSquareFeet} Square Feet - {this.state.dType}:
              ${this.state.demoContractorTotal}
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
              Base Layer 1 - {this.state.baseDepth} Inches -{this.state.bType}:
              ${this.state.bContractorTotal}
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
              Total Hardscape Price Per Square Foot : ${this.state.totalperSqf}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
