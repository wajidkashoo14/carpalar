import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
const User = () => {
	const [user, setUser] = useState(true);
	const router = useRouter();
	useEffect(() => {
		if (user) router.push("/user/dashboard");
		router.push("/signin");
	}, [user, router]);
	return <div>loading..</div>;
};

export default User;
