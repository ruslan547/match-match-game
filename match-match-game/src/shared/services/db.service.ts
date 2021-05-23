import { IUser } from '../interfaces';

class DbService {
  private db: IDBDatabase | null;

  private dbName: string | null;

  constructor() {
    this.db = null;
    this.dbName = null;
  }

  public open = (dbName: string) => new Promise((resolve, reject) => {
    const openRequest = indexedDB.open('store', 1);
    this.dbName = dbName;

    openRequest.onupgradeneeded = () => {
      this.db = openRequest.result;
      if (!this.db.objectStoreNames.contains(dbName)) {
        this.db.createObjectStore(dbName, { keyPath: 'email' });
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

  public add = (user: IUser) => {
    if (this.db && this.dbName) {
      const transaction = this.db.transaction(this.dbName, 'readwrite');
      const users = transaction.objectStore(this.dbName);

      const request: IDBRequest<IDBValidKey> = users.add(user);

      request.onerror = (event) => {
        if (request?.error?.name === 'ConstraintError') {
          event.preventDefault();
          throw new Error('user with this id exists');
        }
      };
    }
  };

  public get = (id: string) => {
    if (this.db && this.dbName) {
      const transaction = this.db.transaction(this.dbName, 'readwrite');
      const users = transaction.objectStore(this.dbName);

      return users.get(id);
    }

    return null;
  };

  public getAll = () => {
    if (this.db && this.dbName) {
      const transaction = this.db.transaction(this.dbName, 'readwrite');
      const users = transaction.objectStore(this.dbName);

      return users.getAll();
    }

    return null;
  };
}

export default DbService;
