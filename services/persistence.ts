import * as fs from 'fs';
import * as path from 'path';
import ErrnoException = NodeJS.ErrnoException;

const ENCODING = 'UTF-8'

export class PersistenceService<T> {
  constructor(private basePath: string,
              private fileName: string) {
  }

  writeSync = (data: any): void => {
    fs.writeFileSync(
      this.basePath + path.sep + this.fileName + ".json",
      JSON.stringify(data, null, 2));
  }

  write = (data: any): Promise<boolean> => {
    return new Promise<boolean>(((resolve, reject) => {
      fs.writeFile(
        this.basePath + path.sep + this.fileName + ".json",
        JSON.stringify(data, null, 2),
        (err => {
          err ? reject(err) : resolve(true);
        }))
    }))
  }

  read = (): Promise<T> => {
    return new Promise<T>(((resolve, reject) => {
      fs.readFile(
        this.basePath + path.sep + this.fileName + ".json",
        {encoding: ENCODING},
        (err: ErrnoException | null, data: string) => {
          if (err) {
            reject(err);
            return;
          } else {
            let object: T = JSON.parse(data) as T;
            resolve(object)
          }
        })
    }));
  }

  exists = (fileName: string): boolean => {
    return fs.existsSync(this.basePath + path.sep + fileName + '.json');
  }
}
