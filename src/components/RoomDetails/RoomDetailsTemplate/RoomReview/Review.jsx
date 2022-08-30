import React from 'react';

const Review = () => {
    return (
        <div id="Tab5" className="tabcontent">
            <div className="room-detaits-main">
                <div className="ex-customar">
                    <form>
                        <div className="custom-input-resort">
                            <label htmlFor="ename">Your Review </label>
                            <input type="text" name="" id="ename" placeholder="Write Review...." />
                        </div>
                        <div className="book_table_item dtl-btn">
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;