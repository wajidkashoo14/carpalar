import { Container } from "@chakra-ui/react";
import NavigationItems from "../../components/UserDashBoard/NavigationItems";
import Info from "../../components/UserDashBoard/Info";
import Profile from "../../components/UserDashBoard/Profile";
import DashboardLayout from "../../components/Layout/DashboardLayout";
function dashboard() {
  return (
    <Container display="flex" maxW="100%" height="100vh" marginBottom="20rem">
      <DashboardLayout>
        <Info />
        <Profile />
      </DashboardLayout>
    </Container>
  );
}

export default dashboard;
