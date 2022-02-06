import { components } from './Components';

const Content = ({ Render, data }: Props) => {
  return <Render {...data} components={components} />;
};
interface Props {
  Render: any;
  data: any;
}

export default Content;
