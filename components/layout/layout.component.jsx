import Navigation from "./navigation/navigation.component";
import Footer from "./footer/footer.component";

import { PageContainer, PageContent } from "./layout.component.styles";

const DefaultLayout = ({ children }) => {
  return (<PageContainer>
    <Navigation />
    <PageContent>{children}</PageContent>
    <Footer />
  </PageContainer>)
}
const Layout = ({ children }) => {
  return <DefaultLayout>{children}</DefaultLayout>
};

export default Layout;
