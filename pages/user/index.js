import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
const User = () => {
  const [user, setUser] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (user) router.push("/user/dashboard");
    router.push("/signin");
  }, []);
  return <div>loading..</div>;
};

export default User;
