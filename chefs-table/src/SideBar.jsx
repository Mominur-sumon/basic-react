import PropTypes from "prop-types";


const SideBar = ({recipieQueue}) => {
    return (
        <div className="md:w-1/3">
          Want to Cook : {recipieQueue.length}
        </div>
    );
};
SideBar.PropTypes = {
    recipieQueue: PropTypes.array.isRequired
}
export default SideBar;