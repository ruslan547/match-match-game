import { ErrorConstants } from '../constants/error.constants';
import { DbConstants } from '../constants/db.constants';
import { IUser } from '../interfaces';

class DbService {
  private db: IDBDatabase | null;

  private table: string | null;

  constructor() {
    this.db = null;
    this.table = null;
  }

  public open = (table: string) => new Promise((resolve, reject) => {
    const openRequest = indexedDB.open(DbConstants.DB_NAME, 1);
    this.table = table;

    openRequest.onupgradeneeded = () => {
      this.db = openRequest.result;

      if (!this.db.objectStoreNames.contains(table)) {
        this.db.createObjectStore(table, { keyPath: DbConstants.ID, autoIncrement: true });
      }

      resolve(this.db);
    };

    openRequest.onerror = () => {
      reject(openRequest.error);
    };

    openRequest.onsuccess = () => {
      this.db = openRequest.result;
      resolve(this.db);
    };
  });

  public close = () => {
    this.db?.close();
  };

  private getUsers = () => {
    if (this.db && this.table) {
      const transaction = this.db.transaction(this.table, DbConstants.READRITE);
      return transaction.objectStore(this.table);
    }

    return null;
  };

  public add = async (user: IUser) => new Promise((resolve, reject) => {
    const users = this.getUsers();

    if (users) {
      const request: IDBRequest<IDBValidKey> = users.add(user);

      request.onerror = () => {
        reject(new Error(ErrorConstants.ADD_USER_ER));
      };

      request.onsuccess = () => {
        resolve(request.result);
      };
    }
  });

  public update = (user: IUser) => {
    const users = this.getUsers();

    if (users) {
      users.openCursor().onsuccess = ({ target }) => {
        const cursor = (target as IDBRequest<IDBCursorWithValue | null>).result;

        if (cursor) {
          if (cursor.value.id === user.id) {
            cursor.update(user);
          }

          cursor.continue();
        }
      };
    }
  };

  public get = (id: string) => {
    const users = this.getUsers();

    if (users) {
      return users.get(id);
    }

    return null;
  };

  public getAll = () => {
    const users = this.getUsers();

    if (users) {
      return users.getAll();
    }

    return null;
  };
}

export default DbService;
