import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    databaseURL: "your-database-url",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function saveData(newData) {
    set(ref(db, 'path/to/data'), newData);
}

saveData({ example: 'New Firebase Data' });
