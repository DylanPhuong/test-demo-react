import ModalCreateUser from "./ModalCreateUser";


const ManageUser = () => {
    return (
        <div className="manage -users-container">
            <div className="title">
                Manage Users
            </div>
            <div className="users-content">
                <div>
                    <button>Admin new users</button>
                </div>
                <div>
                    table users
                    <ModalCreateUser />
                </div>
            </div>
        </div>
    );
}

export default ManageUser;
