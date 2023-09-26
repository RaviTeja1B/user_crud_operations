import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { useUserContext } from '../context/UserContext';

const UserProfile = () => {
  const { id } = useParams();
  const { users } = useUserContext();

  const user = users.find((u) => u.id === parseInt(id));

  useEffect(() => {
    document.title = user ? `${user.name}'s Profile` : 'User Profile';
  }, [user]);

  return (
    <div>
      {user ? (
        <Card className="mb-3">
          <CardBody>
            <CardTitle tag="h5">{user.name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Email: {user.email}
            </CardSubtitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Address: {user.address}
            </CardSubtitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Phone Number: {user.phoneNumber}
            </CardSubtitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Project Work: {user.projectWork}
            </CardSubtitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Hobbies: {user.hobbies}
            </CardSubtitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Work Experience: {user.workExperience}
            </CardSubtitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Career Objective: {user.careerObjective}
            </CardSubtitle>
          </CardBody>
        </Card>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default UserProfile;
