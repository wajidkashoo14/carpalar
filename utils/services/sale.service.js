import axiosInstance from "../axios";

export async function getAllSales(token, query) {
	try {
		let url = `/api/sales`;
		if (query && query.trim()) {
			url = url + `?type=${query}`;
		}
		const { data } = await axiosInstance.get(url, {
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
export async function getSingleSale(id) {
	try {
		const { data } = await axiosInstance.get("/api/sales/" + id);
		return data;
	} catch (e) {
		throw new Error(e.message);
	}
}
export async function updateSale(id, payload) {
	try {
		const { data } = await axiosInstance.patch("/api/sales/" + id, payload);
		return data;
	} catch (e) {
		throw new Error(e.message);
	}
}
