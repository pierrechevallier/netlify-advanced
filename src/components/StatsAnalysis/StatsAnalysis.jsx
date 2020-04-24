import React from "react";
import classNames from "clsx";
import { Link } from "gatsby";

// MUI
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

// Data
import statistics_analysis from "../../../data/StatisticsAnalysis";

/**
 * #StatsAnalysis
 * A functional component for displaying a summary of statistics depending on their type
 */
const StatsAnalysis = () => {
    const [responseData, setResponseData] = React.useState("quant");
    const [explanatoryData, setExplanatoryData] = React.useState("quant");
    const [showFullTable, setShow] = React.useState(true);
    const type_data = {
        quant: "Quantitative",
        binary: "Qualitative (binary data)",
        "non-binary": "Qualitative (non-binary data)"
    };
    const type_color = {
        quant: "t-red",
        binary: "t-green",
        "non-binary": "t-blue"
    };
    const selection = statistics_analysis[`${responseData}-${explanatoryData}`];
    return <div className={classNames("c-about", "o-flex-column", "u-m-b-m", "u-z-0", "u-m-t-m")}>
        <div className={classNames("o-resp-row-col", "o-jcsa", "u-p-s")}>
            <FormControl className={classNames("o-col-5")}>
                <InputLabel id="select-type-data-response">Response variable</InputLabel>
                <Select
                    native
                    labelId="select-type-data-response-label"
                    id="select-type-data-response"
                    value={responseData}
                    onChange={(e) => setResponseData(e.target.value)}
                    className={classNames(type_color[responseData])}
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
                    className={classNames(type_color[explanatoryData])}
                >
                    {Object.keys(type_data).map(key => (
                        <option value={key}>{type_data[key]}</option>
                    ))}
                </Select>
            </FormControl>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={showFullTable}
                        onChange={() => setShow(!showFullTable)}
                        name="checkedShowTable"
                        color="default"
                    />
                }
                label="Show all the table"
            />
        </div>
        <div className={classNames("o-resp-row-col", "o-jc", "u-m-m", showFullTable ? "t-hidden" : "")}>
            <table className={classNames("c-table-info", "c-small-table", "u-m-s")}>
                <tr className={"c-table-head"}>
                    <th>Analysis method</th>
                    <th>Visualisation</th>
                </tr>
                <tr>
                    <td>
                        {Object.keys(selection.descriptive.method).map(key => {
                            const items = selection.descriptive.method[key];
                            if (items.length > 0) {
                                return <p>
                                    <h4 className={"t-text-capitalize"}>{`${key}:`}</h4>
                                    <span>{items.map(item => item)}</span>
                                </p>
                            } else {
                                return null
                            }
                        })}
                    </td>
                    <td>
                        {selection.descriptive.visualisation.content.map(content => content).toString().replace(",", ", ")}
                    </td>
                </tr>
            </table>
            <table className={classNames("c-table-info", "c-small-table", "u-m-s")}>
                <tr className={"c-table-head"}>
                    <th>Hypothesis testing</th>
                    <th>Example of modelisation</th>
                </tr>
                <tr>
                    <td>
                        {selection.inferential.hypothesis.content.map(content => content).toString().replace(",", ", ")}
                    </td>
                    <td>
                        {selection.inferential.modelisation.content.map(content => content).toString().replace(",", ", ")}
                    </td>
                </tr>
            </table>
        </div>
        <table className={classNames("c-table-info", "c-small-table", "u-m-s", showFullTable ? "" : "t-hidden")}>
            <tr className={"c-table-head"}>
                <th>Response variable</th>
                <th>Explanatory variable</th>
                <th>Analysis method</th>
                <th>Visualisation</th>
                <th>Hypothesis testing</th>
                <th>Example of modelisation</th>
            </tr>
            {Object.keys(type_data).map(res_data => {
                return Object.keys(type_data).map(exp_data => {
                    console.log("object keys data", res_data, exp_data);
                    const data = statistics_analysis[`${res_data}-${exp_data}`];
                    return <tr key={`${res_data}-${exp_data}`}>
                        <td className={classNames(type_color[res_data])}>{type_data[res_data]}</td>
                        <td className={classNames(type_color[exp_data], "c-table-border-right")}>{type_data[exp_data]}</td>
                        <td className={"c-table-border-right"}>
                            {Object.keys(data.descriptive.method).map(key => {
                                const items = data.descriptive.method[key];
                                if (items.length > 0) {
                                    return <p>
                                        <h4 className={"t-text-capitalize"}>{`${key}:`}</h4>
                                        <span>{items.map(item => item)}</span>
                                    </p>
                                } else {
                                    return null
                                }
                            })}
                        </td>
                        <td className={"c-table-border-right"}>
                            {data.descriptive.visualisation.content.map(content => content).toString().replace(",", ", ")}
                        </td>
                        <td className={"c-table-border-right"}>
                            {data.inferential.hypothesis.content.map(content => content).toString().replace(",", ", ")}
                        </td>
                        <td>
                            {data.inferential.modelisation.content.map(content => content).toString().replace(",", ", ")}
                        </td>
                    </tr>
                })
            })}
        </table>
    </div>
};

export default StatsAnalysis;