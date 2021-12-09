import React from "react";
import { connect } from "react-redux";
import { buyJuice } from "../redux";

function JuiceContainer(props) {
    return (
        <div>
            <h2>Number of juices - {props.numOfJuices}</h2>
            <button onClick={props.buyJuice}>Buy juice</button>
        </div>
    )
}

// doing for 'connect' after 'store' //
const mapStateToProps = state => {
    return {
        numOfJuices: state.juice.numOfJuices,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyJuice: () => dispatch(buyJuice())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(JuiceContainer)


