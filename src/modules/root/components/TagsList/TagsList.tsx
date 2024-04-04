import { useSelector } from "react-redux";
import { RootStateProps } from "../../../../shared/types";
import TagListItem from "../TagListItem";
import { Wrapper } from "./TagsList.styles";

const TagsList = () => {
  const tags = useSelector((state: RootStateProps) => state.root.tags);
  return (
    <Wrapper>
      {tags.map((tag, idx) => (
        <TagListItem key={idx} name={tag.name} count={tag.count} />
      ))}
    </Wrapper>
  );
};

export default TagsList;
