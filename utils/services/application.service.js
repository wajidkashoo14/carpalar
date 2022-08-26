import axiosInstance from "../axios";

export async function getAllApplications(token) {
	try {
		const { data } = await axiosInstance.get(
			"/api/applications",

			{
				headers: {
					"Content-Type": "application/json",
					accept: "application/json",
					"Access-Control-Allow-Origin": "*",
					Authorization: token,
				},
			}
		);
		return data;
	} catch (e) {
		throw new Error(e.message);
	}
}
export async function getSingleApplication(token, id) {
	try {
		const { data } = await axiosInstance.get("/api/applications/" + id, {
			headers: {
				"Content-Type": "application/json",
				accept: "application/json",
				"Access-Control-Allow-Origin": "*",
				Authorization: token,
			},
		});
		return data;
	} catch (e) {
		throw new Error(e.message);
	}
}
export async function updateApplication(token, id, payload) {
	try {
		const { data } = await axiosInstance.patch(
			"/api/applications/" + id,
			payload,
			{
				headers: {
					"Content-Type": "application/json",
					accept: "application/json",
					"Access-Control-Allow-Origin": "*",
					Authorization: token,
				},
			}
		);
		return data;
	} catch (e) {
		throw new Error(e.message);
	}
}
