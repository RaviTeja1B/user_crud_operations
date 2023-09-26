import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FaSave } from 'react-icons/fa';

const CreateUser = () => {
  const navigate = useNavigate();
  const { addUser } = useUserContext();

  const [user, setUser] = useState({
    id: Date.now(),
    name: '',
    email: '',
    skills: [], // Add skills as an array
    education: '', // Add education as a string
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(user);
    navigate('/users');
  };

  return (
    <div>
      <h1>Create User</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={user.name}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={user.email}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="skills">Skills (comma-separated)</Label>
          <Input
            type="text"
            name="skills"
            id="skills"
            placeholder="Skills"
            value={user.skills.join(', ')}
            onChange={(e) => setUser({ ...user, skills: e.target.value.split(', ') })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="education">Education</Label>
          <Input
            type="text"
            name="education"
            id="education"
            placeholder="Education"
            value={user.education}
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button type="submit" color="success">
          <FaSave className="mr-2" /> Save
        </Button>
      </Form>
      <Link to="/users">Back to User List</Link>
    </div>
  );
};

export default CreateUser;
