import React, { Component } from 'react';
import './Tips.css';

class Tips extends Component{
    render() {
        return (
            <div className="Tips">
                <h2>The Ultimate Guide</h2>
                <h4><strong>" Time is non-refundable, use it with intention."</strong></h4>
                    <p>1. Timing is everything if you are 
                        really serious about getting more done</p>
                    <p>2. Start your day with a full tank</p>
                    <p>3. Separate your “today” list from your “master” list</p>
                    <p>4. Manage your energy, not your time</p>
                    <p>5. Build a “getting ready to work” routine</p>
                    <p>6. Break up your work hours and take breaks</p>
                    <p>7. Create a forced deadline</p>
                    <p>8. Key takeaway</p>
            </div>
        );
    }
}
export default Tips;