import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('records.db')

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS records (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, image TEXT NOT NULL);',
                [],
                () => resolve(),
                (_, err) => reject(err)
            );
        });
    });

    return promise;
};

export const insertRecord = (title, image) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO records (title, image) VALUES (?,?);',
                [title,image],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            );
        });
    });

    return promise;
}