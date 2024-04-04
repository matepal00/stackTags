import { useModuleTranslation } from "../utils";
import { Title, Wrapper } from "./Header.styles";

const Header = () => {
  const { t } = useModuleTranslation({});
  return (
    <Wrapper>
      <Title>{t("header.title")}</Title>
    </Wrapper>
  );
};

export default Header;
