import { useSelector } from "react-redux";
import { RootStateProps } from "../../../../shared/types";
import { useModuleTranslation } from "../../utils";
import { ErrorContainer, ErrorText } from "./FailedDownload.styles";

const FailedDownload = () => {
  const error = useSelector((state: RootStateProps) => state.root.error);
  const { t } = useModuleTranslation({});
  return (
    <ErrorContainer>
      <ErrorText>{t("failedDownload.errorMessage")}</ErrorText>
      <ErrorText>{t("failedDownload.error", { error })}</ErrorText>
    </ErrorContainer>
  );
};

export default FailedDownload;
