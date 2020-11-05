import React from 'react';

function MakeSecondList(props) {
	return(
		props.list.map( i => {
			return(
				<li className='firstToDoListItem' key={i}>{i}</li>
			)
		})
	)
}

export default MakeSecondList;