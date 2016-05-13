import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Item from './Item';


const Example = ({ artists, isLoading, query, search, init, stop }) => {
  return (
    <div className="container p2">
      <h2 className="border-bottom py1 mb4">Spotfiy Search Example</h2>

      <form className="sm-col-6 mb4">
        <label className="caps h5 bold">Search</label>
        <input type="text"
          className="block col-12 mb1 field"
          value={ query }
          onFocus={ init }
          onBlur={ stop }
          onChange={ e => search(e.target.value) } />
      </form>

      <div>
        <h5 className="caps">Results</h5>
        {
          artists.map((artist, i) => <Item key={i} {...artist} />)
        }
      </div>

    </div>
  );
};


function mapStateToProps({ artists }) {
  return {
    artists: artists.list,
    isLoading: artists.isLoading,
    query: artists.query,
  };
}

const mapDispatchToProps = dispatch => ({
  search: q => dispatch(actions.search(q)),
  init: () => dispatch(actions.initSearch()),
  stop: () => dispatch(actions.stopSearch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Example);
