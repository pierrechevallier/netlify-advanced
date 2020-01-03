import React from "react";
import classNames from "clsx";
import { Link } from "gatsby";
// MUI
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import statistics_analysis from "../../../data/StatisticsAnalysis";

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
    const selection = statistics_analysis[`${responseData}-${explanatoryData}`];
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
        <div className={classNames("o-fr-jc", "u-m-m")}>
            <table className={classNames("c-table-info", "c-small-table", "u-m-s")}>
                <tr className={"c-table-head"}>
                    <th>Analysis method</th>
                    <th>Visualisation</th>
                    <th>Hypothesis testing</th>
                    <th>Example of modelisation</th>
                </tr>
                <tr>
                    <td>
                        {Object.keys(selection.descriptive.method).map(key => (
                            <p>
                                <h4 className={"t-text-capitalize"}>{`${key}:`}</h4>
                                <span>
                                    {selection.descriptive.method[key].map(item => (
                                        item
                                    ))}
                                </span>
                            </p>
                        ))}
                    </td>
                    <td className={"c-table-border-right"}>
                        {selection.descriptive.visualisation.content.map(content => content).toString().replace(",", ", ")}
                    </td>
                    <td>
                        {selection.inferential.hypothesis.content.map(content => content).toString().replace(",", ", ")}
                    </td>
                    <td>
                        {selection.inferential.modelisation.content.map(content => content).toString().replace(",", ", ")}
                    </td>
                </tr>
            </table>
        </div>
    </div>
};

export default StatsAnalysis;