import LoginForm from "../Components/LoginForm";
import { useSelector } from "react-redux";
import { isLoading } from "../redux/user/userSelector";
import Loading from "../Components/Loader";

export const LoginPage = () => {
  const loading = useSelector((state) => isLoading(state));
  return <> {loading ? <Loading /> : <LoginForm />}</>;
};
