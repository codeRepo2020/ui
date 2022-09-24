import React from 'react'
import { UserData } from './Data';
import App from './App';

function onlyUnique(value, index, self) {
	return self.indexOf(value) === index;
  }


function Parent() {
	const allSchemeNames = UserData.map((data) => data.schemeName)
	const unique = allSchemeNames.filter(onlyUnique);
	const rows = [];
    for (let i = 0; i < unique.length; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html

    rows.push(<App schemeName = {unique[i]} key = {unique[i]}/>);
}

console.log(rows)
return <div>{rows}</div>;
	
 
}

export default Parent