import React from "react";
import classNames from "clsx";
import { Link } from "gatsby";
// MUI
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

/**
 * #StatsAnalysis
 * A functional component for displaying a summary of statistics depending on their type
 */
const StatsAnalysis = () => {
    const [responseData, setResponseData] = React.useState("quant");
    const [explanatoryData, setExplanatoryData] = React.useState("quant");
    const type_data = {
        quant: "Quantitative",
        binary: "Qualitative (binary data)",
        "non-binary": "Qualitative (non-binary data)"
    };
    return <div className={classNames("c-about", "o-flex-column", "u-m-b-m", "u-z-0", "u-m-t-m")}>
        <div className={classNames("o-resp-row-col", "o-jcsa")}>
            <FormControl className={classNames("o-col-5")}>
                <InputLabel id="select-type-data-response">Response variable</InputLabel>
                <Select
                    native
                    labelId="select-type-data-response-label"
                    id="select-type-data-response"
                    value={responseData}
                    onChange={(e) => setResponseData(e.target.value)}
                >
                    {Object.keys(type_data).map(key => (
                        <option value={key}>{type_data[key]}</option>
                    ))}
                </Select>
            </FormControl>
            <FormControl className={classNames("o-col-5")}>
                <InputLabel id="select-type-data-explanatory">Explanatory variable</InputLabel>
                <Select
                    native
                    labelId="select-type-data-explanatory-label"
                    id="select-type-data-explanatory"
                    value={explanatoryData}
                    onChange={(e) => setExplanatoryData(e.target.value)}
                >
                    {Object.keys(type_data).map(key => (
                        <option value={key}>{type_data[key]}</option>
                    ))}
                </Select>
            </FormControl>
        </div>
    </div>
};

export default StatsAnalysis;