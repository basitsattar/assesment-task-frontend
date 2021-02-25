const BASE_URL = 'http://localhost:3002'
export const getAvailablePhoneNumbers = async (countryCode) => {
    console.log("countryCode", countryCode)
    const opt = {
        method: "Get",
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
        },
    };
    const res = await fetch(`${BASE_URL}/phoneNumbers/${countryCode}`, opt);
    const response = await res.json();
    return response.response;
}
