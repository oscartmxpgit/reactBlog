import { format } from 'date-fns';
import { createIdFromText } from './texts';

export const isFormValid = (form: any) => {
  let isValid = true;
  Object.keys(form).forEach((key) => {
    if (form[key] === '') {
      isValid = false;
    }
  });
  if (form.image.length === 0) {
    isValid = false;
  }
  return isValid;
};

export const modelForm = (form: any) => {
  const id = createIdFromText(form.id);
  const image = typeof form.image === 'string' ? form.image : form.image[0];
  const date = format(new Date(), 'yyyy-MM-dd');
  const tags = JSON.stringify(
    form.tags.split(',').map((tag: string) => tag.trim())
  );
  const newForm = {
    ...form,
    date,
    id,
    image,
    tags,
  };
  const formData = new FormData();
  Object.keys(newForm).forEach((key) => {
    formData.append(key, newForm[key]);
  });
  return formData;
};
