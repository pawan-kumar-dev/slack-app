export const initialState = {
  user: {
    kind: "identitytoolkit#GetAccountInfoResponse",
    users: [
      {
        localId: "9zuWU3vRGJXxxFUvBSibti7393O2",
        email: "pawan.kv612@gmail.com",
        displayName: "Pawankumar Vishwakarma",
        photoUrl:
          "https://lh3.googleusercontent.com/-hml86-KZnhQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucm5vFbxH-CM5L91lJfY9cwNTe-Tsw/s96-c/photo.jpg",
        emailVerified: true,
        providerUserInfo: [
          {
            providerId: "google.com",
            displayName: "Pawankumar Vishwakarma",
            photoUrl:
              "https://lh3.googleusercontent.com/-hml86-KZnhQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucm5vFbxH-CM5L91lJfY9cwNTe-Tsw/s96-c/photo.jpg",
            federatedId: "112709639969398515169",
            email: "pawan.kv612@gmail.com",
            rawId: "112709639969398515169"
          }
        ],
        validSince: "1602403097",
        lastLoginAt: "1602683712948",
        createdAt: "1602403097004",
        lastRefreshAt: "2020-10-14T13:55:12.948Z"
      }
    ]
  }
};

export const actionTypes = {
  SET_USER: "SET_USER"
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};
export default reducer;
