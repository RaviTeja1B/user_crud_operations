import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import {  FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import { useUserContext } from '../context/UserContext';

const UserList = () => {
  const { users, deleteUser } = useUserContext();

  return (
    <div>
      <h1>User List</h1>
      <Link to="/create-user">
        <Button color="primary" className="mb-3">
          <FaPlus className="mr-2" /> Create User
        </Button>
      </Link>

      {users.map((user) => (
        <Card key={user.id} className="mb-3">
          <CardBody>
            <CardTitle tag="h5">{user.name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Email: {user.email}
            </CardSubtitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Skills: {user.skills.join(', ')} {/* Display skills as a comma-separated list */}
            </CardSubtitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Education: {user.education}
            </CardSubtitle>
            <Button color="info" className="mr-2">
              <Link to={`/edit-user/${user.id}`}>
                <FaEdit className="text-light" /> Edit
              </Link>
            </Button>
            <Button color="danger">
              <span
                onClick={() => {
                  if (window.confirm('Are you sure you want to delete this user?')) {
                    deleteUser(user.id);
                  }
                }}
              >
                <FaTrash className="text-light" /> Delete
              </span>
            </Button>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default UserList;
