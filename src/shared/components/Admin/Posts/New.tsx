import { isFormValid, modelForm } from '#utils/forms';
import Form from './Form';
import { useState } from 'react';
import Toast from '#components/Toast';

const AdminPostNew = () => {
  const [showToast, setShowToast] = useState(false);
  const onSubmitHandler = async (data: any) => {
    if (isFormValid(data)) {
      const formData: FormData = modelForm(data);
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: formData,
      });
      const { status, statusText } = response;
      if (status === 200) {
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 2000);
      } else {
        alert(`Internal server error: ${statusText}`);
      }
    }
  };

  return (
    <div className="newPost">
      {showToast && <Toast message="Post Created" color="success" />}
      <Form onSubmit={onSubmitHandler} />
    </div>
  );
};

export default AdminPostNew;
