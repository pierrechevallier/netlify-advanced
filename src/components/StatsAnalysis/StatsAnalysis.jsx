import React from "react";
import classNames from "clsx";
import { Link } from "gatsby";
// MUI
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

/**
 * #StatsAnalysis
 * A component for displaying a summary of statistics depending on their type
 */
const StatsAnalysis = () => {
    const [responseData, setResponseData] = React.useState("quant");
    const [explanatoryData, setExplanatoryData] = React.useState("quant");
    const type_data = {
        quant: "Quantitative",
        binary: "Qualitative (binary data)",
        "non-binary": "Qualitative (non-binary data)"
    };
    return <div className={classNames("c-about", "o-flex-column", "u-m-b-m", "u-z-0")}>
        <FormControl>
            <InputLabel id="select-type-data-response">Response variable</InputLabel>
            <Select
                labelId="select-type-data-response-label"
                id="select-type-data-response"
                value={responseData}
                onChange={(e) => setResponseData(e.target.value)}
            >
                {Object.keys(type_data).map(key => (
                    <MenuItem value={key}>{type_data[key]}</MenuItem>
                ))}
            </Select>
        </FormControl>
        <FormControl>
            <InputLabel id="select-type-data-explanatory">Explanatory variable</InputLabel>
            <Select
                labelId="select-type-data-explanatory-label"
                id="select-type-data-explanatory"
                value={explanatoryData}
                onChange={(e) => setExplanatoryData(e.target.value)}
            >
                {Object.keys(type_data).map(key => (
                    <MenuItem value={key}>{type_data[key]}</MenuItem>
                ))}
            </Select>
        </FormControl>
    </div>
};

export default StatsAnalysis;