import React from "react";
import { ReactDOM } from "react-dom/client";

export default class Form extends React.Component {
    state = {
        name: '',
        age: '',
        skill: '',
        married: '',
        message: '',
    }

    handleChange = (e) => {

        if (e.target.name == 'married') {
            this.setState({
                married: e.target.checked,
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value,
            })
        }
    }

    sampleForm = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        const { name, age, skill, married, message } = this.state;
        return (
            <>
                <form onSubmit={this.sampleForm}>
                    <div className="form-group">
                        <input type="text" name="name" value={name} placeholder="Name" onChange={this.handleChange} />
                        <p>{name}</p>
                    </div>
                    <div className="form-group">
                        <input type="text" name="age" value={age} placeholder="Age" onChange={this.handleChange} />
                        <p>{age}</p>
                    </div>
                    <div className="form-group">
                        <select name="skill" value={skill} onChange={this.handleChange}>
                            <option value="">Select Skill</option>
                            <option value="PHP">PHP</option>
                            <option value="Java">Java</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="Python">Python</option>
                        </select>
                        <p>{skill}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Are you maried?</label>
                        <input type="checkbox" name="married" checked={married} onChange={this.handleChange} />
                        <p>{married}</p>
                    </div>
                    <div className="form-group">
                        <textarea name="message" value={message} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </>
        );
    }
}