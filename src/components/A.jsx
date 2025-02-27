import './a.css';
import React from 'react';
// Example of a data array that
// you might receive from an API
const data = [
{ name: "Anom", age: 19, gender: "Male" },
{ name: "Megha", age: 19, gender: "Female" },
{ name: "Amam", age: 19, gender: "Female" },
{ name: "Yashi", age: 19, gender: "Female" },
{ name: "Aarash", age: 19, gender: "Female" },
{ name: "Reena", age: 19, gender: "Female" },
{ name: "Subham", age: 25, gender: "Male"},
]

function A() {
return (
	<div className="App">
	<table>
		<tr>
		<th>Name</th>
		<th>Age</th>
		<th>Gender</th>
		</tr>
		{data.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.name}</td>
			<td>{val.age}</td>
			<td>{val.gender}</td>
			</tr>
		)
		})}
	</table>
	</div>
);
}

export default A;
