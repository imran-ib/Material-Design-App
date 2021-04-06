import Header from '../Header/Header';
import Meta from '../Meta';

interface Props {
  children: React.ReactNode;
  pageTitle?: string;
}

const Layout: React.FC<Props> = (props) => {
  const { children, pageTitle } = props;
  return (
    <>
      <Meta pageTitle={pageTitle} />
      <Header props={props} />
      {children}
    </>
  );
};

export default Layout;
