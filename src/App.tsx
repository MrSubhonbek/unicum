import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { AppRoutes } from "./AppRoutes";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div>
      <Layout>
        <Header />
        <Layout>
          <Content>
            <AppRoutes />
          </Content>
          <Sider theme="light" hidden>
            Sider
          </Sider>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
