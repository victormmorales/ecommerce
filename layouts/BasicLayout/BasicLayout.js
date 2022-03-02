import { Container } from "semantic-ui-react";
import classNames from "classnames";
import Header from "../../components/Header/Header";

export default function BasicLayout({ children, className }) {
  return (
    <Container
      fluid
      className={classNames("basic-layout", { [className]: className })}
    >
      <Header />
      <Container className="content">{children}</Container>
    </Container>
  );
}
