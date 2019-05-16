/* eslint-disable no-console */
/* eslint-disable max-len */

import React from 'react';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';

class SetLocation extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  handleClickOpen() {
    this.setState((prevState) => ({
      ...prevState,
      open: true,
    }))
  }

  handleClose() {
    this.setState((prevState) => ({
      ...prevState,
      open: false,
    }))
  }

  render() {
    return (
      <div style={{marginTop:10, height:"auto", backgroundColor:'white',flexDirection:"row",flex:1}}>
        <p className={"picker_title"}>{this.props.innertext}</p>
        <div style={{marginLeft:5}}>
          <Button onClick={this.handleClickOpen.bind(this)}>{this.props.location}</Button>
          <Dialog disableBackdropClick disableEscapeKeyDown open={this.state.open} onClose={this.handleClose.bind(this)}>
            <DialogTitle>耕作地點</DialogTitle>
            <DialogContent>
              <form className={"setlocation_container"}>
                <FormControl className={"setlocation_formControl"}>
                  <Select
                    native
                    value={this.props.location}
                    onChange={(option)=>{ 
                      console.log(option.target.value)
                      alert(`You have choose ${option.target.value} to crop.`);
                      this.props.setlocation(option.target.value);}}
                  >
                    <option value="請選擇耕作地點">-</option>
                    <option value={"Taipei_NTU"}>Taipei_NTU</option>
                  </Select>
                </FormControl>
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose.bind(this)} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleClose.bind(this)} color="primary">
                Ok
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>

      
    );
  }
}

export default SetLocation;
