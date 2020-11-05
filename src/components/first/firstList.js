import React from 'react';
import MakeSecondList from './createFirstList';
import './firstListStyle.css';

class CreateFirstList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			list: ['Defolt value','Some text']
		}
		this.changeValue = this.changeValue.bind(this);
		this.makeNewStateList = this.makeNewStateList.bind(this);
	}

	changeValue(e) {
		this.setState({ value: e.target.value})
	}


	makeNewStateList(){
		if(this.state.value != ''){
			this.setState(state => {
				const listNew = [...state.list, state.value];
	
				return({
					list: listNew,
					value: ''
				})
			})
		}
	}


	render(){
		return(
			<div className='firstToDOList'>
				<div className="firstNavBlock">
					<input 
						onChange = {this.changeValue} 
						value = {this.state.value} 
						placeholder='enter task'
						className = 'firstNavBlockInput' 
						type="text"
					/>
					<button 
						onClick = {this.makeNewStateList} 
						className = 'firstNavBlockBtn'
					>add</button>
				</div>
				<ul className='firstToDoList'>
					<MakeSecondList list = {this.state.list}/>
				</ul>
			</div>
		)
		
	}
}

export default CreateFirstList;