import ReviewForm from "./reviewform"
import ReviewItem from "./reviewitem"
import Proptypes from "prop-types"
import "./Reviews.css"
const Reviews = ({active}) => {
    return (
        <div className={`tab-panel-reviews ${active}`}>
            <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
            <div className="comments">
                <ol className="comment-list">
                    <ReviewItem></ReviewItem>
                    <ReviewItem></ReviewItem>
                </ol>
            </div>
            <div className="review-form-wrapper">
                <h2>Add a review</h2>
                <ReviewForm></ReviewForm>
            </div>
        </div>
    )
}

export default Reviews

Reviews.propTypes = {
    active: Proptypes.string
};