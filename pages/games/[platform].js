import { useRouter } from "next/router";
import BasicLayout from "../../layouts/BasicLayout/BasicLayout";

export default function Platform() {
  const { query } = useRouter();

  return (
    <BasicLayout className="platform">
      <h1>Plataformas: {query.platform}</h1>
    </BasicLayout>
  );
}
