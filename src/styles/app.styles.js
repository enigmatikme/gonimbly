import styled from 'styled-components/macro'

const AppContainer = styled.div`
  height: 100%;
  display: flex; 
  align-items: center;
  background: #a37b8d; /* Old browsers */
  background: -moz-linear-gradient(-45deg,  #a37b8d 0%, #57435b 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(-45deg,  #a37b8d 0%,#57435b 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(135deg,  #a37b8d 0%,#57435b 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a37b8d', endColorstr='#57435b',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 800px;
  height: 667px;
  margin: 0 auto;
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 100%;
  padding-right: 20px;
  position: relative;
`;

export { AppContainer, SideBar, ContentWrapper };