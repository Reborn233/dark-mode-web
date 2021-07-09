import { IList } from './interfaces/http';

declare namespace webapi {
  export namespace request { }

  export namespace response {
    export type TList = IList;
  }
}
