import Meta from '../Meta';

interface Props {
  children: React.ReactNode;
  pageTitle?: string;
}

const Layout: React.FC<Props> = ({ children, pageTitle }) => (
  <>
    <Meta pageTitle={pageTitle} />
    {children}
  </>
);

export default Layout;
