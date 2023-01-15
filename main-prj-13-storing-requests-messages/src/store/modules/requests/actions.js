export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message
    };
    const response = await fetch(`https://vue-http-demo-70b01-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${payload.coachId}.json`,{
      method: 'POST',
      body: JSON.stringify(newRequest)
    });
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to Fetch');
      throw error;
    }
    newRequest.id = responseData.name; //name contain id in firebase
    newRequest.coachId = payload.coachId, // so it wont be sent with inital request to firebase
    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const response = await fetch(`https://vue-http-demo-70b01-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${coachId}.json`);
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to Fetch');
      throw error;
    }
    const requests = [];
    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        message: responseData[key].message,
        userEmail: responseData[key].userEmail,
      };
      requests.push(request);
    }
    context.commit('setRequests', requests);
  }
};