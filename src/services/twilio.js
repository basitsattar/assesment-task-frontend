const BASE_URL = 'https://twilio-task-backend.herokuapp.com/api/v1'
export const getAvailablePhoneNumbers = async (countryCode) => {
    const opt = {
        method: "GET",
        headers: {
            // "Content-Type": "application/json",
            // 'Accept': 'application/json'
        },
    };
    const res = await fetch(`${BASE_URL}/twilio/phoneNumbers/${countryCode}`, opt);
    const response = await res.json();
    return response.response;
}
