import { Typography } from 'antd';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import styled from 'styled-components';
import { colors } from '../shared/SharedUtils';
import Taskboard from '../taskboard/Taskboard';

const StyledLayout = styled(Layout)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0; 
  right: 0;
`;

const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  background-color: #fff;
`;

const StyledContent = styled(Content)`
  background-color: ${colors.primary[3]};
`;

function App() {
  return (
    <StyledLayout>
      <StyledHeader>
        <Typography.Title level={3} type="secondary">
        Management board
        </Typography.Title>
      </StyledHeader>
      <StyledContent>
        <Taskboard />
      </StyledContent>
    </StyledLayout>
  );
}

export default App;
