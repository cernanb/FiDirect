import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAsset } from '../actions/assetActions';

export class AssetInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      value: '',
    }
  }

  handleOnChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const asset = Object.assign({}, this.state);
    this.props.addAsset(asset);
    this.setState({
      name: '',
      value: '',
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="name" className="col-md-4 control-label">Loan Account Name</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="value" className="col-md-4 control-label">Value</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        name="value"
                        value={this.state.value}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add Loan</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addAsset })(AssetInput);
