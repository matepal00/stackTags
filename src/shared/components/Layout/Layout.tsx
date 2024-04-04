import { LayoutContainer, StyledDiv } from "./Layout.styles";

export interface LayoutProps {
  Header: JSX.Element;
  children: React.ReactNode;
}
const Layout = ({ Header, children }: LayoutProps) => {
  return (
    <LayoutContainer>
      {Header}
      <StyledDiv>{children}</StyledDiv>
    </LayoutContainer>
  );
};

export default Layout;
