import axiosInstance from "../axios";

export async function signinCustomer(body) {
	try {
		const resp = await axiosInstance.post("/api/customers/signin", body);
		console.log("crete", resp);
		return resp;
	} catch (e) {
		console.log("first", e.response.data);
		throw new Error(e.response.data);
	}
}
export async function createCustomer(body) {
	try {
		const resp = await axiosInstance.post("/api/customers", body);
		console.log("crete", resp);
		return resp;
	} catch (e) {
		console.log("first", e.response.data);
		throw new Error(e.response.data);
	}
}
export async function getCustomers() {
	try {
		const {
			data: { customers },
		} = await axiosInstance.get("/api/customers");
		return customers;
	} catch (e) {
		throw new Error(e.message);
	}
}
export async function getSingleCustomer(id) {
	try {
		const {
			data: { customer },
		} = await axiosInstance.get("/api/customers/" + id);
		return customer;
	} catch (e) {
		throw new Error(e.message);
	}
}
// export async function updateUser(id, payload) {
//   try {
//     const { data } = await axiosInstance.patch('/api/customers/' + id, payload);
//     return data;
//   } catch (e) {
//     throw new Error(e.message);
//   }
// }
