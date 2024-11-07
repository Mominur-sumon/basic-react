import PropTypes from "prop-types";


const SideBar = ({ recipieQueue }) => {
    return (
        <div className="md:w-1/3 border-2 rounded-2xl text-gray-600 p-2 bg-base-100">
            {/* Want to cook Table */}
            <h2 className="border-b-2 py-2 mx-auto font-semibold text-2xl text-gray-800 text-center">Want To Cook : {recipieQueue.length} </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            recipieQueue.map((recipie,index) =>{
                                return (
                                    <tr className="hover" key={recipie.recipe_id}>
                                        <th>{index + 1}</th>
                                        <td>{recipie.recipe_name}</td>
                                        <td>{recipie.preparing_time}</td>
                                        <td>{recipie.calories}</td>
                                        <td>
                                            <button className="btn bg-green-400 text-gray-800 rounded-full px-4 font-medium">Preparing</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                      
                    </tbody>
                </table>
            </div>

            {/* Cuurently cooking table */}
        </div>
    );
};
SideBar.PropTypes = {
    recipieQueue: PropTypes.array.isRequired
}
export default SideBar;