import React from 'react';

class ActiveItem extends React.Component {
  render() {
    const {item, handleUnchose} = this.props;
    return (
      <div className="active_item">
        {item.value || item}&nbsp;
        <i
          className="fa fa-times item_unchose"
          aria-hidden="true"
          onClick={() => {
            handleUnchose(item.value);
          }}
        ></i>
      </div>
    )
  }
}

export default ActiveItem;
