export const useGetUserInfo =()=>{
    const storedData = JSON.parse(localStorage.getItem("auth")) || {};
console.log("Stored Data:", storedData);
const { name, profilePhoto, userId, isAuth } = storedData
return storedData
}