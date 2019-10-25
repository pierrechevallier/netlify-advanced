import React from "react";
import classNames from "clsx";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

/**
 * A contact form
 */

const Form = () => {
    const [values, setValues] = React.useState({
        name: '',
        email: '',
    });
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return <form name="contact" id="contact-form" className={classNames("o-fc-aic", "u-p-l", "c-contact-form_width")} data-netlify="true" method="POST">
        <div className={classNames("o-fc-js", "u-width-hundred")}>
            <TextField
                id="outlined-name"
                label="Name"
                value={values.name}
                onChange={handleChange('name')}
                margin="normal"
                variant="outlined"
            />
        </div>
        <div className={classNames("o-fc-js", "u-width-hundred")}>
            <TextField
                id="outlined-email-input"
                label="Email"
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
            />
        </div>
        <div className={classNames("o-fc-js", "u-m-b-m", "u-width-hundred")}>
            <TextField
                id="outlined-dense-multiline"
                label="Message"
                margin="normal"
                variant="outlined"
                multiline
                rows="5"
            />
        </div>
        <Button variant="contained" color="primary">Submit</Button>
    </form>
};

export default Form;
