import React from "react";

const ProgressBar = (props) => {
    const { completed } = props;
  
    const containerStyles = {
        height: 24,
        width: '100%',
        backgroundColor: "#d3d3d3",
        borderRadius: 4,
        marginTop: 10,

    }
  
    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: '#1e90ff',
        borderRadius: 'inherit',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
  
    const labelStyles = {
        paddingRight: 5,
        color: 'white',
    }

    if( completed < 15 ) {
        labelStyles.color = 'black';
        labelStyles.left = 40;
        labelStyles.position = 'relative';

    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;