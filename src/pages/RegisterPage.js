import { useSelector } from "react-redux";
import { isLoading } from "../redux/user/userSelector";
import RegisterForm from "../Components/RegisterForm";
import Loading from "../Components/Loader";

export const RegisterPage = () => {
  const loading = useSelector((state) => isLoading(state));
  return <> {loading ? <Loading /> : <RegisterForm />}</>;
};
