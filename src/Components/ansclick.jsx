import React from 'react';

class AnsClick extends React.Component {
  render() {
    const {onAnsClick} = this.props;
		return (
			<div style={{flex:1,display:"flex",flexDirection:"row",marginRight:3,marginBottom:10}}>
				<div style={{flex:6}}></div>
				<button style={{flex:1,border:"2px gray solid",borderRadius:"5px",width:"200px",paddingBottom:"7px",backgroundColor:"whitesmoke",margin:"5px"}} onClick={()=>{onAnsClick()}}>
          <p className={"EnterBottomText"}>確定</p>
				</button>
        <div style={{flex:1}} />
			</div>
		);
  }
}

export default AnsClick;
