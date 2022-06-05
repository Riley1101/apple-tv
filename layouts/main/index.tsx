// tsx component for layout header and footer
import Header from "@/components/header";
import { Provider } from "react-redux";
import { store } from "@/state/store";
interface Props {
  children: React.ReactNode;
}
const Container = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <div style={{ position: "relative" }}>
        <Header />
        {children}
      </div>
    </Provider>
  );
};

export default Container;
