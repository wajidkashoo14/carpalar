import axiosInstance from "../axios";

export async function sendEmail(body) {
	console.log("in email serive");
	try {
		const resp = await axiosInstance.post("/api/contact/email", body);
		console.log("create", resp);
		return resp;
	} catch (e) {
		console.log("mail catch", e.response.data);
		throw new Error(e.response.data);
	}
}
