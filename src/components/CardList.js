import React from 'react';
import Card from './Card';
// import {robots} from './Robots';


const CardList = ({robots}) => {

const cardArray = robots.map((user,i) => {

	return <Card key ={i} name = {robots[i].name} email = {robots[i].email} id = {robots[i].id}/>
											})

return(
	<div>
		{cardArray}
	</div>
	);


}

export default CardList;

