import React from 'react'

type Props = {}

const Application = (props: Props) => {
    return (
        <>
            <h1>Job Application Form</h1>
            <h2>Section 1</h2>
            <p>All fields are mandatory</p>
            <span title='close'>X</span>
            <img src="https://via.placeholder.com/150" alt="a person with a laptop" />
            <div data-testid="custom-element">
                custom HTML element
            </div>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Fullname" value={"Faris"} onChange={() => { }} />
                </div>
                <div>
                    <label htmlFor='bio'>Bio</label>
                    <textarea id='bio' name='bio' />
                </div>
                <div>
                    <label htmlFor="job-location">Job Location</label>
                    <select id='job-location'>
                        <option value="">Select a country</option>
                        <option value="AU">Australia</option>
                        <option value="CA">Canada</option>
                        <option value="US">United States</option>
                        <option value="GB">United Kingdom</option>
                        <option value="IN">India</option>
                        <option value="PS">Palestine</option>
                    </select>
                </div>
                <div>
                    <label>
                        <input type="checkbox" id="terms" /> I agree to the terms and conditions
                    </label>
                </div>
                <button>Submit</button>
            </form>
        </>
    )
}

export default Application