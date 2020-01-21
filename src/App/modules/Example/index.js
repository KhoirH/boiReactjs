import React from 'react';
import { connect } from "react-redux";

function Example(){
  return (
    <div></div>
  )
}

const mapsStateToProps = (state) => ({

})
const mapsDispatchToProps = {}
export default connect(mapsStateToProps, mapsDispatchToProps)(Example);
