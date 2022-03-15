import Link from "next/link";
import { Container } from "semantic-ui-react";
import Seo from "../components/Seo";
import BasicLayout from "../layouts/BasicLayout/BasicLayout";

export default function NotFound() {
  return (
    <BasicLayout>
      <Seo title="Pareces un poco perdido 🙄" />
      <section className="page_404">
        <Container>
          <div className="four_zero_four_bg">
            {/* <h1 className="text-center ">Error 404</h1> */}
          </div>

          <div className="contant_box_404">
            <h3 className="h2">Pareces un poco perdido 🙄</h3>

            <h4>¡La página que buscas no está disponible!</h4>

            <Link href="/" className="link_404">
              <a>Home</a>
            </Link>
          </div>
        </Container>
      </section>
    </BasicLayout>
  );
}
