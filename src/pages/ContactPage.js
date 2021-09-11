import { useSelector } from "react-redux";
import { isLoading } from "../redux/user/userSelector";
import Form from "../Components/Form";
import Filter from "../Components/Filter";
import ContactsList from "../Components/ContactsList";
import Loading from "../Components/Loader";
export const ContactPage = () => {
  const loading = useSelector((state) => isLoading(state));
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Form />
          <h2>Contacts</h2>
          <Filter />
          <ContactsList />{" "}
        </>
      )}
    </>
  );
};
