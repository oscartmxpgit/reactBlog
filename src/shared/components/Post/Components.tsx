import { createIdFromText } from '#utils/texts';
// import remarkPrism from 'remark-prism';

export const LangAlias: any = {
  js: 'javascript',
  ts: 'typescript',
  tsx: 'tsx',
  jsx: 'jsx',
  py: 'python',
};

export const prismPlugins = {
  plugins: [
    'line-numbers',
    'autolinker',
    'command-line',
    'data-uri-highlight',
    'diff-highlight',
    'inline-color',
    'keep-markup',
    'show-invisibles',
    'treeview',
  ],
};

const heading = ($props: any, tag: string) => {
  const props = $props.children.props;
  const isCode: boolean = props && props.originalType === 'inlineCode';
  const id = props
    ? `#${createIdFromText(props.children)}`
    : `#${createIdFromText($props.children)}`;
  const child = isCode ? <code>{props.children}</code> : $props.children;
  const htmlTag = <a href={id}>{child}</a>;
  return tag === 'h1' ? (
    <h1>{htmlTag}</h1>
  ) : tag === 'h2' ? (
    <h2>{htmlTag}</h2>
  ) : (
    <h3>{htmlTag}</h3>
  );
};
export const h1 = ($props: any) => {
  return <>{heading($props, 'h1')}</>;
};
export const h2 = ($props: any) => {
  return <>{heading($props, 'h2')}</>;
};
export const h3 = ($props: any) => {
  return <>{heading($props, 'h3')}</>;
};

export const Button = ($props: any) => {
  return <button>Button</button>;
};
export const a = ($props: any) => {
  const { href, children, title } = $props;
  const attrs = {
    href,
    title: title == 'btn' ? children : !title ? 'Ir al sitio' : title,
    className: title == 'btn' ? 'btn' : '',
    rel: 'noopener noreferrer',
    target: '_blank',
  };
  return <a {...attrs}>{children}</a>;
};
export const components = {
  h1,
  h2,
  h3,
  a,
  Button,
};
