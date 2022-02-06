import { PostInterface } from '#types/index';
import { isFormValid, modelForm } from '#utils/forms';
import useQuery from '#utils/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Form from './Form';

const EditPost = () => {
  const [isLoading, setLoading] = useState(false);
  const [post, setPost] = useState<PostInterface>(
    [] as unknown as PostInterface
  );
  const query = useQuery();

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    fetch(`/api/posts?id=${query.id}`)
      .then((res) => res.json())
      .then((data) => {
        const post = { ...data, tags: data.tags.join(', ') };
        setPost(post);
        setLoading(false);
      });
  }, [query]);
  const onSubmitHandler = async (data: any) => {
    const isValid = isFormValid(data);
    if (isValid) {
      const form = modelForm(data);
      const response = await fetch('/api/posts', {
        method: 'PUT',
        body: form,
      });
      console.log(response);
    } else {
      console.log('invalid');
    }
  };

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <>
      <button>
        <Link href={`/api/raw?id=posts/${post.id as string}.mdx`} passHref>
          View RAW
        </Link>
      </button>
      <Form onSubmit={onSubmitHandler} defaultValues={post} />
    </>
  );
};

export default EditPost;
