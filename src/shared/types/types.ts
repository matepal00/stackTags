import { DataSteps, Order, Sort } from ".";

export interface TagProps {
  collectives?: [];
  count: number;
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  name: string;
}
export interface TagsStateProps {
  tags: TagProps[];
  status: DataSteps;
  error: string;
  order: Order;
  sort: Sort;
  tagsPerPage: number;
  currentPage: number;
}

export interface RootStateProps {
  root: TagsStateProps;
}

export interface FetchTagsProps {
  order: string;
  sort: string;
  tagsPerPage: number;
  currentPage: number;
}
export interface TagListItemProps {
  name: string;
  count: number;
}
