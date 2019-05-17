/* eslint-disable no-console */
/* eslint-disable max-len */

import React from 'react';
import DatePicker from "react-datepicker";
import moment from 'moment';


class TimePicker extends React.Component {
  render() {
    console.log("test_timePicker");
    return (
      <div style={{height:"auto", backgroundColor:'white',flexDirection:"row"}}>
        <p className={"TimePicker_title"}>{this.props.innertext}</p>
        <DatePicker
          className={"timepicker_DatePicker"}
          selected={this.props.date}
          onSelect={(date) => {
            this.props.setDate(date);
          }}
          maxDate={moment([2019, 5, 30])}
          minDate={moment([2019, 3, 1])}
        />
      </div>
    );
  }
}

export default TimePicker;
