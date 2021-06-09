import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllGitUsers, fetchGitUsers } from "../store/gitUsersSlice";

const GitUsersList = () => {
  const gitUsers = useSelector(selectAllGitUsers);
  const dispatch = useDispatch();
  const gitUsersStatus = useSelector((state) => state.gitUsers.status);

  useEffect(() => {
    if (gitUsersStatus === "idle") {
      dispatch(fetchGitUsers());
    }
  }, [gitUsersStatus, dispatch]);

  const renderedGitUsers = gitUsers.map((gitUser) => {
    return <li key={gitUser.id}>{gitUser.login}</li>;
  });

  return <ul>{renderedGitUsers}</ul>;
};
export default GitUsersList;
