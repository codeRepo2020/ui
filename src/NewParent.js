import React, { useState, useEffect } from 'react';
import { UserData } from './Data';
import App from './App';




function NewParent(props) {
const [myState, setState] = useState();
const [isloading, setIsLoading] = useState(true);
var rows = [];


useEffect ( () => {
	if(props.data.mfValue != null && props.data.days){
	getData()
	}
},[props])

	
	const getData = () => {
		setIsLoading(true);
		let newUserData;
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "http://localhost:8080/api/investment/fetchByDuration", true);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify({
		  "mf": props.data.mfValue,
		  "days": props.data.days
	}));
	
	xhr.onload = function() {
		newUserData = JSON.parse(this.responseText);
		var regex = /Direct/
		const allSchemeNames = newUserData.map((data) => data.schemeName).filter((x) => regex.test(x))
		const unique = allSchemeNames.filter(onlyUnique);
		

		setIsLoading(false);
	
	  for (let i = 1; i < unique.length; i++) {
	 	// note: we are adding a key prop here to allow react to uniquely identify each
	  	// element in this array. see: https://reactjs.org/docs/lists-and-keys.html

	  	const values = {
	  		name:unique[i],
			data:newUserData
	 	}
	 	rows.push(<App schemeName = {values} key = {Math.random()}/>);
	  }
	
	//  const values = {
	// 	 		name:unique[1],
	//  	 		data:newUserData
	//  	 	}
	//  rows.push(<App schemeName = {values} key = {unique[1]}/>);
	

	   
	}
	setState(rows);
	
	  }

	
	const content = isloading ? <div><h1>IsLoading..</h1></div> :  <div>{myState}</div>
	return content;
}

function onlyUnique(value, index, self) {
	return self.indexOf(value) === index;
  }




  export default NewParent