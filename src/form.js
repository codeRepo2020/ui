import React from 'react'
import NewParent from './NewParent';

class MyForm extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {mfValue: '17', days: 10, isSubmitted: false};
  
	  this.handleChange = this.handleChange.bind(this);
	  this.handleChangeDays = this.handleChangeDays.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}
  
	handleChange(event) {
	  this.setState({mfValue: event.target.value});
	  this.setState({isSubmitted: false})
	}

	handleChangeDays(event) {
		this.setState({days: event.target.value});
		this.setState({isSubmitted: false})
	  }
  
	handleSubmit(event) {
		console.log(this.state);
		event.preventDefault();
		this.setState({isSubmitted: true})
	
	}

	
	render() {
		let body;
		body = 
		<div>
		<form onSubmit={this.handleSubmit}>
		  <label>
			Pick your mutual fund house:
			<select value={this.state.mfValue} onChange={this.handleChange}>
			<option value="-1">All</option>
<option value="39">ABN  AMRO Mutual Fund</option>
<option value="3">Aditya Birla Sun Life Mutual Fund</option>
<option value="50">AEGON Mutual Fund</option>
<option value="1">Alliance Capital Mutual Fund</option>
<option value="53">Axis Mutual Fund</option>
<option value="46">Bank of India Mutual Fund</option>
<option value="4">Baroda BNP Paribas Mutual Fund</option>
<option value="36">Benchmark Mutual Fund</option>
<option value="59">BNP Paribas Mutual Fund</option>
<option value="32">Canara Robeco Mutual Fund</option>
<option value="60">Daiwa Mutual Fund</option>
<option value="31">DBS Chola Mutual Fund</option>
<option value="38">Deutsche Mutual Fund</option>
<option value="6">DSP Mutual Fund</option>
<option value="47">Edelweiss Mutual Fund</option>
<option value="40">Fidelity Mutual Fund</option>
<option value="51">Fortis Mutual Fund</option>
<option value="27">Franklin Templeton Mutual Fund</option>
<option value="8">GIC Mutual Fund</option>
<option value="49">Goldman Sachs Mutual Fund</option>
<option value="9">HDFC Mutual Fund</option>
<option value="37">HSBC Mutual Fund</option>
<option value="20">ICICI Prudential Mutual Fund</option>
<option value="57">IDBI Mutual Fund</option>
<option value="48">IDFC Mutual Fund</option>
<option value="68">IIFCL Mutual Fund (IDF)</option>
<option value="62">IIFL Mutual Fund</option>
<option value="11">IL&amp;F S Mutual Fund</option>
<option value="65">IL&amp;FS Mutual Fund (IDF)</option>
<option value="63">Indiabulls Mutual Fund</option>
<option value="14">ING Mutual Fund</option>
<option value="42">Invesco Mutual Fund</option>
<option value="70">ITI Mutual Fund</option>
<option value="16">JM Financial Mutual Fund</option>
<option value="43">JPMorgan Mutual Fund</option>
<option value="17">Kotak Mahindra Mutual Fund</option>
<option value="56">L&amp;T Mutual Fund</option>
<option value="18">LIC Mutual Fund</option>
<option value="69">Mahindra Manulife Mutual Fund</option>
<option value="45">Mirae Asset Mutual Fund</option>
<option value="19">Morgan Stanley Mutual Fund</option>
<option value="55">Motilal Oswal Mutual Fund</option>
<option value="54">Navi Mutual Fund</option>
<option value="21">Nippon India Mutual Fund</option>
<option value="73">NJ Mutual Fund</option>
<option value="58">PGIM India Mutual Fund</option>
<option value="44">PineBridge Mutual Fund</option>
<option value="34">PNB Mutual Fund</option>
<option value="64">PPFAS Mutual Fund</option>
<option value="10">Principal Mutual Fund</option>
<option value="13">quant Mutual Fund</option>
<option value="41">Quantum Mutual Fund</option>
<option value="74">Samco Mutual Fund</option>
<option value="22">SBI Mutual Fund</option>
<option value="52">Shinsei Mutual Fund</option>
<option value="67">Shriram Mutual Fund</option>
<option value="2">Standard Chartered Mutual Fund</option>
<option value="24">SUN F&amp;C Mutual Fund</option>
<option value="33">Sundaram Mutual Fund</option>
<option value="25">Tata Mutual Fund</option>
<option value="26">Taurus Mutual Fund</option>
<option value="72">Trust Mutual Fund</option>
<option value="61">Union Mutual Fund</option>
<option value="28">UTI Mutual Fund</option>
<option value="71">WhiteOak Capital Mutual Fund</option>
<option value="29">Zurich India Mutual Fund</option>
			</select>
		  </label>

		  <label>
           days:
		   <input type="text" value={this.state.days} onChange={this.handleChangeDays} />
          </label>
		  <input type="submit" value="Submit" />
		 
		</form>
		<div>
			{this.state.isSubmitted && <NewParent eventkey = "child" data = {this.state}></NewParent>}
		</div>
		</div>
		return body;
	}
	
  }

  export default MyForm;