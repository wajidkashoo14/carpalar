import { Container } from "@chakra-ui/react";
import NavigationItems from "../../components/UserDashBoard/NavigationItems";
import Info from "../../components/UserDashBoard/Info";
import Profile from "../../components/UserDashBoard/Profile";
function dashboard() {
  return (
    <Container display="flex" maxW="100%" height="100vh" marginBottom="20rem">
      <NavigationItems />
      <Info />
      <Profile />
    </Container>
  );
}

export default dashboard;
