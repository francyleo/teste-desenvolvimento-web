import styled from 'styled-components';

type StatusProps = 'atk' | 'def' | 'sta' | 'total' | 'default';

const statusColors: Record<StatusProps, string> = {
  atk: '#00adff',
  def: '#05ab21',
  sta: '#d20000',
  total: '#FFE62D',
  default: '#ccc',
};

export const Container = styled.section`
  img {
    max-width: 250px;
    max-height: 250px;
    position: absolute;
    z-index: 2;
  }
`;

export const About = styled.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  margin-top: 200px;
  font-size: 2rem;
`;

export const Status = styled.div<{ type?: StatusProps }>`
  display: flex;
  justify-content: space-between;
  strong {
    text-transform: uppercase;
    color: ${props => statusColors[props.type || 'default']};
  }
`;
