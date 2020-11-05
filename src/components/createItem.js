import React from 'react';
import cx from 'classnames';
import multiply from '../icons/multiply.svg';
import check from '../icons/check.svg';

class CreateItems extends React.Component{
	constructor(props){
		super(props);
		this.handlInput = this.handlInput.bind(this);
		this.fillNewValue = this.fillNewValue.bind(this);
	}

	handlInput(data){
		this.props.inputs(data)
	}
	handlDoneInput(data){
		this.props.doneClick(data)
	}
	handlDeleteInput(data){
		this.props.deleteClick(data)
	}
	handlUndoInput(data){
		this.props.undoClick(data)
	}
	fillNewValue(e){
		let str = e.target.value;
		this.props.fillValue(str);
	}
	setNewValue(data){
		this.props.addToList(data);
	}
	render(){
		return(
				this.props.list.map((item) =>{	
					return(
						<div key = {item.id} className={cx({
							secondListItem: true,
							doneStyle: item.checked
						})}>
							{item.input== true
							?<form onSubmit={()=>this.setNewValue(item.id)}>
								<input onChange={this.fillNewValue} value = {this.props.value} type="text" className={cx({
									editInput: true
								})}/>
								<button type='submit'>Save</button>
								</form>
							:<span onClick={() => this.handlInput(item.id)}>{item.text}</span> }
							<div className="tools">
								{item.checked == true
								? <button onClick={() => this.handlUndoInput(item.id)}><img src={check} className="App-check" alt="check" /></button>
								: <button onClick={() => this.handlDoneInput(item.id)}><img src={check} className="App-check" alt="check" /></button>}
								<button onClick={() => this.handlDeleteInput(item.id)}><img src={multiply} className="App-multiply" alt="multiply" /></button>
							</div>
						</div>
					)
				})
		)
	}
}

export default CreateItems;