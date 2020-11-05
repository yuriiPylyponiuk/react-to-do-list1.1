import React from 'react';
import CreateItems from './createItem';
import { v4 as uuidv4 } from 'uuid';
import './styleForList.css';

class CreateList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			list:[],
			value: '',
			newValue: ''
		};
		this.fillValue = this.fillValue.bind(this);
		this.addToList = this.addToList.bind(this);
		this.showNewImput = this.showNewImput.bind(this);
		this.doneClick = this.doneClick.bind(this);
		this.deleteClick = this.deleteClick.bind(this);
		this.undoClick = this.undoClick.bind(this);
		this.editPuncts = this.editPuncts.bind(this);
		this.setNewValue = this.setNewValue.bind(this);
		this.countNumer = this.countNumer.bind(this);
	};

	fillValue(e){
		this.setState({value: e.target.value})
	}
	addToList(){
		if( this.state.value != ''){
      this.setState( state => {
        let newObj = {
          id: uuidv4(),
          text: state.value,
          checked: false,
					input: false,
					itemLenght: this.state.list.length
        }

        const secondList = [...state.list, newObj];
  
        return{
          list: secondList,
          value: ''
        }
      })
    }
	}
	showNewImput(data){
		this.state.list.map(item =>{
			if(item.id === data){
				this.setState(state=>{
					let newObj = {
						id: item.id,
						text: item.text,
						checked: item.checked,
						input: true,
						itemLenght: item.itemLenght
					};
					let a = item.text;
					let asd = state.list;
					asd.splice(item.itemLenght, 1, newObj);
					return{
						list: asd,
						newValue: a
					}
				})
			}
		})
	}

	doneClick(data) {
		this.state.list.map(item =>{
			if(item.id === data){
				this.setState(state=>{
					let newObj = {
						id: item.id,
						text: item.text,
						checked: true,
						input: item.input,
						itemLenght: item.itemLenght
					};
					let asd = state.list;
					asd.splice(item.itemLenght, 1, newObj);
					return{
						list: asd,
						value: '',
					}
				})
			}
		})
	}
	undoClick(data){
		this.state.list.map(item =>{
			if(item.id === data){
				this.setState(state=>{
					let newObj = {
						id: item.id,
						text: item.text,
						checked: false,
						input: item.input,
						itemLenght: item.itemLenght
					};
					let asd = state.list;
					
					asd.splice(item.itemLenght, 1, newObj);
					return{
						list: asd,
						value: ''
					}
				})
			}
		})
	}
	deleteClick(data) {
		this.setState(state=>{
			let asd = state.list.filter(item => item.id != data);
			return{
				list: asd
			}
		})
	}
	editPuncts(a){
		this.setState({newValue: a})
	}
	setNewValue(data){
		this.state.list.map(item =>{
			if(item.id === data){
				this.setState(state=>{
					let newObj = {
						id: item.id,
						text: state.newValue,
						checked: item.checked,
						input: false,
						itemLenght: item.itemLenght
					};
					let asd = state.list;
					asd.splice(item.itemLenght, 1, newObj);
					return{
						list: asd,
						newValue: ''
					}
				})
			}
		})
	}

	countNumer(){
		let num = 0;

		this.state.list.map( item=> {
			if(item.checked ===false){
				num++
			}
		})
		return num
	}


	render() {
		return(
			<div className='secondList'>
				<h1>To do: {this.countNumer()} </h1>
				<div className="wrap">
					<CreateItems 
						list={this.state.list} 
						inputs={this.showNewImput} 
						doneClick={this.doneClick} 
						undoClick={this.undoClick} 
						deleteClick={this.deleteClick} 
						fillValue= {this.editPuncts}
						addToList={this.setNewValue}
						value={this.state.newValue}
					/>
				</div>
				<div className='navTools'>
					<h3>Task</h3>
					<input className='navToolsInput' onChange={this.fillValue} value = {this.state.value} type="text"/>
					<input className='navToolsBtn' onClick={this.addToList} type="button" value="Save item"/>
				</div>
			</div>
		)
	}
}

export default CreateList;