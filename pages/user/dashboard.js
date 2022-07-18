import { Container } from "@chakra-ui/react";
import Info from "../../components/UserDashBoard/Info";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import Profile from "../../components/UserDashBoard/Profile";
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
