import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';

import { setProductFilter } from '../../actions'

class ProductTypeDropdown extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filterType: "none",
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (field, event) => {
        this.setState({[field]: event.target.value},()=>{
            if(this.state.filterType === "none"){
                this.props.setProductFilter("");
            }else{
                const filter = `?type=${this.state.filterType}`;
                this.props.setProductFilter(filter);
            }
        });
    };

    render() {
        return (
            <div>
                    <Select name="filterType" value={this.state.filterType} onChange={(event) => this.handleChange("filterType", event)}>
                        <MenuItem value="none">Select Filter</MenuItem>
                        <MenuItem value="televisionSet">TelevisionSet</MenuItem>
                        <MenuItem value="monitor">Monitor</MenuItem>
                        <MenuItem value="desktop">Desktop</MenuItem>
                        <MenuItem value="Laptop">Laptop</MenuItem>
                        <MenuItem value="Tablet">Tablet</MenuItem>
                    </Select>
            </div>
        );
    }
}

const mapStateToProps = ({product}) => ({
    product
});

const mapDispatchToProps = (dispatch) => {
    return {
        setProductFilter: (filter) => {
            dispatch(setProductFilter(filter));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductTypeDropdown);