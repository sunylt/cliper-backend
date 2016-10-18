import React from 'react';

class ListItem extends React.Component {
  render() {
    const {item, handleChose} = this.props;
    return (
      <div
        className="list_item"
        onClick={() => {
          handleChose(item.id);
        }}
      >
        <i className="fa fa-tag" aria-hidden="true"></i>&nbsp;
        {item.value}
      </div>
    )
  }
}

export default ListItem;