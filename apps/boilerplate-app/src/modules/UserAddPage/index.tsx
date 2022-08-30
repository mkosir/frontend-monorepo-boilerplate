// import { useState } from 'react';

// import { Input, Select } from "common/components";

// import { AddUserFormEvent, handleUserCreate } from './handleUserCreate';

export const UserAddPage = () => {
  // const [error, setError] = useState<string | null>(null);

  return (
    <div>
      <h3>➕ Add User</h3>
      {/* <form
        onSubmit={(event) => void handleUserCreate(event as AddUserFormEvent, setError)}
        style={{ maxWidth: '200px' }}
      >
        <Input id="email" label="*Email:" />
        <Input id="name" label="*Name:" />
        <Input id="username" label="*Username:" />
        <Input id="imageUrl" label="Image URL:" />
        <Select id="role" label="Role:" options={Object.values(Role)} />
        <button
          style={{
            fontSize: '14px',
            backgroundColor: '#3d9cc23b',
            padding: '5px 14px',
            borderRadius: '5px',
            marginTop: '7px',
          }}
          type="submit"
        >
          Add
        </button>
      </form>
      {error && <div style={{ fontSize: '12px', fontStyle: 'italic', color: 'red', marginTop: '3px' }}>{error}</div>} */}
    </div>
  );
};
