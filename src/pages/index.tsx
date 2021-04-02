import Button from '@material-ui/core/Button';
import Layout from '@/components/Layout';
import styled from 'styled-components';

const MyButton = styled(Button)`
  color: red;
`;

export default function Home() {
  return (
    <Layout>
      <MyButton variant="contained" color="primary">
        Hello World
      </MyButton>
    </Layout>
  );
}
