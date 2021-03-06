import React, { Component } from 'react';
import Button from 'material-ui/Button'; 
import Typography from 'material-ui/Typography';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import Slide from 'material-ui/transitions/Slide';
import Grid from 'material-ui/Grid';
import { CircularProgress } from 'material-ui/Progress';

const fullWidthStyle = {
  width: '100%'
};

const clearGridContainerWidth = {
  margin: '0px -12px -12px 0px'
};

class ProductFieldPresentationDialog extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.product.dropDownsProduct;

    this.syncStateToInputValue = (field, event) => {
      this.setState({...this.state, [field]: event.target.value}, () => {
        this.props.product.dropDownsProduct = this.state;
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    // Dialog is being opened
    if (nextProps.open) {
      this.setState({...this.state, ...nextProps.product.dropDownsProduct});
    }
  }

	render() {
		return (
				<Dialog style={{ maxHeight: '150vh' }} open={this.props.open} transition={Slide} onRequestClose={this.props.handleRequestClose}>
          <DialogTitle>{this.props.title}</DialogTitle>
          <DialogContent>
            <Grid container spacing={24} justify='center'>
              <Grid item xs={4}>
                <TextField
                  id="weight"
                  name="weight"
                  label="Weight"
                  onChange={(event) => this.syncStateToInputValue("weight", event)}
                  value={this.state.weight}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="modelNumber"
                  name="modelNumber"
                  label="Model Number"
                  onChange={(event) => this.syncStateToInputValue("modelNumber", event)}
                  value={this.state.modelNumber}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="brand"
                  name="brand"
                  label="Brand"
                  onChange={(event) => this.syncStateToInputValue("brand", event)}
                  value={this.state.brand}
                />
              </Grid>
            </Grid>
            <Grid container spacing={24} justify='center'>
              <Grid item xs={6}>
                <TextField
                  style={fullWidthStyle}
                  id="price"
                  name="price"
                  label="Price"
                  onChange={(event) => this.syncStateToInputValue("price", event)}
                  value={this.state.price}
                />
              </Grid>
              <Grid item xs={6}>
                <Select style={{ marginTop: '16px', ...fullWidthStyle }} name="electronicType" 
                        value={this.state.electronicType} onChange={(event) => this.syncStateToInputValue("electronicType", event)}>
                  <MenuItem value="TelevisionSet">TelevisionSet</MenuItem>
                  <MenuItem value="Monitor">Monitor</MenuItem>
                  <MenuItem value="Desktop">Desktop</MenuItem>
                  <MenuItem value="Laptop">Laptop</MenuItem>
                  <MenuItem value="Tablet">Tablet</MenuItem>
                </Select>
              </Grid>
            </Grid>
            {(() => {
              switch (this.state.electronicType) {
                case "TelevisionSet":
                  return (
                    <Grid container spacing={24} justify='center'>
                      <Grid item xs={6}>
                        <TextField
                          style={fullWidthStyle}
                          id="dimensions"
                          name="dimensions"
                          label="Dimensions"
                          onChange={(event) => this.syncStateToInputValue("dimensions", event)}
                          value={this.state.dimensions}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          style={fullWidthStyle}
                          id="type"
                          name="type"
                          label="Type"
                          onChange={(event) => this.syncStateToInputValue("type", event)}
                          value={this.state.type}
                        />
                      </Grid>
                    </Grid>
                  );
                case "Desktop":
                case "Laptop":
                case "Tablet":
                  return (
                    <Grid container spacing={24} justify='center'>
                      <Grid item xs={4}>
                        <TextField
                          style={fullWidthStyle}
                          id="processor"
                          name="processor"
                          label="Processor"
                          onChange={(event) => this.syncStateToInputValue("processor", event)}
                          value={this.state.processor}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          style={fullWidthStyle}
                          id="ram"
                          name="ram"
                          label="RAM"
                          onChange={(event) => this.syncStateToInputValue("ram", event)}
                          value={this.state.ram}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          style={fullWidthStyle}
                          id="hardDrive"
                          name="hardDrive"
                          label="Hard Drive"
                          onChange={(event) => this.syncStateToInputValue("hardDrive", event)}
                          value={this.state.hardDrive}
                        />
                      </Grid> 
                      <Grid item xs={6}>
                        <TextField
                          style={fullWidthStyle}
                          id="cpu"
                          name="cpu"
                          label="CPU"
                          onChange={(event) => this.syncStateToInputValue("cpu", event)}
                          value={this.state.cpu}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          style={fullWidthStyle}
                          id="os"
                          name="os"
                          label="OS"
                          onChange={(event) => this.syncStateToInputValue("os", event)}
                          value={this.state.os}
                        />
                      </Grid>
                      {(() => {
                        switch (this.state.electronicType) {
                          case "Desktop":
                            return (
                              <Grid style={clearGridContainerWidth} container spacing={24} justify='flex-start'>
                                <Grid item xs={4}>
                                  <TextField
                                    style={fullWidthStyle}
                                    id="dimensions"
                                    name="dimensions"
                                    label="Dimensions"
                                    onChange={(event) => this.syncStateToInputValue("dimensions", event)}
                                    value={this.state.dimensions}
                                  />
                                </Grid>
                              </Grid>
                            );
                          case "Laptop":
                            return (
                              <Grid style={clearGridContainerWidth} container spacing={24} justify='center'>
                                <Grid item xs={6}>
                                  <TextField
                                    style={fullWidthStyle}
                                    id="displaySize"
                                    name="displaySize"
                                    label="Display Size"
                                    onChange={(event) => this.syncStateToInputValue("displaySize", event)}
                                    value={this.state.displaySize}
                                  />
                                </Grid>
                                <Grid item xs={6}>
                                  <TextField
                                    style={fullWidthStyle}
                                    id="battery"
                                    name="battery"
                                    label="Battery"
                                    onChange={(event) => this.syncStateToInputValue("battery", event)}
                                    value={this.state.battery}
                                  />
                                </Grid>
                                <Grid item xs={6}>
                                  <TextField
                                    style={fullWidthStyle}
                                    id="camera"
                                    name="camera"
                                    label="Camera"
                                    onChange={(event) => this.syncStateToInputValue("camera", event)}
                                    value={this.state.camera}
                                  />
                                </Grid>
                                <Grid item xs={6}>
                                  <TextField
                                    style={fullWidthStyle}
                                    id="touchScreen"
                                    name="touchScreen"
                                    label="Touch Screen"
                                    onChange={(event) => this.syncStateToInputValue("touchScreen", event)}
                                    value={this.state.touchScreen}
                                  />
                                </Grid>
                              </Grid>
                            );
                          case "Tablet":
                            return (
                              <Grid style={clearGridContainerWidth} container spacing={24} justify='center'>
                                <Grid item xs={6}>
                                  <TextField
                                    style={fullWidthStyle}
                                    id="displaySize"
                                    name="displaySize"
                                    label="Display Size"
                                    onChange={(event) => this.syncStateToInputValue("displaySize", event)}
                                    value={this.state.displaySize}
                                  />
                                </Grid>
                                <Grid item xs={6}>
                                  <TextField
                                    style={fullWidthStyle}
                                    id="battery"
                                    name="battery"
                                    label="Battery"
                                    onChange={(event) => this.syncStateToInputValue("battery", event)}
                                    value={this.state.battery}
                                  />
                                </Grid>
                                <Grid item xs={6}>
                                  <TextField
                                    style={fullWidthStyle}
                                    id="camera"
                                    name="camera"
                                    label="Camera"
                                    onChange={(event) => this.syncStateToInputValue("camera", event)}
                                    value={this.state.camera}
                                  />
                                </Grid>
                                <Grid item xs={6}>
                                  <TextField
                                    style={fullWidthStyle}
                                    id="dimension"
                                    name="dimensions"
                                    label="Dimensions"
                                    onChange={(event) => this.syncStateToInputValue("dimension", event)}
                                    value={this.state.dimensions}
                                  />
                                </Grid>
                              </Grid>
                            );
                          default:
                            return <p />;
                        }
                      })()}
                    </Grid>
                  );
                case "Monitor":
                  return (
                    <Grid container spacing={24} justify='flex-start'>
                      <Grid item xs={4}>
                        <TextField
                          style={fullWidthStyle}
                          id="size"
                          name="size"
                          label="Size"
                          onChange={(event) => this.syncStateToInputValue("size", event)}
                          value={this.state.size}
                        />
                      </Grid>
                    </Grid>
                  );
                default:
                  return <p />;
              }
            })()}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleRequestClose} color="primary">
              Cancel
            </Button>
            <Button onClick={() => this.props.action(this.state)} color="primary">
              {this.props.actionButtonLabel}
            </Button>
            {this.props.loading && <CircularProgress color="accent" style={{ width: '30px'}} />}
          </DialogActions>
        </Dialog>
		  )
	}

};

export default ProductFieldPresentationDialog;