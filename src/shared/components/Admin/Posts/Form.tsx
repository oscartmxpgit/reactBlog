import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../scss/modules/Form.module.scss';

const Form = ({ onSubmit, defaultValues }: Props) => {
  if (defaultValues) {
    const tags = defaultValues?.tags;
    defaultValues.tags = tags;
  }
  const [imageUrl, setCreateObjectURL] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors: e },
  } = useForm({
    defaultValues,
  });
  const onChangeImageHandler = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setCreateObjectURL(URL.createObjectURL(i) as any);
    }
  };
  const onSubmitHandler = (event: any) => {
    onSubmit(event);
  };
  return (
    <form className={styles.form}>
      <div className={styles.head}>
        <h1>Create new post</h1>
        <button type="submit" onClick={handleSubmit(onSubmitHandler)}>
          💾 Save post
        </button>
      </div>
      <div className={styles.formBox}>
        <div className={styles.data}>
          <div className="formGroup">
            <div className="preview">
              <Image
                src={imageUrl || defaultValues?.image || '/images/bg.webp'}
                layout="responsive"
                height={200}
                width={300}
                objectFit="cover"
                priority={true}
                loading="eager"
                className={styles.image}
              />
            </div>
            <div className="formControlFile">
              <input
                {...register('image')}
                type="file"
                onChange={onChangeImageHandler}
              />
            </div>
          </div>
          <div className="formGroup">
            <label htmlFor="title">Title</label>
            <input
              {...register('title', { required: true })}
              autoComplete="off"
              type="text"
              name="title"
              id="title"
              spellCheck={true}
            />
            {e.title && <span className="e">Title is required </span>}
          </div>
          <div className="formGroup">
            <label htmlFor="id">Post ID</label>
            <input
              {...register('id', { required: true })}
              autoComplete="off"
              type="text"
              name="id"
              id="id"
            />
            {e.id && <span className="e">Post ID is required </span>}
          </div>
          <div className="formGroup">
            <label htmlFor="tags">Tags</label>
            <input
              {...register('tags', { required: true })}
              autoComplete="off"
              type="text"
              name="tags"
              id="tags"
            />
            {e.tags && <span className="e">Tags is required </span>}
            <div className="tagsPreview"></div>
          </div>
          <div className="formGroup">
            <label htmlFor="desc">Description</label>
            <textarea
              {...register('desc', { required: true })}
              cols={4}
              rows={5}
              spellCheck={true}
            ></textarea>
            {e.desc && <span className="e">Description is required </span>}
          </div>
        </div>

        <div className={`formGroup ${styles.contentBox}`}>
          <label htmlFor="content">Content</label>
          <textarea
            {...register('content')}
            autoFocus={true}
            className={styles.content}
            spellCheck={true}
          ></textarea>
          {e.content && <span className="e">Content is required </span>}
        </div>
      </div>
    </form>
  );
};

interface Props {
  onSubmit: (event: any) => void;
  defaultValues?: any;
}

export default Form;
