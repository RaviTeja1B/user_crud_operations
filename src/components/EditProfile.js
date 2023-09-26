import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'; // Import Reactstrap components

const UserProfile = () => {
  const { id } = useParams();
  const { users } = useUserContext();

  const [user, setUser] = useState({
    name: '',
    email: '',
    phoneNumber: '', // Add phone number field
    age: '', // Add age field
    education: '', // Add education field
    skills: '', // Add skills field
  });

  useEffect(() => {
    const currentUser = users.find((u) => u.id === parseInt(id, 10));
    if (currentUser) {
      setUser(currentUser);
    }
  }, [id, users]);

  return (
    <div>
      <h1>User Profile</h1>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{user.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Email: {user.email}
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Phone Number: {user.phoneNumber} {/* Display phone number */}
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Age: {user.age} {/* Display age */}
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Education: {user.education} {/* Display education */}
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Skills: {user.skills} {/* Display skills */}
          </CardSubtitle>
          <Link to={`/edit-profile/${id}`}>Edit Profile</Link>
        </CardBody>
      </Card>
      <Link to={`/users`}>Back to User List</Link>
    </div>
  );
};

export default UserProfile;
