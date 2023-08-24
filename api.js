// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore/lite";

// const firebaseConfig = {
//     apiKey: "AIzaSyDxQt15qYGB-VTR3X33OZlk4dr6O7_PofA",
//     authDomain: "vanlife-459c8.firebaseapp.com",
//     projectId: "vanlife-459c8",
//     storageBucket: "vanlife-459c8.appspot.com",
//     messagingSenderId: "195297423177",
//     appId: "1:195297423177:web:631e18f3febc33bf52f498",
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app)

export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : "/api/vans";
    const res = await fetch(url);
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status,
        };
    }
    const data = await res.json();
    return data.vans;
}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
    const res = await fetch(url);
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status,
        };
    }
    const data = await res.json();
    return data.vans;
}

export async function loginUser(creds) {
    const res = await fetch("/api/login", {
        method: "post",
        body: JSON.stringify(creds),
    });
    const data = await res.json();

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status,
        };
    }

    return data;
}