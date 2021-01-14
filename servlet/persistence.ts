import * as fs from 'fs';
import * as path from 'path';
import ErrnoException = NodeJS.ErrnoException;

const ENCODING = 'UTF-8';

export class PersistenceService<T> {
  constructor(private storePath: string,
              private storeName: string) {
  }

  writeSync = (data: T): void => {
    fs.writeFileSync(
      this.storePath + path.sep + this.storeName + ".json",
      JSON.stringify(data, null, 2));
  };

  write = (data: T): Promise<boolean> => {
    return new Promise<boolean>(((resolve, reject) => {
      fs.writeFile(
        this.storePath + path.sep + this.storeName + ".json",
        JSON.stringify(data, null, 2),
        (err => {
          err ? reject(err) : resolve(true);
        }));
    }));
  };

  read = (): Promise<T> => {
    return new Promise<T>(((resolve, reject) => {
      fs.readFile(
        this.storePath + path.sep + this.storeName + ".json",
        {encoding: ENCODING},
        (err: ErrnoException | null, data: string) => {
          if (err) {
            reject(err);
            return;
          } else {
            const d: T = JSON.parse(data) as T;
            resolve(d);
          }
        });
    }));
  };

  exists = (): boolean => {
    return fs.existsSync(this.storePath + path.sep + this.storeName + '.json');
  };
}
